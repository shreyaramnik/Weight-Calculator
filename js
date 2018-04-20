document.getElementById("lbsInput").addEventListener('input', function(e){
  var lbs = e.target.value;
  document.getElementById("gramsOutput").innerHTML= lbs*453.59;
  document.getElementById("kgsOutput").innerHTML= lbs*0.453;
  document.getElementById("ouncesOutput").innerHTML = lbs*16;
  
});
