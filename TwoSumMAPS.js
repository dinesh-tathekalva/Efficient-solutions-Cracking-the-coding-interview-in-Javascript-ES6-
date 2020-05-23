var TwoSum = () => {
    var arr = [1,2,3,2,5,7]
    var hsmap = new Map()
    var target = 9
    for(let i=0; i< arr.length; i++){
       var compliment = target -arr[i]
       if(hsmap.has(compliment)){
         return console.log(hsmap.get(compliment), i)
       }
      else{
         hsmap.set(arr[i], i)
      }
    }
  }
  TwoSum()