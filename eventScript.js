//import {gl} from '/Renderer.js';

window.onload = function(){
    if (!isWebAssSupporting){
        console.log("web ass not supporting");
        window.alert("К сожалению, webassembly не поддерживается вашим браузером. Cкоро мы исправим неработоспособность, а пока полный функционал недоступен.");
    }
    else{ 
        console.log ("your browser supporting webassembly");

    //здесь запуск открытия окна выбора файла
    drawScene();
}
}

function isWebAssSupporting(){
    try {
        if (typeof WebAssembly === "object"){
            const module = new WebAssembly.Module(new Uint8Array([0x00, 0x61, 0x73, 0x6D, 0x01, 0x00, 0x00, 0x00]));
            if (module instanceof WebAssembly.Module){
                const moduleInstance = new WebAssembly.Instance(module);
                return (moduleInstance instanceof WebAssembly.Instance);
            }
        }
    }catch (err){}
    return false;
}

function resize(canvas) {
    let displayWidth  = canvas.clientWidth;
    let displayHeight = canvas.clientHeight;

    if (canvas.width  != displayWidth ||
        canvas.height != displayHeight) 
        {   
        canvas.width  = displayWidth;
        canvas.height = displayHeight;
    }
  }


function drawScene() {
    let canvas = document.querySelector("#canvasGL");
    resize(canvas);

    }

