package com.minspo.TodoApp

import java.util.UUID
import org.springframework.data.jpa.repository.JpaRepository

interface TodoRepository: JpaRepository<TodoRecord, UUID> {}