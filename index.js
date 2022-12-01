const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password1=document.getElementById("txt1")
let password2=document.getElementById("txt2")

function generatePassword(){
    let str1=""
    let str2=""
    for(let i=0;i<15;i++){
        let i1=Math.floor(Math.random()*characters.length)
        let i2=Math.floor(Math.random()*characters.length)
        str1+=characters[i1]
        str2+=characters[i2]
    }
    password1.textContent=str1
    password2.textContent=str2
    console.log(password1.textContent)
    console.log(password2.textContent)
}
/*function generatePassword(){
    password1.textContent=randomPassword()
    password2.textContent=randomPassword()
}*/




