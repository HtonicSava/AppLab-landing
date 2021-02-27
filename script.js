
// let payItem = document.querySelectorAll('.payItem')
// let link = document.querySelector('.pay__link')
// let payItems = document.querySelector('.pay__items')

// console.log(payItem)
// payItems.onmouseover = function (event) {
//     let target = event.target

//     if (target.classList == 'payItem') {
//         console.log(target)
//     }
// }

// // function addClass() {
// //     console.log('check')
// //     console.log(link.classList)
// //     link.classList.add('active')
// //     console.log(link.classList)
// // }

let title__button = document.querySelectorAll('.title__button')
let qtext = document.querySelectorAll('.qtext')

title__button.forEach(e => {
    e.addEventListener("click", addClass)
});

function addClass(event) {
    let target = event.target
    console.log('work')
    if (target.innerHTML == '+') {

        for (let i = 0; i < qtext.length; i++) {
            if (target === title__button[i]) {
                qtext[i].classList.add('qtext__active')
            }
        }
        target.innerHTML = '-'
    } else {

        for (let i = 0; i < qtext.length; i++) {
            if (target === title__button[i]) {
                qtext[i].classList.remove('qtext__active')
            }
        }
        target.innerHTML = '+'
    }

}