import {Body, ConflictException, Injectable, UnauthorizedException} from '@nestjs/common';
import {RegisterUserDto} from "../../@types/dto/registerUser.dto";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {User} from "../_entity/user.entity";
import {UserRepository} from "../_repositories/user.repository";
import { hash, genSalt} from 'bcrypt';
import {randomBytes} from "crypto";
import {LoginUserDto} from "../../@types/dto/loginUser.dto";

@Injectable()
export class AuthService {

    constructor(private userRepository: UserRepository) {
    }

    public async registerUser(registerUserDto: RegisterUserDto): Promise<User> {
        const salt = await genSalt(10);
        const hashedPassword = await hash(registerUserDto.password, salt);

        console.log({
            salt,
            hashedPassword
        })

        try {
            return await this.userRepository.addUser(registerUserDto, salt, hashedPassword);
        } catch(e) {
            console.log(e);
            throw  new ConflictException('User exist!')
        }
    }

   public async loginUser(loginUserDto: LoginUserDto){
        const userWithCredentials = await this.userRepository.getUserWithCredentialsByEmail(loginUserDto.email);
       console.log(userWithCredentials);
        if(!userWithCredentials || !userWithCredentials.password || !userWithCredentials.salt){
            throw new UnauthorizedException();
        }

   }


}
