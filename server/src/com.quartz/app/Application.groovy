package com.quartz.app

import com.quartz.classes.Candidate
import com.quartz.classes.Company
import com.quartz.classes.EnumSkills
import com.quartz.classes.Loader


//Setting my lists
List<Candidate> candidates = [];
List<Company> companies = [];


// Loading Candidates list
for(x in Loader.loadCandidates()){
    candidates<<x
}


// Loading Companies List
for(x in Loader.loadCompanies()){
    companies<<x
}

//Checking if everything went right
println(candidates)

println(companies)

println(candidates[0])

//Testing some Methods
candidates[0].addSkillToList(EnumSkills.BACKEND)

println(candidates[0])

