package com.routines.server.web.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.routines.server.data.entities.Task;
import com.routines.server.data.repositiories.TaskRepository;

@RestController
@RequestMapping(path="/task")
public class TaskController {
    
    @Autowired
    private TaskRepository taskRepository;

    @PostMapping
    public String createTask(@RequestBody Task task) {
        taskRepository.save(task);
        return "task created";
    }
}
