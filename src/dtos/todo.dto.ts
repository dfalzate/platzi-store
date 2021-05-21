import { IsString, IsNumber, IsBoolean, IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateToDoDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
  @IsBoolean()
  @IsNotEmpty()
  readonly finished: boolean;
}

// export class EditToDoDto {
//   @IsNumber()
//   @IsNotEmpty()
//   readonly id?: number;
//   @IsString()
//   readonly name?: string;
//   @IsBoolean()
//   readonly finished?: boolean;
// }

export class EditToDoDto extends PartialType(CreateToDoDto) {}
