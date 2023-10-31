function start (){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/RjHLL0_vp/model.jason', modelReady)
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
      console.error(error);
    } else{
      console.log(results);
      random_number_r = math.floor(Math.random() *255) +1;
      random_number_g = math.floor(math.random() *255) +1;
      random_number_b = math.floor(Math.random() *255) +1;
  
      document.getElementById("NX").innerHTML = 'posso ouvir -'+
    results[0].label;
    document.getElementById("NC").innerHTML = 'som detectado de -'+
    (results[0].confidence);
    document.getElementById("NX").style.color="rgb("
    +random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("NC").style.color = "rgb{"
    +random_number_r+","+random_number_g+","+random_number_r+")";

      img = document.getElementById('image')
      
      if (results[0].label == "latido") {
        img.src = 'cachorro.jpg';
      } else if (results[0].label == "miado") {
        img.src = 'gato.jpg';
      }
       else {
        img.src='escutando.gif';
       }
    }
  }

