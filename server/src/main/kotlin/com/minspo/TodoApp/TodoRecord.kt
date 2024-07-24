package com.minspo.TodoApp

import jakarta.persistence.Entity
import jakarta.persistence.Id
import java.util.UUID

@Entity(name = "todos")
data class TodoRecord(
    @Id
    val id: UUID = UUID.randomUUID(),
    var todo: String
)
