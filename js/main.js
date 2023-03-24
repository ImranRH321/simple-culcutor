// generate_button

function randomNumber() {
  const random = Math.round(Math.random() * 10000);
  const string = random + "";
  if (string.length === 4) {
    // console.log("not 4 digit value ", random);
    return random;
  } else {
    return randomNumber();
  }

  //     return random;
}

document
  .getElementById("generate_button")
  .addEventListener("click", function () {
    const pin = randomNumber();
    const input = document.getElementById("inputFliedOutput");
    input.value = pin;
  });

//   click event

document
  .getElementById("culcutorId")
  .addEventListener("click", function (event) {
    const clickNumber = event.target.innerText;
    const displayOutputText = document.getElementById("display_output_input");
    const newValue =  displayOutputText.value + clickNumber ;

    if (isNaN(clickNumber)) {
      //  not a number
      if(clickNumber=="C"){
        // console.log(clickNumber); 
        displayOutputText.value = "";

      } 
      if(clickNumber==="<"){
       const rightArr = (displayOutputText.value)
       const sp = rightArr.split("")
       sp.pop()    ;
       const jn = sp.join("")
      //  console.log(rightArr); 
      //  console.log(sp); 
      //  console.log(jn);
       displayOutputText.value = jn;
      }
    } else {
      // number 
    

      displayOutputText.value = newValue;
    }
  });

  // veryfy pin 
  document.getElementById("submit_button").addEventListener("click",function(){

    // generator pin 
    const randomPinText = document.getElementById("inputFliedOutput")
    const randomPin = randomPinText.value;
    // console.log('random', randomPin); 
 
  //  typeInputDisplay 
  const typeInputText = document.getElementById("display_output_input")
  const typeInputPin = typeInputText.value;
  // console.log('typeInputPin', typeInputPin);

  // success ms 
  const success = document.getElementById('success')
  const faliar = document.getElementById('missPinError')

  if(randomPin===typeInputPin){
    alert('successfuly')
     success.style.display = "block";
     faliar.style.display = "none";
  }else{
    faliar.style.display = "block";
    success.style.display = "none";
  }
   

  })