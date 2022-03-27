package com.quartz.classes

@groovy.transform.ToString
class Person implements IPerson{
    String name;
    String email;
    String state;
    String cep;
    String description;
    List<String> skills = [];


    @Override
    void addSkills(EnumSkills skill) {

        this.skills << skill
        this.skills = this.skills.unique()
    }

    @Override
    void removeSkills(EnumSkills skill) {
        this.skills.remove(skill)
    }
}
