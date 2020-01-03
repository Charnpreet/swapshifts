// these are the extra methods which are not been used yet
//
// updatingCasualAvailbility(currentUseruid) {
//   var currentDate;
//   var month, date, day, todaysDate, year;
//   for (var i = 0; i < 10; i++) {
//     currentDate = new Date(new Date().setDate(new Date().getDate() + i))
//     todaysDate = this.extractDateAsAStringFromDateNTime(currentDate);
//     month = this.getMonthFromDate(currentDate);
//     day = this.getDayfromDate(currentDate);
//     year = this.getYearFromDate(currentDate);
//     //date = todaysDate.concat('-', month, '-',day);
//     date = todaysDate.concat('-', month, '-',year);
//     const availbility = {
//       AM: 0,
//       PM: 0,
//       ND: 0,
//       year: year,
//       month: month,
//       date: todaysDate,
//       day: day
//     }
//     updateTempAvailability(currentUseruid, date, availbility);
//   }
// }
// getYearFromDate(date){
//   if (date != null) {
//     return date.getFullYear();
//   }
//   return null;
// }
// getDayfromDate(date){
//   if (date != null) {
//     return this.state.weekDays[date.getDay()];
//   }
//   return null;
// }
// getMonthFromDate(date){
//   if (date != null) {
//     return this.state.months[date.getMonth()];
//   }
//   return null;
// }
// extractDateAsAStringFromDateNTime(dateNtime){
//   if (dateNtime != null) {
//     return dateNtime.getDate().toString();
//   }
//   return null;
// }

// it can be used to remove certain node from firebase
// export const RemovingAvailabilityFromLastDay = (
//   currentUserUid,
//   year,
//   month,
//   key = '23-Dec-Sat',
// ) => {
//   var databaseRef = firebase
//     .database()
//     .ref(
//       `/UserAvailability/CasualAvailability/${currentUserUid}/${year}/${month}`,
//     );
//   databaseRef.limitToFirst(1).once('value', snapshot => {
//     for (var retrivekey in snapshot.val()){
//       if (retrivekey.slice(0, 2) < key.slice(0, 2)) {
//         databaseRef.child(retrivekey).remove();
//       }
//     }
//
//   });
// };
