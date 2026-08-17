import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';

/** Equivalente a um Serializer parcial (PATCH) do Django. */
export class UpdateUserDto {
  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  @MinLength(1)
  name?: string;
}
