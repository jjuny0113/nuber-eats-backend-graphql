import { CreateAccountInput } from './dtos/create-account.dto';
import { User } from './entities/user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async createAccount({ email, password, role }: CreateAccountInput) {
    try {
      // 비밀번호 hash
      const exists = await this.usersRepository.findOneBy({ email });
      if (exists) {
        return '이미 등록된 email입니다.';
      }
      const user = this.usersRepository.create({ email, password, role });
      await this.usersRepository.save(user);
    } catch (e) {
      return '계정을 생성할 수 없습니다.';
    }
  }
}
