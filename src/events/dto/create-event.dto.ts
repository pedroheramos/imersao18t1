import { IsDateString, IsNotEmpty, IsString, Length } from "class-validator";

export class CreateEventDto {
  @IsString()
  @Length(1, 255)
  name: string;
  
  @IsString()
  @Length(1, 255)
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsDateString()
  @IsNotEmpty()
  date: string;

  price: number;
}
