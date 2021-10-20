

var url_cam_tones = `system/${document.getElementById("stations").value === "default" ? "station1" : document.getElementById("stations").value}/dhs1/par/cam-tones`
var url_cam_shutter = `system/${document.getElementById("stations").value === "default" ? "station1" : document.getElementById("stations").value}/dhs1/par/cam-shutter`
var url_cam_trigger = `system/${document.getElementById("stations").value === "default" ? "station1" : document.getElementById("stations").value}/dhs1/par/cam-trigger`


fetch(url_cam_tones)
    .then(res => res.json())
    .then(data => {
        data.opt.map((item, key) => {
            var option = document.createElement("option")
            option.value = key
            option.text = item
            document.getElementById("tone_curve").appendChild(option)
            //console.log(option.value)
            //console.log(option.text)
        })
    })
    .catch(err => console.log(err))


fetch(url_cam_shutter)
    .then(res => res.json())
    .then(data => {
        data.opt.map((item, key) => {
            var option = document.createElement("option")
            option.value = key
            option.text = item
            document.getElementById("shutter").appendChild(option)
            //console.log(option.value)
            //console.log(option.text)
        })
    })
    .catch(err => console.log(err))

//trigger
fetch(url_cam_trigger)
    .then(res => res.json())
    .then(data => {
        data.opt.map((item, key) => {
            var option = document.createElement("option")
            option.value = key
            option.text = item
            document.getElementById("trigger").appendChild(option)
            //console.log(option.value)
            //console.log(option.text)
        })
    })
    .catch(err => console.log(err))

document.querySelector("#stations").addEventListener("input", () => {


    var url_par_list = `system/${document.getElementById("stations").value}/dhs1/parlist`
    var url_width = `system/${document.getElementById("stations").value}/dhs1/par/width`
    var url_height = `system/${document.getElementById("stations").value}/dhs1/par/height`
    var url_left = `system/${document.getElementById("stations").value}/dhs1/par/left`
    var url_right = `system/${document.getElementById("stations").value}/dhs1/par/right`
    var url_fps = `system/${document.getElementById("stations").value}/dhs1/par/fps`
    var url_exp = `system/${document.getElementById("stations").value}/dhs1/par/exp`
    var url_gain = `system/${document.getElementById("stations").value}/dhs1/par/gain`
    var url_wb_red = `system/${document.getElementById("stations").value}/dhs1/par/wb-red`
    var url_wb_blue = `system/${document.getElementById("stations").value}/dhs1/par/wb-blue`
    var url_imgbr = `system/${document.getElementById("stations").value}/dhs1/par/img-br`
    var url_imgco = `system/${document.getElementById("stations").value}/dhs1/par/img-co`
    var url_imgsat = `system/${document.getElementById("stations").value}/dhs1/par/img-sat`
    var url_imggain = `system/${document.getElementById("stations").value}/dhs1/par/img-gain`
    var url_imggamma = `system/${document.getElementById("stations").value}/dhs1/par/img-gamma`
    //var url_cam_shutter = `system/${document.getElementById("stations").value}/dhs1/par/cam-shutter`
    //var url_cam_trigger = `system/${document.getElementById("stations").value}/dhs1/par/cam-trigger`
    var url_cam_fan = `system/${document.getElementById("stations").value}/dhs1/par/cam-fan`
    var url_cam_lights = `system/${document.getElementById("stations").value}/dhs1/par/cam-lights`
    //var url_cam_rst_time = `system/${document.getElementById("stations").value}/dhs1/par/cam-rst-time`
    //var url_cam_bref_add = `system/${document.getElementById("stations").value}/dhs1/par/cam-bref-add`
    //var url_cam_bref_del = `system/${document.getElementById("stations").value}/dhs1/par/cam-bref-del`
    //var url_cam_reset_spooler = `system/${document.getElementById("stations").value}/dhs1/par/cam-reset-spooler`
    //var url_cam_tones = `system/${document.getElementById("stations").value}/dhs1/par/cam-tones`

    //list of param
    fetch(url_par_list)
        .then(res => res.json())
        .then(data => { console.log(data) })
        .catch(err => console.log(err))

    //image and capture

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
        .then(res => res.json())
        .then(data => {
            document.getElementById('gamma').setAttribute("min", data.range.lo)
            document.getElementById('gamma').setAttribute("max", data.range.hi)
            document.getElementById('gamma').setAttribute("step", 0.01)
            document.getElementById("gamma").value = data.value
            document.getElementById("value_gamma").value = data.value
        })
        .catch(err => console.log(err))

    //MISC

    //fan
    fetch(url_cam_fan)
        .then(res => res.json())
        .then(data => {
            //console.log(data)
            let element1 = document.getElementById('FAN')
            element1.value = data.value
            //console.log(element1.value)
        })
        .catch(err => console.log(err))

    //lights
    fetch(url_cam_lights)
        .then(res => res.json())
        .then(data => {
            //console.log(data)
            let element1 = document.getElementById('LIGHTS')
            element1.value = data.value
            //console.log(element1.value)
        })
        .catch(err => console.log(err))

})