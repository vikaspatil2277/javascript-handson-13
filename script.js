let C=document.getElementById("text")
console.log(C.innerText);

// 2

let x=document.getElementsByTagName("h1")
console.log(x[1]);

// 3

let a=document.getElementsByClassName("box")
console.log(a);

// 4

let hello = document.getElementById("text");
hello.innerText="Hello World";

// 5
        let btn = document.getElementById("button");
        let timer = document.getElementById("clock");
    
    
        function timerfn(){
            let time = new Date();
            let hr = time.getHours();
            let min = time.getMinutes();
            let sec = time.getSeconds();
            console.log(hr, min, sec);
            // timer.innerText = `${hr}":"${min}":"${sec}`;
            return `${hr}:${min}:${sec}`
        };
    
        btn.addEventListener("click",function(){
            timer.innerText = timerfn();
            setInterval(function(){
                timer.innerText = timerfn();
            },1000)
        })

        // 6

        let flex = document.getElementById("cards");
            let btncol = document.getElementById("btn-col");
    
            btncol.addEventListener("click",function(){
                flex.style.flexDirection="column";
                flex.style.alignItems="center";
            });

            // 9
            let hell00 = document.getElementById("hello");
            let hellobtn = document.getElementById("hellobutton");

            hellobtn.addEventListener("click",function(){
                hell00.innerText="Welcome to Elevation academy";
            });

            // 10

            let year = document.getElementById("years");
            year.addEventListener("click",function(){
                console.log(year.options[year.selectedIndex].innerHTML);
            });
