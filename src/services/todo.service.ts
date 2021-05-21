import { Injectable, NotFoundException } from '@nestjs/common';
import { ToDo } from '../entities/todo.entity';
import { CreateToDoDto, EditToDoDto } from '../dtos/todo.dto';

@Injectable()
export class TodoService {
  private todoList: ToDo[] = [
    {
      id: 1,
      name: 'Tarea1',
      finished: false,
    },
    {
      id: 2,
      name: 'Tarea2',
      finished: false,
    },
    {
      id: 3,
      name: 'Tarea3',
      finished: false,
    },
  ];

  findAll() {
    return this.todoList;
  }

  findOne(id: number) {
    return this.todoList.find((todo: any) => todo.id === id);
  }

  //dto for read only
  create(payload: CreateToDoDto) {
    const newTodo = {
      id: this.todoList.length + 1,
      ...payload,
    };
    this.todoList.push(newTodo);
    console.log(this.todoList);
    return newTodo;
  }

  update(id: number, payload: EditToDoDto) {
    let todo: any = null;
    let index: number = null;

    this.todoList.filter((_todo: any, _index: number) => {
      if (_todo.id === id) {
        todo = _todo;
        index = _index;
      }
    });

    if (index === null) {
      throw new NotFoundException(`Update - Product with id ${id} not found`);
    }
    const updatedToDo = {
      ...todo,
      ...payload,
    };
    this.todoList[index] = updatedToDo;
    return updatedToDo;
  }

  delete(id: number) {
    let index: number = null;
    this.todoList.filter((_todo: any, _index: number) => {
      if (_todo.id === id) {
        index = _index;
      }
    });
    if (index === null) {
      throw new NotFoundException(`Delete - Product with id ${id} not found`);
    }
    this.todoList.splice(index, 1);
    return this.todoList;
  }
}
