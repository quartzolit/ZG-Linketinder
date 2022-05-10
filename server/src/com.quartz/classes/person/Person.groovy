package com.quartz.classes.person

@groovy.transform.ToString

class Person{
    int id;
    String email;
    String state;
    String cep;
    String country;
    String description;
    Skills skills = new Skills();
}
