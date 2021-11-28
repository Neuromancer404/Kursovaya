function readFile(object) {
    var file = object.files[0]
    var reader = new FileReader()
    reader.onload = function() {
        console.log(reader.result);
    }
    reader.readAsText(file)
  }