import { DELETED_MESSAGE } from './../../shared/constants/messages.constant';
import {
  CreatedRecordResponseDto,
  DeleteReCordResponseDto,
} from './../../shared/dtos/response.dto';
import {
  CREATED_RESPONSE,
  DELETED_RESPONSE,
  NOT_FOUND_RESPONSE,
} from './../../shared/constants/response.constant';
import { MembersRelatedDataResponse } from './../dtos/members.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { MembersUseCase } from '../useCases/members.UC';
import { AuthGuard } from '@nestjs/passport';
import {
  DeleteMemberFromProjectDto,
  MemberToProjectDto,
} from '../dtos/projects.dto';
import { ProjectsUseCase } from '../useCases/projects.UC';

@Controller('members')
@ApiTags('Miembros')
export class MembersController {
  constructor(
    private readonly _membersUseCase: MembersUseCase,
    private readonly _projectsUC: ProjectsUseCase,
  ) {}

  @Get('/related-data')
  @ApiOkResponse({ type: MembersRelatedDataResponse })
  @ApiBearerAuth()
  @UseGuards(AuthGuard())
  async getRelatedData(): Promise<MembersRelatedDataResponse> {
    const data = await this._membersUseCase.getRelatedData();
    return {
      statusCode: HttpStatus.OK,
      data,
    };
  }

  @Post('/add-member')
  @ApiCreatedResponse(CREATED_RESPONSE)
  @ApiNotFoundResponse(NOT_FOUND_RESPONSE)
  @ApiBearerAuth()
  @UseGuards(AuthGuard())
  async addMembersToProject(
    @Body() body: MemberToProjectDto,
    @Req() req,
  ): Promise<CreatedRecordResponseDto> {
    const rowId = await this._projectsUC.addMemberFromProject(
      body,
      req.user.id,
    );
    return {
      statusCode: HttpStatus.CREATED,
      message: 'Agregaste un nuevo miembro.',
      data: { rowId: rowId },
    };
  }

  @Delete('/remove-member')
  @ApiOkResponse(DELETED_RESPONSE)
  @ApiNotFoundResponse(NOT_FOUND_RESPONSE)
  @ApiBearerAuth()
  @UseGuards(AuthGuard())
  async removeMemberFromProject(
    @Body() body: DeleteMemberFromProjectDto,
    @Req() req,
  ): Promise<DeleteReCordResponseDto> {
    await this._projectsUC.removeMemberFromProject(body, req.user.id);
    return {
      statusCode: HttpStatus.OK,
      message: DELETED_MESSAGE,
    };
  }
}
