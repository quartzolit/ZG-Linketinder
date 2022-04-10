interface Person{
    type: string;
    login: string;
    password: string;
    name?: string;
    age?: number;
    cpf?: string;
    companyName?: string;
    cnpj?: string;
    country?: string;
    cep: string;
    state: string;
    description: string;
    skills?: string[];
    approval?: Person[];
    disapproval?: Person[];
}

//--creating global variables--
const people: Person[]=[];


if(sessionStorage.people){
    let session = JSON.parse(sessionStorage.people);
    
    for (const person of session) {

        people.push(person);
    }

    console.log(people)
}

let loggedPerson: Person;

//--Creating our DOM variables--

//Tag Company - Candidate
const candidatePart: HTMLElement = document.querySelector(".candidate-section")  as HTMLElement;;
const companyPart: HTMLElement = document.querySelector(".company-section") as HTMLElement;


//Setting Required
const candidateElements: NodeListOf<HTMLElement> = document.querySelectorAll(".candidate") as NodeListOf<HTMLElement>;
const companyElements = document.querySelectorAll(".company") as NodeListOf<HTMLElement>;
const signupButton: HTMLElement = document.querySelector(".signup") as HTMLElement;
const radioTags: HTMLElement = document.querySelector(".signup-select-radio") as HTMLElement;
const radioCandidate: HTMLInputElement = document.querySelector(".select-candidate") as HTMLInputElement;
const radioCompany: HTMLInputElement = document.querySelector(".select-company") as HTMLInputElement;

//Signup Form
const signupEmail: HTMLInputElement = document.querySelector('[data-type="login"]') as HTMLInputElement;
const signupPassword: HTMLInputElement = document.querySelector('[data-type="password"]') as HTMLInputElement;
const signupConfirmPassword: HTMLInputElement = document.querySelector('[data-type="confirm-password"]') as HTMLInputElement;
const message: HTMLSpanElement = document.querySelector("#matching-message") as HTMLSpanElement;
const signupName: HTMLInputElement = document.querySelector('[data-type="name"]') as HTMLInputElement;
const signupAge: HTMLInputElement = document.querySelector('[data-type="age"]') as HTMLInputElement;
const signupCpf: HTMLInputElement = document.querySelector('[data-type="cpf"]') as HTMLInputElement;
const signupCompanyName: HTMLInputElement = document.querySelector('[data-type="company-name"]') as HTMLInputElement;
const signupCnpj: HTMLInputElement = document.querySelector('[data-type="cnpj"]') as HTMLInputElement;
const signupCountry: HTMLInputElement = document.querySelector('[data-type="country"]') as HTMLInputElement;
const signupCep: HTMLInputElement = document.querySelector('[data-type="cep"]') as HTMLInputElement;
const signupState: HTMLInputElement = document.querySelector('[data-type="state"]') as HTMLInputElement;
const signupDescription: HTMLTextAreaElement = document.querySelector('textarea') as HTMLTextAreaElement;


//login

const loginEmail: HTMLInputElement = document.querySelector('[data-type="email-login"]') as HTMLInputElement;
const loginPassword: HTMLInputElement = document.querySelector('[data-type="password-login"]') as HTMLInputElement;
const loginButton: HTMLElement = document.querySelector('.login-button') as HTMLElement;

//--creating event Listeners--

signupConfirmPassword?.addEventListener('keyup', validatePassword);
signupButton.addEventListener('click', createAccount);
radioTags.addEventListener('click', changeSignupTags);
loginButton.addEventListener('click', tryToLogin);



//Functions
function changeSignupTags(e:any) :void{
    if(e.target.classList.contains('select-company')){
        candidatePart.style.display = 'none';
        companyPart.style.display = 'inline-block'
        companyElements.forEach(e=>{
            e.setAttribute("required","required");
        })
        candidateElements.forEach(e=>{
            e.removeAttribute("required");
        })

    }

    else if(e.target.classList.contains('select-candidate')){
        e.target.setAttribute('checked','checked');
        companyPart.style.display = 'none'
        candidatePart.style.display = 'inline-block';
        candidateElements.forEach(e=>{
            e.setAttribute("required","required");
        })
        companyElements.forEach(e=>{
            e.removeAttribute("required");
        })

    }
}

function createAccount(e:any){

    let check = true

    e.preventDefault();


    
    if(radioCandidate.checked){

        let person: Person= {
                type: "candidate",
                login: "",
                password: "",
                name: "",
                age:0,
                cpf: "",
                cep:"",
                state: "",
                description:"",
                skills:[]
            }

            if(signupPassword.value == signupConfirmPassword.value){
                person.password = signupPassword.value;
            }
            else{
                window.alert("Password does not match Confirm Passowrd");
                return;
            }
            person.login = signupEmail.value;
            person.name = signupName.value;
            person.age = parseInt(signupAge.value);
            person.cpf = signupCpf.value;
            person.cep = signupCep.value;
            person.state = signupState.value;
            person.description = signupDescription.value;



            
            for (let p of people) {
                if(person.login == p.login){
                    check = false;
                    window.alert("E-mail was used on another account")
    
                }                
            }

            if(check){
                people.push(person);

            }
           
            
    }
    else{
        let person: Person= {
                type: "company",
                login: "",
                password: "",
                companyName: "",
                cnpj:"",
                country: "",
                cep:"",
                state: "",
                description:"",
                skills:[]
            }

            if(signupPassword.value == signupConfirmPassword.value){
                person.password = signupPassword.value;
            }
            else{
                window.alert("Password does not match Confirm Passowrd");
                return;
            }

            person.login = signupEmail.value;
            person.companyName = signupCompanyName.value;
            person.cnpj = signupCnpj.value;
            person.country = signupCountry.value;
            person.cep = signupCep.value;
            person.state = signupState.value;
            person.description = signupDescription.value;

            for (let p of people) {
                if(p.login == person.login){
                    check=false;
                    window.alert("E-mail was used on another account")

                }
                
            }

            if(check){

                people.push(person);
            }
                

    }
    

    if(check){
        window.alert(`New Account created. Total Account: ${people.length}`)


    }

    

    
    

}

function validatePassword(this: HTMLInputElement){


    signupConfirmPassword.value = this.value;

    if(signupConfirmPassword.value.length > 3){

        if(signupPassword.value == this.value){
            message.textContent = "Password Match";
            message.style.color = "green";
        }
        else{
            message.textContent = "Password Does Not Match";
            message.style.color = "red";

        }

    }

}

function tryToLogin(this: any){


    let check: boolean = false;

    for (const person of people) {

        if(person.login === loginEmail.value && person.password === loginPassword.value){
            sessionStorage.setItem("loggedPerson",JSON.stringify(person));
            sessionStorage.setItem("people", JSON.stringify(people));

            check = true;
        }
        
    }

    if(check){

        location.assign("http://localhost:9000/view-page.html")

    }
    else if(loginEmail.value.length === 0 || loginPassword.value.length === 0 ){
        window.alert("Please Insert a Login and a Password")
        return
    }
    else{
        window.alert("Login or password are incorrect")
        return;

    }


}







