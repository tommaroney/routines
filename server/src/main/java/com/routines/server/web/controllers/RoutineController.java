package com.routines.server.web.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.routines.server.data.entities.Routine;
import com.routines.server.data.entities.User;
import com.routines.server.data.repositiories.RoutineRepository;
import com.routines.server.data.repositiories.UserRepository;

@RestController
public class RoutineController {

    private RoutineRepository routineRepository;
    private UserRepository userRepository;

    RoutineController(RoutineRepository routineRepository, UserRepository userRepository) {
        this.routineRepository = routineRepository;
        this.userRepository = userRepository;
    }

    @GetMapping("/routines/{routineId}")
    public Routine getRoutine(@PathVariable Integer routineId) {
        return routineRepository.findById(routineId).get();
    }

    @GetMapping("/user/{userId}/routines")
    public List<Routine> getRoutines(@PathVariable Integer userId) {
        return routineRepository.findAllByUserId(userId);
    }

    @PostMapping("user/{userId}/routines")
    public Routine createRoutine(@RequestBody Routine routine, @PathVariable Integer userId) {
        User user = userRepository.findById(userId).get();
        routine.setUser(user);
        return routineRepository.save(routine);
    }
}
