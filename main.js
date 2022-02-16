//https://teachablemachine.withgoogle.com/models/M-ivS9qJB/
Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});
camera = document.getElementById("camera");
Webcam.attach(' #camera ');
function takeSnapShot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = "<img id = 'photo' src = '" + data_uri + "'>";
    });
}
console.log("ml5 version", ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/cE9YI2hJD/model.json", modelLoaded);
function modelLoaded() {
    console.log("model is loaded");

}
function identifyImage() {
    img = document.getElementById('photo');
    classifier.classify(img, getResult);
}
function getResult(error, result) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(result);
        document.getElementById("resultObjectName").innerHTML = result[0].label;
        document.getElementById("resultObjectAccuracy").innerHTML = result[0].confidence.toFixed(2);
    }
}
