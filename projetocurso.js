const cursosTodos = [...document.getElementsByClassName("curso")]
const cursosa1 = [...document.getElementsByClassName("a1")]
const cursosa2 = [...document.getElementsByClassName("a2")]
const cursosa3 = [...document.getElementsByClassName("a3")]
const cursosa4 = [...document.getElementsByClassName("a4")]
const cursos = [...document.querySelectorAll(".curso")]
const cursoEspecial = document.getElementsByClassName("curso")[6]

// console.log(cursosTodos)
// console.log(cursosa1)
// console.log(cursosa2)
// console.log(cursosa3)
// console.log(cursosa4)
// console.log(cursos)
// console.log(cursoEspecial)

// cursosa2.map((el)=> {
//     el.classList.add("destaque")
// })

cursos.map((el)=>{
    el.addEventListener('click',(evt)=>{
        const el = evt.target
        el.classList.add("destaque")
        console.log(el.innerHTML + " Foi Clicado!")
    })
})