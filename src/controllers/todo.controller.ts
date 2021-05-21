import {
  Controller,
  Param,
  Get,
  Post,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
  ParseIntPipe,
  Body,
} from '@nestjs/common';
import { TodoService } from '../services/todo.service';
import { CreateToDoDto, EditToDoDto } from '../dtos/todo.dto';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get('getAll')
  getAll() {
    return this.todoService.findAll();
  }

  @Get('getOne/:id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.todoService.findOne(id);
  }

  @Post('create')
  createTodo(@Body() payload: CreateToDoDto) {
    return this.todoService.create(payload);
  }

  @Put('update/:id')
  updateTodo(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: EditToDoDto,
  ) {
    return this.todoService.update(id, payload);
  }

  @Delete('delete/:id')
  deleteTodo(@Param('id', ParseIntPipe) id: number) {
    return this.todoService.delete(id);
  }
}
