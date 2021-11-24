function main (){

    let canvasWidth = 400;
    let canvasHeith = 400;

    const canvas = document.getElementById("canvasGL");

    canvas.height = canvasHeith;
    canvas.width = canvasWidth;

    const renderer = new THREE.CanvasRenderer({canvas});
    renderer.setClearColor("white", 1.0);
    renderer.setSize(canvasWidth, canvasHeith);

    console.log("fuckingFuck");
}
main();