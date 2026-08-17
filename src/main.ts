import 'dotenv/config';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // ValidationPipe ≈ validação automática de forms/serializers no Django.
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // remove campos extras do body
      forbidNonWhitelisted: true, // 400 se mandar campo não permitido
      transform: true, // converte tipos (ex.: string → number quando dá)
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
