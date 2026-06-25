package com.routines.server.data.entities;

import java.util.List;

import org.hibernate.annotations.SoftDelete;

import jakarta.persistence.*;

@Entity
@SoftDelete
public class Task {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer id;

    private String name;

    private String description;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(
        name = "assigment",
        joinColumns = @JoinColumn(name = "task_id"),
        inverseJoinColumns = @JoinColumn(name = "routine_id")
    )
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
