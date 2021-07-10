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




var timeLeft = 30;
var elem = document.getElementById('btn-resend');
var timerId = setInterval(countdown, 1000);

function countdown() {
    if (timeLeft == -1) {
        clearTimeout(timerId);
        elem.innerHTML = "Send OTP Again";
    } else {
        elem.innerHTML = 'Resend in ' + timeLeft ;
        timeLeft--;
    }
}