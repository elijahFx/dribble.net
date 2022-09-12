const topicCreator = document.getElementById("topicCreator")
const dateCreator = document.getElementById("dateCreator")
const authorCreator = document.getElementById("authorCreator")
const textCreator = document.getElementById("textCreator")
const submitBtn = document.getElementById("submitBtn")
const mainBody = document.querySelector(".main")
const side = document.querySelector(".side")
const side2 = document.querySelector(".side2")
const logo = document.querySelector(".logo");
const navigationContainer = document.querySelector(".navigation-container");
const header = document.querySelector('.header');
const secret = document.querySelector(".secret");
const searchBar = document.querySelector("#searchbar");

document.querySelector("#searchbar").oninput = function(){
    let val = this.value.trim().toLowerCase()
    console.log(val)
    let articlesThems = document.querySelectorAll("article")
    let whiteSpace = document.querySelector(".white-space")
    if(val != ""){
        articlesThems.forEach(art => {
            
            let topicName = art.children[0];
            if(topicName.innerText.toLowerCase().indexOf(val.toLowerCase()) == -1){
                art.classList.add("hide")
                whiteSpace.style.display = `block`
                
            } 
            else {
                art.classList.remove("hide")
                whiteSpace.style.display = `none`
                
            }

        })}
        else if(val == "машина"){
            whiteSpace.style.display = `none`
            secret.style.display = `block`
        
        
        } else {
            articlesThems.forEach(art => {
                art.classList.remove("hide")
                whiteSpace.style.display = `none`
            }
        )}
       
        
}



// Старая и более человеческая идея для поиска
// topicName.innerText.search(val) == -1 




let i = 0;
let txt = "DRIBBLE.NET";
let speed = 100;
let counter = 0;



function typeWriter(){
    if(txt.length > i){
   logo.innerHTML += txt.charAt(i);
   i++
   setTimeout(typeWriter, speed)
   
    }
    
    
}

typeWriter()


const articleBtn = document.getElementById("createArticleBtn");
const articleCreator = document.querySelector(".articleCreator");
const crestBtn = document.querySelector(".crestBtn");
const grayMatter = document.querySelector(".graymatter")

articleBtn.addEventListener("click", () => {
    grayMatter.style.display = `block`;
     articleCreator.style.transform = `translate3d(0, 0, 0)`;
     
     
})

crestBtn.addEventListener("click", () => {
    grayMatter.style.display = `none`;
    articleCreator.style.transform = `translate3d(90vw, 0, 0)`;
    
    clearRed()
})





topicCreator.addEventListener("focus", () => {
    topicCreator.style.border = `none`
})
authorCreator.addEventListener("focus", () => {
    authorCreator.style.border = `none`
})
dateCreator.addEventListener("focus", () => {
    dateCreator.style.border = `none`
})
textCreator.addEventListener("focus", () => {
    textCreator.style.border = `none`
})


submitBtn.addEventListener("click", writeNewArticle)


function checkCreators(){
    if(topicCreator.value == ""){
                topicCreator.style.border = `2px solid red`;
        
        
        
    } 
    if(authorCreator.value == ""){
               authorCreator.style.border = `2px solid red`
        
    }
    if(textCreator.value == ""){
               textCreator.style.border = `2px solid red`
        
    }
    if(dateCreator.value == 0){
        dateCreator.style.border = `2px solid red`
    }
    
}



function writeNewArticle(){
    
    let topic = topicCreator.value;
    let date = dateCreator.value;
    JSON.stringify(date)
    let dateConvertable = date.replace(/-/gi,".")
    
    
    let author = authorCreator.value;
    let text = textCreator.value;

    let dateCreated = document.createElement("p");
    dateCreated.classList.add("date")
    dateCreated.innerHTML = dateConvertable;
    let authorCreated = document.createElement("p");
    authorCreated.classList.add("author");
    authorCreated.innerText = author;


    let textCreated = document.createElement("p");
    textCreated.classList.add("text");
    textCreated.innerText = text;
        
    


    let topicCreated = document.createElement("h4");
    topicCreated.classList.add("topic");
    topicCreated.innerText = topic;
    let article = document.createElement("article");
    if(!topicCreator.value == "" && !authorCreator.value == "" && !textCreator.value == "" && !dateCreator.value == 0){
    article.append(topicCreated)
    article.append(dateCreated)
    article.append(authorCreated)
    article.append(textCreated)
    localStorage.setItem("article", article)
    console.log(article)
    mainBody.prepend(article)
    grayMatter.style.display = `none`;
    articleCreator.style.transform = `translate3d(90vw, 0, 0)`;
    connectLeftToRightTopic()
    clearArticleCreator();
    
} else {
        checkCreators()
        alert("Заполните все необходимые поля для опубликования!");
        
    }

}


