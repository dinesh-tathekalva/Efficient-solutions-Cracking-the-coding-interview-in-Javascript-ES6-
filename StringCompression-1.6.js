var comp = () => {
    var str = "aaabbacccdddbbc"
    var count = 0
    var compression = ""
    for(i=0;i<str.length;i++){
        count++
        if(str.charAt(i) != str.charAt(i+1)){
            compression += ""+str.charAt(i)+count
            count = 0
        }
    }
    return compression
}

comp()