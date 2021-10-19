
var url_par_list = `system/station1/dhs1/parlist`
var url_width = `system/station1/dhs1/par/width`
var url_height = `system/station1/dhs1/par/height`
var url_left = `system/station1/dhs1/par/left`
var url_right = `system/station1/dhs1/par/right`
var url_fps = `system/station1/dhs1/par/fps`
var url_exp = `system/station1/dhs1/par/exp`
var url_gain = `system/station1/dhs1/par/gain`
var url_wb_red = `system/station1/dhs1/par/wb-red`
var url_wb_blue = `system/station1/dhs1/par/wb-blue`
var url_imgbr = `system/station1/dhs1/par/img-br`
var url_imgco = `system/station1/dhs1/par/img-co`
var url_imgsat = `system/station1/dhs1/par/img-sat`
var url_imggain = `system/station1/dhs1/par/img-gain`
var url_imggamma = `system/station1/dhs1/par/img-gamma`
var url_cam_shutter = `system/station1/dhs1/par/cam-shutter`
var url_cam_trigger = `system/station1/dhs1/par/cam-trigger`
var url_cam_fan = `system/station1/dhs1/par/cam-fan`
var url_cam_lights = `system/station1/dhs1/par/cam-lights`
var url_cam_rst_time = `system/station1/dhs1/par/cam-rst-time`
var url_cam_bref_add = `system/station1/dhs1/par/cam-bref-add`
var url_cam_bref_del = `system/station1/dhs1/par/cam-bref-del`
var url_cam_reset_spooler = `system/station1/dhs1/par/cam-reset-spooler`
var url_cam_tones = `system/station1/dhs1/par/cam-tones`

//list of param
fetch(url_par_list)
    .then(res => res.json())
    .then(data => { console.log(data) })
    .catch(err => console.log(err))

//width
fetch(url_width)
    .then(res => res.json())
    .then(data => {
        //console.log(data)
        let element = document.getElementById("width")
        element.setAttribute("min", data.range.lo)
        element.setAttribute("max", data.range.hi)
        element.value = data.value
        document.getElementById("widthValue").value = data.value
    })
    .catch(err => console.log(err))


//left
fetch(url_left)
    .then(res => res.json())
    .then(data => {
        //console.log(data)
        let element = document.getElementById('left')
        element.setAttribute("min", data.range.lo)
        element.setAttribute("max", data.range.hi)
        element.value = data.value
        document.getElementById("leftValue").value = data.value
    })
    .catch(err => console.log(err))

//height
fetch(url_height)
    .then(res => res.json())
    .then(data => {
        //console.log(data)
        let element = document.getElementById('height')
        element.setAttribute("min", data.range.lo)
        element.setAttribute("max", data.range.hi)
        element.value = data.value
        document.getElementById("heightValue").value = data.value
    })
    .catch(err => console.log(err))

//right
fetch(url_right)
    .then(res => res.json())
    .then(data => {
        //console.log(data)
        let element = document.getElementById('right')
        element.setAttribute("min", data.range.lo)
        element.setAttribute("max", data.range.hi)
        element.value = data.value
        document.getElementById("rightValue").value = data.value
    })
    .catch(err => console.log(err))


//fps
fetch(url_fps)
    .then(res => res.json())
    .then(data => {
        //console.log(data)
        let element = document.getElementById('fps')
        element.setAttribute("min", data.range.lo)
        element.setAttribute("max", data.range.hi)
        element.value = data.value
        document.getElementById("fps_value").value = data.value
    })
    .catch(err => console.log(err))

//expsure
fetch(url_exp)
    .then(res => res.json())
    .then(data => {
        //console.log(data)
        let element = document.getElementById('exposure')
        element.setAttribute("min", data.range.lo)
        element.setAttribute("max", data.range.hi)
        element.value = data.value
        document.getElementById("exposure_value").value = data.value
    })
    .catch(err => console.log(err))

//gain
fetch(url_gain)
    .then(res => res.json())
    .then(data => {
        //console.log(data)
        let element = document.getElementById('gain_cap')
        element.setAttribute("min", data.range.lo)
        element.setAttribute("max", data.range.hi)
        element.value = data.value
        document.getElementById("gain_cap_value").value = data.value
    })
    .catch(err => console.log(err))

