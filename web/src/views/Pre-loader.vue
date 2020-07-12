<template>
  <transition name="show-out">
      <div class="canvas" v-show="isVisible">

      </div>
  </transition>
</template>

<script>
import GLTFLoader from 'three-gltf-loader'
let THREE = require('three')

export default {
  data: () => ({
    isVisible: true,
    camera: null, 
    scene: null, 
    light: null, 
    model: null, 
    renderer: null, 
    clock: null, 
    mixer: null
  }),
  mounted() {
    this.init();
    this.animate();
    setTimeout(this.threeStop, 3000)
  },

  methods: {
    threeStop() {
      this.isVisible = false
      this.scene.remove(this.model)
      this.scene.dispose()
      this.renderer.dispose()
      this.model = null
      this.scene = null
      this.mixer = null
      this.camera = null
      this.light = null
      this.renderer = null
      this.clock = null
    },
    animate() {
      if( this.clock && this.mixer && this.renderer) {
        let dt = this.clock.getDelta();
        this.mixer.update( dt );
        this.renderer.render( this.scene, this.camera );
        requestAnimationFrame( this.animate );
      }
    },
    onWindowResize() {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();

      this.renderer.setSize( window.innerWidth, window.innerHeight );
    },
    createGUI(model, animations) {
      this.mixer = new THREE.AnimationMixer( model );

      for ( let i = 0; i < animations.length; i++ ) {

          let clip = animations[ i ];
          let action = this.mixer.clipAction( clip );
          
          //action.timeScale = clip.duration * 2
          action.play();
      }
    },
    init() {
      this.renderer = new THREE.WebGLRenderer( { antialias: true } );
      let loader = new GLTFLoader()
      let position = {
          x: 80, 
          y: 5,
          z: 40
      }
      this.camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 10000 );
      this.camera.position.set(position.x,position.z,position.y)
      this.camera.rotation.set(103,158.7,3.8)
      
      this.scene = new THREE.Scene();
      this.scene.background = new THREE.Color( 0x999999 );
  
      this.clock = new THREE.Clock();
  
      this.light = new THREE.SpotLight( 0xffffff );
      this.light.castShadow = true;
      this.light.position.set( 25,0,5 )
      this.light.target.position.set( -80,40,0 )
      this.light.shadow.mapSize.width = 50;
      this.light.shadow.mapSize.height = 50;
  
      this.light.shadow.camera.near = 50;
      this.light.shadow.camera.far = 100;
      this.light.shadow.camera.fov = 50;
      this.light.intensity = 4
      this.scene.add( this.light );
      this.scene.add( this.light.target );

      let vm = this
      loader.load( 
        '../../9Rabota.glb',
        function ( gltf ) {
          vm.model = gltf.scene
          vm.model.receiveShadow = true;
          vm.model.castShadow = true;
          vm.model.scale.set(3,3,3)
          vm.createGUI(vm.model, gltf.animations)
          vm.scene.add( vm.model );
          vm.animate();
        },
        function ( xhr ) {
          console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
        },
        function ( error ) {
          console.log(error);
        }
      );
  
      
      this.renderer.setPixelRatio( window.devicePixelRatio );
      this.renderer.setSize( window.innerWidth, window.innerHeight );
      this.renderer.shadowMap.enabled = true;
      this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      document.querySelector('.canvas').appendChild(this.renderer.domElement)
  
      window.addEventListener( 'resize', this.onWindowResize, false );
    }
  }
}
</script>

<style lang="sass" scoped>
  .canvas
    position: fixed
    z-index: 99
    width: 100vw !important
    height: 100vh !important
    top: 0
    left: 0

  .show-out-enter,
  .show-out-leave-active 
    opacity: 0

  .show-out-enter-active,
  .show-out-leave-active 
    transition: opacity .5s ease
</style>