var url_par_list='system/station1/dhs1/parlist'
var url_width='system/station1/dhs1/par/width'
var url_height='system/station1/dhs1/par/height'
var url_left='system/station1/dhs1/par/left'
var url_fps='system/station1/dhs1/par/fps'
var url_exp='system/station1/dhs1/par/exp'
var url_gain='system/station1/dhs1/par/gain'
var url_wb_red='system/station1/dhs1/par/wb-red'
var url_wb_blue='system/station1/dhs1/par/wb-blue'
var url_imgbr='system/station1/dhs1/par/img-br'
var url_imgco='system/station1/dhs1/par/img-co'
var url_imgsat='system/station1/dhs1/par/img-sat'
var url_imggain='system/station1/dhs1/par/img-gain'
var url_imggamma='system/station1/dhs1/par/img-gamma'
var url_cam_shutter='system/station1/dhs1/par/cam-shutter'
var url_cam_trigger='system/station1/dhs1/par/cam-trigger'
var url_cam_fan='system/station1/dhs1/par/cam-fan'
var url_cam_lights='system/station1/dhs1/par/cam-lights'
var url_cam_rst_time='system/station1/dhs1/par/cam-rst-time'
var url_cam_bref_add='system/station1/dhs1/par/cam-bref-add'
var url_cam_bref_del='system/station1/dhs1/par/cam-bref-del'
var url_cam_reset_spooler='system/station1/dhs1/par/cam-reset-spooler'
var url_cam_tones='system/station1/dhs1/par/cam-tones'

//list of param
fetch(url_par_list)
.then(res=>res.json())
.then(data=>{console.log(data)})
.catch(err=>console.log(err))

//image and capture

//width
fetch(url_width)
.then(res => res.json())
.then(data=>{
    //console.log(data)
    let element=document.getElementById('width')
    element.value=data.value
})
.catch(err => console.log(err))

//height
fetch(url_height)
.then(res => res.json())
.then(data=>{
    //console.log(data)
    let element=document.getElementById('height')
    element.value=data.value
})
.catch(err => console.log(err))

//left
fetch(url_left)
.then(res => res.json())
.then(data=>{
    //console.log(data)
    let element=document.getElementById('left')
    element.value=data.value
})
.catch(err => console.log(err))

//top y depth no enconrado


//fps
fetch(url_fps)
.then(res => res.json())
.then(data=>{
    //console.log(data)
    let element=document.getElementById('fps')
    element.value=data.value
})
.catch(err => console.log(err))

//expsure
fetch(url_exp)
.then(res => res.json())
.then(data=>{
    //console.log(data)
    let element=document.getElementById('exposure')
    element.value=data.value
})
.catch(err => console.log(err))

//gain
fetch(url_gain)
.then(res => res.json())
.then(data=>{
    //console.log(data)
    let element=document.getElementById('gain_cap')
    element.value=data.value
})
.catch(err => console.log(err))

//COLOR

//red
fetch(url_wb_red)
.then(res=>res.json())
.then(data=>{
    //console.log(data)
    //falta obtener el min y el max
    //min=data.range.lo
    document.getElementById('red').setAttribute("min",0)
    document.getElementById('red').setAttribute("max",1)
    document.getElementById('red').setAttribute("step",0.01)
})
.catch(err => console.log(err))

fetch(url_wb_red)
.then(res=>res.json())
.then(data=>{
    //console.log(data)
    var slider=document.getElementById("red")
    var output=document.getElementById("value_red")
    output.innerHTML=slider.value
    slider.oninput=function(){
        output.setAttribute("value",this.value)
    }
})
.catch(err => console.log(err))

//blue
fetch(url_wb_blue)
.then(res=>res.json())
.then(data=>{
    //console.log(data)
    //falta obtener el min y el max
    //min=data.range.lo
    document.getElementById('blue').setAttribute("min",0)
    document.getElementById('blue').setAttribute("max",1)
    document.getElementById('blue').setAttribute("step",0.01)
})
.catch(err => console.log(err))

fetch(url_wb_blue)
.then(res=>res.json())
.then(data=>{
    //console.log(data)
    var slider=document.getElementById("blue")
    var output=document.getElementById("value_blue")
    output.innerHTML=slider.value
    slider.oninput=function(){
        output.setAttribute("value",this.value)
    }
})
.catch(err => console.log(err))

//brightness
fetch(url_imgbr)
.then(res=>res.json())
.then(data=>{
    //console.log(data)
    //falta obtener el min y el max
    //min=data.range.lo
    document.getElementById('brightness').setAttribute("min",0)
    document.getElementById('brightness').setAttribute("max",1)
    document.getElementById('brightness').setAttribute("step",0.01)
})
.catch(err => console.log(err))

fetch(url_imgbr)
.then(res=>res.json())
.then(data=>{
    //console.log(data)
    var slider=document.getElementById("brightness")
    var output=document.getElementById("value_brightness")
    output.innerHTML=slider.value
    slider.oninput=function(){
        output.setAttribute("value",this.value)
    }
})
.catch(err => console.log(err))

//contrast
fetch(url_imgco)
.then(res=>res.json())
.then(data=>{
    //console.log(data)
    //falta obtener el min y el max
    //min=data.range.lo
    document.getElementById('contrast').setAttribute("min",0)
    document.getElementById('contrast').setAttribute("max",1)
    document.getElementById('contrast').setAttribute("step",0.01)
})
.catch(err => console.log(err))

