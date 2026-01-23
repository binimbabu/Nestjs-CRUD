import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';



@Injectable()
export class UsersService {


    // npm i @nestjs/typeorm typeorm mysql2

    constructor(
        @InjectRepository(User)
           private repo: Repository<User>
    ){}

 async create(createUserDTO: CreateUserDto) : Promise<User>{
    var user = this.repo.create(createUserDTO);
    return this.repo.save(user);
}

async findAll() : Promise<User[]>{
    return this.repo.find();
}

async findUser(id: number) : Promise<User>{
 var user = await this.repo.findOneBy({id});
  if(!user) throw new NotFoundException("user doesnt exist");
 return user;
}

async deleteUser(id:number){
    var user = await this.findUser(id);
    await this.repo.remove(user);
    return {
        message: "User deleted"
    }
}

async updateUser(id:number, updateUserDto: UpdateUserDto) : Promise<User>{
    var user = await this.findUser(id);
    Object.assign(user, updateUserDto);
    return await this.repo.save(user);
}


    //with postman


    // private users: User[] = [];
    // private id = 1;

    // create(createUserDto: CreateUserDto): User{
    //     var user :User ={
    //         id: this.id++,
    //         ...createUserDto
    //     }
    //     this.users.push(user);
    //     return user;
    // }

    // findOne(id:number) : User{
    //     var user = this.users.find((u) => u.id === id);
    //     if(!user) throw new Error("User not found")
    //     return user;
    // }

    // deleteUser(id :number) : string{
    //     var user = this.users.filter(u=> u.id !== id);
    //     return "User Deleted"
    // }

    // updateUser(id:number, updateUserDto: UpdateUserDto): User{
    //     var user =  this.findOne(id);
    //     Object.assign(user, updateUserDto);
    //     return user;
    // }
    // findAll() :User[]{
    //     return this.users;
    // }
}
