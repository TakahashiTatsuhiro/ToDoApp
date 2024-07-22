import {TodoResponse} from "../../model/TodoResponse.ts";
import {TodoRepository} from "../../repository/TodoRepository.ts";

export class DummyTodoRepository implements TodoRepository {
  getTodos(): Promise<TodoResponse[]> {
    return Promise.resolve([{todo: "Dummy-todo"}])
  }
}

export class SpyTodoRepository implements TodoRepository {
  getTodos_wasCalled: boolean = false

  getTodos(): Promise<TodoResponse[]> {
    this.getTodos_wasCalled = true
    return Promise.resolve([{todo: "Spy-todo"}])
  }
}

export class StubTodoRepository implements TodoRepository {
  getTodos_returnValue: Promise<TodoResponse[]> = Promise.resolve([{todo: ""}])

  getTodos(): Promise<TodoResponse[]> {
    return this.getTodos_returnValue
  }
}