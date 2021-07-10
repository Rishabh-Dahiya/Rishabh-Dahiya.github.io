function changeimage(index,Imageindex){
    document.getElementById('step1').setAttribute("class",'grayjs');
    document.getElementById('step2').setAttribute("class",'grayjs');
    document.getElementById('step3').setAttribute("class",'grayjs');
    document.getElementById('step4').setAttribute("class",'grayjs');
    document.getElementById('step5').setAttribute("class",'grayjs');
    document.getElementById('step6').setAttribute("class",'grayjs');
    document.getElementById('step7').setAttribute("class",'grayjs');

    document.getElementById('step1_fig').setAttribute("class",'hide');
    document.getElementById('step2_fig').setAttribute("class",'hide');
    document.getElementById('step3_fig').setAttribute("class",'hide');
    document.getElementById('step4_fig').setAttribute("class",'hide');
    document.getElementById('step5_fig').setAttribute("class",'hide');
    document.getElementById('step6_fig').setAttribute("class",'hide');
    document.getElementById('step7_fig').setAttribute("class",'hide');
    document.getElementById(index).setAttribute("class",'activejs');
    document.getElementById(Imageindex).setAttribute("class",'show');

    
}

function showdiv(){
    const magic = document.getElementById('messages');
    magic.style.display == "flex"
    console.log(magic.style.display);
}
function closediv(){
    const magic = document.getElementById('messages');
    magic.style.display == "none"

    console.log(magic.style.display);
}

function checkingsomething(){
    const verifier = document.getElementById("idc");
    console.log(verifier.classList);
}