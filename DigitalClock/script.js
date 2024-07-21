let mytime =document.getElementById('clock')        //dont put #
// document.querySelector('#clock')                 // put #





setInterval(function(){                  // Continuously chalta jaaye kuch loop mein --> setInterval
    let date = new Date()
    mytime.innerHTML = date.toLocaleTimeString();
},1000)

