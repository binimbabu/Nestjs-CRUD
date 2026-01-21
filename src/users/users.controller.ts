import { Body, Controller, Param, Post , Get, Patch, Delete} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService){}

    @Post()
    create(@Body() dto: CreateUserDto){
        return this.userService.create(dto);
    }

    @Get(':id')
        findUser(@Param('id') id: string){
            return this.userService.findOne(+id);
        }
    
    @Get()
    findAllUser() : User[]{
        return this.userService.findAll();
    }

    @Patch(':id')
    updateUser(@Param('id') id: string, @Body() dto : UpdateUserDto){
        return this.userService.updateUser(+id, dto);
    }

    @Delete(':id')
    deleteUser(@Param('id') id: string): string{
     return this.userService.deleteUser(+id);
    }
}
