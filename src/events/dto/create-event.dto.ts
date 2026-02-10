import { IsNotEmpty, IsObject, IsOptional, IsString } from 'class-validator';

export class CreateEventDto {
  @IsString()
  @IsNotEmpty()
  eventType: string;

  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsOptional()
  @IsObject()
  metadata?: Record<string, any>;
}