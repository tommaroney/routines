package com.routines.server.data.repositiories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.routines.server.data.entities.Task;

public interface TaskRepository extends CrudRepository<Task, Integer> {

    List<Task> findAllByRoutineId(Integer routineId);

}
