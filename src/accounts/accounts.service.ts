import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Account } from '../types/account';
import { CreateAccountDto,UpdateAccountDto } from './account.dto';

@Injectable()
export class AccountsService {
    constructor(@InjectModel('Account') private accountsModel: Model<Account>) {}
    
    async create(createAccountDto: CreateAccountDto){
      const createdAccount = new this.accountsModel(createAccountDto);
      return createdAccount.save();
    }
  
    async findAll(): Promise<Account[]> {
      return this.accountsModel.find().exec();
    }

    async findOne(id: string): Promise<Account> {
        return this.accountsModel.findById(id);
    }

    async update(id, updateAccountDto: UpdateAccountDto): Promise<Account> {
      return this.accountsModel.findByIdAndUpdate(id,updateAccountDto);
    }

    async delete(id: string): Promise<Account> {
        return this.accountsModel.findByIdAndDelete(id);
    }
}
