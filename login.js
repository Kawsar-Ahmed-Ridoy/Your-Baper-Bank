// step-1 add click event handler with the submit button
document.getElementById("btn-submit").addEventListener("click", function(){
    // step-2 get the email address indise the email input field
    // always remember to use .value to get text from an input field
   
    const emailFiled = document.getElementById("user-email");
    const email = emailFiled.value;
    
    //step-3: get password 
    //3.a: set id on the html element
    //3.b: get the element 
    // 3.c: get the value from the element
    const passwordField = document.getElementById("user-password");
    const password = passwordField.value;

    // do not verify email password on the client side
    // step-4 verify email and password
    if (email === "amichor@gmail.com" && password === "9517753"){
        window.location.href = "bank.html";
    }else{
        alert("kire chor! email, password vule gele churi korbi kemne?")
    }
}) 