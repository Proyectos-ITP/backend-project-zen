import { Injectable } from '@nestjs/common';
import { CrudUserService } from '../services/crudUser.service';
import {
  PaginatedListUsersParamsDto,
  RegisterDto,
  UpdateUserDto,
} from '../dtos/crudUser.dto';
import { UserFiltersModel } from '../models/user.model';

@Injectable()
export class CrudUserUseCase {
  constructor(private userService: CrudUserService) {}
  async create(user: RegisterDto, roleId: number) {
    return await this.userService.create(user, roleId);
  }

  async delete(userId: string) {
    return await this.userService.delete(userId);
  }

  async findOneByParams(params: UserFiltersModel) {
    return await this.userService.findOneByParams(params);
  }

  async update(userId: string, params: UpdateUserDto) {
    const user = await this.userService.findOneByParams({
      where: { id: userId },
    });
    return user && (await this.userService.update(userId, params));
  }

  async paginatedList(params: PaginatedListUsersParamsDto) {
    return await this.userService.paginatedList(params);
  }
}
