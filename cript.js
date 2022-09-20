
/**
 * Criptografia da senha
 * 
 * @param {String} senha 
 * @returns senha
 */
function cript(senha) {
    let array = senha.split('')
    let cripto = []
    for(let i = 0; i < array.length; i++) {
        cripto.push(String.fromCharCode((array[i].charCodeAt()) + 3))

    }    
    return cripto.join("")
}

/**
 * Descriptografia da senha
 * 
 * @param {String} cripto 
 * @returns 
 */
function decript(cripto) {
    let array = cripto.split('')
    let decripto = []
    for(let i = 0; i < array.length; i++) {
        decripto.push(String.fromCharCode((array[i].charCodeAt() - 3)))
    }

    return decripto.join("")
}

console.log(cript('cloves'))
console.log(decript('foryhv'))