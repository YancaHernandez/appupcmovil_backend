import { Controller, Get, Post, Body, Delete, Param, Put } from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { Profile } from '../types/profile';
import { CreateProfileDto, UpdateProfileDto} from './profiles.dto';

@Controller('profiles')
export class ProfilesController {
    constructor(private service: ProfilesService) {
        
    }
    
    @Get()
    findAll(): Promise<Profile[]> {
        return this.service.findAll();
    }

    @Post()
    async create(@Body() createAccountDto: CreateProfileDto): Promise<Profile> {
        return this.service.create(createAccountDto);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.service.findOne(id);
    }
  
    @Put(':id')
    update(@Param('id') id: string, @Body() updateCatDto: UpdateProfileDto) {
      return this.service.update(id,updateCatDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.service.delete(id);
    }   
}
