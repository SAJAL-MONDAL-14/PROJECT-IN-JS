  console.log("hellow")

const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry.",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "ux designer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-2_np9x5l.jpg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen. Helvetica tbh craft beer pickled authentic tote bag heirloom.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-3_ipa0mj.jpg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-4_t9nxjt.jpg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan.",
  },
  {
    id: 5,
    name: "emily carter",
    job: "software engineer",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "Banh mi cornhole echo park raw denim chambray. Seitan DIY plaid beard, typewriter brunch sustainable YOLO kickstarter.",
  },
  {
    id: 6,
    name: "john doe",
    job: "project manager",
    img: "https://randomuser.me/api/portraits/men/76.jpg",
    text: "Keytar succulents fixie, kombucha narwhal chillwave cliche. Echo park flannel ramps cloud bread irony vegan drinking vinegar.",
  },
  {
    id: 7,
    name: "sarah lee",
    job: "graphic designer",
    img: "https://randomuser.me/api/portraits/women/22.jpg",
    text: "I'm baby lo-fi taxidermy mixtape enamel pin. Street art chambray subway tile, meditation farm-to-table ennui organic chia.",
  },
  {
    id: 8,
    name: "michael brown",
    job: "data analyst",
    img: "https://randomuser.me/api/portraits/men/85.jpg",
    text: "Woke letterpress vexillologist, pour-over fanny pack humblebrag marfa offal typewriter lumbersexual health goth keffiyeh.",
  },
  {
    id: 9,
    name: "natalie rogers",
    job: "content writer",
    img: "https://randomuser.me/api/portraits/women/12.jpg",
    text: "Bespoke microdosing pug lo-fi, small batch air plant woke sustainable typewriter glossier. YOLO beard pitchfork truffaut cliche.",
  },
  {
    id: 10,
    name: "daniel cooper",
    job: "app developer",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Franzen brunch freegan irony dreamcatcher. Man bun semiotics gluten-free artisan gochujang taiyaki bushwick before they sold out.",
  }
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevbtn=document.querySelector(".prev-btn");
const nextbtn=document.querySelector(".next-btn");
const randombtn=document.querySelector(".random-btn");

let currentItem=0;

window.addEventListener("DOMContentLoaded",()=>{
    const item= reviews[currentItem];
    img.src=item.img;
    author.textContent=item.name;
    job.textContent=item.job;
    info.textContent=item.text;
    
})

nextbtn.addEventListener("click",()=>{
    currentItem++;
    if(currentItem>reviews.length-1){
        currentItem=0;
    }
    const item= reviews[currentItem];
    img.src=item.img;
    author.textContent=item.name;
    job.textContent=item.job;
    info.textContent=item.text;


});
prevbtn.addEventListener("click",()=>{
    currentItem--;
    if(currentItem<0){
        currentItem=0;
    }
    const item= reviews[currentItem];
    img.src=item.img;
    author.textContent=item.name;
    job.textContent=item.job;
    info.textContent=item.text;

});


randombtn.addEventListener("click",()=>{
    const rendomNo=(Math.floor(Math.random()*reviews.length));
    const item= reviews[rendomNo];
    img.src=item.img;
    author.textContent=item.name;
    job.textContent=item.job;
    info.textContent=item.text;

})