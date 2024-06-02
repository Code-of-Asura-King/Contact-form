const Fname = document.querySelector("#Fname");
const Lname = document.querySelector("#Lname");
const email = document.querySelector("#mail");
const Query = document.querySelector(".query-options");
const Message = document.querySelector("#comment");
const cBox=document.querySelector("#Checkbox");

//checking for Submission
document.querySelector("form").submit.addEventListener("click", e => {
    e.preventDefault();
    if(ValidateInputs()){
        document.querySelector(".success").classList.add("submit-success");
    }
    else{
        e.preventDefault();
    }

})

//Checking RadioButtons
function check() {
    let Check = false;
    let buttons = document.querySelector("form").query;
    for (let button of buttons) {
        if (button.checked) {
            Check = true;
            break;
        }
    }
    if (Check) {
        return true;
    }
    else {
        return false;
    }

}

//Checking Checkbox
function checkBox() {
    let Check = false;
    let button = document.querySelector("form").checkbox;
    if (button.checked) {
        Check = true;
    }
    if (Check) {
        return true;
    }
    else {
        return false;
    }
}

//Error function
function setError(ele, message) {
    const formControl = ele.parentElement;
    const errorDisplay = formControl.querySelector(".Error");
    errorDisplay.innerText = message;
    ele.classList.add("Error-border");
}

//Success Function
function setSuccess(ele) {
    const formControl = ele.parentElement;
    const errorDisplay = formControl.querySelector(".Error");
    errorDisplay.innerText = "";

}

//Validation email
const isValidateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

//Input validation ckeck
function ValidateInputs() {
    const FnameValue = Fname.value.trim();
    const LnameValue = Lname.value.trim();
    const emailValue = email.value.trim();
    const messageValue = Message.value.trim();

    //UserName checking
    if (FnameValue === "" && LnameValue !== "") {
        setError(Fname, "This field is required");
        setSuccess(Lname);
        console.log("error 1");
    }
    else if (LnameValue === "" && FnameValue !== "") {
        setError(Lname, "This field is required");
        console.log("eroor 2");

        setSuccess(Fname);
    }
    else if (FnameValue === "" && LnameValue === "") {
        console.log("Error 3");

        setError(Fname, "This field is required");
        setError(Lname, "This field is required");

    }
    else {
        setSuccess(Lname);
        setSuccess(Fname);     

    }

    //Email checking
    if (emailValue === "") {
        setError(email, "This field is required");
    }
    else if (!isValidateEmail(emailValue)) {
        setError(email, "Please enter a valid email address");
    }
    else {
        setSuccess(email);
        
    }

    //Radio buttons checking
    if (check()) {
        setSuccess(Query);        
    }
    else {
        setError(Query, "Please select a query type");        
    }

    //message checking
    if (messageValue === "") {
        setError(Message, "This field is required");
    }
    else {
        setSuccess(Message);        
    }

    //checkbox checking
    if (check()) {
        setSuccess(cBox);        
    }
    else {
        setError(cBox, "To submit the form, please consent to being contacted");        
    }
    if (
        FnameValue &&
        LnameValue &&
        emailValue &&
        isValidateEmail(emailValue) &&
        check() &&
        messageValue &&
        checkBox()
    ) {
        return true;
    } else {
        return false;
    }
}
