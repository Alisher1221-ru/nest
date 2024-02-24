import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchem } from './schema/user.schema';

@Module({
  imports: [MongooseModule.forFeature([{
    name: User.name,
    schema: UserSchem
  }])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
