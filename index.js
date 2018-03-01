function theBeatlesPlay (musicians, instruments){
  var musicianinstruments = [];
  for (var i = 0; musicians.length; i++){
  musicianinstruments.push(musicians[i] + "plays" + instruments[i]);
}
return musicianinstruments
}