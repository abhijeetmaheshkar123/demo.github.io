document.getElementById("s2").innerHTML = localStorage.getItem("firstname");
document.getElementById("s1").innerHTML = localStorage.getItem("emailvalue");
var val = Math.floor(1000 + Math.random() * 9000);

console.log(val);
function myfunc() {
    let i = 0
    while (i<3)
    {
        var b = document.getElementById("b1").value;

        if (val == b) {
            console.log("you guase right number");
            // document.write("Welcome");
            document.getElementById("myform").innerHTML="Validation Successful!";
            location.href="http://pixel6.co/";
            break;
        }
        else {
            let m = i + 1;
            console.log(m);
            let l="can you re-enter the otp"
            if (confirm(l) == true) {
                let otp = prompt("Please enter the otp ");
            if(val==otp)
                {
            console.log("you guase right number");
            // document.write("Welcome" );
            document.getElementById("myform").innerHTML="Validation Successful!";
            location.href="http://pixel6.co/";
            break; 
            }
            }
            }
        i++;
        document.getElementById("myform").innerHTML="Validation Failed!";
        location.href="http://1pixel6.co/"
        }
        
        
    }


