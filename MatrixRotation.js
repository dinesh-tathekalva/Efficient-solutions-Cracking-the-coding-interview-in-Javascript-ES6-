var MatRot = () => {
    var arr = [[1,2,3,7], [4,5,6,8], [7,8,9,9],[3,6,8,9]] 
    for(let i=0;i<arr.length; i++){
      for(let j=0;j<i;j++){
         var temp = arr[i][j]
         arr[i][j] = arr[j][i]
         arr[j][i] = temp
         }
       }
     console.log(arr)
     
  const n=arr.length
  for(let i=0;i<arr.length; i++){
      for(let j=0;j<n/2;j++){
          var tem = arr[i][j]
          arr[i][j] = arr[i][n-j-1]
          arr[i][n-j-1] = tem
         }
       }
  return console.log(arr)
   } 
MatRot()