AFRAME.registerComponent('donut', {

    init: function () {
         console.log("installed");
         this.el.addEventListener('click', (e) => {
            console.log("Clicked Grap");
            const newfood = document.createElement('a-entity');
            newfood.setAttribute('gltf-model', 'Donut.glb');
            newfood.setAttribute('grap', '');
            newfood.setAttribute('class', 'draggable');
            newfood.setAttribute('scale', '1 1 1');
            newfood.setAttribute('position', '4 3.5 4');
            newfood.setAttribute('ammo-body', 'type: dynamic');
            newfood.setAttribute('ammo-shape', 'type: hull');
            this.el.sceneEl.appendChild(newfood);
         });

    },

});
