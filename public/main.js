'use strict';

(function() {

  var global = io('/global');
  //var user1 = for room1 
  //var user2 = for room2 

  function renderData(users,datas){
    var d = new Date();
    console.log(users);
    for(var user in users){
      console.log(user);
      for(var data in datas){
        console.log(data);
        $('#'+users[user]+' tbody').append("<tr><td>"+d+"</td><td>"+datas[data]+"</td></tr>");
      } 
    }
  };
  

  global.on('got Broadcast', renderData);


  $('#btnSendAllData').on('click',function(){
    console.log("btnSendAllData");
    var localData = {"data1":$('#data_forData1').val(),"data2":$('#data_forData2').val()};
    global.emit('sendData',['user1'],localData);
  });
  $('#btnSendSomeData').on('click',function(){
    console.log("btnSendSomeData");
    var localData = {"data1":$('#data_forData1').val(),"data2":$('#data_forData2').val()};
    global.emit('sendData',['user2'],localData);
  });
  $('#btnBroadcastData').on('click',function(){
    console.log("btnBroadcastData");
    var localData = {"data1":$('#data_forData1').val(),"data2":$('#data_forData2').val()};
    global.emit('boardcastData',['user1','user2'],localData);
    console.log("sent signal to broadcast");
  });
  $('#btnPurposeUsers').on('click',function(){
    console.log("btnPurposeUsers");
    var localData = {"data1":$('#data_forData1').val()};
    global.emit('sendData',['user1','user2'],localData);
  });
})();