let readResult;

function readFile(object) {
    var file = object.files[0];
    var reader = new FileReader();
    try{
    reader.onload = function() {
        readResult = reader.result;
        console.log(readResult);

    };
    reader.readAsText(file);
  }
 catch (err) {
    alert("Файл не выбран");
 }
}
$("form[name='uploader']").submit(function(e) {
    var formData = new FormData($(this)[0]);

$.ajax({
    url: 'upload.php',
    type: "POST",
    data: formData,
    async: false,
    success: function (msg) {
        alert(msg);
    },
    error: function(msg) {
        alert('Ошибка!');
    },
    cache: false,
    contentType: false,
    processData: false
});
e.preventDefault();
});
