package com.quartz.classes

class Skills implements ISkills{
    List<String> skills=[];

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
