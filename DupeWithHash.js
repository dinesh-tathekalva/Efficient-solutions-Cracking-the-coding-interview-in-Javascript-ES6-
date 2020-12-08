var dupe = () => {
    var arr = [1,2,3,5,4,3,4,7,6,6]
    var hs01 = new Set()
    var hs02 = new Set()
    for(i=0;i<arr.length;i++){
        if(hs01.has(arr[i])){
            hs02.add(arr[i])
        }
        else{
            hs01.add(arr[i])
        }
    }
    return console.log(hs02) // print the repeated values
}
dupe()

