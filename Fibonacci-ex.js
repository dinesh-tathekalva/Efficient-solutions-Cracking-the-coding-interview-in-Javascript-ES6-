// recursive method - base conditons and target are important in this method
var fibR = (n) =>{
    if(n<2) return n;
    return fibR(n-1) + fibR(n-2)
}
console.log("resursive method: " + fibR(10))

//iterative method
var fibI = (n)=> {
    var f = new Array(n+2);
    f[0] = 0;
    f[1] = 1;
    for (let i=2; i<n+1; i++){
        f[i]=f[i-1]+f[i-2]
    }
    return f[n]
}
console.log("Iterative method: " +fibI(10))