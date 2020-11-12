import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';
import { AppController } from './app.controller';
// import { AccountsModule } from './accounts/accounts.module';
// import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { TablesModule } from './table/tables.module';
// import { ProfilesModule } from './profiles/profiles.module';

@Module({
  imports: [
    // MongooseModule.forRoot('mongodb://localhost:27017/salesN'),
    MongooseModule.forRoot('mongodb+srv://yha:281230yha@salesn-qrs3o.gcp.mongodb.net/restaurant?retryWrites=true&w=majority',{ useFindAndModify: false }),
    // AccountsModule,
    AuthModule,
    TablesModule
    // SharedModule,
    // ProfilesModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
