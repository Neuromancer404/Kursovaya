let readResult;

function readFile(object) {
    var file = object.files[0];
    var reader = new FileReader();
    reader.onload = function() {
        readResult = reader.result;
    };
    reader.readAsText(file);
  }

  loader.load(
	// resource URL
	'models/monster.obj',
	// called when resource is loaded
	function ( object ) {

		scene.add( object );

	},
	// called when loading is in progresses
	function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	},
	// called when loading has errors
	function ( error ) {

		console.log( 'An error happened' );

	}
);

  ///////////start magic/////////////

  const importObject = {
    env: {
    __memory_base: 0,
    }
   };

WebAssembly.instantiateStreaming( fetch("objParser.wasm"), importObject).then(result => 
{
    const value = result.instance.exports._LineRunner(readResult);
    console.log(value.toString());
});