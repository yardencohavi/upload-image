var images = [];
var validFormats = ["jpg","png","jpeg"];
var isValidateTypeFile = image => !!validFormats.find(format => 'image/'+format === image.type);

var imageInput = document.getElementById('output');

var loadFile = function(event) {
	imageInput.src = URL.createObjectURL(event.target.files[0]);
};

function resizeimage()
{
    var height=parseInt(document.getElementById('txtHeight').value);   
    var width=parseInt(document.getElementById('txtWidth').value);   
    imageInput.height = height;
    imageInput.width = width;
}

function save() {
    var gh = imageInput.src;
    var a  = document.createElement('a');
    a.href = gh;
    a.download = 'image.png';
    a.click()
}