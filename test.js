var container = document.getElementById('container');
var renderer = new THREE.CanvasRenderer();
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/ window.innerHeight, 1, 10000);
var geometry = new THREE.Geometry();
var distance = 1000;

renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer.domElement);


scene.add(camera);


for( var i =0; i<80; i++){
var particle = new THREE.Particle( new THREE.ParticleCanvasMaterial({

color: Math.random()* 0x808080 +0x808080 ,
opacity:1 ,
program: function(context){
    context.beginPath();
    context.arc(0,0,1,0,Math.PI*2, true);
    context.closePath();
    context.fill();
}

}));
var elm = document.createElement('a');
elm.href='https://fr.wikipedia.org';
var elmReturn = document.body.appendChild(elm);
elmReturn.innerText += "Mon lien";
elmReturn.style.color = "black";

particle.position.x = Math.random()* distance*2 - distance;
particle.position.y = Math.random()* distance*2 - distance;
particle.position.z = Math.random()* distance*2 - distance;
particle.scale.x = particle.scale.y = Math.random()*10+5;

geometry.vertices.push( new THREE.Vertex(particle.position));

scene.add(particle);
}

var line = new THREE.Line(geometry, new THREE.LineBasicMaterial
    ({
        color: 0x000000,
        opacity: 0.15
    }));
scene.add(line);

camera.position.z=100;
camera.lookAt(scene.position);

renderer.render(scene, camera);



document.addEventListener('mousemove', onMouseMove, false);
function onMouseMove(event){
    var mouseX = event.clientX - window.innerWidth/2;
    var mouseY = event.clientY - window.innerHeight/2;
    camera.position.x += (mouseX - camera.position.x)*0.05;
    camera.position.y += (mouseY - camera.position.y)*0.05;
    camera.position.z = distance;
    camera.lookAt(scene.position);
    renderer.render(scene, camera);
}

