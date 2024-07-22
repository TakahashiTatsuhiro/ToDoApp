import {TodoResponse} from "./model/TodoResponse.ts";
import {DefaultTodoRepository, TodoRepository} from "./repository/TodoRepository.ts";
import {useEffect, useState} from "react";

interface Props {
  todoRepository: TodoRepository
}

export default function App({todoRepository = new DefaultTodoRepository()}: Props) {
  const [todos, setTodos] = useState<TodoResponse[]>([])
  useEffect(() => {
    todoRepository.getTodos()
      .then(result =>
        setTodos(result)
      )
  }, [])

  return (
    <>
      <div>todo</div>
      {todos.map(todo =>
        <div key={window.crypto.randomUUID()}>
          {todo.todo}
        </div>
      )}
    </>
  )
}