

var d=new Date(); var n=d.toString();
var postscritto="?"+n;


var nome_JQUERYS="JQUERYS.js"+postscritto;
var JQUERYS=document.createElement("script");
JQUERYS.src=nome_JQUERYS;
document.getElementsByTagName("head")[0].appendChild(JQUERYS);
/*
var nome_tablette_cm_0001="tablette-cm-0018.js"+postscritto;
var tablette_cm_0001=document.createElement("script");
tablette_cm_0001.src=nome_tablette_cm_0001;
document.getElementsByTagName("head")[0].appendChild(tablette_cm_0001);
*/
var nome_alfabeta_bs_standard="http://noteapiedipagina.altervista.org/cm-op/cm-op-v-00/alfabeta/bs/standard/default.js"+postscritto;
var alfabeta_bs_standard=document.createElement("script");
alfabeta_bs_standard.src=nome_alfabeta_bs_standard;
document.getElementsByTagName("head")[0].appendChild(alfabeta_bs_standard);
var nome_menu_cm_0001="menu-cm-0020.js"+postscritto;
var menu_cm_0001=document.createElement("script");
menu_cm_0001.src=nome_menu_cm_0001;
document.getElementsByTagName("head")[0].appendChild(menu_cm_0001);
var nome_menu_icone_standard="http://noteapiedipagina.altervista.org/cm-op/cm-op-v-00/alfabeta/menu-icone-standard/defaultX.js"+postscritto;
var menu_icone_standard=document.createElement("script")
menu_icone_standard.src=nome_menu_icone_standard;
document.getElementsByTagName("head")[0].appendChild(menu_icone_standard);
var nome_spinner_cm="http://noteapiedipagina.altervista.org/cm-op/cm-op-v-00/alfabeta/spinner-cm/defaultX.js"+postscritto;
var spinner_cm=document.createElement("script");
spinner_cm.src=nome_spinner_cm;
document.getElementsByTagName("head")[0].appendChild(spinner_cm);




/* default menu-icone-standard rev20210220_0830 */
document.getElementById("menu-icone-standard-dark-menu").innerHTML=
'<link href="https://fonts.googleapis.com/css2?family=PT+Mono&display=swap" rel="stylesheet"> '+
''+
''+
'<div class="x"> '+
''+
''+
''+
'<button type="button" '+
'class="btn shadow-none bg-warning rounded position-fixed" '+
'data-toggle="collapse"'+
'data-target="#COLLAPSE-MENU"'+
'aria-expanded="false"'+
'>'+
'<svg width="1rem" height="1rem" viewBox="0 0 16 16" class="bi bi-back" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2z"/></svg>'+
'</button>'+
''+
''+
''+
''+
'<span>'+
'<a id="menu-icone-standard-arrow-up" style="" href="#"> '+
''+
''+
'<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="maroon" class="bi bi-arrow-up-short" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"/></svg>'+
'</a>'+
'<br/>'+
'<a id="menu-icone-standard-arrow-down" style="" href="#fine"> '+
''+
''+
'<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="maroon" class="bi bi-arrow-down-short" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/></svg>'+
'</a>'+
'</span>'+
''+
' '+
''+
'</div> '+
' '+
''+
''+
''+
'<span class="offy invisible" onclick="SEMAFOROverde()">'+
'<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="teal" class="bi bi-toggle-on" viewBox="0 0 16 16">'+
'<path d="M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/>'+
'</svg>'+
'</span>'+
''+
'<span class="offx invisible" onclick="SEMAFOROrosso()">'+
'<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="maroon" class="bi bi-toggle-off" viewBox="0 0 16 16">'+
'<path d="M11 4a4 4 0 0 1 0 8H8a4.992 4.992 0 0 0 2-4 4.992 4.992 0 0 0-2-4h3zm-6 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM0 8a5 5 0 0 0 5 5h6a5 5 0 0 0 0-10H5a5 5 0 0 0-5 5z"/>'+
'</svg>'+
'</span>'+
''+
''+
''+
''+
''+
''+
''+
''+
''+
''+
''+
''+
''+
''+
''+
''+
''+
''+
''+
''+
''+
''+
''+
''+
''+
'<style>'+
'/* tablone stile */'+
'/* '+
'20210222 1830 '+

