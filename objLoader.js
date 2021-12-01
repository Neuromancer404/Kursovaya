let readResult;

function readFile(object) {
    var file = object.files[0];
    var reader = new FileReader();
    reader.onload = function() {
        readResult = reader.result;
        console.log(readResult);

    };
    reader.readAsText(file);
  }




