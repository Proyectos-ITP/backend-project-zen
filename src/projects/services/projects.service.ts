import { MembersRepository } from './../../shared/repositories/members.repository';
import { CategoryRepository } from './../../shared/repositories/category.repository';
import { Categories } from './../../shared/entities/categories.entity';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { MemberToProjectDto } from '../dtos/projects.dto';

@Injectable()
export class ProjectsService {
  constructor(
    private readonly _categoriyRepo: CategoryRepository,
    private readonly _memberRepo: MembersRepository,
  ) {}

  async getRelatedData(): Promise<{ categories: Categories[] }> {
    const categories = await this._categoriyRepo.find();
    return { categories };
  }

  async addMemberToProject(
    body: MemberToProjectDto,
    userId: string,
  ): Promise<{ rowId: string }> {
    console.log(userId);

    const userLeader = await this._memberRepo.findOne({
      where: { userId, projectId: body.projectId },
    });

    if (userLeader?.projectRole?.roleName !== 'Líder') {
      throw new HttpException(
        'No está autorizado para añadir nuevos miembros.',
        HttpStatus.BAD_REQUEST,
      );
    }
    return (await this._memberRepo.insert(body)).identifiers[0].id;
  }

  async removeMemberFromProject(
    body: Partial<MemberToProjectDto>,
    userId: string,
  ): Promise<void> {
    const userLeader = await this._memberRepo.findOne({
      where: { userId, projectId: body.projectId },
    });
    const userIsMember = await this._memberRepo.findOne({
      where: { userId: body.userId, projectId: body.projectId },
    });

    if (userLeader?.projectRole?.roleName !== 'Líder') {
      throw new HttpException(
        'No está autorizado para eliminar este miembro.',
        HttpStatus.BAD_REQUEST,
      );
    }
    if (!userIsMember) {
      throw new HttpException(
        'El miembro que intenta eliminar no existe en este proyecto.',
        HttpStatus.BAD_REQUEST,
      );
    }
    await this._memberRepo.softDelete(body);
  }
}