export const Month = (mesNum) => {
  let mes = "";
  if (mesNum == 1) {
    mes = "January";
  } else if (mesNum == 2) {
    mes = "February";
  } else if (mesNum == 3) {
    mes = "March";
  } else if (mesNum == 4) {
    mes = "April";
  } else if (mesNum == 5) {
    mes = "May";
  } else if (mesNum == 6) {
    mes = "June";
  } else if (mesNum == 7) {
    mes = "July";
  } else if (mesNum == 8) {
    mes = "August";
  } else if (mesNum == 9) {
    mes = "September";
  } else if (mesNum == 10) {
    mes = "October";
  } else if (mesNum == 11) {
    mes = "November";
  } else if (mesNum == 12) {
    mes = "December";
  }

  return mes;
};
