function getAkanName(){
  var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  var femaleAkanNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
  var maleAkanNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
  var myBirthday = document.getElementById("myBirthDate").value;
  var dateOfBirth = new Date(myBirthday);
  var dayOfTheWeek = dateOfBirth.getDay();
  var myGender = document.getElementsByName("gender");
  if(myBirthday === ""){
    document.getElementById('message').innerHTML = "<div class=\"alert\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\">x</button>Invalid Date!</div>";
      }

    else {
      for(var i=0;i<myGender.length;i++){
        if(myGender[i].checked){

        if(myGender[i].value === "Male"){
          document.getElementById('message').innerHTML = "Born on <span>" + days[dayOfTheWeek] + "</span>, Your Akan Name is <span>" + maleAkanNames[dayOfTheWeek] + "</span>";
           }
            else {
              document.getElementById('message').innerHTML = "Born on <span>" + days[dayOfTheWeek] + "</span>, Your Akan Name is <span>" + femaleAkanNames[dayOfTheWeek] + "</span>";
            }
            break;
            }
            else {
                document.getElementById('message').innerHTML = "<div class=\"alert\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\">x</button>Invalid gender!</div>";
            }
        }
    }
}


function clearAkanMessage(){
    document.getElementById('message').innerHTML = "";
}
