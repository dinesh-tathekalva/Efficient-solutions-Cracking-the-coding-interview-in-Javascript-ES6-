var unique = () => {
    var arr = [1,2,3,4,2,5,6,3,7,6,8,9]
    var hs1 = new Set()
    var hs2 = new Set()
    var hs3 = new Set()
    for(i=0; i<arr.length;i++){
        if(hs1.has(arr[i])){
            hs2.add(arr[i])
            hs3.delete(arr[i])
        }
        else{
            hs1.add(arr[i])
            hs3.add(arr[i])
        }
    }
    return console.log(hs3)
}
unique()