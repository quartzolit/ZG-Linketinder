package com.quartz.classes

interface IVacancy {

    void createVacancy(String name, List<Skills> skills)

    void listVacancies();

    void deleteVacancy(int id);

}