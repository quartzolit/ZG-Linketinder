package com.quartz.classes.person

import com.quartz.classes.person.Person
import com.quartz.classes.person.Skills
import com.quartz.classes.person.Vacancy

@groovy.transform.InheritConstructors
@groovy.transform.ToString
class Company extends Person {
    String name;
    String cnpj;
    Vacancy vacancy;

    void createVacancy(String name, Skills skills) {
        this.vacancy = new Vacancy(name: name, desiredSkills: skills);


    }

    void listVacancies() {
        println(vacancy);

    }

    void deleteVacancy(int id) {
        this.vacancy = null

    }


}
