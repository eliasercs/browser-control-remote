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

//capture
const fps=document.querySelector("#fps")
const exp=document.querySelector("#exposure")
const gain_cap=document.querySelector("#gain_cap")

//color
const red=document.querySelector("#red")
const blue=document.querySelector("#blue")
const imgbr=document.querySelector("#brightness")
const imgco=document.querySelector("#contrast")
const imgsat=document.querySelector("#saturation")
const imggain=document.querySelector("#gain_color")
const imggamma=document.querySelector("#gamma")

//shutter
//const shutter=document.querySelector("#shutter")

//CAPTURE
fps.addEventListener("change",()=>{
    var val=fps.value
    val=parseFloat(val)
    var url=url_fps
    fetch_post_params(url,val)
    //console.log(val)
})

exp.addEventListener("change", ()=>{
    var val=exp.value
    val= parseFloat(val)
    var url=url_exp
    fetch_post_params(url,val)
    //console.log(val)
})

gain_cap.addEventListener("change", ()=>{
    var val=gain_cap.value
    val= parseFloat(val)
    var url=url_gain
    fetch_post_params(url,val)
    //console.log(val)
})

// top - depth consulta


//COLOR
red.addEventListener("change", ()=>{
    var val=red.value
    val= parseFloat(val)
    var url=url_wb_red
    fetch_post_params(url,val)
    //console.log(val)
})

blue.addEventListener("change", ()=>{
    var val=blue.value
    val= parseFloat(val)
    var url=url_wb_blue
    fetch_post_params(url,val)
    //console.log(val)
})

imgbr.addEventListener("change", ()=>{
    var val=imgbr.value
    val= parseFloat(val)
    var url=url_imgbr
    fetch_post_params(url,val)
    //console.log(val)
})

imgco.addEventListener("change", ()=>{
    var val=imgco.value
    val= parseFloat(val)
    var url=url_imgco
    fetch_post_params(url,val)
    //console.log(val)
})

imgsat.addEventListener("change", ()=>{
    var val=imgsat.value
    val= parseFloat(val)
    var url=url_imgsat
    fetch_post_params(url,val)
    //console.log(val)
})

//SHUTTER  pendiente
/*document.querySelector("#shutter").addEventListener("change", ()=>{
        var val=0
        val=parseInt(val)
        var val=shutter[1].value
        var val=shutter[2].value
    console.log(val)
})*/



//fetch post
 function fetch_post_params(url,val){
    fetch(url,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({value:val})
    })
    console.log(val)
}