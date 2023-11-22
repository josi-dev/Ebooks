

function menu() {
    
    document.querySelectorAll("#iconMenu div")[0].classList.toggle("linhaUm")
    document.querySelectorAll("#iconMenu div")[1].classList.toggle("linhaDois")
    document.querySelectorAll("#iconMenu div")[2].classList.toggle("linhaTres")
    
    document.getElementById("menu").classList.toggle("me")
    
    
}


/* mudar painel */
/*
    let painel1 = 0
    let painel2 = 1
    let painel3 = 2
    
    

setInterval(function () {
    
    let div = [...document.querySelectorAll("#boxDivsPainel div")]
    
    div[painel1].style.opacity = "0"
    div[painel1].style.transform = "translateX(-64vh)"
    
    
    div[painel2].style.transform = "translateX(-64vh)"
    
    div[painel3].style.transform = "translateX(-64vh)"
    
    ++painel1
    ++painel2
},3000)
*/