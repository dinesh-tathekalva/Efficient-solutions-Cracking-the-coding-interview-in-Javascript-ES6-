var avg = () => {
    var arr = [1,3,2,4,5,6,7,8,9]
    var add = 0
    
    for(let i=0; i<arr.length; i++){
       add += arr[i]
    }
    var AvgOA = add/arr.length
    console.log(AvgOA)
  }

  avg()
