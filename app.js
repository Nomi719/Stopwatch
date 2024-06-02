// ---------------------synchronous function-----------

// console.log("hellooo world 1")
// console.log("hellooo world 2")
// console.log("hellooo world 3")
// function foo() {
//     console.log("hello world foo")
// }
// setTimeout(foo, 7000)
// console.log("hello world")
// console.log("hello world")



// -----------syn example------------

// function login(){
//     console.log("heloooo login")
// }

// console.log("heloo world 1")
// console.log("heloo world 2")

// // login()
// setTimeout(login, 5000)

// setTimeout(function () {
//         console.log("HELLO 3 sec")
//     }, 3000) //5sec wait

//     console.log("hellooo 4")
    

// --------------------Asynchronous function-----------


// var interval = setInterval(function(){
//     console.log("hellooooo jigar")
// }, 3000)
// function stop(){
//     console.log("stop()")
//     clearInterval(interval)
// }

// -------------stopWatch Application---------


var minHeading = document.getElementById("minHeading")
var secHeading = document.getElementById("secHeading")
var msecHeading = document.getElementById("msecHeading")
var interval;

var msec = 0
var sec = 0 
var min = 0

function start(){

    msec++
    msecHeading.innerHTML = msec

    if(msec === 100){
        sec++
        secHeading.innerHTML = sec
        msec = 0
    }

    else if(sec >= 59){
        min++
        minHeading.innerHTML = min
        sec = 0
    }

    else if(min >59){
        hour++
        hourHeading.innerHTML = hour
        min = 0
    }
}

function startWatch(){
    clearInterval(interval)
    interval = setInterval(start, 10)

}

function resetWatch(){
    clearInterval(interval)
    minHeading.innerHTML = 00
    secHeading.innerHTML = 00
    msecHeading.innerHTML = 00
    msec = 0
    sec = 0
    min = 0
}

function stopWatch(){
    clearInterval(interval)
}


// ---------------------stopWatch end------------------------



//  var devices = ["keyboard","mouse","printer","monitor"];
// console.log (devices.pop()); 
// console.log (devices.pop());
// console.log (devices.pop());
// console.log (devices.pop());

//  var devices = ["keyboard","mouse","printer","monitor"];
// console.log (devices.shift()); 
// console.log (devices.shift());
// console.log (devices.shift());
// console.log (devices.shift());


//  var manufacturer=["apple","samsung","motorola","nokia","sony","haier"];
// document.write("<select>");
// document.write("<option>"+manufacturer[0]+"</option>");
// document.write("<option>"+manufacturer[1]+"</option>");
// document.write("<option>"+manufacturer[2]+"</option>");
// document.write("<option>"+manufacturer[3]+"</option>");
// document.write("<option>"+manufacturer[4]+"</option>");
// document.write("<option>"+manufacturer[5]+"</option>");
// // document.write("</select>");


