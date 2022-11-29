
var btn = document.querySelector('#btn');

btn.addEventListener('click', function(){
    var div = document.querySelector("#containernew");

    if(div.style.display === "none"){
        div.style.display = 'block';
    } else {
        div.style.display = 'none';
    }
});