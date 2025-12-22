  console.log("hellow")

const toggle = document.getElementById('toggle');
const toggleLabel = document.querySelector('.toggle-label');
const label = document.querySelector('label');
toggle.addEventListener('click',()=>{
    if(toggle.checked){
    document.body.style.backgroundColor="black";
    label.style.backgroundColor="purple";

    }
    else{
    document.body.style.backgroundColor="rgb(179, 173, 173)";
    label.style.backgroundColor="grey";
    }
   

});
