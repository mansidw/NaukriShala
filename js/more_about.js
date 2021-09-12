const form  = document.getElementById('form1');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const fname = form.fname.value
    const lname = form.lname.value
    sessionStorage.setItem("name", fname+" "+lname);
    document.getElementById("username").innerText="Successfully filled! Thank you"+" "+sessionStorage.getItem("name");
    document.getElementById("alert_div").style.display="block";
    //location.assign("../landing.html");
    setTimeout(()=>{location.assign("../landing.html")},4000);
});
