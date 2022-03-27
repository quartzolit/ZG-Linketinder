package com.quartz.tests

import com.quartz.classes.EnumSkills
import com.quartz.classes.Person
import groovy.test.GroovyTestCase


class PersonTestGroovy extends GroovyTestCase {
    void testAddSkills() {
        Person person = new Person();

        EnumSkills expectedResult = EnumSkills.JAVA;

        person.addSkills(EnumSkills.JAVA );

        GroovyTestCase.assertTrue(person.getSkills().contains(expectedResult))

        println("Add skill test executed")
    }

    void testRemoveSkills() {
        Person person = new Person();

        person.addSkills(EnumSkills.HIBERNATE);
        person.addSkills(EnumSkills.HTML);

        int expectSize = 1;
        EnumSkills expectedResult = EnumSkills.HTML;

        person.removeSkills(EnumSkills.HIBERNATE);

        GroovyTestCase.assertTrue(person.getSkills().contains(expectedResult) && person.getSkills().size() == expectSize );
        println("Remove Skill Test Executed")
    }

    void testSkillIsUnique(){

        Person person = new Person();

        person.addSkills(EnumSkills.HIBERNATE);
        person.addSkills(EnumSkills.HTML);
        person.addSkills(EnumSkills.HTML);

        int expectedResult = 2

        GroovyTestCase.assertEquals(expectedResult, person.getSkills().size())

        println("Unique Skill test executed")

    }
}
