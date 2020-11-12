import { Controller, Get, Post, Body, Delete, Param, Put } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { Account } from "../types/account";
import { CreateAccountDto,UpdateAccountDto } from './account.dto';

@Controller('accounts')
export class AccountsController {
    constructor(private service: AccountsService) {}
    
    @Get()
    findAll() {
      return "asdas";
        return this.service.findAll();
    }

    @Post()
    async create(@Body() createAccountDto: CreateAccountDto) {
        return this.service.create(createAccountDto);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.service.findOne(id);
    }
  
    @Put(':id')
    update(@Param('id') id: string, @Body() updateCatDto: UpdateAccountDto) {
      return this.service.update(id,updateCatDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
    return this.service.delete(id);
    }   
}
