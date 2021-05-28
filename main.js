Webcam.set( {

width:450,
height:280,
crop_width:350,
crop_height:280,
image_format:'png',
png_quality:90
} );

camera = document.getElementById("camera")
Webcam.attach("#camera");
function Take_Spanshot(){
    Webcam.snap(function(data_uri) {
    document.getElementById("result").innerHTML= '<img id="captured_image" src=" '+data_uri+'"/>';
    }
    )}
    
    console.log('ml5 version:', ml5.version)
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/YhhW4s8Ui/model.json', modelLoaded)
    
    function modelLoaded() {
        console.log('Model Loaded!!');
    }













