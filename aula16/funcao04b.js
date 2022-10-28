function fatorial(n) {
    let fat = 1
    for (let c = 1 ; c <= n ; c++){
        fat *= c
    }
    return fat
}
console.log(fatorial(5))