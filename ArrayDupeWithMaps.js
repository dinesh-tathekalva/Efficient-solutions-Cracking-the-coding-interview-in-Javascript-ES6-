var countArray = () =>{
  var arr = [1,2,3,2,4,1,5,6,7,4]
  var hsmap = new Map()
  for(let i=0; i<arr.length; i++){
    if(hsmap.has(arr[i])){
      hsmap.set(arr[i], hsmap.get(arr[i])+1)
    }
    else{
      hsmap.set(arr[i], 1)
    }
  }
  for(var key of hsmap.keys())
  {
  if(hsmap.get(key)===1)
  {
  console.log(key)//unique values
  }
  
  }
  return console.log(hsmap)
}

countArray()
