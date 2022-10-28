
function soma(n1,n2=0) {
    return n1 + n2
}
let res_soma = soma(3,1)

function parimp(n) {
    if (n%2==0) {
        return 'par'
    } else {
        return 'impar'
    }
}
let res_parimp = parimp(res_soma)

console.log(`A soma destes números é ${res_parimp}`)