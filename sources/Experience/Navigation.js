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
        this.view.spherical.value = new THREE.Spherical(25, Math.PI * 0.4, - Math.PI * -0.25)
        // console.log (this.view.spherical.value)
        this.view.spherical.smoothed = this.view.spherical.value.clone()
        this.view.spherical.smoothing = 0.005
    
        this.view.drag = {}
        this.view.drag.delta = {}
        this.view.drag.delta.x = 0
        this.view.drag.delta.y = 0

        this.view.drag.previous = {}
        this.view.drag.previous.x = 0
        this.view.drag.previous.y = 0

        /**
         * Methods
         */


        this.view.down = (_x,_y) =>
        {
            this.view.drag.previous.x = _x
            this.view.drag.previous.y = _y
            
        }

        this.view.move = (_x,_y) =>
        {
            this.view.drag.delta.x += this.view.drag.previous.x -_x
            this.view.drag.delta.y += this.view.drag.previous.y -_y
        }

        this.view.up = () =>
        {
            
        }




        /**
         * Mouse events
         */
        this.view.onMouseDown = (_event) => 
        {
            this.view.down(_event.clientX, _event.clientY)
            window.addEventListener('mouseup', this.view.onMouseUp)
            window.addEventListener('mousemove', this.view.onMouseMove)
        }
        

        this.view.onMouseMove = (_event) => 
        {
            this.view.move(_event.clientX, _event.clientY)
           
        }

        this.view.onMouseUp = (_event) => 
        {
            this.view.up()

            window.removeEventListener('mouseup', this.view.onMouseUp)
            window.removeEventListener('mousemove', this.view.onMouseMove)
            
        }
        window.addEventListener('mousedown', this.view.onMouseDown)

        





        this.view.target = new THREE.Vector3(0,2,0)
        


        
    }

    update()
    
    {

        /**
         * View
         */

        //Drag
        console.log(this.view.drag.delta.x)
        this.view.drag.delta.x = 0
        this.view.drag.delta.y = 0

        const viewPosition = new THREE.Vector3()
        viewPosition.setFromSpherical(this.view.spherical.value)
        // console.log (viewPosition)

        this.camera.modes.default.instance.position.copy(viewPosition)

        this.camera.modes.default.instance.lookAt(this.view.target)
    }
   

}
