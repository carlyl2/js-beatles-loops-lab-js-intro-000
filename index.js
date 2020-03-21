function theBeatlesPlay(musicians, instruments){
  var whatBeatlesPlay = []
  for (var indx = 0; indx <= (musicians.length -1); indx++){
    whatBeatlesPlay.push(`${musicians[indx]} plays ${instruments[indx]}`)
  }
  return whatBeatlesPlay
}
