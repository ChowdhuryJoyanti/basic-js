
// for (var i  = 0; i < 10; i++){
//     console.log("sorry");
// }
// function writeSorry(name){
//     for (var i  = 0; i < 10; i++){
//         console.log("sorry, " + name);
//     }
// }
// writeSorry("Nafisa");
// function groceryShop(cal, dal , torkari){
//     var total = cal + dal + torkari;
//     console.log(total);
// }
// groceryShop( 50,60,90);


// function kmToMile(km){
//             var result = km * 0.62;
          
//             return result;
// }
//      var miles = kmToMile(12);
     
//      console.log(miles);



    //  function workout(workOutName){
    //         var bicepWorkOut =["cable cross", "bicep","bicef"] 
    //         var chestWorkout = ["chest fly", "cost price" ,"cost"];


    //         if(workOutName =="chest"){
    //             return chestWorkout;
    //         }
    //         else if (workOutName =="bicep"){
    //             return bicepWorkOut;
    //         }
    //         else{
    //             return "don't know";
    //         }

    //  }
    //  var workoutPlan =workout("chest")
    //  console.log(workoutPlan);

     var myDays = 25;

     var first1To10days = 500;
     var second11To20days = 300;
     var third21ToAnydays = 100;
      
     if(myDays<=10){
        var totalcost = myDays*500;

     }
     else if(myDays <=20 && myDays>10){
        var first10Dayscost = 10*500;
        var remaingDays = myDays -10;
        var total10DaysCost = remaingDays * 300;
        var total1To20DaysCost = first10Dayscost + total10DaysCost
     }