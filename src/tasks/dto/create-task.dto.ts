import { IsString, IsOptional, IsIn } from "class-validator";

export class CreateTaskDto {
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  assigned_to?: string;

  @IsString()
  @IsIn(["low", "medium", "high"])
  priority: string;
}
