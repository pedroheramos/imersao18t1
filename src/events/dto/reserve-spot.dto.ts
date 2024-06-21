import { TicketKind } from '@prisma/client';
import { ArrayMinSize, IsArray, IsEnum, IsNotEmpty, IsString } from 'class-validator';

export enum spotTicketKind {
  USER = "half",
  ADMIN = "full",
}

export class ReserveSpotDto {
  @IsNotEmpty()
  @IsArray()
  @IsString({ each: true })
  @ArrayMinSize(1)
  spots: string[];

  @IsEnum(spotTicketKind)
  ticket_kind: TicketKind;
  email: string;
}
