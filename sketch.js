//Commands to pull from style.css
//By using querySelector it allows for js to return the first element within the document that matches the specified querySelector this instance being .topic
const topicText = document.querySelector(".topic"),
//Variable to pull from .button in style.css
textButton = document.querySelector("button");

//funtion for the random quote
function randomTopic(){
  //using command fetch allows to pull data from the API link and then parsing the data from text format to javascript object
    fetch("https://www.boredapi.com/api/activity").then(res => res.json()).then(result =>{
      //console was used to determine what answer to display from the API
      //console.log(result);
      topicText.innerText = result.activity;
    });
}
//Used to activate button created in style.css
textButton.addEventListener("click", randomTopic);
