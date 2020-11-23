import {EntityRepository, Repository} from "typeorm";
import {User} from "../_entity/user.entity";
import {RegisterUserDto} from "../../@types/dto/registerUser.dto";

@EntityRepository(User)
export class UserRepository extends Repository<User>{
    public async getUserWithCredentialsByEmail(email: string): Promise<User>{
        return this.createQueryBuilder('user')
            .addSelect(['user.password', 'user.salt'])
            .where('user.email = :email', {email: email.toLowerCase().trim()})
            .getOne();
    }

    public async addUser(registerUserDto: RegisterUserDto, salt: string, password: string): Promise<User> {
        return this.save({
            firstName: registerUserDto.firstName,
            lastName: registerUserDto.lastName,
            email: registerUserDto.email,
            password,
            salt,
        })
    }

}
