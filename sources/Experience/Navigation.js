import * as THREE from 'three'
import Experience from './Experience.js'
import normalizeWheel from 'normalize-wheel'
import World from './World.js'
import { Float, Environment, useGLTF, OrbitControls } from '@react-three/drei'


export default class Navigation
{
    constructor()
    {
        this.experience = new Experience()
        this.targetElement = this.experience.targetElement
        this.camera = this.experience.camera
        this.config = this.experience.config
        this.time = this.experience.time

        this.setView()
    }



    setView()
    {
        this.view = {}

        this.view.spherical = {}
        this.view.spherical.value = new THREE.Spherical(30, Math.PI * 0.35, - Math.PI * 0.25)
        // this.view.spherical.value.radius = 5
        this.view.spherical.smoothed = this.view.spherical.value.clone()


        
    }

   

}
