let nameField=document.getElementById("name")
let emailField=document.getElementById("email")
let phoneField=document.getElementById("phone")
let ageField=document.getElementById("age")
let passwordField=document.getElementById("password")
let repasswordField=document.getElementById("repassword")

export function nameValidation(displayErrors=true){
    let name=nameField.value
    let nameRegex=/^[a-zA-z ]{3,20}$/
    if(!nameRegex.test(name) && displayErrors==true){
        document.getElementById("nameAlert").innerText="name should be at least 3 characters"
        document.getElementById("nameAlert").classList.replace("d-none","d-block")
        return false 
    }else if(!nameRegex.test(name)){
        return false 
    }
    document.getElementById("nameAlert").classList.replace("d-block","d-none")
    return true
}
export function emailValidation(displayErrors=true){
    let email=emailField.value
    let emailRegex=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if(!emailRegex.test(email)&& displayErrors==true){
        document.getElementById("emailAlert").innerText="email is not valid"
        document.getElementById("emailAlert").classList.replace("d-none","d-block")
        return false 
    }else if(!emailRegex.test(email)){
        return false 
    }
    document.getElementById("emailAlert").classList.replace("d-block","d-none")
    return true
}
export function phoneValidation(displayErrors=true){
    let phone=phoneField.value
    let phoneRegex=/^01[1250][0-9]{8}$/
    if(!phoneRegex.test(phone)){
        document.getElementById("phoneAlert").innerText="phone is not valid"
        document.getElementById("phoneAlert").classList.replace("d-none","d-block")
        return false 
    }else if(!phoneRegex.test(phone)){
        return false 
    }
    document.getElementById("phoneAlert").classList.replace("d-block","d-none")
    return true
}
export function ageValidation(displayErrors=true){
    let age=ageField.value
    let ageRegex=/^[0-9]{1,2}$/
    if(!ageRegex.test(age)){
        document.getElementById("ageAlert").innerText="age is not valid"
        document.getElementById("ageAlert").classList.replace("d-none","d-block")
        return false 
    }else if(!ageRegex.test(age)){
        return false 
    }
    document.getElementById("ageAlert").classList.replace("d-block","d-none")
    return true
}
export function passwordValidation(displayErrors=true){
    let password=passwordField.value
    let passwordRegex=/^[a-zA-Z0-9!@#$%^&*]{6,16}$/
    if(!passwordRegex.test(password)){
        document.getElementById("passwordAlert").innerText="passwordshould be at least 6 characters"
        document.getElementById("passwordAlert").classList.replace("d-none","d-block")
        return false 
    }else if(!passwordRegex.test(password)){
        return false 
    }
    document.getElementById("passwordAlert").classList.replace("d-block","d-none")
    return true
}
export function repasswordValidation(displayErrors=true){
    let repassword=repasswordField.value
    let password=passwordField.value
    if(repassword!==password){
        document.getElementById("repasswordAlert").innerText="repassword should be same as password"
        document.getElementById("repasswordAlert").classList.replace("d-none","d-block")
        return false 
    }else if(repassword!==password){
        return false 
    }
    document.getElementById("repasswordAlert").classList.replace("d-block","d-none")
    return true
}



export function validation(){
    if (nameValidation(false) &&
    emailValidation(false) &&
    phoneValidation(false) &&
    ageValidation(false) &&
    passwordValidation(false) &&
    repasswordValidation(false)) {
    submitBtn.removeAttribute("disabled")
    } else {
        submitBtn.setAttribute("disabled", true)
    }
}