package com.routines.server.web.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.routines.server.data.entities.Routine;
import com.routines.server.data.repositiories.RoutineRepository;

@RestController
@RequestMapping(path="/routine")
public class RoutineController {

    @Autowired
    private RoutineRepository routineRepository;

    @GetMapping(path="/{routineId}")
    public Routine getRoutine(@PathVariable("routineId") Integer routineId) {
        return routineRepository.findById(routineId).get();
    }

    @PostMapping
    public String createRoutine(@RequestBody Routine routine) {
        routineRepository.save(routine);
        return "routine created";
    }
}
