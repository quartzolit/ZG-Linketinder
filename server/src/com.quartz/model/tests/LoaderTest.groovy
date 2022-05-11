package com.quartz.model.tests

import com.quartz.model.person.Candidate
import com.quartz.model.person.Company
import com.quartz.model.person.Vacancy
import com.quartz.model.Loader
import groovy.test.GroovyTestCase

class LoaderTest extends GroovyTestCase {
    void testLoadCompanies() {

        List<Company> companies;

        companies = Loader.loadCompanies()

        int expectedSize = 5


        assertEquals(expectedSize, companies.size())

        println("Load Companies test executed")

    }

    void testLoadCandidates() {
        List<Candidate> candidates;

        candidates= Loader.loadCandidates()

        int expectedSize = 5

        assertEquals(expectedSize, candidates.size())

        println("Load Candidates test executed")
    }
}