function clearArticleCreator(){
    topicCreator.value = "";
    authorCreator.value = "";
    textCreator.value = "";
    dateCreator.value = null;
    topicCreator.style.border = `none`;
    dateCreator.style.border = `none`;
    textCreator.style.border = `none`;
    authorCreator.style.border = `none`;
}

function clearRed(){
    topicCreator.style.border = `none`;
    dateCreator.style.border = `none`;
    textCreator.style.border = `none`;
    authorCreator.style.border = `none`;
}

const topicsTitles = document.getElementsByClassName("topic");
const listBox = document.querySelector(".listBox")


function connectLeftToRightTopic(){
    counter+=1;
    if(counter >= 2){
        let newTopicName = document.getElementsByClassName("topic")[0];
        let leftTopicNew = document.createElement("li");
        leftTopicNew.innerText = newTopicName.innerHTML;
        leftTopicNew.classList.add("listItem");
        listBox.prepend(leftTopicNew);
        leftTopicNew.addEventListener("click", () => {
            newTopicName.scrollIntoView({behavior: "smooth", block: 'center'});
            
        }) 
    }
    else {
    Array.from(topicsTitles).forEach(function(topic) {
        let leftTopic = document.createElement("li");
                leftTopic.innerText == topic.innerHTML
 
        
            leftTopic.innerText = topic.innerHTML;
        leftTopic.classList.add("listItem");
        
        leftTopic.addEventListener("click", () => {
            topic.scrollIntoView({behavior: "smooth", block: 'center'});
            
        })
        listBox.appendChild(leftTopic);
})}}


const musicContainer = document.querySelector(".music-container")
const playBtn = document.querySelector("#play")
const prevBtn = document.querySelector("#prev")
const nextBtn = document.querySelector("#next")
const audio = document.querySelector("#audio")
const progress = document.querySelector(".progress")
const progressContainer = document.querySelector(".progress-container")
const title = document.querySelector("#title")
const cover = document.querySelector("#cover")


const songs = ['Linkin Park - Numb', 'Snake Eater', 'coldrain - Bloody Power Fame', 'The Mandalorian Theme']

let songIndex = 0

loadSong(songs[songIndex])

function loadSong(song){
  title.innerText = song;
  audio.src = `./${song}.mp3`
  cover.src = `./${song}.jpg`
}

playBtn.addEventListener("click", () => {
    const isPlaying = musicContainer.classList.contains("play")

    if(isPlaying){
        pauseSong()}
        else {
            playSong()
        }
    }
)


function playSong(){
musicContainer.classList.add("play")
playBtn.querySelector("i.fas").classList.remove("fa-play")
playBtn.querySelector("i.fas").classList.add("fa-pause")

audio.play()
}

function pauseSong(){
    musicContainer.classList.remove("play")
    playBtn.querySelector("i.fas").classList.remove("fa-pause")
    playBtn.querySelector("i.fas").classList.add("fa-play")

    audio.pause()
}

function setProgress(e){
   const width = this.clientWidth
   const clickX = e.offsetX
   const duration = audio.duration

   audio.currentTime = (clickX / width) * duration
}

function prevSong(){
 songIndex--

 if(songIndex < 0){
    songIndex = songs.length - 1
     }

     loadSong(songs[songIndex])
     playSong()
}

function updateProgress(e){
 const { duration, currentTime } = e.srcElement
 const progressPercent = (currentTime / duration) * 100
 progress.style.width = `${progressPercent}%`
}

function nextSong(){
    songIndex++
    if(songIndex > songs.length - 1){
    songIndex = 0;
    }
    loadSong(songs[songIndex])
    playSong()
}


prevBtn.addEventListener("click", prevSong)
nextBtn.addEventListener("click", nextSong)

audio.addEventListener("timeupdate", updateProgress)
progressContainer.addEventListener("click", setProgress)
audio.addEventListener("ended", nextSong)
