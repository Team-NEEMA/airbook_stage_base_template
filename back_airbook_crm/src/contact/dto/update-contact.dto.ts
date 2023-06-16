import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateContactDto {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  firstname: string;

  @IsOptional()
  @IsString()
  email: string;

  @IsOptional()
  @IsString()
  account: string;

  @IsOptional()
  @IsString()
  categorie: string;
}
