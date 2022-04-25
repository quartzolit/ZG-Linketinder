package com.quartz.classes

@groovy.transform.ToString

class Person{
    String name;
    String email;
    String state;
    String cep;
    String description;
    Skills skills = new Skills();
}
