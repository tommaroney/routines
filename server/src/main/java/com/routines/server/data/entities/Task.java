package com.routines.server.data.entities;

import java.util.List;

import jakarta.persistence.*;

@Entity
public class Task {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer id;

    private String name;

    private String description;

    @ManyToMany
    @JoinTable()
    private List<Routine> routines;

    public Integer getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<Routine> getRoutines() {
        return routines;
    }
}
