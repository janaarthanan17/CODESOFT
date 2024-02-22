/*---------------educational qualification---------------------*/

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname)
{
   for(tablink of tablinks){
      tablink.classList.remove("active-link");
   }
   for(tabcontent of tabcontents){
      tabcontent.classList.remove("active-tab");
   }
   event.currentTarget.classList.add("active-link");
   document.getElementById(tabname).classList.add("active-tab");
}


/*--------------------menu bar for mobile screen----------------------*/



var sidemenu = document.getElementById("sidemenu");
function openmenu(){
   sidemenu.style.right ="0";
}
function closemenu(){
   sidemenu.style.right ="-200px";
}



/*----------------------------for the contact form----------------------------*/




const scriptURL = 'https://script.google.com/macros/s/AKfycbwNRQcUGnAR9ZHB9k5_Ai14IqMu_kPBYDhHrLGBwsR31cxCjFbWQuF0-iK4fagldAmy/exec'
         const form = document.forms['submit-to-google-sheet']
         const msg = document.getElementById("msg")
         form.addEventListener('submit', e => {
         e.preventDefault()
         fetch(scriptURL, { method: 'POST', body: new FormData(form)})
         .then(response =>{
         msg.innerHTML = "Meggage Sent Successfully"
         setTimeout(function(){
            msg.innerHTML = ""
         },5000)
         form.reset()
         } )
         .catch(error => console.error('Error!', error.message))
         })