' DARK_MENU '+
''+
'*/'+
''+
''+
':root {'+
'--bsnr-giallo: rgba(255, 170, 0, 0.035);'+
'--bsnr-html: rgba(255, 170, 0, 0.035);'+
'--bsnr-oldlace: rgba(253,245,230,0.5);'+
'--bsnr-oldlace: rgba(253,245,230,0.275);'+
''+
'background-color:rgba(255,170,0,0.5);'+
'background-color:rgba(255,170,0,0.0);'+
''+
''+
'letter-spacing:0.025rem !important;'+
''+
'}'+
''+
''+
'html * {'+
'color:black !important;'+
'font-size:1.2rem !important;'+
'font-family: "PT Mono" , monospace !important;'+
'text-align:left !important;'+
'} '+
''+
'body{'+
'background-color:oldlace;'+
'background-color:rgba(253,245,230,0.5);'+
'background-color:rgba(253,245,230,0.0);'+
''+
'}'+
''+
'main{'+
'margin-top:2.5rem !important;'+
'margin-bottom:18.5rem !important;'+
'border:solid 0.1rem rgba(255,0,0,0.15) !important;'+
'border:solid 0.1rem rgba(255,0,0,0.0) !important;'+
'/* overflow:auto !important; */'+
''+
'}'+
''+
''+
'table#tablone, table#tablette{ '+
'table-layout:fixed !important;'+
'width:100% !important;'+
'border:solid 0.0rem green !important;'+
'}'+
''+
'td#tablone-td-sinistra{'+
'width:0.5rem !important;'+
'border:solid 0.0rem grey !important;'+
'}'+
''+
'td#tablone-td-destra{'+
'border:solid 0.0rem lawngreen !important;'+
'}'+
''+
''+
''+
''+
''+
''+
''+
''+
''+
''+
'.posizioneSPINNERpausa{'+
'position:fixed;'+
'top:50%;left:50%;'+
'background-color:var(--bs-white) !important;'+
'background-color:oldlace!important;'+
'margin-left:-6.25rem !important; margin-top:-4.65rem !important; '+
'border-radius:0.2rem !important; visibility:visible !important;'+
''+
''+
'}'+
''+
''+
''+
''+
''+
''+
''+
'.posizioneOUTSPINNER{'+
'position:fixed;bottom:0;left:0;'+
'z-index:10000;visibility:visible;'+
''+
''+
'}'+
''+
''+
''+
''+
''+
''+
''+
''+
''+
'div#COLLAPSE-MENU{'+
''+
''+
' visibility:visible !important; '+
' margin-left:2.41rem !important; '+
' margin-right:2.41rem !important; '+
' margin-bottom:2rem !important; '+
' border:solid 0.2rem transparent !important; '+
''+
'}'+
''+
''+
''+
''+
'div#COLLAPSE-MENU>span{'+
''+
'position:fixed;top:10rem;margin-top:-3rem!important;left:0;'+
'background-color:oldlace!important;visibility:visible!important;'+
''+
'}'+
''+
''+
''+
''+
'div#COLLAPSE-MENU>span>a#COLLAPSE-MENU-arrow-left,'+
'div#COLLAPSE-MENU>span>a#COLLAPSE-MENU-arrow-right{'+
''+
'display:inline-block;'+
''+
'}'+
''+
''+
''+
''+
''+
''+
''+
''+
''+
'div.x{'+
''+
''+
' position:fixed !important; '+
' bottom:0rem !important; '+
' left:0rem !important; '+
''+
' margin-left:0.5% !important; '+
' margin-right:0.5% !important; '+
''+
' width:99% !important; '+
' height:auto !important; '+
' font-size:1.1rem !important; '+
''+
''+
' text-align:left !important; '+
' '+
' border:solid 0.2rem transparent !important; '+
''+
'}'+
''+
''+
''+
''+
''+
''+
''+
''+
'div.x>button{'+
''+
'top:2.5rem;right:0;font-size:1rem!important;'+
''+
'}'+
''+
''+
''+
''+
''+
''+
''+
'div.x>span{'+
''+
'position:fixed;top:10rem;'+
'margin-top:-3rem!important;right:0;'+
'background-color:oldlace!important;'+
''+
'}'+
''+
''+
''+
'div.x>span>a#menu-icone-standard-arrow-up, '+
'div.x>span>a#menu-icone-standard-arrow-down{'+
''+
''+
'display:inline-block;'+
''+
'}'+
''+
''+
''+
''+
''+
''+
''+
''+
''+
''+
''+
''+
''+
'main{padding-bottom:18.5rem !important;}'+
''+
''+
''+
''+
''+
''+
'</style>'+
''+
''+
''+
'';



