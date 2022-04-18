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
    void addSkillToList(EnumSkills skill) {

        this.skills << skill
        this.skills = this.skills.unique()
    }

    @Override
    void removeSkillToList(EnumSkills skill) {
        this.skills.remove(skill)
    }
}
