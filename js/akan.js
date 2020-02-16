function akan(){
    var day = document.getElementById("day").value;
    var DD = parseInt(day);
    var year = document.getElementById("year").value;
    var year1 = year.toString();
    var year2 = year1.slice(2,4);

    var YY = parseInt(year2);

    var month = document.getElementById("month").value;
    var MM = parseInt(month);
    var CC = parseInt((YY-1)/100 + 1);

    var dayOfTheWeek = (((CC/4)-2*CC-1)+((5*YY/4))+((26*(MM+1)/10))+DD)%7;
    
    var dayOfTheWeek = Math.floor(dayOfTheWeek);
    
    var femaleAkan = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var maleAkan = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

    if (document.getElementById("gender").checked){
        var gender = 'male';
    }else{
        var gender = 'female';
    }

    if (MM < 1 ||MM > 12){                                     //validating the number of months
        alert("Invalid month! Please enter valid month.");  
    }else if(DD > 31){                                         //validating months with 31 days
        alert("Invalid day! Please enter valid day.");
    }else if(MM == 2 && DD>28|| MM == 2 && year % 4 == 0 && DD > 29){ //validating February with 28 days and Leap year Feb with 29 days
        alert("Invalid day! Please enter valid day.");
    }else if(MM == 4 && DD > 30){                                     //validating April to have 30 days
        alert("Invalid day! Please enter valid day."); 
    }else if(MM == 6 && DD > 30){                                     //validating June to have 30 days
        alert("Invalid day! Please enter valid day."); 
    }else if(MM == 9 && DD > 30){                                     //validating September to have 30 days
        alert("Invalid day! Please enter valid day."); 
    }else if(MM == 11 && DD > 30){                                    //validating November to have 30 days
        alert("Invalid day! Please enter valid day."); 
    }else if (dayOfTheWeek == 0 && gender === 'male'){
        document.getElementById("outcome").innerHTML=("Your Akan Name is : " + maleAkan[0] + ".");
    }else if (dayOfTheWeek == 1 && gender === 'male'){
        document.getElementById("outcome").innerHTML=("Your Akan Name is : " + maleAkan[1] + ".");
    }else if (dayOfTheWeek == 2 && gender === 'male'){
        document.getElementById("outcome").innerHTML=("Your Akan Name is : " + maleAkan[2] + ".");
    }else if (dayOfTheWeek == 3 && gender === 'male'){
        document.getElementById("outcome").innerHTML=("Your Akan Name is : " + maleAkan[3] + ".");
    }else if (dayOfTheWeek == 4 && gender === 'male'){
        document.getElementById("outcome").innerHTML=("Your Akan Name is : " + maleAkan[4] + ".");
    }else if (dayOfTheWeek == 5 && gender === 'male'){
        document.getElementById("outcome").innerHTML=("Your Akan Name is : " + maleAkan[5] + ".");
    }else if (dayOfTheWeek == 6 && gender === 'male'){
        document.getElementById("outcome").innerHTML=("Your Akan Name is : " + maleAkan[6] + ".");
    }
}





