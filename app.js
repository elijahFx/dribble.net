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
const whiteSpace = document.querySelector(".white-space");
const h4s = document.querySelectorAll("h4")




let itHas = true;

document.querySelector("#searchbar").oninput = function(){
    let val = this.value.trim().toLowerCase()
    console.log(val)
    let articlesThems = document.querySelectorAll("article")
    if(val != ""){
        articlesThems.forEach(art => {
            
            let topicName = art.children[0];
            if(topicName.innerText.toLowerCase().indexOf(val.toLowerCase()) == -1){
                art.classList.add("hide")
               // whiteSpace.style.display = `block`
                
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
       articlesThems.forEach(art => {
        if(!art.classList.contains("hide")){whiteSpace.style.display = `none`
    itHas = false}
else{itHas = true}})
    if(itHas){
        whiteSpace.style.display = `block`
    }
    
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
    articleCreator.style.display = `block`
    setTimeout(() => {
        articleCreator.style.transform = `translate3d(0, 0, 0)`;
    }, 70)
    document.body.style.overflow = 'hidden'
    
    
    
     
     
})

crestBtn.addEventListener("click", () => {
    grayMatter.style.display = `none`;
    articleCreator.style.transform = `translate3d(90vw, 0, 0)`;
    document.body.style.overflow = ''

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

let articleCounter = 0;
let allTheArticles = [];

function writeNewArticle(){
articleCreator.style.display = "flex"
articleCounter++;


 


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
        
    let  articleObj = {
        topic: topic,
        date: dateConvertable,
        mainText: text,
        author: author
    }

    allTheArticles.push(articleObj);

    let topicCreated = document.createElement("h4");
    topicCreated.classList.add("topic");
    topicCreated.innerText = topic;
    let article = document.createElement("article");
    let main = document.createElement("main")
    if(!topicCreator.value == "" && !authorCreator.value == "" && !textCreator.value == "" && !dateCreator.value == 0){
    article.append(topicCreated)
    article.append(dateCreated)
    article.append(authorCreated)
    main.append(textCreated)
    article.append(main)

 localStorage.setItem("allArticles", JSON.stringify(allTheArticles))

    
    mainBody.prepend(article)
    grayMatter.style.display = `none`;
    articleCreator.style.transform = `translate3d(90vw, 0, 0)`;
    document.body.style.overflow = ''
    connectLeftToRightTopic()
    clearArticleCreator()
    mouseOver()
    
    
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


function mouseOver(){
    const articles = document.querySelectorAll("article")
    articles.forEach(article => {
        article.addEventListener("mouseenter", () => {
            let texts = Array.from(article.querySelectorAll(".text"))
            if(texts.length === 0){return} else {
            let penElement = document.createElement("div")
            article.appendChild(penElement)
            penElement.classList.add("pen")
            
            
            penElement.addEventListener("click", () => {
                penElement.remove()
                let textElements = Array.from(article.querySelectorAll(".text"))
                textElements.reverse().forEach(textElement => {
                    let submitElement = document.createElement("div")
                    article.appendChild(submitElement)
                    submitElement.classList.add("submitEl")

                    let main = article.querySelector("main")
                    let height = getComputedStyle(textElement).height
                    let textValue = textElement.innerText
                    let textArea = document.createElement("textarea")
                    textArea.classList.add("areaEd")
                    textArea.value = textValue
                    textElement.remove()
                    if(textElement.nextSibling !== "img"){
                    main.prepend(textArea)
                    textArea.style.height = height
                    } else {
                    main.prepend(textArea)
                    textArea.style.height = height
                }

                submitElement.addEventListener("click", () => {
                    let areaHeight = getComputedStyle(textArea).height
                    let textEl = document.createElement("div")
                    textEl.classList.add("text")
                    textEl.innerText = textArea.value
                    main.appendChild(textEl)
                    textArea.remove()
                    textEl.style.height = areaHeight
                    submitElement.remove()
                })

                textArea.addEventListener("input", () => {
                    offsetTextArea(textArea)
                })
              
                textArea.addEventListener("focusin", () => {
                    textArea.style.border = `1px solid lightblue`

                    textArea.addEventListener("focusout", () => {
                        textArea.style.border = `0.01px solid transperent`
                    })
                })               
                
               
                

                })
                   
            })
        

        article.addEventListener("mouseleave", () => {
            penElement.remove()
        })

    }
    })

    })
    

    
}

function offsetTextArea(textarea){
    if(textarea.scrollHeight >= textarea.offsetHeight){
        textarea.style.height = textarea.scrollHeight + "px"
    } else if(textarea.scrollHeight <= textarea.offsetHeight){
        textarea.style.height = textarea.scrollHeight + "px"
    } else if(textarea.offsetHeight == 18 && textarea.offsetWidth == 0){
        
        textarea.remove()
    }
    console.log(`scrollHeight${textarea.clientHeight} offsetHeight: ${textarea.offsetHeight}`)
}



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



window.addEventListener("DOMContentLoaded", () => {
    let allArticles = localStorage.getItem("allArticles")
    let allArticlesNew = JSON.parse(allArticles);
    if(allArticlesNew == null){ mouseOver()
        connectLeftToRightTopic()} else {
    let articlesArray = Array.from(allArticlesNew);
    articlesArray.forEach(article => {
        let articleContainer = document.createElement("article");
        let topic = document.createElement("h4")
        let date = document.createElement("p")
        let author = document.createElement("p")
        let text = document.createElement("div")
        let main = document.createElement("main")
        topic.innerText = article.topic;
        date.innerText = article.date;
        author.innerText = article.author;
        text.innerText = article.mainText;
        text.classList.add("text");
        topic.classList.add("topic");
        author.classList.add("author");
        date.classList.add("date");
        articleContainer.appendChild(topic);
        articleContainer.appendChild(date);
        articleContainer.appendChild(author);
        main.appendChild(text);
        articleContainer.appendChild(main)
        mainBody.prepend(articleContainer)
    }) 

    connectLeftToRightTopic()
    mouseOver()}
    

    ///YYYYYYYYYYYYYYYYYYYYYYYYYY
})


// Координаты

const ball = document.querySelector(".ball")
const field = document.querySelector(".field")



field.addEventListener("click", e => {
  let fieldCoords = field.getBoundingClientRect();

  let xPosition = e.clientX - fieldCoords.left - ball.offsetWidth / 2;
  let yPosition = e.clientY - fieldCoords.top - ball.offsetHeight / 2;

  if(xPosition <= 0) {
    xPosition = 0;
  }
  if(yPosition <= 0){
    yPosition = 0;
  }
  if(xPosition + ball.clientWidth > field.clientWidth){
    xPosition = field.clientWidth - ball.clientWidth;
  }
  if(yPosition + ball.clientHeight > field.clientHeight){
    yPosition = field.clientHeight - ball.clientHeight
  }

  ball.style.top = `${yPosition}px`;
  ball.style.left = `${xPosition}px`;

  console.log(xPosition, yPosition, fieldCoords)
})