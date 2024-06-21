import { IsNotEmpty, IsString, Length } from "class-validator";

export class CreateSpotDto {

  @IsString()
  @Length(1, 255)
  @IsNotEmpty()
  name: string;
}
