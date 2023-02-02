var numbers = [1,2,3,4,5,6,7,8,9,10]
// console.log(numbers[2])


var temp = []
for (var i =0;i < numbers.length ;i++){
    var element = numbers[i];
    // if(element ==5)
    // console.log(element);
    if(element % 2 ==0){
        temp.push(element);
    }
}
// console.log(temp);


var friends = [ "mahi","robin","ratul" ,"mim"]
for (var i=0; i< friends.length;i++){
    var element = friends[i];
    // console.log(element.length);
}


for(var i = 0;i < 100; i++){
    // console.log("sorry");
}
 var friends =["min","robin", "klsjd","lkjdl"];

 for (var i = 0; i< friends.length;i++){
    var element =friends[i];
    // console.log(element)
 }
 var human = {
    name:"rahim",
    age :25,
    friends:["babul","hero","alom","ranbir"],
    country:"Bangladesh",

 };
//  console.log(human.name)
//  console.log(human.friends[3])
//  console.log(human)
 for(var i = 0; i < human.friends.length; i++){
    var element = human.friends[i];
    console.log(element)
 }


