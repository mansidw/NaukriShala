const form  = document.getElementById('login1');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = form.email.value
    const password = form.password.value
    try{
        if(email=="")throw "Email not filled!"
        if(password=="")throw "Password not filled!"
        if(email=="1234@gmail.com" && password=="1234"){
            document.cookie="email="+email;
            location.assign("../landing.html");
        }
        else{throw "Invalid Credentials!"}
    }
    catch(err){
        document.getElementById("error").style.display="block";
        document.getElementById("error").innerText=err;
    }
    
});

