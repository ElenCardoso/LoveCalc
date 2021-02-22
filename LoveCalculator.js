// prompt("What is your name?");
//prompt("What is your lover's name?")

function calcular() {
let lover = document.querySelector('input#lover') 
let resultador = document.querySelector('div#res')


if (lover.value.length == 0) {
    alert("[ERROR] Please insert your names.") 
    } else {
        let n = Math.random()
        n = n * 100
        n = Math.floor(n) + 1
        if (n <= 20){ 
        res.innerHTML =`<p>Your love score is ${n} %.</p> <p>Yikes!</p>`
            } else if (n > 20 && n <= 40) {
                res.innerHTML = `<p>Your love score is ${n} %.</p> <p>Be kind and understanding with one another!</p>`
            } else if (n > 40 && n <= 60){
                res.innerHTML = `<p>You love score is ${n} %.</p> <p> Great chances of a loving marriage!</p>`
            } else {
                res.innerHTML = `<p>You love score is ${n} %.</p> <p> You guys are a match made in heaven!</p>`
            }
    }


   }


