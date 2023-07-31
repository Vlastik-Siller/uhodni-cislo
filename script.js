'use strict';


document.querySelector('.message').textContent = 'Hadej cislo!'     //najde v dokumentu .message a nahradi v ni text 'hledej cislo'
document.querySelector('.guess').value = ""             //ve formulari .guess bude nastavena ""
document.querySelector('h1').textContent = 'Uhodni cislo!'  //ymena hodnotz taxtu v nadpisu H1
document.querySelector('.between').textContent = ('(Hledane cislo je 1 - 20)')
document.querySelector('.again').textContent = 'Znovu!'
document.querySelector('.check').textContent = 'Zkontrolujte!'

let secret = Math.floor(Math.random() * 20) + 1           //generovani hledaneho cisla
// document.querySelector('.number').textContent = secret      //docasne pro ucely vyvoje bude cislo videt misto otazniku na strance


let score = 20
let highscore = 0

document.querySelector('.check').addEventListener('click', function () {
    let guess = Number(document.querySelector('.guess').value)
    if (!guess) {  //podminka !guess overuje jestli je truthy nebo folsy,
        document.querySelector('.message').textContent = 'Musis zadat nejake cislo'  //tento handler zmeni hlaseni na strance
    } else if (guess === secret) {
        document.querySelector('.message').textContent = 'Trefa xD'
        document.querySelector('.number').textContent = secret
        document.querySelector('body').style.backgroundColor = '#59b200'
        document.querySelector('.number').style.width = '30rem'

        if (highscore < score) {
            highscore = score
            document.querySelector('.highscore').textContent = highscore
        }
    } else if (guess > secret) {

        //ternarni zapis

    //     document.querySelector('.message').textContent = guess > secret ? 'cislo je mensi' : 'cislo je vetsi'
    //     score--
    //     document.querySelector('.score').textContent = score
    // } else {
    //     document.querySelector('
    // }


        if (score > 0) {
        document.querySelector('.message').textContent = 'hledane cislo je mensi'       //toto zmeni hlasen
        score--                                                                         // pocitadlo
        document.querySelector('.score').textContent = score
        } else {
            document.querySelector('.message').textContent = (`prohrals ${secret}`)
            document.querySelector('.score').text = 0
            document.querySelector('body').style.backgroundColor = 'red'
        }        
    }
    else if (guess < secret) {
        if (score > 0 ) {
        document.querySelector('.message').textContent = 'hledane cislo je vetsi'
        score--
        document.querySelector('.score').textContent = score
        } else {
            document.querySelector('.message').textContent = 'prohrals'
            document.querySelector('.score').text = 0
            document.querySelector('body').style.backgroundColor = 'red'
        }        
    }
    
})           //timto na element navesime naslouchani a po cliku se spusti funkce, ktera do console napise danou hodnotu


document.querySelector(".again").addEventListener('click', function () {
    //window.location.reload()   //resetne celou stranku
    score = 20
    secret = Math.floor(Math.random() * 20) + 1 

    document.querySelector('.message').textContent = 'Zkus uhodnout cislo'
    document.querySelector('.score').textContent = 20
    document.querySelector('.number').textContent = '?'
    document.querySelector('.guess').value = ""

    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').style.width = '15rem'

})



