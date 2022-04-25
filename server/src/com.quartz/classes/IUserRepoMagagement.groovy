package com.quartz.classes

interface IUserRepoMagagement {

    public Object checkIfIsUnique(String email);

    public void saveToDB(Person person);

}