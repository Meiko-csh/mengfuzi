 ajax({
        url:"http://127.0.0.1:5500/html/header.html",
        type:"get",
    })
    //ES6
    .then(res=>{
        document.getElementById("header").innerHTML=res;
        
})