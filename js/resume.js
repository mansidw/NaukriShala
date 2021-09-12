const form  = document.getElementById('form1');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    document.getElementById("username").innerText="Successfully created your resume! Thank you"+" "+sessionStorage.getItem("name");
    document.getElementById("alert_div").style.display="block";
    //location.assign("../landing.html");
    setTimeout(()=>{location.assign("../landing.html")},4000);
});
