// return masked string
function getCount(str) {
    var vowels = ["a","e","i","o","u",];
    var count = 0;
    for(var i = 0; i < str.length; i++){
      if(vowels.includes(str[i])){
        count++;
      }    
    }
    return count;
  }