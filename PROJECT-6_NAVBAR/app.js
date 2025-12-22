    const toggleBtn = document.querySelector('.toggle-btn');
    const Home = document.createElement('a');
    const About = document.createElement('a');
    const Project = document.createElement('a');
    const Contact = document.createElement('a');
    const div=document.createElement('div');

    const ctrateElement= function(m,n){
        m.href = '#';
        m.textContent = n ;
        div.appendChild(m);
        document.body.appendChild(div);
    }
 

    toggleBtn.addEventListener('click',()=>{
    
       ctrateElement(Home,"Home");
       ctrateElement(About,"About");
       ctrateElement(Project,"Project");
       ctrateElement(Contact,"Contact");
       

})
   const RemoveElement= function(){
       div.remove();
    }
   if (window.innerWidth >= 800){
        RemoveElement();
   }

    const fun = function(attribute){
    attribute.style.display='block';
    div.style.padding='10px';
    attribute.style.fontSize='30px';
    attribute.style.textDecoration='none';
    attribute.style.color='rgba(255,255,255,0.6);';
    attribute.style.fontFamily='Segoe UI, Tahoma ,Verdana';
    attribute.style.transition='0.3s';
    div.style.backgroundImage = "linear-gradient(183deg, rgba(155,57,42,1) 0%, rgba(199,122,87,1) 100%, rgba(236,240,137,1) 41%)";


    attribute.addEventListener('mouseover',()=>{
        attribute.style.color='#111';
    });
 
    

    attribute.addEventListener('mouseout',()=>{
        attribute.style.color='white';
    });

    }

    fun(Home);
    fun(About);
    fun(Project);
    fun(Contact);