fetch(url_imgco)
.then(res=>res.json())
.then(data=>{
    //console.log(data)
    var slider=document.getElementById("contrast")
    var output=document.getElementById("value_contrast")
    output.innerHTML=slider.value
    slider.oninput=function(){
        output.setAttribute("value",this.value)
    }
})
.catch(err => console.log(err))

//saturation
fetch(url_imgsat)
.then(res=>res.json())
.then(data=>{
    //console.log(data)
    //falta obtener el min y el max
    //min=data.range.lo
    document.getElementById('saturation').setAttribute("min",0)
    document.getElementById('saturation').setAttribute("max",1)
    document.getElementById('saturation').setAttribute("step",0.01)
})
.catch(err => console.log(err))


fetch(url_imgco)
.then(res=>res.json())
.then(data=>{
    //console.log(data)
    var slider=document.getElementById("saturation")
    var output=document.getElementById("value_saturation")
    output.innerHTML=slider.value
    slider.oninput=function(){
        output.setAttribute("value",this.value)
    }
})
.catch(err => console.log(err))

//gain
fetch(url_imggain)
.then(res=>res.json())
.then(data=>{
    //console.log(data)
    //falta obtener el min y el max
    //min=data.range.lo
    document.getElementById('gain_color').setAttribute("min",0)
    document.getElementById('gain_color').setAttribute("max",1)
    document.getElementById('gain_color').setAttribute("step",0.01)
})
.catch(err => console.log(err))

fetch(url_imggain)
.then(res=>res.json())
.then(data=>{
    //console.log(data)
    var slider=document.getElementById("gain_color")
    var output=document.getElementById("value_gain")
    output.innerHTML=slider.value
    slider.oninput=function(){
        output.setAttribute("value",this.value)
    }
})
.catch(err => console.log(err))

//gamma
fetch(url_imggamma)
.then(res=>res.json())
.then(data=>{
    //console.log(data)
    //falta obtener el min y el max
    //min=data.range.lo
    document.getElementById('gamma').setAttribute("min",0)
    document.getElementById('gamma').setAttribute("max",1)
    document.getElementById('gamma').setAttribute("step",0.01)
})
.catch(err => console.log(err))


fetch(url_imggamma)
.then(res=>res.json())
.then(data=>{
    //console.log(data)
    var slider=document.getElementById("gamma")
    var output=document.getElementById("value_gamma")
    output.innerHTML=slider.value
    slider.oninput=function(){
        output.setAttribute("value",this.value)
    }
})
.catch(err => console.log(err))

// camera

//shutter
fetch(url_cam_shutter)
.then(res=>res.json())
.then(data=>{
    //console.log(data)
    let element1=document.getElementById('ROLLING')
    element1.value=data.opt[0]
    let element2=document.getElementById('GLOBAL')
    element2.value=data.opt[1]
    let element3=document.getElementById('BRIGHT')
    element3.value=data.opt[2]
})
.catch(err => console.log(err))

//trigger
fetch(url_cam_trigger)
.then(res=>res.json())
.then(data=>{
    //console.log(data)
    let element1=document.getElementById('INTERNAL')
    element1.value=data.opt[0]
    let element2=document.getElementById('GPIO0')
    element2.value=data.opt[1]
    let element3=document.getElementById('GPIO1')
    element3.value=data.opt[2]
    let element4=document.getElementById('GPIO2')
    element4.value=data.opt[3]
    let element5=document.getElementById('GPIO3')
    element5.value=data.opt[4]
})
.catch(err => console.log(err))

//MISC

//fan
fetch(url_cam_fan)
.then(res=>res.json())
.then(data=>{
    //console.log(data)
    let element1=document.getElementById('FAN')
    element1.value=data.value
})
.catch(err => console.log(err))

//lights
fetch(url_cam_lights)
.then(res=>res.json())
.then(data=>{
    //console.log(data)
    let element1=document.getElementById('LIGHTS')
    element1.value=data.value
})
.catch(err => console.log(err))

/*reset time
fetch(url_cam_rst_time)
.then(res=>res.json())
.then(data=>{
    //console.log(data)
    let element1=document.getElementById('RESET TIME')
    element1.value=data.opt[0]
})
.catch(err => console.log(err))*/

/*black reference
fetch(url_cam_fan)
.then(res=>res.json())
.then(data=>{
    //console.log(data)
    let element1=document.getElementById('ROLLING')
    element1.value=data.opt[0]
})
.catch(err => console.log(err))*/

/*Reset spooler
fetch(url_cam_fan)
.then(res=>res.json())
.then(data=>{
    //console.log(data)
    let element1=document.getElementById('ROLLING')
    element1.value=data.opt[0]
})
.catch(err => console.log(err))
*/

//tones curves
fetch(url_cam_tones)
.then(res=>res.json())
.then(data=>{
    //console.log(data)
    let element1=document.getElementById('1.00')
    element1.value=data.opt[0]
    let element2=document.getElementById('1.25')
    element2.value=data.opt[1]
    let element3=document.getElementById('1.60')
    element3.value=data.opt[2]
    let element4=document.getElementById('2.00')
    element4.value=data.opt[3]
    let element5=document.getElementById('2.50')
    element5.value=data.opt[4]
    let element6=document.getElementById('3.20')
    element6.value=data.opt[5]
    let element7=document.getElementById('4.00')
    element7.value=data.opt[6]
    let element8=document.getElementById('5.00')
    element8.value=data.opt[7]
})
.catch(err => console.log(err))
