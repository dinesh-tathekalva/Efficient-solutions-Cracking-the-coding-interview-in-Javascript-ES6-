const binary = () => {
const arr = [10, 20 ,30 ,40 ,50 ,60, 70]
const target = 50
var start = 0
var end = arr.length - 1
while (start <= end) { 
  var mid = start + (end - start)/2
  if(arr[mid] == target){
    return mid
  }
  if(target < arr[mid]) {
    end = mid - 1
  }else{
    start = mid + 1
  }
}
  }
binary()
console.log(binary())
