var main=document.querySelector("#main");
var arr=[
    {name:"Kunal",profession:"Developer",image:"https://images.unsplash.com/photo-1625595234473-c00c86c73353?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",status:"Stranger"},
    {name:"Ranjeet",profession:"Designer",image:"https://images.unsplash.com/photo-1625062422116-7f4470eadc95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",status:"Stranger"},
    {name:"Niraj",profession:"Doctor",image:"https://images.unsplash.com/photo-1629111481401-2850b49a64e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",status:"Stranger"}
];
function printcards() {
    var clutter="";
arr.forEach(function(val, index){
    clutter +=` <div id="main">
    <div id="card">
        <div id="photu">
            <img src="${val.image}" alt="">
        </div>
        <h3>${val.name}</h3>
        <h5>${val.profession}</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur at excepturi, iure illum temporibus obcaecati laborum! Officiis facere, repellendus nobis odit dolor reprehenderit.</p>
        <h4>${val.status}</h4>
        <button id="${index}">Add friend</button>
    </div>
</div>`
});
document.querySelector("#main").innerHTML=clutter;
}
printcards();
document.querySelector("#main").addEventListener("click",function(dets) {
    if (arr[dets.target.id].status==="Stranger") {
        arr[dets.target.id].status="Friends";
        
    }else{
        arr[dets.target.id].status="Stranger"; 

    }
  
  printcards();
})
