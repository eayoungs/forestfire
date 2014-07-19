var forestfire = (function(){
  // the code container
  var fire = {}

  // latest fire data
  var fires = {}

  fire.setup = function(callback){
    jQuery.ajax('/fires.json', {success:function(data, status){fire.loaded(data,status,callback)}})
  }

  fire.loaded = function(data, status, callback){
    fires = data
    callback()
  }

  fire.nearby = function(){
    console.log(fires)
  }

  fire.fires = function(){ return fires}

  return fire
})()


