package com.routines.server.data.repositiories;

import org.springframework.data.repository.CrudRepository;

import com.routines.server.data.entities.Assignment;

public interface AssignmentRepository extends CrudRepository<Assignment, Integer> { }
