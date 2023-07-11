let hyxa=[1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
let color=[];
for(let i=0;i<6;i++){
color.push(hyxa[Math.floor(Math.random() *hyxa.length)]);
}
let vcolor=`#${color.join("")}`;
// document.body.append(vcolor);
// document.body.style.backgroundColor=vcolor;
let section=document.querySelector(".three");
let spans=document.querySelectorAll(".progress span");

window.onscroll=function(){
    if(window.scrollY>=section.offsetTop-200){
        spans.forEach((span)=>{
            span.style.width=span.dataset.width; 
        })
    }
}