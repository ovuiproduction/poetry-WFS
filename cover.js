let arr =[
    "./Assests/images/alone'.jpeg",
    "./Assests/images/oldbookandfeather.avif",
    "./Assests/images/rose.jpg",
    "./Assests/images/moon.jpg",
    "./Assests/images/rainfall.avif",
    "./Assests/images/aai.png",
    "./Assests/images/indianculture1.jpg",
    "./Assests/images/radhakrishna.jpg",
    "./Assests/images/bhagatsingh-rajguru-sukhsdev.jpg",
    "./Assests/images/history-worrier-1.png",
    "./Assests/images/warrior-women-cover.png",
    "./Assests/images/farmersucide.jpg"
]


function changeBI(){

    const bg = arr[Math.floor(Math.random()*12)];

    document.getElementById("poemtypecarsoul").style.backgroundImage = `url(${bg})` ;
   
}

setInterval(changeBI,2000);