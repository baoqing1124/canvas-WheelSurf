var money = ['谢谢参与',' 1000','  100','   50','   20','   10','    5','    1'];
var unit = ['再接再厉','      元'];
var angle;
var num;
var count=0;
circleRun();
function circleRun(){
	var ctx = $('#circle')[0].getContext('2d');
	var ctx1 = $('#circleText')[0].getContext('2d');
	var ctx2 = $('#litCircle')[0].getContext('2d');
	var ctx3 = $('#angle')[0].getContext('2d');
	createCircle(ctx);
	littleCircle(ctx2);
	angle(ctx3);
	circleText(ctx1);
	
	$('#start').on('click', function() {
		rotate();
		$(this).attr('disabled', 'true');
		setTimeout(function(){
			if(num == 0){
				showAlert(money[8-num],'很遗憾，大奖与你擦肩而过！');	
			}else{
				showAlert(money[8-num],'恭喜您，抽中啦！');
			}
			$('#start').removeAttr('disabled');
		}
		,6000);
	});
}
function createCircle(ctx,ctx2){
	var start = 0;
	var end = 0;
	for(var i=0;i<8;i++){
		start = i*Math.PI/4+Math.PI/8;
		end = (i+1)*Math.PI/4+Math.PI/8;
		ctx.beginPath();
		ctx.arc(150,150,80,start,end,false);
		ctx.lineWidth = 100;
		if (i%2 == 1) {
			ctx.strokeStyle =  '#F15C5C';
		}else{
			ctx.strokeStyle =  '#FF9F0B';
		}
		ctx.stroke();
	}
}

function littleCircle(ctx2){
	ctx2.beginPath();
	ctx2.arc(150,150,30,0,Math.PI*2,false);
	ctx2.fillStyle = 'red';
	ctx2.fill();
}

function angle(ctx3){
	ctx3.beginPath();
	ctx3.moveTo(15,50);
	ctx3.lineTo(35,50);
	ctx3.lineTo(25,5);
	ctx3.fillStyle = 'red';
	ctx3.fill();
}

function circleText(ctx1){
	ctx1.textAlign='start';
	ctx1.textBaseline='middle';
	ctx1.fillStyle = '#fff';
	var step = Math.PI/4;
	for ( var i = 0; i < 8; i++) {
		ctx1.save();
		ctx1.beginPath();
	    ctx1.translate(150,150);
	    ctx1.rotate(i*step);
	    ctx1.font = " 20px Microsoft YaHei";
	    ctx1.fillStyle = '#fff';
	    ctx1.fillText(money[i],-30,-100,60);
	    ctx1.font = " 14px Microsoft YaHei";
	    if(i===0){
	   		ctx1.fillText(unit[0],-30,-80,60); 	
	    }else{
	    	ctx1.fillText(unit[1],-30,-80,60);
	    }

	    ctx1.closePath();
	    ctx1.restore();
	}
}

function rotate(){
	count++;
	num = Math.round(Math.random()*7);
	angle = 360*6*count+45*num;
	console.log(count+'     '+num+'    '+angle);
	var degValue = 'rotate('+angle+'deg'+')';
	$('.rosate').css('transform',degValue);
}

function showAlert(money,text){
	var bg = [];
	bg.push('<div class="bg">');
	bg.push('<section class="luck anim-luck">');
	bg.push('<h1>'+text+'</h1>');
	bg.push('<p class="money">获得'+money+'元红包</p>');
	bg.push('<p class="bag">￥'+money+'</p>');
	bg.push('<button>确定</button>');
	bg.push('</section></div>');
	bg = bg.join('');
	$('body').append(bg);
	$('.luck button').on('click', function(event) {
		$('.bg').remove();
		/* Act on the event */
	});
}
