var primeTxt = document.getElementById("prime-msg")
var scriptTitle = document.getElementById("card-title")
var scriptTxt = document.getElementById("card-text")
var cardImg = document.getElementById("card-img")
var card = document.getElementById("card")
var vowelsArray = ["a","e","i","o","u"]
var keysArray = ["ai","enter","imes","ober","ufat"]
var btnScript = false
var btnDecript = false


primeTxt.addEventListener('input', autoResize)

window.addEventListener("load", changeview)
window.addEventListener("resize", changeview)

function changeview(){
  if (this.innerWidth >= 1024){
    cardImg.src = "./static/assets/card-img.png"
    card.style = "padding: 25% 1rem"
  }
  else{
    cardImg.src = ""
    card.style = "padding: 1rem"
    
  }
}

function autoResize() {
  this.style.height = 'auto';
  this.style.height = this.scrollHeight + 'px';
  btnScript = true
  btnDecript = true

  if(window.innerWidth >= 1024) cardImg.src = "./static/assets/card-img.png"
  else cardImg.src =""
  scriptTitle.innerHTML = "Ningun mensaje fue encontrado"
  scriptTxt.innerHTML = "ingresa el texto que desees encriptar o desencriptar";  
  scriptTxt.style = "text-align: center!important;"

}

function onSubmit(){
  
  if(scriptedContent != ""){
    if(btnScript){
      cardImg.src = ""
      card.style = "padding: 1rem"
      scriptTxt.style = "text-align: left!important;"
      var { scriptedContent, scriptResult } = strfyTxtArea()
      scriptTitle.innerHTML = "Mensaje encriptado"
      scriptTxt.innerHTML = scriptResult; 
      btnScript = true
      btnDecript = false
    }
    else alert ("Texto ya encriptado, desencripte y copie el resultado")
  
  }
  else alert("Ingrese texto para encriptar/desencriptar") 
}

function strfyTxtArea() {
  var scriptResult = ""
  var scriptedContent = primeTxt.value
  for (char of scriptedContent) {
    
    if (char == "a") {
      scriptResult += "ai"
    }
    else if (char == "e") {
      scriptResult += "enter"
    }
    else if (char == "i") {
      scriptResult += "imes"
    }
    else if (char == "o") {
      scriptResult += "ober"
    }
    else if (char == "u") {
      scriptResult += "ufat"
    }
    else {
      scriptResult += char
    }
  }
  return { scriptedContent, scriptResult }
}

function deCript(){
  var scriptedContent = primeTxt.value

  if(scriptedContent == ""){
    alert("Ingrese un mensaje primero")
  }
  else {
    if(btnDecript){
      cardImg.src = ""
      card.style = "padding: 1rem"
      scriptTxt.style = "text-align: left!important;"


      var strgdTxt = ""
      var strgdItem = []
  
      for (char of scriptedContent){
        strgdTxt+=char
      }
  
      var array = strgdTxt.split(' ')
  
      strgdTxt = ""
  
      for(let i=0; i<array.length; i++){
        let item = array[i]

        for(let x=0; x<vowelsArray.length; x++){
          while(item.search(keysArray[x]) != -1){
            item = item.replace(keysArray[x], vowelsArray[x])
          }
        }
        array[i] = item
      }    
  
      strgdTxt = array.join(" ")
  
      scriptTitle.innerHTML = "Mensaje desencriptado"
      scriptTxt.innerHTML = strgdTxt; 
      btnScript = false
      btnDecript = true
    }

    else alert("Para desencriptar, copie el mensaje")

  }

}

function copyContent(){
  var scriptedContent = primeTxt.value

  if(scriptedContent == ""){
    alert("Ingrese un mensaje primero")
  }
  else {
    primeTxt.value  = scriptTxt.innerHTML
    primeTxt.style.height = 'auto';
    primeTxt.style.height = primeTxt.scrollHeight + 'px';
    if(!btnDecript){
      btnScript = false
      btnDecript = true
    }
    else if (!btnScript){
      btnDecript = false
      btnScript = true
    }
  }

}