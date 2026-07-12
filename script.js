let display = document.getElementById("display");
let buttons = document.querySelectorAll(".Btn");

buttons.forEach(function(button)
{
  button.addEventListener("click",
    function(event) {
    
        let value= event.target.textContent;

        let lastChar= display.value[display.value.length-1];

        if(value=="AC")
        {
            display.value="";
        }

        else if(value=="=")
        {
        display.value=eval(display.value);
        }

        else if(value=="DEL")
        {
            display.value=display.value.slice(0,-1);
        }    

        else if(value==".")
            {
             if(display.value.includes("."))
             {
                return;
             }
             display.value+=value;
            }           

        else if(value=="+" || value=="-" || value=="/" || value=="*")
        {
            if(display.value=="")
            {
                return;
            }
            if(lastChar=="+" || lastChar=="-" || lastChar=="/" || lastChar=="*")
            {
             display.value=display.value.slice(0,-1);
            }
             display.value+=value;
        }
        
        else 
        {
            display.value+=value;
        }
    });
});



if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("service-worker.js")
        .then(reg => {
            console.log("Service Worker Registered");
        })
        .catch(err => {
            console.log("Registration Failed", err);
        });
    });
}

// console.log(value);
