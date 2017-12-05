
window.onscroll = function () {
	//js滚动事件
	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	var oHeaDblack = document.getElementById("headblack");
	if (scrollTop >= 300) {
		oHeaDblack.style.top = "0px";
	}else{
		oHeaDblack.style.top = "-1000px";
	}
}

window.onload = function () {
	$(function () {
		$('#loutilan li').not('#gotop').hover(function () {
			$(this).addClass('action');
		},function () {
			$(this).removeClass('action');
		});
		$('#gotop').on('click',function () {
			$('html,body').animate({
				scrollTop:0
			},1000);
		});
		
		$('#loutilan li').not('#gotop').on('click',function () {
			var index = $(this).index();
			var height = $("#main .loucengg").eq(index).offset().top; 
		$("html,body").animate({
			scrollTop:height
		},1000);
	});
		$(window).scroll(function(){
		var t = $(this).scrollTop();
		var headerHeight = $('#main .loucengg').first().offset().top;
		if(t > headerHeight-40){
				$('#loutilan').fadeIn();
			}else{
				$('#loutilan').fadeOut();
			}
		var obj = $('.loucengg');
		obj.each(function () {
			var index = $(this).index()/2 ;
			// console.log(index)
			var height = obj.eq(index).offset().top - $(".loucengg").height() /2;
			if(t > height){
				$('#loutilan li').eq(index).addClass('action').siblings().removeClass('action');
			}			
		});

	});
	
	});
	
	//轮播图
	$(function () {
		var timer = 0;
		var now = 0;
		var timer = null;
		$(".lbtright").click(function () {
			now++;
			if(now >= $("#lbtul li").size()) now =0;
			$("#lbtul li").eq(now).fadeIn(1).siblings().fadeOut();
			$(".lbtpoint i").removeClass("lbtpointi");
			$(".lbtpoint i").eq(now).addClass("lbtpointi");
		});
		$(".lbtleft").click(function () {
			now--;
			if(now == -1) now =7;
			$("#lbtul li").eq(now).fadeIn(1).siblings().fadeOut();
			$(".lbtpoint i").removeClass("lbtpointi");
			$(".lbtpoint i").eq(now).addClass("lbtpointi");
		});
		$(".lbtpoint i").mouseenter(function () {
			now = $(this).index();
			$(".lbtpoint i").removeClass("lbtpointi");
			$(this).addClass("lbtpointi");
			$("#lbtul li").removeClass("lbtli");
			$("#lbtul li").get($(this).index()).className = "lbtli";
			$("#lbtul li").eq($(this).index()).fadeIn().siblings().fadeOut();
		});
		timer = setInterval(function () {
			now++;
			if(now >= $("#lbtul li").size()) now =0;
			$("#lbtul li").eq(now).fadeIn(1).siblings().fadeOut();
			$(".lbtpoint i").removeClass("lbtpointi");
			$(".lbtpoint i").eq(now).addClass("lbtpointi");
		},1000);
		$(".many_pictureone_conter_top").mouseenter(function () {
			clearInterval(timer);
		});
		$(".many_pictureone_conter_top").mouseleave(function () {
			timer = setInterval(function () {
			now++;
			if(now >= $("#lbtul li").size()) now =0;
			$("#lbtul li").eq(now).fadeIn(1).siblings().fadeOut();
			$(".lbtpoint i").removeClass("lbtpointi");
			$(".lbtpoint i").eq(now).addClass("lbtpointi");
			},1000);
		});
	});
	//促销公告
	$("#cux").mousemove(function () {
		$("#xian").css("left","-2px");
		$(".accton_conetern_dbottomul").css("display","block");
		$(".accton_conetern_dbottomul_one").css("display","none");
		
	});
	$("#gonggao").mouseenter(function () {
		$("#xian").css("left","47px");
		$(".accton_conetern_dbottomul").css("display","none");
		$(".accton_conetern_dbottomul_one").css("display","block");
		
	});
	//最复杂的地方
	$(".accton_bottom_a_sp1").mousemove(function () {
		$(".accton_bottom_li0").css("top","-39px");
		$(".action").css("border-color","#e01121");
		$(".accton_bottom_divo").css("top","20px");
		$(".action").css("color","#e01121")
	});
	$(".accton_bottom_a_sp1").mousemove(function () {
		$(".accton_bottom_li2").css("top","-39px");
		$(".accton_bottom_divo").css("top","20px");
	});
	$(".accton_bottom_a_sp1").mousemove(function () {
		$(".accton_bottom_li3").css("top","-39px");
		$(".accton_bottom_divo").css("top","20px");
	});
	$(".accton_bottom_a_sp1").mousemove(function () {
		$(".accton_bottom_li4").css("top","-39px");
		$(".accton_bottom_divo").css("top","20px");
	});
	//弹出div里面的切换
	$(function () {
		var $li = $('.accton_bottom_divoli_top li');
		var $ul = $('.accton_bottom_divoli_bottom ul');
			$li.mouseover(function(){
				var $this = $(this);
				var $t = $this.index();
				$li.removeClass();
				$this.addClass('current');
				$ul.css('display','none');
				$ul.eq($t).css('display','block');
			});
		});
	//机票 话费切换
	
	//关闭事件
	$(document).ready(function(){
	$(".accton_bottom_divo .accton_bottom_divoli_a").click(function () {
		$(".action").css("border-color","#fff");
		$(".action").css("color","#666");
		$(".accton_bottom_li0").css("top","0px");
		$(".accton_bottom_li2").css("top","0px");
		$(".accton_bottom_li3").css("top","0px");
		$(".accton_bottom_li4").css("top","0px");
		$(".accton_bottom_divo").hide();
	
	});
	});

	//弹出列框
	var oManypictureoneleft = document.getElementsByClassName("many_pictureone_left");;
	var oLeftivul = document.getElementsByClassName("left_divul")[0];
	var aLeftLi = oLeftivul.getElementsByTagName("li");
	var oRightdivd = document.getElementById("right_divd");
	var aRighDiv = oRightdivd.getElementsByClassName("pooswdiv1");
	
	for (var i = 0; i < aLeftLi.length; i++) {
		aLeftLi[i].index = i;
		aLeftLi[i].onmouseenter = function () {
			oRightdivd.style.display = "block";
			for(var i = 0; i < aRighDiv.length; i++) {
				aRighDiv[i].style.display = "none";
			}
			aRighDiv[this.index].style.display = "block";
		}
	}
	oLeftivul.onmouseleave = function () {
		oRightdivd.style.display = "none"
	}
	oRightdivd.onmouseenter = function () {
		oRightdivd.style.display = "block"
	}
	oRightdivd.onmouseleave = function () {
		oRightdivd.style.display = "none"
	}
	//头部点击关闭事件
	$(document).ready(function(){
	$("#jd .jdheadi").click(function () {
		$("#jd").hide();
	})
	});
	//地区
	 area.onmouseenter = function () {
	 	jdar.style.backgroundColor = "#fff";
	 	jdar.style.borderColor = "#ccc";
	 	jdar.style.borderBottomColor = "#fff"
		jddz.style.display = "block";
	}
	 area.onmouseleave = function () {
	 	jdar.style.backgroundColor = "#E3E4E5";
	 	jdar.style.borderColor = "#E3E4E5";
	 	jddz.style.display = "none";
	 }
	 //我的京东
	 fore3.onmouseenter = function () {
	 	myjd.style.backgroundColor = "#fff";
	 	myjd.style.borderColor = "#ccc";
	 	myjd.style.borderBottomColor = "#fff"
		wjd.style.display = "block";
	}
	 fore3.onmouseleave = function () {
	 	myjd.style.backgroundColor = "#E3E4E5";
	 	myjd.style.borderColor = "#E3E4E5";
	 	wjd.style.display = "none";
	 }
	 //客户服务
	  fore6.onmouseenter = function () {
	 	service.style.backgroundColor = "#fff";
	 	service.style.borderColor = "#ccc";
	 	service.style.borderBottomColor = "#fff"
		servicecont.style.display = "block";
	}
	 fore6.onmouseleave = function () {
	 	service.style.backgroundColor = "#E3E4E5";
	 	service.style.borderColor = "#E3E4E5";
	 	servicecont.style.display = "none";
	 }
	  //网站
	 fore7.onmouseenter = function () {
	 	www.style.backgroundColor = "#fff";
	 	www.style.borderColor = "#ccc";
	 	www.style.borderBottomColor = "#fff"
		www1.style.display = "block";
	}
	 fore7.onmouseleave = function () {
	 	www.style.backgroundColor = "#E3E4E5";
	 	www.style.borderColor = "#E3E4E5";
	 	www1.style.display = "none";
	 }
	 //手机京东
	 fore8.onmouseenter = function () {
		ios.style.display = "block";
	}
	 fore8.onmouseleave = function () {
	 	ios.style.display = "none";
	 }
	 //爱生活
	 lovestont.onmouseenter = function () {
		tanchuer.style.display = "block";
	}
	 lovestont.onmouseleave = function () {
	 	tanchuer.style.display = "none";
	 } 
	 //爱美丽
	 lovebutui.onmouseenter = function () {
		tanchuerom.style.display = "block";
	}
	 lovebutui.onmouseleave = function () {
	 	tanchuerom.style.display = "none";
	 }
	 //购物车
	  shoppingcart.onmouseenter = function () {
	  	noshopping.style.backgroundColor = "#fff";
	 	noshopping.style.borderColor = "#CCCCCC";
	 	shopping.style.borderBottomColor = "#fff";
		noshopping.style.display = "block";
	}
	 shoppingcart.onmouseleave = function () {
		noshopping.style.backgroundColor = "#CCCCCC";
	 	noshopping.style.borderColor = "#CCCCCC";
	 	shopping.style.borderBottomColor = "#ccc";
	 	noshopping.style.display = "none";
	 }
	
}
var intDiff = parseInt(600);
function timer(intDiff){
    window.setInterval(function(){
    var day=0,
        hour=0,
        minute=0,
        second=0;      
    if(intDiff > 0){
        day = Math.floor(intDiff / (60 * 60 * 24));
        hour = Math.floor(intDiff / (60 * 60)) - (day * 24);
        minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60);
        second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
    }
    if (hour = 1) hour = '0' + hour; 
    if (minute <= 9) minute = '0' + minute;
    if (second <= 9) second = '0' + second;
    $('.hour').html('<s id="h"></s>'+hour);
    $('.minute').html('<s></s>'+minute);
    $('.second').html('<s></s>'+second);
    intDiff--;
    }, 1000);
}  
$(function(){
    timer(intDiff);
}); 


