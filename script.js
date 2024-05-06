const hrs = document.getElementById("hrs")
const min = document.getElementById("min")
const seg = document.getElementById("seg")

const date = document.getElementById("day")
const mes = document.getElementById("mes")
const ano = document.getElementById("ano")


setInterval(() =>{
    let currentTime = new Date();
    hrs.innerHTML =
        (currentTime.getHours() < 10 ? "0" : "")
        + currentTime.getHours();
    min.innerHTML =
        (currentTime.getMinutes() < 10 ? "0" : "")
        + currentTime.getMinutes();
    seg.innerHTML =
        (currentTime.getSeconds() < 10 ? "0" : "")
        + currentTime.getSeconds();
    
    day.innerHTML =
        (currentTime.getDate() < 10 ? "0" : "")
        + currentTime.getDate() + " /";

    mes.innerHTML = 
        (currentTime.getMonth() +1 < 10 ? "0" : "")
        + (currentTime.getMonth() + 1) + " /";
    
    ano.innerHTML =
        (currentTime.getFullYear() < 10? "0" : "")
        + currentTime.getFullYear();
    
}, 1000);