//
// This is only a SKELETON file for the 'Leap' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isLeap = (year) => {
  //throw new Error('Remove this statement and implement this function');

  if(year % 4 == 0){
    if(year % 100 == 0){
      if(year % 400 == 0){
        return true;
      }
      return false;
    }
    else{
      return true;
    }
  }
  else{
    return false;
  }


};
