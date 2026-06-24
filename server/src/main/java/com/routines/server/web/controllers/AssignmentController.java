package com.routines.server.web.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.routines.server.data.entities.Assignment;
import com.routines.server.data.repositiories.AssignmentRepository;

@RestController
@RequestMapping(path="/assignment")
public class AssignmentController {

    @Autowired
    private AssignmentRepository assignmentRepository;
    
    @PostMapping
    public @ResponseBody String createAssignment(@RequestBody Assignment assignment) {

        assignmentRepository.save(assignment);
        return "assignment created";
    }
}
