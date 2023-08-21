// FREQUENCY OF A NUMBER
/**
* The frequent number Array
* @param {integers array} arr
* @return {frequent number Array} fre_arr
*/
function getFrequenteArray(arr){
  // sorting the array 
  arr.sort()

  var count = 1; 
	var fre_arr= [];

	for(var i = 1;i<arr.length; i++){
     if(arr[i] == arr[i-1]) {
        count++;
     }
     else {
        //console.log("The frequency of "+ arr[i-1] + " is: " + count);
        fre_arr.push([arr[i-1],count]);
        count = 1;
     }
  }
	//console.log("The frequency of "+ arr[arr.length-1] + " is: " + count);
  fre_arr.push([arr[i-1],count]);

  return fre_arr;
}
/**
* The most frequent number
* @param {integers array} arr
* @return {integers number} most frequent number
*/
function getFrequente(arr){
  var freq_arr = getFrequenteArray(arr);
  //console.log("Frequent Array: ",freq_arr);
  freq_arr.sort(function(a, b) {
      return a[1] - b[1];
  });
  //console.log("Sortable Frequent Array: ",freq_arr);
	return freq_arr[freq_arr.length-1][0];
}
/**
* The most frequent number
* @param {integers array} arr
* @param {first k most frequent numbers} k
* @return {integers array} k_arr "most frequent number array"
*/
function getFrequenti(arr, k) {
	var freq_arr = getFrequenteArray(arr);
  var k_arr=[], count=1;
  //console.log("Frequent Array: ",freq_arr);
  if(k > freq_arr.length){
  	return "Your required number of element is greater than total number of frequent number!";
  }else if(k < 1){
  	return "Please give integer number geter then 0!"
  }else{
  	freq_arr.sort(function(a, b) {
      return a[1] - b[1];
  	});
    //console.log("Sortable Frequent Array: ",freq_arr);
    for(var i = freq_arr.length-1; i >= 0; i--){
    	k_arr.push(freq_arr[i][0]);
      count++;
      if(count>k){
      	if(freq_arr[i][1]== freq_arr[i-1][1]){
        	continue;
        }else{
        	return k_arr;
        }
      }
    }
  }
}


// given array 
var given_arr = [ 1, 4, 5, 6, 2, 2, 2, 4, 5, 5, 4, 6, 9, 1, 2, 2, 3]

//call both functions with given array
console.log("the most frequent number is:",getFrequente(given_arr));
console.log("the K most frequent number array:", getFrequenti(given_arr,2));
