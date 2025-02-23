import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/app.module';
import { SignupService } from 'src/core/auth/services/signup.service';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);

  const signupService = app.get(SignupService.name);

  console.log(signupService);
}

bootstrap();
