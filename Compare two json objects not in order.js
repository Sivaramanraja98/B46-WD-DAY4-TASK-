let obj1 = {name : "Person 1",age:5};
let obj2 = {age:5,name : "Person 1"};
function isEqual(obj1,obj2){
   var obj1keys =Object.keys(obj1);
   var obj2keys =Object.keys(obj2);
    if(obj1.length != obj2.length)
    {
        return false;
    }
    for(var obkey of obj1keys)
    {
        if(obj1[obkey] != obj2[obkey])
        {
            return false;
        }
        
    }
 return true;
}
console.log(isEqual(obj1,obj2));
