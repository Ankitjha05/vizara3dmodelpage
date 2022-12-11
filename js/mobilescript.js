// let model = document.getElementById('modelview')
// let model2 = document.getElementById('modelview2')
// let model3 = document.getElementById('modelview3')

if (window.innerWidth < 600) {
    let btn1 = document.getElementById("prodbtn1")
    let btn2 = document.getElementById('prodbtn2')
    let btn3 = document.getElementById("prodbtn3")

    btn1.addEventListener('click', () => {
        model.classList.remove("hiden")
        model2.classList.add("hiden")
        model3.classList.add("hiden")
    })

    btn2.addEventListener('click', () => {
        model2.classList.remove("hiden");
        model.classList.add("hiden");
        model3.classList.add("hiden")
    })

    btn3.addEventListener('click', () => {
        model3.classList.remove("hiden");
        model.classList.add("hiden")
        model2.classList.add("hiden")
    })

}