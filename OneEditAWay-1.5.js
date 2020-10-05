var select = (str1, str2) => { //detects to use inc() or edit() based on input
    if(str1.length < str2.length){
      return inc(str1, str2)
    }
    else if(str1.length > str2.length){
      return inc(str2, str1)
    }
    else {
      return edit(str1, str2)
    }
  } 
  
  var inc = (str1, str2) => { // checks for adding a letter or deleting a letter based on input
    var ind1 = 0 
    var ind2 = 0
    while(ind1 <str1.length && ind2 < str2.length){
      if(str1.charCodeAt(ind1) != str2.charCodeAt(ind2)){
         if(ind1 != ind2){
           return console.log(false)
         }
        else {
         ind2++
        }
         }
      else{
        ind1++ 
        ind2++
      }
      
    }
    return console.log(true)
  }
  var edit=(str1, str2)=>{ //checks if changing one letter matches the strings
    var flag = false;
    for(i=0; i<str2.length; i++){
      if(str1.charCodeAt(i) != str2.charCodeAt(i)){
        if(flag == true){
          return console.log("edit: " + false)
        }
        else{
          flag = true
        }
      }
    }
    return console.log("edit: " + true)
  }
  select("pule", "palew")