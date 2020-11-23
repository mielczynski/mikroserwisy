import {IsString, Length} from "class-validator";

export class LoginUserDto {
    @IsString()
    @Length(3, 255)
    public readonly email: string;

    @IsString()
    @Length(3, 30)
    public readonly password: string;

}
