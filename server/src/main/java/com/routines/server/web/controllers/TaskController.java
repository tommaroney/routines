package com.routines.server.web.controllers;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.routines.server.data.entities.Task;
import com.routines.server.data.entities.User;
import com.routines.server.data.repositiories.TaskRepository;
import com.routines.server.data.repositiories.UserRepository;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;

@RestController
public class TaskController {
    
    private final TaskRepository taskRepository;
    private final UserRepository userRepository;

    TaskController(TaskRepository taskRepository, UserRepository userRepository) {
        this.taskRepository = taskRepository;
        this.userRepository = userRepository;
    }

    @GetMapping("/user/{userId}/tasks")
    public List<Task> getMethodName(@PathVariable Integer userId) {
        return taskRepository.findAllByUserId(userId);
    }
    

    @PostMapping("/user/{userId}/tasks")
    public String createTask(@RequestBody Task task, @PathVariable Integer userId) {
        User user = userRepository.findById(userId).get();
        task.setUser(user);
        taskRepository.save(task);
        return "task created";
    }
}