//COLOR

//red
fetch(url_wb_red)
    .then(res => res.json())
    .then(data => {
        document.getElementById('red').setAttribute("min", data.range.lo)
        document.getElementById('red').setAttribute("max", data.range.hi)
        document.getElementById('red').setAttribute("step", 0.01)
        document.getElementById("red").value = data.value
        document.getElementById("value_red").value = data.value
    })
    .catch(err => console.log(err))

fetch(url_wb_blue)
    .then(res => res.json())
    .then(data => {
        document.getElementById('blue').setAttribute("min", data.range.lo)
        document.getElementById('blue').setAttribute("max", data.range.hi)
        document.getElementById('blue').setAttribute("step", 0.01)
        document.getElementById("blue").value = data.value
        document.getElementById("value_blue").value = data.value
    })
    .catch(err => console.log(err))

//brightness
fetch(url_imgbr)
    .then(res => res.json())
    .then(data => {
        document.getElementById('brightness').setAttribute("min", data.range.lo)
        document.getElementById('brightness').setAttribute("max", data.range.hi)
        document.getElementById('brightness').setAttribute("step", 0.01)
        document.getElementById("brightness").value = data.value
        document.getElementById("value_brightness").value = data.value
    })
    .catch(err => console.log(err))

//contrast
fetch(url_imgco)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.getElementById('contrast').setAttribute("min", data.range.lo)
        document.getElementById('contrast').setAttribute("max", data.range.hi)
        document.getElementById('contrast').setAttribute("step", 0.01)
        document.getElementById("contrast").value = data.value
        document.getElementById("value_contrast").value = data.value
    })
    .catch(err => console.log(err))

//saturation
fetch(url_imgsat)
    .then(res => res.json())
    .then(data => {
        document.getElementById('saturation').setAttribute("min", data.range.lo)
        document.getElementById('saturation').setAttribute("max", data.range.hi)
        document.getElementById('saturation').setAttribute("step", 0.01)
        document.getElementById("saturation").value = data.value
        document.getElementById("value_saturation").value = data.value
    })
    .catch(err => console.log(err))

//gain
fetch(url_imggain)
    .then(res => res.json())
    .then(data => {
        document.getElementById('gain_color').setAttribute("min", data.range.lo)
        document.getElementById('gain_color').setAttribute("max", data.range.hi)
        document.getElementById('gain_color').setAttribute("step", 0.01)
        document.getElementById("gain_color").value = data.value
        document.getElementById("value_gain").value = data.value
    })
    .catch(err => console.log(err))

//gamma
fetch(url_imggamma)
<<<<<<< HEAD
    .then(res => res.json())
    .then(data => {
        document.getElementById('gamma').setAttribute("min", data.range.lo)
        document.getElementById('gamma').setAttribute("max", data.range.hi)
        document.getElementById('gamma').setAttribute("step", 0.01)
        document.getElementById("gamma").value = data.value
        document.getElementById("value_gamma").value = data.value
    })
    .catch(err => console.log(err))
=======
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
    data.opt.map((item,key)=>{
        var option=document.createElement("option")
        option.value=key
        option.text=item
        document.getElementById("shutter").appendChild(option)
        //console.log(option.value)
        //console.log(option.text)
    })
})
.catch(err => console.log(err))

//trigger
fetch(url_cam_trigger)
.then(res=>res.json())
.then(data=>{
    data.opt.map((item,key)=>{
        var option=document.createElement("option")
        option.value=key
        option.text=item
        document.getElementById("trigger").appendChild(option)
        //console.log(option.value)
        //console.log(option.text)
    })
})
.catch(err => console.log(err))
>>>>>>> develop2


<<<<<<< HEAD
=======
fetch(url_cam_trigger)
.then(res=>res.json())
.then(data=>{
    data.opt.map((item,key)=>{
        var option=document.createElement("option")
        option.value=key
        option.text=item
        document.getElementById("trigger").appendChild(option)
        //console.log(option.value)
        //console.log(option.text)
    })
})
.catch(err => console.log(err))

//fan
fetch(url_cam_fan)
.then(res=>res.json())
.then(data=>{
    //console.log(data)
    let element1=document.getElementById('FAN')
    element1.value=data.value
})
.catch(err => console.log(err))
>>>>>>> develop2





