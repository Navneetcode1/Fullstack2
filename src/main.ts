import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS with specific origin (your frontend URL) and HTTP methods
  app.enableCors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3001',  // Replace with your deployed frontend URL when deploying
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],  // Allowed methods
    credentials: true,  // Allow credentials like cookies if necessary
  });

  // Listen on the dynamically assigned port from Railway or Heroku
  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`Server is running on port ${port}`);
}
bootstrap();
