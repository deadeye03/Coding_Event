let search =document.getElementById('cl');
console.log(search)
let color=function(e){
   this.style.borderColor='green'
}
let blackcolor=function(e){
    this.style.borderColor='black'
}
search.addEventListener('mouseover',color)
search.addEventListener('mouseout',blackcolor)
// let images=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOpMBTgrPtQuNSYqIzPVAEJgJbF7tWmT1LhnCrtAkFbe-_qgRXBj-25gZ0yuR_3sL6iNE&usqp=CAU" ]
let ContentBox=document.getElementById('content-container')
let url=" https://kontests.net/api/v1/all"
let response=fetch(url)
response.then((v)=>{
    return v.json();
}).then((contest)=>{
    // console.log(v);
    inhtml='';
    for(items in contest){
        console.log(contest[items])
        inhtml+=`
        <div class="content">
        <img src="https://media.istockphoto.com/id/1500238408/photo/program-code-development-icon-on-a-digital-lcd-display-with-reflection.jpg?s=1024x1024&w=is&k=20&c=9k0ISvEy4At1nzoYrDP-pwOyN5qyvOWf_MruUHANUKc=" class="img-fit">
        
       <h5 class=card-title> ${contest[items].name}</h5>
        <p1 class="status"> Status ${contest[items].status}</p1>
        <div><p1 class="status"> Site :- ${contest[items].site}</p1></div>

        <div class="content-text">Start time : ${contest[items].start_time}</div>
        <div class="content-text red">End time : ${contest[items].start_time}</div>
        <button><a href="${contest[items].url}"> visit Site</a></button>
        
        </div>
        `

    }
    ContentBox.innerHTML=inhtml;


}).catch((error)=>{
    console.log("you got this error" +error);
})