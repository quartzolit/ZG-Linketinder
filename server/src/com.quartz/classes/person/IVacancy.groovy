package com.quartz.classes.person

import com.quartz.classes.person.Skills

interface IVacancy {

    void createVacancy(String name, List<Skills> skills)

    void listVacancies();

    void deleteVacancy(int id);

}