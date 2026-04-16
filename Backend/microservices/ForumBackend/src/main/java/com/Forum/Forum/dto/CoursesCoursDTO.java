package com.Forum.Forum.dto;

public class CoursesCoursDTO {
    private Long id;
    private String titre;
    private CoursesModuleDTO module;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitre() {
        return titre;
    }

    public void setTitre(String titre) {
        this.titre = titre;
    }

    public CoursesModuleDTO getModule() {
        return module;
    }

    public void setModule(CoursesModuleDTO module) {
        this.module = module;
    }
}
