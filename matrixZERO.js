var matrix = () =>{
    var arr = [[1,0,2], [3,4,5], [0,6,7]]
    var row = new Set()
    var col = new Set()
    
    for(let i=0; i<arr.length;i++){
      for(let j=0; j<arr[0].length; j++){
        if(arr[i][j] == 0){
          row.add(i)
          col.add(j)
        }
      }
    }
    
    for(let i=0; i<arr.length; i++){
      for(let j=0; j<arr[0].length; j++){
        if(row.has(i) || col.has(j)){
          arr[i][j] = 0
        }
      }
    }
    
    for(let i=0; i<arr.length;i++){
      for(let j=0; j<arr[0].length; j++){
        console.log(arr[i][j])
      }
    }
    
  }
  matrix()