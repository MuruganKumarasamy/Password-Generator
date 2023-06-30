
const GenerateBtn = document.querySelector(".btn1");
const copyBtn = document.querySelector(".btn2");


GenerateBtn.addEventListener("click",() => {
    let password = "qwertyuiopasdfghjklzxcvbnm123456789!@#$%^&*()QWERTYUIOPASDFGHJKLZXCVBNM,.:;<>{}[]|?~+=-_";
    pass = '';
   for(let i=0; i < 10; i++){
       let randomNumber = Math.floor(Math.random() * password.length);
       pass += password.substring(randomNumber, randomNumber + 1);
   }
   
   document.querySelector(".pass").value = pass;
})

copyBtn.addEventListener("click", () =>{
    let copyText =  document.querySelector(".pass");
    copyText.select();
    document.execCommand('copy');
})