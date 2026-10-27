import 'dotenv/config';
import app from './src/config/server.js';
import prisma from './src/config/prismaClient.js';

const PORT = process.env.PORT
 

async function startServer() {
  try {
    await prisma.$connect();
    console.log('✅ Database connected successfully (Prisma + MySQL)');

    app.listen(PORT, () => { 
      
      console.log(`server is running:${PORT}`); 
    });

  } catch (error) {
    console.error('❌ Server startup error:', error.message);
    await prisma.$disconnect();
    process.exit(1);
  }
}

// ── Graceful Shutdown ──────────────────────────────────────
process.on('SIGINT', async () => {
  await prisma.$disconnect();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  await prisma.$disconnect();
  process.exit(0);
});

startServer();