//京东秒杀切换
$(function () {
	var now = 0;
	var timer = 0;
	var onoff = 0;
	var $prev = $(".secklill_jd_bottom_lll");
	var $next = $(".secklill_jd_bottom_rrr");
	var $list = $(".secklill_jd_bottom_ul");
	var $listli = $(".secklill_jd_bottom_ul li");
	var mainW = $(".secklill_jd_bottom_left").width();
	
	$prev.click(function () {
		console.log(1);
		now--;
		if(now < 0) {
			now = 2;
//			$list.css("left", -($listli.size() - 1) * mainW);
		}
		$list.stop().animate({
			left: - mainW * now
		},200);
	});
	$next.click(function () {
		clearTimeout(timer);
		timer = setTimeout (function() {
			onoff = true;
		},500);
		if (!onoff) return;
		onoff = false;
		now++;
		if (now > 2) {
			now = 0;
			$list.css("left",0);
		}
		$list.stop().animate({
			left: - mainW * now
		},200);		 		
	});
});

//秒杀旁边的轮播图
$(function () {
	var timer = 0;
	var now = 0;
	
	$(".secklill_dian li").mousemove(function () {
		now = $(this).index();
		$(".secklill_dian li").removeClass("secklill_dian_dian");
		$(this).addClass("secklill_dian_dian");
		$(".secklill_lbt li").removeClass("secklill_lbtli");
		$(".secklill_lbt li").get($(this).index()).className = "secklill_lbtli";
		$(".secklill_lbt li").eq($(this).index()).fadeIn().siblings().fadeOut();
	});
	
	timer = setInterval(function () {
	now++;
	if(now >= $(".secklill_lbt li").size()) now = 0;
	$(".secklill_lbt li").eq(now).fadeIn().siblings().fadeOut();
	$(".secklill_dian li").removeClass("secklill_dian_dian");
	$(".secklill_dian li").eq(now).addClass("secklill_dian_dian");
	},2000);
	$(".secklill_jd_bottom_right").mouseenter(function () {
		clearInterval(timer);
	});
	$(".secklill_jd_bottom_right").mouseleave(function () {
		timer = setInterval(function () {
		now++;
		if(now >= $(".secklill_lbt li").size()) now =0;
		$(".secklill_lbt li").eq(now).fadeIn(1).siblings().fadeOut();
		$(".secklill_dian li").removeClass("secklill_dian_dian");
		$(".secklill_dian li").eq(now).addClass("secklill_dian_dian");
		},2000);
	});
	
});
//会买专辑轮播图
$(function () {
		var timer = 0;
		var now = 0;
		var timer = null;
		$(".good_bottomright").click(function () {
			now++;
			if(now >= $(".goodbottom_conttt div").size()) now =0;
			$(".good_bottom1 div").eq(now).fadeIn(1).siblings().fadeOut();
			$(".good_bottomdian li").removeClass("good_bottomdian_li");
			$(".good_bottomdian li").eq(now).addClass("good_bottomdian_li");
		});
		$(".good_bottomleft").click(function () {
			now--;
			if(now == -1) now =7;
			$(".goodbottom_conttt div").eq(now).fadeIn(1).siblings().fadeOut();
			$(".good_bottomdian li").removeClass("good_bottomdian_li");
			$(".good_bottomdian li").eq(now).addClass("good_bottomdian_li");
		});
		//dian
		$(".good_bottomdian li").mousemove(function () {
			now = $(this).index();
			$(".good_bottomdian li").removeClass("good_bottomdian_li");
			$(this).addClass("good_bottomdian_li");
			$(".goodbottom_conttt div").removeClass("lbtli");
			$(".goodbottom_conttt div").get($(this).index()).className = "goodbottom_con";
			$(".goodbottom_conttt div").eq($(this).index()).fadeIn().siblings().fadeOut();
		});
		timer = setInterval(function () {
			now++;
			if(now >= $(".goodbottom_conttt div").size()) now =0;
			$(".goodbottom_conttt div").eq(now).fadeIn(1).siblings().fadeOut();
			$(".good_bottomdian li").removeClass("good_bottomdian_li");
			$(".good_bottomdian li").eq(now).addClass("good_bottomdian_li");
		},3000);
		$(".good_bottom1").mouseenter(function () {
			clearInterval(timer);
		});
		$(".good_bottom1").mouseleave(function () {
			timer = setInterval(function () {
			now++;
			if(now >= $(".goodbottom_conttt div").size()) now =0;
			$("goodbottom_conttt div").eq(now).fadeIn(1).siblings().fadeOut();
			$(".good_bottomdian li").removeClass("good_bottomdian_li");
			$(".good_bottomdian li").eq(now).addClass("good_bottomdian_li");
			},3000);
		});
	});
	
