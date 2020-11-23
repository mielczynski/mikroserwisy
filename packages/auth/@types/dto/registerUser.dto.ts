import {IsString, Length} from "class-validator";

export class RegisterUserDto {
    @IsString()
    @Length(3, 255)
    public readonly firstName: string;

    @IsString()
    @Length(3, 255)
    public readonly lastName: string;

    @IsString()
    @Length(3, 255)
    public readonly email: string;

    @IsString()
    @Length(3, 30)
    public readonly password: string;
}
