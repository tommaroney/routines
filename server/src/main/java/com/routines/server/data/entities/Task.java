package com.routines.server.data.entities;

import org.hibernate.annotations.SoftDelete;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.*;

@Entity
@SoftDelete
public class Task {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer id;

    private String name;

    private String description;

    @ManyToOne()
    @JsonBackReference
    private User user;

    // @ManyToMany(cascade = CascadeType.ALL, fetch=FetchType.LAZY)
    // @JoinTable(
    //     name = "assignment",
    //     joinColumns = @JoinColumn(name = "task_id"),
    //     inverseJoinColumns = @JoinColumn(name = "routine_id")
    // )
    // private List<Routine> routines;

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

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    // public List<Routine> getRoutines() {
    //     return routines;
    // }
}
