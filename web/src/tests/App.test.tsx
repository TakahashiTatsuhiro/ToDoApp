import {describe, expect, test} from "vitest";
import {act, render, screen} from "@testing-library/react";
import App from "../App.tsx";
import {TodoRepository} from "../repository/TodoRepository.ts";
import {DummyTodoRepository, SpyTodoRepository, StubTodoRepository} from "./repository/TodoRepositoryDoubles.ts";


describe('App', () => {
  test('todoという文字が表示されている', async () => {
    await renderApp(new DummyTodoRepository())


    expect(screen.getByText("todo")).toBeInTheDocument()
  })

  test('初期レンダリング時にTodoRepositoryのgetTodos()を呼ぶ', async () => {
    const spyTodoRepository = new SpyTodoRepository()
    await renderApp(spyTodoRepository)


    expect(spyTodoRepository.getTodos_wasCalled).toBeTruthy()
  })

  test('初期レンダリング時にtodoを表示する', async () => {
    const stubTodoRepository = new StubTodoRepository()
    stubTodoRepository.getTodos_returnValue = Promise.resolve([
      {todo: "stub-todo"},
      {todo: "running"}
    ])
    await renderApp(stubTodoRepository);


    expect(screen.getByText("stub-todo")).toBeInTheDocument()
    expect(screen.getByText("running")).toBeInTheDocument()
  })

  async function renderApp(todoRepository: TodoRepository) {
    await act(async () => {
      render(<App todoRepository={todoRepository}/>)
    })
  }
})