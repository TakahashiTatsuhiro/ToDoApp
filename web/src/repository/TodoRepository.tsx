import {TodoResponse} from "../model/TodoResponse.ts";

export interface TodoRepository {
  getTodos(): Promise<TodoResponse[]>
}

export class DefaultTodoRepository implements TodoRepository {
  getTodos(): Promise<TodoResponse[]> {
    return Promise.resolve([{ todo: "hoge"}])
  }
}