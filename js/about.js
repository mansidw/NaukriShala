const myJSON = '{"person1":["Mansi Dwivedi","Cannot find another like me 💯"],"person2":["Mr.Joker Smith","Neither like him"]}';
const myObj = JSON.parse(myJSON);


function myFunction(){
    document.getElementById("1").innerText = myObj.person1[0];
    document.getElementById("p1").innerText = myObj.person1[1];
    document.getElementById("2").innerText = myObj.person2[0];
    document.getElementById("p2").innerText = myObj.person2[1];

}
