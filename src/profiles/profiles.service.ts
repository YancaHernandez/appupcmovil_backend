import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Profile } from '../types/profile';
import { CreateProfileDto, UpdateProfileDto} from './profiles.dto';


@Injectable()
export class ProfilesService {
    constructor(@InjectModel('Profile') private accountsModel: Model<Profile>) {}

    async create(createAccountDto: CreateProfileDto): Promise<Profile> {
      const createdAccount = new this.accountsModel(createAccountDto);
      return createdAccount.save();
    }
  
    async findAll(): Promise<Profile[]> {
      return this.accountsModel.find({status:'Activa'}).exec();
    }

    async findOne(id: string): Promise<Profile> {
        return this.accountsModel.findById(id);
    }

    async update(id, updateAccountDto: UpdateProfileDto): Promise<Profile> {
        return this.accountsModel.findByIdAndUpdate(id,updateAccountDto);
    }

    async delete(id: string): Promise<Profile> {
        return this.accountsModel.findByIdAndDelete(id);
    }

}
