import { Body, Controller, Param, Post , Get, Patch, Delete, ParseIntPipe, Query} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { UpdateUserDto } from './dto/update-user.dto';
import { QueryUserDto } from './dto/query-user.dto';

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService){}

    @Post()
    create(@Body() dto: CreateUserDto){
        return this.userService.create(dto);
    }

    @Get(':id')
        findUser(@Param('id') id: number){
            return this.userService.findUser(id);
        }
    
    // @Get()
    // findAllUser(){
    //     return this.userService.findAll();
    // }

    @Patch(':id')
    updateUser(@Param('id', ParseIntPipe) id: number, @Body() dto : UpdateUserDto){
        return this.userService.updateUser(id, dto);
    }

    @Delete(':id')
    deleteUser(@Param('id', ParseIntPipe) id: number){
     return this.userService.deleteUser(id);
    }


      // GET /users?page=1&limit=5&search=bini
      @Get()
      findAllQuery(@Query() query: QueryUserDto){
        return this.userService.findAllQuery(query);
      }
}
