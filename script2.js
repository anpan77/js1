let lists=document.getElementsByClassName("pull-down-list")
console.log(lists)
const pullDownButton=document.getElementById("lists")
console.log(pullDownButton);
$('h1').mouseover(function() {
    console.log('マウスオーバーしました！');
});
pullDownButton.addEventListener("mouseover",function(){pullDownButton.setAttribute("style","background-color:blue;")})