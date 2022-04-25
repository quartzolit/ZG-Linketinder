package com.quartz.tests

import com.quartz.classes.EnumSkills
import com.quartz.classes.Person
import groovy.test.GroovyTestCase


class PersonTestGroovy extends GroovyTestCase {
    void testAddSkills() {
        Person person = new Person();

        EnumSkills expectedResult = EnumSkills.JAVA;

        person.skills.addSkillToList(EnumSkills.JAVA );

        GroovyTestCase.assertTrue(person.skills.getSkills().contains(expectedResult))

        println("Add skill test executed")
    }

    void testRemoveSkills() {
        Person person = new Person();

        person.skills.removeSkillToList(EnumSkills.HIBERNATE);
        person.skills.addSkillToList(EnumSkills.HTML);

        int expectSize = 1;
        EnumSkills expectedResult = EnumSkills.HTML;

        person.skills.removeSkillToList(EnumSkills.HIBERNATE);

        GroovyTestCase.assertTrue(person.skills.getSkills().contains(expectedResult) && person.skills.getSkills().size() == expectSize );
        println("Remove Skill Test Executed")
    }

    void testSkillIsUnique(){

        Person person = new Person();

        person.skills.addSkillToList(EnumSkills.HIBERNATE);
        person.skills.addSkillToList(EnumSkills.HTML);
        person.skills.addSkillToList(EnumSkills.HTML);

        int expectedResult = 2

        GroovyTestCase.assertEquals(expectedResult, person.skills.getSkills().size())

        println("Unique Skill test executed")

    }
}
