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
}





