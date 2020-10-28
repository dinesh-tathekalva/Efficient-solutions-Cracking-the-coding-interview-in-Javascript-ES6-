var twoPointerArray = () => {
    var arr = [1,4,2,3,5,6,7]
    var start = 0
    var end = arr.length - 1
    while(start<end){
        var temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp
        start++
        end--
    }
    return console.log(arr)
}
twoPointerArray()

var twoPointerString = () => {
    var str = "dinesh"
    var strSpr = [...str]
    var start = 0
    var end = str.length - 1
    while(start<end){
        var temp = strSpr[start]
        strSpr[start]= strSpr[end]
       strSpr[end] = temp
        start++
        end--
    }
    return console.log(strSpr)
}
twoPointerString()
