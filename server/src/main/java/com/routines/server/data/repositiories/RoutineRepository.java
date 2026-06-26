package com.routines.server.data.repositiories;

import org.springframework.data.repository.CrudRepository;

import com.routines.server.data.entities.Routine;

public interface RoutineRepository extends CrudRepository<Routine, Integer> {
    
}
