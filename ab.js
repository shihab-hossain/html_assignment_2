 let prev = ""
 let curr ="btncl"

 const loadDat =()=>{
    const btn5=document.getElementById("btncl")
    btn5.classList.add("abc")
    curr = "btncl"
    if(prev){
        document.getElementById(prev).classList.remove("abc");
    }
    prev ="btncl"
 fetch(" https://openapi.programming-hero.com/api/videos/category/1000")
.then(res=>res.json())
.then(data=>display(data.data))
 }
loadDat();

const formatSeconds=(seconds)=> {
    const hours=parseInt(seconds/3600);
    const minutes=parseInt((seconds%3600)/60);
    const remainingSeconds=seconds%60;

    return (hours ==0 && minutes ==0 && remainingSeconds ==0)?"": `${hours} hours ${minutes} minutes ${remainingSeconds} seconds`;
  }

const display=(data)=>{
    const itmContainer=document.getElementById("contain-container");

    itmContainer.innerHTML=""
    if(data.length>0){
        data.forEach(element => {
            console.log(element.others.posted_date);
            const card =document.createElement("div");
            card.innerHTML=`
    
            <div class="molla">
            <img class="box-img" src=${element.thumbnail} alt="">
            <p class="molla1">${formatSeconds(element.others.posted_date)}</p>
            </div>
    
            <div class="box-1">
    
            <div class="box-2">
            <img class="box-img2" src=${element.authors[0].profile_picture} alt="">
            </div>
    
            <div class="box-3">
            
            <p class="big">${element.title}</p>
            <small class="smal">${element.authors[0].profile_name}</small>
            ${element.authors[0].verified?'<img src="/PHero-Tube-main/fi_10629607.jpg" alt="">':""}
            <br>
            <small class="smal">${element.others.views} views</small>
            
            </div>
    
            </div>
            `;
            itmContainer.appendChild(card);
        });
    }
    else{
        const card1 =document.createElement("div");
        card1.classList.add("box");
        card1.innerHTML=`
        <img src="/PHero-Tube-main/Icon.png" alt="">
        <h1>Oops!! Sorry, There is no <br>
        content here</h1>
        `;
        itmContainer.appendChild(card1);
    }

}

const loadDat1=()=>{
    const btn5=document.getElementById("btncl1")
    btn5.classList.add("abc")
    curr = "btncl1"
    document.getElementById(prev).classList.remove("abc");
    prev ="btncl1"

fetch(" https://openapi.programming-hero.com/api/videos/category/1001")
.then(res=>res.json())
.then(data=>display(data.data))
}
const loadDat2=()=>{
    const btn5=document.getElementById("btncl2")
    btn5.classList.add("abc")
    curr = "btncl2"
    document.getElementById(prev).classList.remove("abc");
    prev ="btncl2"

fetch(" https://openapi.programming-hero.com/api/videos/category/1003")
.then(res=>res.json())
.then(data=>display(data.data))
}
const loadDat3=()=>{
    const btn5=document.getElementById("btncl3")
    btn5.classList.add("abc")
    curr = "btncl3"
    document.getElementById(prev).classList.remove("abc");
    prev ="btncl3"

fetch(" https://openapi.programming-hero.com/api/videos/category/1005")
.then(res=>res.json())
.then(data=>display(data.data))
}

const sortfun=()=>{
fetch(" https://openapi.programming-hero.com/api/videos/category/1000")
.then(res=>res.json())
.then(data=>display2(data.data))
}
 const display2=(data)=>{
    // var news=[] ;
    //   data.forEach(element => {
    //      const ne =parseFloat(element.others.views);
    //      news.push(ne);
    //     // console.log(element.others.views);
    //   });
    data.sort((a, b) => parseFloat(b.others.views) - parseFloat(a.others.views));
    display(data);
 }



