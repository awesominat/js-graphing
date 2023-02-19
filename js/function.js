
var canvas = document.getElementById("Canvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#000000";

var w = canvas.width;
var h = canvas.height;

var x, y;
var amp = 40;
var mamp = 142;


canvas.addEventListener('click', function () {
    //  chart(a, b);
}, false);


function chart() {




    var a;
    var b;
    var c;


    var formula = parseInt(this.value);
    var formulaName = (this.text);




    var prex, prey;
    ctx.strokeStyle = "#000000"

    var xmin = -100;
    var xmax = 100;

    var prex = null;

    console.log("Formula:", formula, ":", formulaName);

    //  for (a = 0; a < 1; a+=0.2) {
    x = xmin;

    var totalfunctions = 42;
    var i = 0;
    var step = 0.02;
    do {

        i = i + 1;


        switch (i) {

            case 1: // x=-2.7 \left\{-3<y<4.55\right\}
                y = -3;
                ymax = 4.55;
                var yy = null;
                var xx = function (x) {
                    return -2.6;
                }
                break;


            case 2: //  y = 4.55\left\{ -2.7 < x < -1.89\right\ }
                x = -2.7;
                xmax = -1.89;
                var yy = function (x) {
                    return 4.55;
                }
                break;

            case 3: //y = -3\left\{ -2.7 < x < -1.89\right\ }
                x = -2.7;
                xmax = -1.89;
                var yy = function (x) {
                    return -3;
                }
                break;

            case 4: //   x=-1.9\left\{3.6<y<4.55\right\}
                y = 3.6;
                ymax = 4.55;
                var yy = null;
                var xx = function (y) {
                    return -1.9;
                }
                break;


            case 5: //   x=-1.9\left\{-3<y<0.65\right\} x=-1.9\left\{-3<y<0.65\right\}
                y = -3;
                ymax = 0.65;
                var yy = null;
                var xx = function (y) {
                    return -1.9;
                }
                break;

            case 6: //  y=- |x-0.2 |-0.7 \{-0.4<x<0.73 \}
                x = -0.4;
                xmax = 0.73;
                var yy = function (x) {
                    return -Math.abs(x - 0.2) - 0.7;
                }
                break;

            case 7: //  y=0.9x-0.5   {-0.50<x<0.09 }
                x = -0.50;
                xmax = 0.09;
                var yy = function (x) {
                    return 0.9 * x - 0.5;
                }
                break;

            case 8: //  y=-1.2x+0 {0.50<x<0.88 }
                x = 0.50;
                xmax = 0.88;
                var yy = function (x) {
                    return -1.2 * x + 0;
                }
                break;

            case 9: //   y=-1.4x-1.66 {-0.64<x<-0.5 }
                x = -0.64;
                xmax = -0.5;
                var yy = function (x) {
                    return -1.4 * x - 1.66;
                }
                break;

            case 10: //   y=-3 {-1.51<x<-0.87 }
                x = -1.51;
                xmax = -0.87;
                var yy = function (x) {
                    return -3;
                }
                break;

            case 11: //   x=-0.87 {-3<y<-0.93 }      
                y = -3;
                ymax = -0.93;
                var yy = null;
                var xx = function (y) {
                    return -0.87;
                }
                break;

            case 12: //   x=-1.51 {-3<y<0.235 }   
                y = -3;
                ymax = 0.235;
                var yy = null;
                var xx = function (y) {
                    return -1.51;
                }
                break;

            case 13: //   x=-0.87 {0.3<y<1.04 }   
                y = 0.3;
                ymax = 1.04;
                var yy = null;
                var xx = function (y) {
                    return -0.87;
                }
                break;

            case 14: //   x=-1.58 {0.9<y<1.04 }    
                y = 0.9;
                ymax = 1.04;
                var yy = null;
                var xx = function (y) {
                    return -1.58;
                }
                break;

            case 15: //   y=1.04 {-1.58< x <-0.87 }
                x = -1.58;
                xmax = -0.87;
                var yy = function (x) {
                    return 1.04;
                }
                break;

            case 16: //  x=2.63 {-0.845<y<-0.3 }    
                y = -0.845;
                ymax = -0.3;
                var yy = null;
                var xx = function (y) {
                    return 2.63;
                }
                break;

            case 17: //  x=1 {-2.88<y<-2.54 }    
                y = -2.88;
                ymax = -2.54;
                var yy = null;
                var xx = function (y) {
                    return 1;
                }
                break;

            case 18: //  y=0.1 * sqrt{ (x-1.6\right)}-0.4 {x<2.63 }
                x = -10;
                xmax = 2.63;
                var yy = function (x) {
                    return 0.1 * Math.sqrt((x - 1.6)) - 0.4;
                }
                break;

            case 19: //  y=-2.9 {1<x<2.625 }
                x = 1;
                xmax = 2.625;
                var yy = function (x) {
                    return -2.9;
                }
                break;

            case 20: //  y=-0.5x^{3}+0.1x^{2}+0.1 {-0.73 < x < 1.09 }
                x = -0.73;
                xmax = 1.09;
                var yy = function (x) {
                    return -0.5 * Math.pow(x, 3) + 0.1 * Math.pow(x, 2) + 0.1;
                }
                break;
            case 21: //  x=0.09 {-0.42<y<-0.101 }  
                y = -0.42;
                ymax = -0.101;
                var yy = null;
                var xx = function (y) {
                    return 0.09;
                }
                break;
            case 22: //  x=0.5 {-0.6<y<-0.2 }  
                y = -0.6;
                ymax = -0.2;
                var yy = null;
                var xx = function (y) {
                    return 0.5;
                }
                break;
            case 23: //  y=-0.5x^{3}-0.1x^{2}+-0.1 {-0.81 <x<1.0 }
                x = -0.81;
                xmax = 1.0;
                var yy = function (x) {
                    return -0.5 * Math.pow(x, 3) - 0.1 * Math.pow(x, 2) + -0.1
                }
                break;

            case 24: //  y=0.7x-0.3   {-0.78<x<-0.65  }
                x = -0.78;
                xmax = -0.65;
                var yy = function (x) {
                    return 0.7 * x - 0.3
                }
                break;

            case 25: // y= sqrt{-1.44x^{2}+0.288x+1.4256}-0.3
                x = -50;
                xmax = 50;
                var yy = function (x) {
                    return Math.sqrt(-1.44 * Math.pow(x, 2) + 0.288 * x + 1.4256) - 0.3
                }
                break;

            case 26: // y= sqrt{-1.44x^{2}+0.288x+1.4256}-0.3
                x = -50;
                xmax = 50;
                var yy = function (x) {
                    return -Math.sqrt(-1.44 * Math.pow(x, 2) + 0.288 * x + 1.4256) - 0.3
                }
                break;

            case 27: //  y= sqrt{-1.36111x^{2}-.81666x+3.7975} + 2.2
                x = -10;
                xmax = 10;
                var yy = function (x) {
                    return Math.sqrt(-1.36111 * Math.pow(x, 2) - 0.81666 * x + 3.7975) + 2.2
                }
                break;

            case 28: //  y=- sqrt{-1.36111x^{2}-.81666x+3.7975}+2.2      {0.98<x }
                x = 0.98;
                xmax = 50;
                var yy = function (x) {
                    return -Math.sqrt(-1.36111 * Math.pow(x, 2) - 0.81666 * x + 3.7975) + 2.2
                }
                break;

            case 29: //  y=- sqrt{-1.36111x^{2}-.81666x+3.7975}+2.2 {-3<x<-1.58 }
                x = -3;
                xmax = -1.58;
                var yy = function (x) {
                    return -Math.sqrt(-1.36111 * Math.pow(x, 2) - 0.81666 * x + 3.7975) + 2.2
                }
                break;

            case 30: //  y= sqrt{-1.15976x^{2}+.69585x+1.85562}-0.3 {-0.87<x }
                x = -0.87;
                xmax = 50;
                var yy = function (x) {
                    return Math.sqrt(-1.15976 * Math.pow(x, 2) + 0.69585 * x + 1.85562) - 0.3
                }
                break;

            case 31: //  y= sqrt{-1.15976x^{2}+.69585x+1.85562}-0.3 {-0.87<x }
                x = -0.87;
                xmax = 50;
                var yy = function (x) {
                    return -Math.sqrt(-1.15976 * Math.pow(x, 2) + 0.69585 * x + 1.85562) - 0.3
                }
                break;

            case 32: //  y= sqrt{-x^{2}+5.76}+2.1 {-1.9 < x <  3 } { y> 0.229 }
                x = -1.9;
                xmax = 3;
                var yy = function (x) {
                    return Math.sqrt(-Math.pow(x, 2) + 5.76) + 2.1
                }
                break;

            case 33: //  y= sqrt{-x^{2}+5.76}+2.1 {-1.9 < x <  3 } { y> 0.229 }    - y=-\sqrt{-x^{2}+5.76}+2.1 {-1.9<x<\ -1.5\right\}\ 
                x = -1.9;
                xmax = -1.5;
                var yy = function (x) {
                    return -Math.sqrt(-Math.pow(x, 2) + 5.76) + 2.1
                }
                break;

            case 34: //    y= sqrt{-x^{2}+0.4x+0.05} + 0.5
                x = -50;
                xmax = 50;
                var yy = function (x) {
                    return Math.sqrt(-Math.pow(x, 2) + 0.4 * x + 0.05) + 0.5
                }
                break;

            case 35: //    y= sqrt{-x^{2}+0.4x+0.05} + 0.5
                x = -50;
                xmax = 50;
                var yy = function (x) {
                    return -Math.sqrt(-Math.pow(x, 2) + 0.4 * x + 0.05) + 0.5
                }
                break;

            case 36: //   y= sqrt{-0.0625x^{2}+0.325x-0.3585}-1.1 {1.3<x<2.625 }
                x = 1.3;
                xmax = 2.625;
                var yy = function (x) {
                    return Math.sqrt(-0.0625 * Math.pow(x, 2) + 0.325 * x - 0.3585) - 1.1
                }
                break;
            case 37: //   y= sqrt{-0.0625x^{2}+0.325x-0.3585}-1.1 {1.3<x<2.625 }
                x = 1.4;
                xmax = 2.625;
                var yy = function (x) {
                    return -Math.sqrt(-0.0625 * Math.pow(x, 2) + 0.325 * x - 0.3585) - 1.1
                }
                break;

            case 38: //    y= sqrt{-2.75x^{2}+12.375x-12.931875}-2.13 {2.625<x }
                x = 2.625;
                xmax = 10;
                var yy = function (x) {
                    return Math.sqrt(-2.75 * Math.pow(x, 2) + 12.375 * x - 12.931875) - 2.13
                }
                break;

            case 39: //    y= sqrt{-2.75x^{2}+12.375x-12.931875}-2.13 {2.625<x }
                x = 2.625;
                xmax = 10;
                var yy = function (x) {
                    return -Math.sqrt(-2.75 * Math.pow(x, 2) + 12.375 * x - 12.931875) - 2.13
                }
                break;


            case 40: //   y= sqrt{-0.2222x^{2}+.4x+.108}-2        {1<x }
                x = 1;
                xmax = 10;
                var yy = function (x) {
                    return Math.sqrt(-0.2222 * Math.pow(x, 2) + 0.4 * x + 0.108) - 2
                }
                break;
            case 41: //   y= sqrt{-0.2222x^{2}+.4x+.108}-2        {1<x }
                x = 1;
                xmax = 20;
                var yy = function (x) {
                    return -Math.sqrt(-0.2222 * Math.pow(x, 2) + 0.4 * x + 0.108) - 2
                }
                break;

            case 42: //  y= sqrt{-x^{2}+5.76}+2.1 {-1.9 < x <  3 } { y> 0.229 }    - y=-\sqrt{-x^{2}+5.76}+2.1 {-1.9<x<\ -1.5\right\}\ 
                x = 1.5;
                xmax = 4;
                var yy = function (x) {
                    return -Math.sqrt(-Math.pow(x, 2) + 5.76) + 2.1
                }
                break;


            default:
                //  alert('Select Function');
                // return;
                //alert("finished");
                break;
        }
        //console.log(i, x  ,xmax,yy)
        prex = null;
        prey = null;


        if (yy) {
            console.log(i, yy)

            do {

                y = yy(x);
                //console.log(x, " - ", y);
                colour = 'hsla(' + i + ',100%, 50%, 1)';
                if (prex) {
                    //ctx.beginPath();
                    // ctx.fillStyle = colour;
                    // ctx.shadowBlur = 15;
                    // ctx.shadowColor = "rgba(0,0,0,0.7)";
                    //ctx.fillRect( x * amp ,- (y +2)*amp , 3, 3);
                    // ctx.closePath();


                    ctx.beginPath()
                    ctx.moveTo(prex * amp, -(prey + 2) * amp);
                    ctx.lineTo(x * amp, -(y + 2) * amp);
                    ctx.strokeStyle = colour;
                    ctx.stroke();
                    ctx.closePath();


                    if ($("#miror").is(":checked")) {

                        ctx.beginPath();
                        ctx.fillStyle = "#c0c0c0";
                        ctx.shadowBlur = 15;
                        ctx.shadowColor = "rgba(0,0,0,0.7)";
                        ctx.fillRect(x * amp, (y + 4.2) * amp, 2, 1);
                        // ctx.fillRect(x * amp,    (y +4.4    ) *amp   , 2, 1);

                    }

                } else {
                    ctx.beginPath()
                    ctx.moveTo(x * amp, -(y + 2) * amp);
                    ctx.fillRect(x * amp, (y + 2) * amp, 2, 1);

                    // ctx.beginPath();
                    // ctx.fillStyle = colour;
                    // ctx.shadowBlur = 15;
                    // ctx.shadowColor = "rgba(0,0,0,0.7)";
                    // ctx.fillRect(x * amp, - (y +2)  * amp,3,3);
                    // ctx.closePath();




                    // ctx.beginPath();
                    // ctx.moveTo(x * amp, y * amp);
                    // ctx.lineTo(x * amp, y * amp);
                }
                prex = x;
                prey = y;
                x = x + step;
            } while (x < xmax);

            /////////////////////////////////////////////////////////////   
        } else { ///////////////////// yyyyy /////////////
            /////////////////////////////////////////////////////////////

            console.log(i, xx)

            do {

                x = xx(y);
                // console.log(x, " - ", y);
                colour = 'hsla(' + i + ',100%, 50%, 1)';
                // colour = '#FF0000)';
                if (prex) {
                    //ctx.beginPath();
                    // ctx.strokeStyle = colour;
                    //ctx.shadowBlur = 15;
                    //ctx.shadowColor = "rgba(0,0,0,0.7)";
                    //ctx.fillStyle  = colour;
                    //ctx.fillRect( x * amp , - (y +2) * amp , 3, 3);
                    //ctx.closePath();

                    ctx.beginPath()
                    ctx.moveTo(prex * amp, -(prey + 2) * amp);
                    ctx.lineTo(x * amp, -(y + 2) * amp);
                    ctx.strokeStyle = colour;
                    ctx.stroke();
                    ctx.closePath();



                    if ($("#miror").is(":checked")) {

                        ctx.beginPath();
                        ctx.fillStyle = "#c0c0c0";
                        ctx.shadowBlur = 15;
                        ctx.shadowColor = "rgba(0,0,0,0.7)";
                        ctx.fillRect(x * amp, (y + 4.2) * amp, 2, 1);
                        ctx.fillRect(x * amp, (y + 4.4) * amp, 2, 1);
                        ctx.closePath();
                    }

                } else {
                    ctx.beginPath()
                    //  ctx.beginPath();
                    //  ctx.moveTo(x * amp, y * amp);
                    //  ctx.lineTo(x * amp, y * amp); 
                    //ctx.beginPath();
                    //ctx.strokeStyle = colour;
                    // ctx.shadowBlur = 15;
                    // ctx.shadowColor = "rgba(0,0,0,0.7)";
                    // ctx.fillRect(x * amp, - (y +2) * amp, 3, 3);
                    // ctx.closePath();
                }

                prex = x;
                prey = y;
                y = y + step;
            } while (y < ymax);

        }

        //ctx.closePath();

    } while (i < totalfunctions);



    ctx.closePath();
    console.log("Finished.");
    nice();
}

function mike() {




    var a;
    var b;
    var c;


    var formula = parseInt(this.value);
    var formulaName = (this.text);




    var prex, prey;
    ctx.strokeStyle = "#000000"

    var xmin = -100;
    var xmax = 100;

    var prex = null;

    console.log("Formula:", formula, ":", formulaName);

    //  for (a = 0; a < 1; a+=0.2) {
    x = xmin;

    var totalfunctions = 35;
    var i = 0;
    var step = 0.01;
    do {

        i = i + 1;


        switch (i) {
            case 1: //  y = -1.2				{ -1 < x < 1.6 }
                x = -1;
                xmax = 1.6;
                var yy = function (x) {
                    return -1.2;
                }
                break;
            case 2: //  y = (10*x + 29) / 2		{ -3.3 < x < -2.9 }
                x = -3.3;
                xmax = -2.9;
                var yy = function (x) {
                    return (10 * x + 29) / 2;
                }
                break;
            case 3: // y = - (4 * (5*x - 17)) / 5	{3.4 < y < 3.9 }
                x = 3.4;
                xmax = 3.9;
                var yy = function (x) {
                    return -(4 * (5 * x - 17)) / 5;
                }
                break;
            case 4: //   x=-3.3 \left{3.6<y<4.55\right}		{ -3.7 < y < -2 }
                y = -3.7;
                ymax = -2;
                var yy = null;
                var xx = function (y) {
                    return -3.3;
                }
                break;
            case 5: // y = 10*x + 26 			{-2.97<x<-2.8}
                x = -2.97;
                xmax = -2.8;
                var yy = function (x) {
                    return 10 * x + 26;
                }
                break;
            case 6: // y = 10*x + 26 			-2.8<x<-2.703
                x = -2.8;
                xmax = -2.703;
                var yy = function (x) {
                    return 10 * x + 26;
                }
                break;
            case 7: //   x = 3.9					{ -3.7 < y < -2 }
                y = -3.7;
                ymax = -2;
                var yy = null;
                var xx = function (y) {
                    return 3.9;
                }
                break;
            case 8: //   y = - (20*x - 63) / 2	{ 3.265<x<3.35 }
                x = 3.265;
                xmax = 3.35;
                var xx = null;
                var yy = function (x) {
                    return -(20 * x - 63) / 2;
                }
                break;
            case 9: //   y = - (20*x - 63) / 2	{ 3.35<x<3.52 }
                x = 3.35;
                xmax = 3.52;
                var xx = null;
                var yy = function (x) {
                    return -(20 * x - 63) / 2;
                }
                break;
            case 10: //   y = -0.3*Math.pow(x, 2) + 0.2 * x + 2.7 {-2 < x < 2}
                x = -2;
                xmax = 2;
                var xx = null;
                var yy = function (x) {
                    return -0.3 * Math.pow(x, 2) + 0.2 * x + 2.7;
                }
                break;
            case 11: //   y = (5 * (10x + 29)) / 41	{-2.9<x<-2 }
                x = -2.9;
                xmax = -2;
                var xx = null;
                var yy = function (x) {
                    return (5 * (10 * x + 29)) / 41;
                }
                break;
            case 12: //   - (4 * (5*x - 17)) / 15	{2<x<3.4 }
                x = 2;
                xmax = 3.4;
                var xx = null;
                var yy = function (x) {
                    return -(4 * (5 * x - 17)) / 15;
                }
                break;
            case 13: //   y = 0.23*Math.pow(x, 2) - 0.15 * x - 3.1 {-2.7 < x < 3.26 }
                x = -2.7;
                xmax = 3.26;
                var xx = null;
                var yy = function (x) {
                    return 0.23 * Math.pow(x, 2) - 0.15 * x - 3.1;
                }
                break;
            case 14: //   y = 10*x + 10 			{ -1.37<x<-1.255 }
                x = -1.37;
                xmax = -1.255;
                var xx = null;
                var yy = function (x) {
                    return 10 * x + 10;
                }
                break;
            case 15: //   y = 10*x + 15			{-1.87<x<-1.717 }
                x = -1.87;
                xmax = -1.717;
                var xx = null;
                var yy = function (x) {
                    return 10 * x + 15;
                }
                break;
            case 16: //   y =  -4 (5x-7 )   {1.54 <x< 1.585 }
                x = 1.54;
                xmax = 1.585;
                var xx = null;
                var yy = function (x) {
                    return -4 * (5 * x - 7);
                }
                break;
            case 17: //   y = -20 * (x - 2)		{ 2.12<x<2.185 }
                x = 2.12;
                xmax = 2.185;
                var xx = null;
                var yy = function (x) {
                    return -20 * (x - 2);
                }
                break;
            case 18: //   y = (1 / (x + 0.45) ) + 0.2 {0.37 < x < 0.9 }
                x = 0.37;
                xmax = 0.9;
                var xx = null;
                var yy = function (x) {
                    return (1 / (x + 0.45)) + 0.2;
                }
                break;
            case 19: //   y = (1 / Math.pow(x - 2.6, 4) ) + 0.8 { 0.9 < x < 1.46 }
                x = 0.9;
                xmax = 1.46;
                var xx = null;
                var yy = function (x) {
                    return (1 / Math.pow(x - 2.6, 4)) + 0.8;
                }
                break;
            case 20: //   y = -0.55*Math.pow(x, 2) + 0.99 * x + 1.14 {0.4 < x < 1.46 }
                x = 0.4;
                xmax = 1.46;
                var xx = null;
                var yy = function (x) {
                    return -0.55 * Math.pow(x, 2) + 0.99 * x + 1.14;
                }
                break;
            case 21: //   y = (1 / Math.pow(x - 1.35, 4) ) + 0.8 { -0.35 < x < 0.25 }
                x = -0.35;
                xmax = 0.25;
                var xx = null;
                var yy = function (x) {
                    return (1 / Math.pow(x - 1.35, 4)) + 0.8;
                }
                break;
            case 22: //  y = (20 / (18*x + 34) ) + 0.2 {-0.94 < x < -0.35 }
                x = -0.94;
                xmax = -0.35;
                var xx = null;
                var yy = function (x) {
                    return (20 / (18 * x + 34)) + 0.2;
                }
                break;
            case 23: // y =  =-.55x^{2}+-.3x+1.6\left\{-.94<x<.25\right\}
                x = -0.94;
                xmax = 0.25;
                var xx = null;
                var yy = function (x) {
                    return -0.55 * Math.pow(x, 2) - 0.3 * x + 1.6;
                }
                break;
            case 24: //  -0.8*Math.pow(x, 2) + 0.4 * x + 0.9 {-0.62 < x < 1.08 }
                x = -0.62;
                xmax = 1.08;
                var xx = null;
                var yy = function (x) {
                    return -0.8 * Math.pow(x, 2) + 0.4 * x + 0.9;
                }
                break;
            case 25: // 0.3*Math.pow(x, 2) - 0.1 * x + 0.15 {-0.62 < x < 1.08 }
                x = -0.62;
                xmax = 1.08;
                var xx = null;
                var yy = function (x) {
                    return 0.3 * Math.pow(x, 2) - 0.1 * x + 0.15;
                }
                break;
            case 26: //   y=-2.1 x ^{2} +2.8x-.5\left\{.3<x<.91\right\}
                x = 0.3;
                xmax = 0.91;
                var xx = null;
                var yy = function (x) {
                    return -2.1 * Math.pow(x, 2) + 2.8 * x - 0.5;
                }
                break;
            case 27: // -2.5*Math.pow(x, 2) - 0.9 * x + 0.4 {-0.474 < x < 0.19 }
                x = -0.474;
                xmax = 0.19;
                var xx = null;
                var yy = function (x) {
                    return -2.5 * Math.pow(x, 2) - 0.9 * x + 0.4;
                }
                break;
            case 128: // = -7x ^ { 2} - 18x - 8.7\left\{ -1.737 < x < -.98\right\ }
                x = -50;
                xmax = 50;
                var xx = null;
                var yy = function (x) {
                    return Math.sqrt(-0.02366 * Math.pow(x, 2) + 0.0142 * x + 0.03786) - 1.2;
                }
                break;

            case 28: // = -7x ^ { 2} - 18x - 8.7\left\{ -1.737 < x < -.98\right\ }
                x = -1.737;
                xmax = -.98;
                var xx = null;
                var yy = function (x) {
                    return -7 * Math.pow(x, 2) - 18 * x - 8.7
                }
                break;




            case 29: //  -7x^{2}+23x-15.7\left\{1.315<x<2.1\right\}
                x = 1.315;
                xmax = 2.1;
                var xx = null;
                var yy = function (x) {
                    return -7 * Math.pow(x, 2) + 23 * x - 15.7
                }
                break;
            case 30: //  Math.sqrt( -1 * Math.pow(x, 2) - 0.7*x - 0.0725) + 1.3
                x = -50;
                xmax = 50;
                var xx = null;
                var yy = function (x) {
                    return Math.sqrt(-0.02366 * Math.pow(x, 2) + 0.0142 * x + 0.03786) - 1.2;
                }
                break;


            case 32: //  Math.sqrt( -1 * Math.pow(x, 2) - 0.7*x - 0.0725) + 1.3
                x = -50;
                xmax = 50;
                var xx = null;
                var yy = function (x) {
                    return Math.sqrt(-1 * Math.pow(x, 2) - 0.7 * x - 0.0725) + 1.3;
                }
                break;








            case 31: // =-7x^{2}+23x-15.7\left\{1.315<x<2.1\right\}
                x = -50;
                xmax = 50;
                var xx = null;
                var yy = function (x) {
                    return -Math.sqrt(-0.02366 * Math.pow(x, 2) + 0.0142 * x + 0.03786) - 1.2;
                }
                break;


            case 33: // - Math.sqrt( -1 * Math.pow(x, 2) - 0.7*x - 0.0725) + 1.3
                x = -50;
                xmax = 50;
                var xx = null;
                var yy = function (x) {
                    return -Math.sqrt(-1 * Math.pow(x, 2) - 0.7 * x - 0.0725) + 1.3;
                }
                break;
            case 34: //  Math.sqrt( -1 * Math.pow(x, 2) + 1.8*x - 0.76) + 1.3
                x = -50;
                xmax = 50;
                var xx = null;
                var yy = function (x) {
                    return Math.sqrt(-1 * Math.pow(x, 2) + 1.8 * x - 0.76) + 1.3;
                }
                break;
            case 35: // - Math.sqrt( -1 * Math.pow(x, 2) + 1.8*x - 0.76) + 1.3
                x = -50;
                xmax = 50;
                var xx = null;
                var yy = function (x) {
                    return -Math.sqrt(-1 * Math.pow(x, 2) + 1.8 * x - 0.76) + 1.3;
                }
                break;

            default:
                //  alert('Select Function');
                // return;
                //alert("finished");
                break;
        }
        //console.log(i, x  ,xmax,yy)
        prex = null;
        prey = null;


        if (yy) {
            console.log(i)

            do {

                y = yy(x);
                //  console.log(x, " - ", y);
                colour = 'hsla(' + i + ',100%, 50%, 1)';
                if (prex) {
                    ctx.beginPath();
                    ctx.fillStyle = colour;
                    ctx.shadowBlur = 15;
                    ctx.shadowColor = "rgba(0,0,0,0.1)";
                    ctx.fillRect(x * amp - 10, -(y + 2) * amp, 3, 3);
                    ctx.closePath();


                    // ctx.beginPath()
                    //ctx.moveTo(prex * amp, prey * amp);
                    // ctx.lineTo(x * amp, y * amp);
                    //ctx.strokeStyle = colour;
                    //ctx.stroke();
                    //ctx.closePath();


                    if ($("#miror").is(":checked")) {

                        ctx.beginPath();
                        ctx.fillStyle = "#c0c0c0";
                        ctx.shadowBlur = 15;
                        ctx.shadowColor = "rgba(0,0,0,0.1)";
                        ctx.fillRect(x * amp - 10, (y + 4.2) * amp, 2, 1);
                        ctx.fillRect(x * amp - 10, (y + 4.4) * amp, 2, 1);
                        ctx.closePath();
                    }

                } else {

                    ctx.beginPath();
                    ctx.fillStyle = colour;
                    ctx.shadowBlur = 15;
                    ctx.shadowColor = "rgba(0,0,0,0.8)";
                    ctx.fillRect(x * amp - 10, -(y + 2) * amp, 3, 3);
                    ctx.closePath();




                    // ctx.beginPath();
                    // ctx.moveTo(x * amp, y * amp);
                    // ctx.lineTo(x * amp, y * amp);
                }
                prex = x;
                prey = y;
                x = x + step;
            } while (x < xmax);
            /////////////////////////////////////////////////////////////   
        } else { ///////////////////// yyyyy /////////////
            /////////////////////////////////////////////////////////////

            console.log(i)

            do {

                x = xx(y);
                // console.log(x, " - ", y);
                colour = 'hsla(' + i + ',100%, 50%, 1)';
                // colour = '#FF0000)';
                if (prex) {
                    ctx.beginPath();
                    ctx.strokeStyle = colour;
                    ctx.shadowBlur = 15;
                    ctx.shadowColor = "rgba(0,0,0,0.1)";
                    ctx.fillStyle = colour;
                    ctx.fillRect(x * amp - 10, -(y + 2) * amp, 3, 3);
                    ctx.closePath();

                    //ctx.beginPath()
                    //ctx.moveTo(prex * amp, prey * amp);
                    // ctx.lineTo(x * amp, y * amp);
                    //ctx.strokeStyle = colour;
                    //ctx.stroke();



                    if ($("#miror").is(":checked")) {

                        ctx.beginPath();
                        ctx.fillStyle = "#c0c0c0";
                        ctx.shadowBlur = 15;
                        ctx.shadowColor = "rgba(0,0,0,0.1)";
                        ctx.fillRect(x * amp - 10, (y + 4.2) * amp, 2, 1);
                        ctx.fillRect(x * amp - 10, (y + 4.4) * amp, 2, 1);
                        ctx.closePath();
                    }

                } else {

                    //  ctx.beginPath();
                    //  ctx.moveTo(x * amp, y * amp);
                    //  ctx.lineTo(x * amp, y * amp); 
                    ctx.beginPath();
                    ctx.strokeStyle = colour;
                    ctx.shadowBlur = 15;
                    ctx.shadowColor = "rgba(0,0,0,0.1)";
                    ctx.fillRect(x * amp - 10, -(y + 2) * amp, 3, 3);
                    ctx.closePath();
                }

                prex = x;
                prey = y;
                y = y + step;
            } while (y < ymax);

        }

        ctx.closePath();

    } while (i < totalfunctions);



    ctx.closePath();
    console.log("Finished.");

}

//ctx.restore();

//chart();

i = 0;
var rotation, counter, r, g, b, i, y;
rotation = counter = r = g = b = i = 0;
var squareSize = canvan.width;
var canvasCentreX = canvan.width / 2;
var canvasCentreY = canvan.height / 2;

console.log(squareSize, canvasCentreX, canvasCentreY);


var increment = 12;

function nice() {

    var side = 1;
    // console.log('nice');
    var timer = setInterval(function () {
        r++;
        colour = 'hsla(' + r + ',100%, 50%, 1)';

        draw(side, i, colour);
        i += increment;

        if (i >= squareSize) {
            side++;
            i = 0;

            if (side > 1) {
                clearInterval(timer);
                return;
            }
        }

    }, 5);

}






function draw(side, i, colour) {
    //console.log('draw');
    switch (side) {
        case 1:
            parabLine(i, 0, squareSize, i + increment, colour);
            break;
        case 2:
            parabLine(squareSize, i, squareSize - (i + increment), squareSize, colour);
            break;
        case 3:
            parabLine(squareSize - i, squareSize, 0, squareSize - (i + increment), colour);
            break;
        case 4:
            parabLine(0, squareSize - i, i, 0, colour);
            break;
    }
}


function parabLine(fromX, fromY, toX, toY, colour) {

    kat.beginPath()
    kat.moveTo(fromX, fromY);
    kat.lineTo(toX, toY);
    kat.strokeStyle = colour;
    kat.stroke();
    kat.closePath();
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////







$("#ma_graph").click(function () {

    $('.functions').hide();
    $('#ma_graphf').show();
    $("#clear").click();
    //alert('canvas.js:1 Uncaught ReferenceError: $ is not defined')

    chart();
    setTimeout(function () {

        nice();
    }, 100)

});

$("#mike").click(function () {
    $('.functions').hide();
    $('#mikef').show();
    $("#clear").click();

    //alert('canvas.js:1 Uncaught ReferenceError: $ is not defined')

    mike();
    setTimeout(function () {

        nice();
    }, 100)

});








$("#extra").click(function () {



    setTimeout(function () {
        ctx.translate(0, 0);
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        nice();
        tree(400, 400, 60, 0, 15);
    }, 500)

});







$("#clear").click(function () {
    // console.log(ctx.getTransform)
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.translate(0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawchart();

    kat.translate(0, 0);
    kat.setTransform(1, 0, 0, 1, 0, 0);
    kat.clearRect(0, 0, canvan.width, canvan.height);

});

$("input[type=number]").change(function () {
    chart(a, b);
});

$("input[type=range]").change(function (x) {
    // alert( $('#slider1').val()   ) ;
    console.log("Slider1:", $("#slider1").val())
    console.log("Slider2:", $("#slider2").val())
    console.log("Slider3:", $("#slider3").val())

});





function Stopwait() {
    clearTimeout(cwait);
    console.log('Cleared.')
}


function log(str) {

    console.log(str)
}




function parseinput() {
    aa = ainput.value;
    bb = binput.value;

    //console.log (aa,bb);

    var a = parseInt(aa, 10);
    var b = parseInt(bb, 10);




    if (isNaN(a)) {
        a = 0
    };
    if (isNaN(b)) {
        b = 0
    };


    if (a < 0) {
        a = 0;
        ainput.value = 0;
        return;
    };
    if (b < 0) {
        b = 0;
        binput.value = 0;
        return;
    };


    chart(a, b);

}


function tree(startX, startY, len, angle, branchWidth) {
    ctx.lineWidth = branchWidth;

    ctx.beginPath();
    ctx.save();

    ctx.strokeStyle = "#ddedd5";
    //ctx.fillStyle = "green";

    ctx.translate(startX, startY);
    ctx.rotate(angle * Math.PI / 80);
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -len);
    ctx.stroke();

    ctx.shadowBlur = 15;
    ctx.shadowColor = "rgba(0,0,0,0.8)";

    if (len < 15) {
        ctx.restore();
        //console.log("finished at ", len);
        return;
    }

    tree(0, -len, len * 0.8, angle - 15, branchWidth * 0.8);
    tree(0, -len, len * 0.8, angle + 15, branchWidth * 0.8);
    ctx.restore();
}





function docir(x) {
    var syscount = 40;
    var systemsX = [1, 50, 7, 6, 21, 22, 15];
    var systemsY = [11, 50, 17, 16, 5, 7, 34];
    var ssize = 5;

    // Clear out the existing path and start a new one
    ctx.beginPath();

    // Add the circles to the newly-created path
    for (var i = 0; i < syscount; i++) {
        ctx.moveTo(systemsX[i] + ssize, systemsY[i]);
        ctx.arc(systemsX[i], systemsY[i], ssize, 0, Math.PI * 2, true);
    }

    // Fill them in with black
    ctx.fillStyle = "#ffffff";
    ctx.fill();

    // Draw the outline with yellow
    ctx.strokeStyle = "#000000";
    ctx.stroke();

}

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}