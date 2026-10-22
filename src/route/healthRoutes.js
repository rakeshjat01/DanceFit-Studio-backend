import express from 'express';
import prisma from '../config/prismaClient.js';

const router = express.Router();

/**
 * GET /api/health
 * Server aur database connection ka status check karo
 */
router.get('/health', async (req, res) => {
  const startTime = Date.now();

  let dbStatus = 'connected';
  let dbError = null;

  try {
    await prisma.$queryRaw`SELECT 1`;
  } catch (error) {
    dbStatus = 'disconnected';
    dbError = error.message;
  }

  const responseTime = Date.now() - startTime;

  res.status(dbStatus === 'connected' ? 200 : 503).json({
    success: dbStatus === 'connected',
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: `${Math.floor(process.uptime())}s`,
    responseTime: `${responseTime}ms`,
    server: {
      status: 'running',
      environment: process.env.NODE_ENV || 'development',
      port: process.env.PORT || 3000,
    },
    database: {
      status: dbStatus,
      provider: 'MySQL (via Prisma)',
      ...(dbError && { error: dbError }),
    },
  });
});

export default router;
