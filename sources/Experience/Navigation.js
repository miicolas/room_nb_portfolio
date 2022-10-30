import * as THREE from 'three'
import Experience from './Experience.js'



export default class Navigation
{
    constructor()
    {
        this.experience = new Experience()

        this.camera = this.experience.camera


        this.setView()
    }



    setView()
    {
        this.view = {}

        this.view.spherical = {}
        this.view.spherical.value = new THREE.Spherical(30, Math.PI * 0.35, - Math.PI * 0.25)
        console.log (this.view.spherical.value)


        
    }

   

}
