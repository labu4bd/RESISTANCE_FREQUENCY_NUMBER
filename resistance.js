// RESISTANCE OF A NUMBER
/**
* The frequent number Array
* @param {integer number} num
* @param {integer number default value is 0} count
* @return { the resistance of an integer number} count
*/
function getResistenza(num, count=0) { 
  if(num.toString().length == 1){
    return count;
  }
  count ++; 
  var mult = 1;
  var splitStr = num.toString().split("");
  for(var i = 0; i<splitStr.length; i++) {
    mult *= parseFloat(splitStr[i]);
  }
  return getResistenza(parseFloat(mult),count);        
}
console.log("Multiplicative Persistence (MP) :", getResistenza(882));
console.log("Strongest number :",getResistenza(277777788888899));
