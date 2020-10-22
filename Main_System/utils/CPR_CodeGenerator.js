// A sane person would've probobly used last4 = 1000 + Math.floor(Math.random() * 9000)
const CPR_Generator = (birthDate) =>{
    birthDate = birthDate.replace(/-/g, '').slice(0, -2)
    
    lastFour = Array(4)
    for(const x of lastFour.keys()){
        let num = Math.floor(Math.random() * Math.floor(9))
        lastFour[x] = num
    }
    
    return birthDate + lastFour.toString().replace(/,/g, '')
}

module.exports = CPR_Generator