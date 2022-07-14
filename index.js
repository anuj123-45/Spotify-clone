// intialize the variable

let songIndex=0;
let audioElement = new Audio('songs/1.mp3');
let masterplay=document.getElementById('masterplay');
let myProgressbar = document.getElementById('myprogressbar');
let gif=document.getElementById('gif');




let songs=[
{songName:"abc",filePath:"song/1.mp3",coverPath:"covers/1.jpg"},
{songName:"abc",filePath:"song/1.mp3",coverPath:"covers/1.jpg"},
{songName:"abc",filePath:"song/1.mp3",coverPath:"covers/1.jpg"},
{songName:"abc",filePath:"song/1.mp3",coverPath:"covers/1.jpg"},
{songName:"abc",filePath:"song/1.mp3",coverPath:"covers/1.jpg"},
{songName:"abc",filePath:"song/1.mp3",coverPath:"covers/1.jpg"},
{songName:"abc",filePath:"song/1.mp3",coverPath:"covers/1.jpg"},
{songName:"abc",filePath:"song/1.mp3",coverPath:"covers/1.jpg"},
];


// handle play pause click

masterplay.addEventListener('click',()=>{
if (audioElement.paused || audioElement.currentTime<=0) {
    audioElement.play();
    masterplay.classList.remove("fa-play-circle");
    masterplay.classList.add('fa-pause-circle');  
    gif.style.opacity=1;

}

else {

audioElement.pause();
masterplay.classList.remove("fa-pause-circle");
masterplay.classList.add('fa-play-circle'); 
gif.style.opacity=0; 

}

})


audioElement.addEventListener('timeupdate',()=>{
// update seekbar
progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
console.log(progress);
myProgressbar.value=progress;


})


myProgressbar.addEventListener('change',()=>{
    audioElement.currentTime=parseInt((myProgressbar.value*audioElement.duration)/100);
})