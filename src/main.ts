import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttExceptionFilter } from './shared/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttExceptionFilter());
  app.enableCors();
  await app.listen(process.env.PORT || 3000);
}

bootstrap();
