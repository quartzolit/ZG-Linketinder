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
    void addSkills(Person p, EnumSkills skill) {

        p.skills << skill
        p.skills = p.skills.unique()
    }

    @Override
    void removeSkills(Person p, EnumSkills skill) {
        p.skills.remove(p.skills.find(skill))
    }
}
