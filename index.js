/*const mycheckbox = document.getElementById("mycheckbox");
const Visabtn = document.getElementById("Visabtn");
const MasterCard = document.getElementById("MasterCard");
const PayPal = document.getElementById("PayPal");
const subscribebtn = document.getElementById("subscribebtn");
const paymentMethodBtn = document.getElementById("paymentMethodBtn");
const submitBtn = document.getElementById("submitBtn");

submitBtn.onclick = function(){
    if(mycheckbox.checked){
        subscribebtn.textContent = `thanks for the subscription🥳`;

    }
    else{
        subscribebtn.textContent = `please subscribe first`;
    }

    if(Visabtn.checked){
        paymentMethodBtn.textContent = `u'll be paying with ur visa`;
    }
    else if(MasterCard.checked){
        paymentMethodBtn.textContent = `u'll be making the payment with ur MasterCard`;

    }
    else if(PayPal.checked){
        paymentMethodBtn.textContent = `u'll be using ur PayPal`;
    }
    else{
        paymentMethodBtn.textContent = `please select a payment method`
    }

}
*/
/*

let Markinput = document.getElementById("Marks");
const mysubmitbtn = document.getElementById("mysubmitbtn");
const Grade = document.getElementById("Grade");
console.log(Marks)


mysubmitbtn.onclick = function(){
    const Marks = Number(Markinput.value);
    switch(true){

        case(Marks>100):
        Grade.textContent = `marks should be in percentage`;
        break;
        case (Marks >=79):
            Grade.textContent = `A`;
            break;
        
        case (Marks >=69):
            Grade.textContent = `B`;
             break;
    
        case (Marks>=59):
            Grade.textContent = `C`;
            break;
            
        case (Marks>=49):
            Grade.textContent = `D`;
            break;
            
        case (Marks>=39):
        Grade.textContent = `E`;
        break;
    
        case (Marks >=29):
            Grade.textContent = `fail`;
            break;
        
        case(Marks >=0):
            Grade.textContent = `terribly failed`;
            break;

        default:
                Grade.textContent = `invalid input`;
    
    }
    

    }
*/

/*
let usernameholder = document.getElementById("username");
let emailholder = document.getElementById("email");
const usertext = document.getElementById("usertext");
const emailtext = document.getElementById("emailtext");
const mybtn = document.getElementById("mybtn");
let h1 = document.getElementById("welcomemsg");

if(mybtn.onclick = function(){
    const username = usernameholder.value;
    const email = emailholder.value;

    switch(true){
        case(username.includes("!")||username.includes("@")||username.includes("#")||username.includes("$")||username.includes("%")||username.includes("^")||username.includes("&")||username.includes("*")||username.includes("()")):
        usertext.textContent = `username should only contain letters and numbers`;
        break;
        
    }
    switch(false){
        case(email.includes("@")):
        emailtext.textContent = `Email must have @ sign`
    }
    
}){
    h1.textContent = `congratulations🥳`;
    
}
else{
    h1.textContent = `enter the correct details`;
}

*/



/*let correctPassword = "Admin@123";
let h6 = document.getElementById("h6");
let mybtn = document.getElementById("mybtn");

mybtn.onclick = function(){
let mypasswrd = document.getElementById("mypasswrd").value; 
while(mypasswrd !== correctPassword){
    h6.textContent = "enter the correct password";


}
h6.textContent = `access granted!`;
}*/


function submit(){
    
}