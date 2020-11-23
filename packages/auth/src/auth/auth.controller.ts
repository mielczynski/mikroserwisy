import {Body, Controller, NotImplementedException, Post} from '@nestjs/common';
import {RegisterUserDto} from "../../@types/dto/registerUser.dto";
import {AuthService} from "./auth.service";
import {LoginUserDto} from "../../@types/dto/loginUser.dto";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {
    }

    @Post('register')
    public registerUser(@Body() registerUserDto: RegisterUserDto) {
        return this.authService.registerUser(registerUserDto);
    }
    @Post('login')
    public async loginUser(@Body() loginUserDto: LoginUserDto) {
        return this.authService.loginUser(loginUserDto);
    }
}