//排行榜
$(function () {
	var $coa = $('.good_bottom2_con a');
	var $und = $('.good_bottom2_und div');
	
	$coa.mouseover(function () {
		var $this = $(this);
		var $ta = $this.index();
		
		$coa.removeClass();
		$this.addClass('actionn');
		$und.css('display','none');
		$und.eq($ta).css('display','block');
	});
});
//京东直播轮播图
$(function () {
		var timer = 0;
		var now = 0;
		var timer = null;
		$(".shipins_right").click(function () {
			now++;
			if(now >= $(".shipins_img a").size()) now =0;
			$(".shipins_img a").eq(now).fadeIn(1).siblings().fadeOut();
			$(".shipins_ul li").removeClass("shipins_li");
			$(".shipins_ul li").eq(now).addClass("shipins_li");
		});
		$(".shipins_left").click(function () {
			now--;
			if(now == -1) now =7;
			$(".shipins_img a").eq(now).fadeIn(1).siblings().fadeOut();
			$(".shipins_ul li").removeClass("shipins_li");
			$(".shipins_ul li").eq(now).addClass("shipins_li");
		});
		$(".shipins_ul li").mousemove(function () {
			now = $(this).index();
			$(".shipins_ul li").removeClass("shipins_li");
			$(this).addClass("shipins_li");
			$(".shipins_img a").removeClass("shipins_img_a");
			$(".shipins_img a").get($(this).index()).className = "shipins_img_a";
			$(".shipins_img a").eq($(this).index()).fadeIn().siblings().fadeOut();
		});
		timer = setInterval(function () {
			now++;
			if(now >= $(".shipins_img a").size()) now =0;
			$(".shipins_img a").eq(now).fadeIn(1).siblings().fadeOut();
			$(".shipins_ul li").removeClass("shipins_li");
			$(".shipins_ul li").eq(now).addClass("shipins_li");
		},2000);
		$(".shipins").mouseenter(function () {
			clearInterval(timer);
		});
		$(".shipins").mouseleave(function () {
			timer = setInterval(function () {
			now++;
			if(now >= $(".shipins_img a").size()) now =0;
			$(".shipins_img a").eq(now).fadeIn(1).siblings().fadeOut();
			$(".shipins_ul li").removeClass("shipins_li");
			$(".shipins_ul li").eq(now).addClass("shipins_li");
			},2000);
		});
	});


