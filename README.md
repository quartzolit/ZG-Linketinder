# ZG-Linketinder


## 1.0
We created a MVP of a project called Linketinder

Here we have a class of Candidates and Companies. The idea of this project is to match candidates with companies based on the Candidate Skills and the Companies required skills.

The first implementation was the classes and interfaces and a single application to run those classes and tests some methods

A loader of 5 companies and 5 candidates were also implemented

## 1.1

Unit tests for Loader and Person Classed added

## 1.2

FrontEnd files added. Our main file is script.ts, which is loaded on index.html file. This page is responsible to signup at Linketinder. After creating an account and login. The page will load visit-page.html page and visit-page.ts script. At this page you can manage your skills and look for available vacancy slots.

PS: There is a issue on saving the slots you approve and disapprove. It will be fixed on future patches.


## 1.3

Regex validation on form implemented and tested!

## 1.5
Database (to be implemented).

## 1.6
Graddle Build Tool (To be implemented).

## 1.7
Web Crawler added (To be implemented).

## 1.8

Refactoring using clear code method. The following methods and variables were changed. See the list Below:

### Server 1.8.1 - Side

#### 1.8.1 - a: Varialbes;

#### 1.8.1 - b: Methods
- Method addSkills name was changed to addSkillToList;

- Method removeSkills name was changed to removeSkillToList;
### 1.8.2 Client - Side;

#### 1.8.1 - a: Variables

- On script.ts, candidatePart was changed to candidateSection;
- On script.ts, companyPart was changed to companySection;


#### 1.8.1 - b: Methods

- On script.ts, at the createAccount Method, an alert created on the end of the function was removed, and put at the end of each if inside a condition;
- On script.ts, changeSignupTags was changed to changeSignupInputTagsThroughRadioSelection;
- On view-page.ts, loadData method received a condition to check peopleList length, in order to set the data only at the first time;
- On view-page.ts, loadData now is an async function in order to retrieve data from sessionStorage;
- On view-page.ts, updatedFilteredSlot was changed to updateFilteredList;
- On view-page.ts, A method called swipeReset was created to decouple this function from addingSkillsToList / removingSkillsToList;addingSkillsToList;
- On view-page.ts, A method called checkingIfSkillIsUnique was created to decouple this function from addingSkillsToList / removingSkillsToList;addingSkillsToList;
- On view-page.ts, showTopVacancy was changed to showTopItemFromList in order to clarify the idea of this function;
- On view-page.ts, emptySlotDiv was changed to noMoreItemsFromList in order to clarify the idea of this function;
# Executing project

To execute the project you only need to run the application.groovy file. If you want to run unit tests, run the files in test folder instead

to run frontEnd project. You have to install dependencies, then use npm start to run
