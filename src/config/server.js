import express from 'express';
import cors from 'cors';
import { StatusCodes } from 'http-status-codes';

// Routes & Utils Imports
import healthRoutes from '../route/healthRoutes.js';
import v1Routes from '../route/v1routes/index.js'; 
import { SuccessResponse } from '../utils/index.js';

const app = express();

// ── Middlewares ────────────────────────────────────────────
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ── Ping Routes ────────────────────────────────────────────
app.get("/user/ping", (req, res) => {
  SuccessResponse.message = "Successfully pinged the user route";
  SuccessResponse.data = {};
  return res.status(StatusCodes.OK).json(SuccessResponse);
});

app.get("/admin/ping", (req, res) => {
  SuccessResponse.message = "Successfully pinged the admin route";
  SuccessResponse.data = {};
  return res.status(StatusCodes.OK).json(SuccessResponse);
});
 

app.use('/api', healthRoutes);     
app.use('/api/v1', v1Routes);       
 

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.method} ${req.originalUrl} not found`,
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