//右边侧边栏
	$(function () {
		$('.jtab_one').mouseenter(function () {
			$('.jd_vv2').css("right","33px");
			$('.jd_vv2').css("transition","1s");
		});
		$('.jtab_one').mouseleave(function () {
			$('.jd_vv2').css("right","-63px");
		})
		$('.jtab_two').mouseenter(function () {
			$('.jd_gwc2').css("right","33px");
			$('.jd_gwc2').css("transition","1s");
		});
		$('.jtab_two').mouseleave(function () {
			$('.jd_gwc2').css("right","-63px");
		})
		$('.jtab_tree').mouseenter(function () {
			$('.jd_guzhu2').css("right","33px");
			$('.jd_guzhu2').css("transition","1s");
		});
		$('.jtab_tree').mouseleave(function () {
			$('.jd_guzhu2').css("right","-63px");
		})
		$('.jtab_four').mouseenter(function () {
			$('.jd_zuji2').css("right","33px");
			$('.jd_zuji2').css("transition","1s");
		});
		$('.jtab_four').mouseleave(function () {
			$('.jd_zuji2').css("right","-63px");
		})
		$('.jtab_five').mouseenter(function () {
			$('.jd_went2').css("right","33px");
			$('.jd_went2').css("transition","1s");
		});
		$('.jtab_five').mouseleave(function () {
			$('.jd_went2').css("right","-63px");
		})
		$('.jtab_sixe').mouseenter(function () {
			$('.jd_jim2').css("right","33px");
			$('.jd_jim2').css("transition","1s");
		});
		$('.jtab_sixe').mouseleave(function () {
			$('.jd_jim2').css("right","-63px");
		})
		$('.jtab_seven').mouseenter(function () {
			$('.jd_op2').css("right","33px");
			$('.jd_op2').css("transition","1s");
		});
		$('.jtab_seven').mouseleave(function () {
			$('.jd_op2').css("right","-63px");
		})
		$('.jtab_eight').mouseenter(function () {
			$('.jd_fk2').css("right","33px");
			$('.jd_fk2').css("transition","1s");
		});
		$('.jtab_eight').mouseleave(function () {
			$('.jd_fk2').css("right","-63px");
		})
	})
