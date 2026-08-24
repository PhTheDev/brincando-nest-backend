import { Type } from "class-transformer";
import { IsDate, IsInt, Min } from "class-validator";

export class CreateAssinaturaDto {
    @Type(() => Number)
    @IsInt()
    @Min(1)
    idUsuario!: number;

    @Type(() => Number)
    @IsInt()
    @Min(1)
    idPlano!: number;

    @Type(() => Date)
    @IsDate()
    dataInicio!: Date;

    @Type(() => Date)
    @IsDate()
    dataFim?: Date;

}
