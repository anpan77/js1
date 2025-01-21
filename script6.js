
const pullDownButton = document.getElementById("lists")
const pullDownParents = document.getElementById("pull-down")
pullDownButton.addEventListener("click",function(){
    if(pullDownParents.getAttribute("style")=="display:block;"){
        pullDownParents.removeAttribute("style","display:block;")
        console.log("非表示")
    }else{
        pullDownParents.setAttribute("style","display:block;")
        console.log("表示")
    }
})

