var flatArray = () => {
    var arr = [1,2,3,[4,5,6],7] //flatten this array
    for(i=0; i< arr.length; i++) {
      if(arr[i].length > 1){
        for(j=0; j<arr[i].length; j++){
          arr.push(arr[i][j])
          console.log(arr[i], arr[j])
        }
        arr.splice(i, 1)
        console.log(arr)
      }
    }
  }
  flatArray()
  