//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (input) => {
  //throw new Error('Remove this statement and implement this function');

  if(input==undefined || input==""){
    return false;
  }

  input=input.toLowerCase();

  var arr=new Array();

  for(var i=0;i<input.length;++i){
    for(var j=97;j<123;++j){

      if(input[i].charCodeAt(0)==j || input[i]=="_"){
        if(!arr.includes(j)){
          arr.push(j);
        }
      }
    }
  }

  for(var i=97;i<123;++i){
    if(!arr.includes(i)){
      return false;
    }
  }

  return true;
};