document.getElementById("spinner-cm").innerHTML=
' <div class="vedoBODY OUT" id="SPINNERpausa" '+
' style="/**/position:fixed;'+
' top:50%;left:50%;'+
' background-color:var(--bs-white) !important;'+
' background-color:oldlace!important;'+
' margin-left:-6.25rem !important; margin-top:-4.65rem !important; '+
' border-radius:0.2rem !important; visibility:visible !important;/**/">'+
' '+
' <span id="pausa" class="spinner-border text-warning"></span>'+
' <blockquote>'+
' <span style="background-color:transparent !important;">'+
' <span id="Loading"'+
' style="color:var(--bs-indigo) !important; font-size:2rem !important;">'+
' Loading...</span>'+
' <span id="percento" '+
' style="color:var(--bs-indigo) !important;'+
' font-size:2rem !important;font-variant:small-caps !important;">'+
' </span>'+
' </span>'+
' '+
' </blockquote>'+
' <blockquote>'+
' <style>'+
' .vedoTOGGLE, .TOGGLEicona{cursor:pointer !important;'+
' background-color:rgba(255,165,0,0) !important;'+
' background-color:oldlace!important;'+
' border:solid 0.12rem rgba(75,0,130,0) !important;}'+
' '+
' '+
' </style>'+
' <span onclick="vedoBODY()" '+
' class="TOGGLEicona rounded">'+
' <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="teal" class="bi bi-toggle-on" viewBox="0 0 16 16">'+
' <path d="M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/>'+
' </svg>'+
' </span>'+
' </blockquote>'+
' </div> '+
' '+
'';
function vedoBODY() { 
 element = document.querySelector(".vedoBODY"); 
 element.style.visibility = "hidden"; 
 body.style.visibility = "visible";
 html.style.backgroundColor = "rgba(253,245,230,0.5)";
 
 }
function ATTESA(){
if (document.all){} 
else if 
(document.getElementById)
{ 
document.getElementById("pausa").style.visibility="hidden";
document.getElementById("percento").style.visibility="hidden";
document.getElementById("Loading").style.visibility="hidden";
document.getElementById("SPINNERpausa").style.visibility="hidden";
document.getElementById("body").style.visibility="visible";
document.getElementById("body").style.backgroundColor = 'default';
document.getElementById("html").style.backgroundColor = 'transparent';
}
}
var percento=document.getElementById("percento");
var contatore=1; 
var intervallo=setInterval( function() { percento.innerHTML=contatore+"%"; 
contatore++; if (contatore===101) {clearInterval(intervallo);} 
} , 9000) 





function OUTSPINNER() {
 element = document.querySelector(".OUTSPINNER");
 element.style.visibility = "hidden";
 body.style.visibility = "visible";
 html.style.backgroundColor = "rgba(253,245,230,0.5)";
 element = document.querySelector("#SPINNERpausa");
 element.style.visibility = "hidden";
 body.style.visibility = "visible";
 html.style.backgroundColor = "rgba(253,245,230,0.5)";
 }


