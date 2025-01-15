const element=document.getElementById("pull-down");
element.addEventListener("mouseover",function(){
element.style.backgroundcolor="yellow";});
document.getElementById("current-list")
.addEventListener("mouseover",
function(){
    this.style.color = 'blue';
});
document.getElementById("current-list")
.addEventListener("mouseout",
function(){
    this.style.color = 'orange';
});
document.getElementById("current-list")
.addEventListener("click",
function(){
    this.style.color = 'pink';
});
lists.addEventListener('mouseover',function(){
    lists.setAttribute("style","background-color:blue;")
})
lists.addEventListener('mouseout',function(){
    lists.removeAttribute("style","buckground-color:red;")
})