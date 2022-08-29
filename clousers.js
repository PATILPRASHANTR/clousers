//1
function counter(){
    let Counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}

var Counter = counter();
alert(Counter());    > 1
alert(Counter());   
alert(Counter());   
alert(Counter());  


//2
let count = 0;
(function () {
  if (count === 0) {
    let count = 1;
    console.log(count); 
  }
  console.log(count); 
})();

//3

for (var i = 0; i < 3; i++) {
    setTimeout(function log() {

      console.log(i); // output----> 3 3 3
    }, 1000);
  }

//4

 areaCal=function(length)
{
   areaCalculte= function(breadth)
  {
            console.log(`The area of the rectangle is = ${length * breadth}`);
  }
};

areaCal(10);
areaCalculte(3);



// 5

outer = function() {
    let counterOne=0;
    inner = function()
    {
       return counterOne++;  
    }
    return inner;
};

let result=outer();
console.log(result());
console.log(result());
console.log(result());

//7
var a = 12;
(function () {
  console.log(a); 
})();

//7
var a = 10;
var x = (function () {
  var a = 12;
  return function () {
    console.log(a);  
  };
})();
x();

//8
var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
        "outerArg = " + outerArg + "\n" +
        "innerArg = " + innerArg + "\n"+
        "outerVar = " + outerVar + "\n"+
        "innerVar = " + innerVar + "\n" +
        "globalVar = " + globalVar);
    })(456);
})(123);