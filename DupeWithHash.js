var dupe = () => {
    var arr = [1,2,3,5,4,3,4,7,6,6]
    var hs1 = new Set()
    var hs2 = new Set()
    for(i=0;i<arr.length;i++){
        if(hs1.has(arr[i])){
            hs2.add(arr[i])
        }
        else{
            hs1.add(arr[i])
        }
    }
    return console.log(hs2)
}
dupe()