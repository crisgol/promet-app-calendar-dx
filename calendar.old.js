var Calendar;
window.addEventListener('AfterLogin',function(){
  Calendar = newPrometList('calendar','Kalender');
  Calendar.Grid.destructor();
  scheduler.init('scheduler_here', new Date(),"month");
  Calender.Grid = new

});
window.addEventListener('AfterLogout',function(){
  Calendar.Grid.destructor();
  Calendar.Page.remove();
  delete Calendar;
  Calendar = {};
  Calendar = null;
});
