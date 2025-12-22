  console.log("hellow")

const inputText  = document.getElementById('inputText');

inputText.addEventListener('input',(event)=>{
    let text = event.target.value;
    let words = text.split(' ');
    let wordCount = words.filter(word => word !== '').length;
    console.log('Word Count:', wordCount);
    // let count =0;
    // if((text.change)){
    //     count++;
    //     console.log(count);
    // }

})
