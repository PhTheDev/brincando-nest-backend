import { Type } from "class-transformer";
import { IsDate, IsInt, Min } from "class-validator";

export class CreateMatriculaDto {
    @Type(() => Number)
    @IsInt()
    @Min(1)
    idUsuario!: number;

    @Type(() => Number)
    @IsInt()
    @Min(1)
    idCurso!: number;

    @Type(() => Date)
    @IsDate()
    dataMatricula!: Date;

    @Type(()=> Date)
    @IsDate()
    dataConclusao?: Date;
}