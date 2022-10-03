const fs = require('fs')

function readFileDigits(){

    fs.readFile('./numeropi.txt', 'utf-8', (err, data) => {
        if(err){
            console.log(err)
            return
        }
        getFirstPalindromicPrimeWithNineAlg(data)
    })
}   

function getFirstPalindromicPrimeWithNineAlg(number){
    for(let i = 0; i < number.length; i++){
        const numWithNineAlg = number.slice(i, i + 9)
        if(isPalindromic(numWithNineAlg) && !numWithNineAlg.startsWith(0) && isPrime(numWithNineAlg)) {
            console.log(numWithNineAlg)
            return
        }
    }
}


function isPalindromic(num){

    let numInvert = [...num].reverse()

    for(let i = 0; i < num.length; i++){
        if(num[i] !== numInvert[i]) return false
    }

    return true
}


function isPrime(number){
    const num = Number(number)
    let count = 0
    for (let i = 1; i <= num; i++){
        if(num % i === 0){
            count++
        }
    }
    if(count === 2)
        return true
    
    return false
}


readFileDigits()