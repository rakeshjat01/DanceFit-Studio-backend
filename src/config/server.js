import express from 'express';
import cors from 'cors';
import healthRoutes from '../route/healthRoutes.js';
import bookingRoutes from '../route/v1routes/booking-routes.js';

const app = express();

// ── Middlewares ────────────────────────────────────────────
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ── Routes Mounting ────────────────────────────────────────
app.use('/api', healthRoutes);                      // Endpoint: GET /api/health
app.use('/api/v1/trial-bookings', bookingRoutes);  // Endpoints: /api/v1/trial-bookings

// ── 404 Handler ────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.method}${req.originalUrl} not found`,
  });
});


app.use((err, req, res, next) => {
  console.error('❌ Error:', err.stack);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error',
  });
});

export default app;