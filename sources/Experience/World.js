import * as THREE from 'three'
import assets from './assets.js'
import Experience from './Experience.js'
import HTML from './html.js'

export default class World
{
    constructor(_options)
    {
        this.experience = new Experience()
        this.config = this.experience.config
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        
        this.resources.on('groupEnd', (_group) =>
        {
            if(_group.name === 'base')
            {
                this.setRoom()
                this.setHTML()
            }
        })
    }
    setHTML()
    {
        this.HTML = new HTML()
    }

    setRoom()
    {
        this.room = {}
        this.room.model = this.resources.items.roomModel.scene
        
        // // recupere texture dans assets.js
         this.room.texture = this.resources.items.bakedTexture
         this.room.texture.encoding = THREE.sRGBEncoding
        //applique la texture
        this.room.material = new THREE.MeshBasicMaterial({ map : this.room.texture})

        // // coordonnées de texture inversées
        this.room.texture.flipY = false

        this.room.model.traverse((_child)=>
        {
            if (_child instanceof THREE.Mesh )
            {
                _child.material = this.room.material
            }
        })


        this.scene.add(this.room.model)
    
    }

    resize()
    {
    }

    update()
    {
        if(this.HTML)
            this.HTML.update()
    }

    destroy()
    {
    }
}