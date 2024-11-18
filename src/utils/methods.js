export const formatDate = (dateString) => {

    const myDate = new Date(dateString);

    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][myDate.getMonth()];

    const str = `${month} ${myDate.getFullYear()}`;

    return str;

};



export function hasJustEmptyKey(obj, i) {
  
    if (obj.hasOwnProperty(i)) {
      return true;
    }else{
      return false;
  
    }
  
  }