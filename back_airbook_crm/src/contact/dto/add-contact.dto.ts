import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class AddContactDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  firstname: string;

  @IsNotEmpty()
  @IsString()
  email: string;

  @IsOptional()
  @IsString()
  account: string;

  @IsNotEmpty()
  @IsString()
  categorie: string;
}
