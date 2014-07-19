var forestfire = (function(){
  var fire = {}
  var fires = {}

  fire.setup = function(){
    jQuery.ajax('/fires.json', {success:fire.loaded})
  }

  fire.loaded = function(data, status){
    fires = data
  }

  fire.nearby = function(){
    console.log(fires)
  }

  return fire
})()


