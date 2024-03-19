exports.getCurrentDate = function getCurrentDate() {
  const date = new Date();
  let formattedDate = date.getFullYear() + "-";
  formattedDate += (date.getMonth() + 1).toString().padStart(2, "0") + "-";
  formattedDate += date.getDate().toString().padStart(2, "0");
  return formattedDate;
}