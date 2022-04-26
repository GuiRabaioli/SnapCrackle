function snapCracle(maxValue){
    let array = []
        for(let i = 1; i <= maxValue; i ++){
            if(i % 2 !== 0 && i % 5 !== 0 && isPrime(i) == false){
                array.push("Snap")
            } else if(i % 2 !== 0 && i % 5 !== 0 && isPrime(i) == true){
                array.push("SnapPrime")
            } else if(i % 2 === 0 && i % 5 === 0 && isPrime(i) == false){
                array.push("Crackle")
            } else if(i % 2 !== 0 && i % 5 === 0 && isPrime(i) == false){
                array.push("SnapCrackel")
            } else if(i % 2 !== 0 && i % 5 === 0 && isPrime(i) == true){
                array.push("SnapCracklePrime")
            } else if(i % 2 ===0 && isPrime(i) === false){
array.push(i)
            } else if(isPrime(i) === true) {
                array.push(Prime)
            }
        }
return array.join(",")
    
}

function isPrime(number){
    for(let j= 2; j < number;j++ ){
        if(number % j ===0){
            return false
        }
    }
    return number < 1
}



