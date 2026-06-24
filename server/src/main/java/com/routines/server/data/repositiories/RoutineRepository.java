package com.routines.server.data.repositiories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.routines.server.data.entities.Routine;
import com.routines.server.data.entities.Task;

public interface RoutineRepository extends CrudRepository<Routine, Integer> {
    
    List<Task> findAllTasksByRoutineId(Integer routineId);

}
