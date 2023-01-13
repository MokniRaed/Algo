var date = 310923
 function getdate(d){

   var year = date % 100;
   var month = ((date - year) / 100) % 100
   var day = (((date - year) / 100) - month) / 100;

   if (month > 12 || month < 1) {
     console.log("undefined date !")
     return false;
   }
   if( day > 31){
     return console.log("not a valid day ");
   }

   else if ( month  == 4 || month  == 6 || month == 9 || month == 11 ){
    
     if( day > 30 ){
       return console.log("day is not valid ! ");
       
     }

   }else if(  month == 2 && year % 4 ==0 && day > 29 ){
     return console.log("not a valid day ")
   }
   else if (month == 2 && year % 4 != 0 && day != 28) {
     return console.log("not a valid day ")
   }



   switch (month) {
     case 1:
       month = "janvier";
       break;
     case 2:
       month = "fevrier";
       break;
     case 3:
       month = "mars";
       break;

     case 4:
       month = "avril";
       break;

     case 5:
       month = "mai";
       break;

     case 6:
       month = " juin";
       break;
     case 7:
       month = "juillet";
       break;
     case 8:
       month = "aout";
       break;
     case 9:
       month = "septembre";
       break;
     case 10:
       month = "october";
       break;
     case 11:
       month = "november";
       break;
     case 12:
       month = "december";
       break;
     default:
       month = "mouch mawjoud";
   }

   year = year + 2000;
 var result = "day:"+ day + " month: "+month + " year: "+year;
   return result
 }

getdate(date);