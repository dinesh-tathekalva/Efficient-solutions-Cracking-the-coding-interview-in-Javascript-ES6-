var rotate = () => {
    str1 = "waterbottle"
    str2 = "erbottlewat"
    str = str1.concat(str1) //formula
    if (str1.length != str2.length) {
        return console.log(false)
    }
    else {
        if (str.includes(str2)) { //checks if str is in str2
            return console.log(true)
        }
        else {
            return console.log(false)
        }
    }
}
rotate()
