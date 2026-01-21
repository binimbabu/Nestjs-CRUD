import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
    private users: User[] = [];
    private id = 1;

    create(createUserDto: CreateUserDto): User{
        var user :User ={
            id: this.id++,
            ...createUserDto
        }
        this.users.push(user);
        return user;
    }

    findOne(id:number) : User{
        var user = this.users.find((u) => u.id === id);
        if(!user) throw new Error("User not found")
        return user;
    }

    deleteUser(id :number) : string{
        var user = this.users.filter(u=> u.id !== id);
        return "User Deleted"
    }

    updateUser(id:number, updateUserDto: UpdateUserDto): User{
        var user =  this.findOne(id);
        Object.assign(user, updateUserDto);
        return user;
    }
    findAll() :User[]{
        return this.users;
    }
}
