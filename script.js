var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var femaleAkanNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
var maleAkanNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var myBirthday = document.getElementById("myBirthDate").value;
var dateOfBirth = new Date(myBirthday);
var dayOfTheWeek = dateOfBirth.getDay();
var myGender = document.getElementsByName("gender");
