package com.routines.server.data.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Assignment {
    
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer id;

    private String taskDescription;
    private String notes;

    @ManyToOne
    @JoinColumn(name = "task_id", referencedColumnName = "id")
    @JsonBackReference
    private Task task;

    @ManyToOne
    @JoinColumn(name = "routine_id", referencedColumnName = "id")
    @JsonBackReference
    private Routine routine;

    public Integer getId() {
        return id;
    }

    public String getTaskDescription() {
        return taskDescription;
    }

    public void setTaskDescription(String taskDescription) {
        this.taskDescription = taskDescription;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    public Task getTask() {
        return task;
    }

    public Routine getRoutine() {
        return routine;
    }
}
