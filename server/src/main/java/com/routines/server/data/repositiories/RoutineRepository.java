package com.routines.server.data.repositiories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.routines.server.data.entities.Routine;

public interface RoutineRepository extends CrudRepository<Routine, Integer> {
    
    public List<Routine> findAllByUserId(Integer userId);
}
