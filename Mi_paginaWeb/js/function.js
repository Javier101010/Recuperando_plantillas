// JavaScript Document

  //arreglo para las imagenes
   var imagenes=["https://i.imgur.com/D2J6cOo.jpg","https://i.imgur.com/wKqGhpo.jpg","https://i.imgur.com/PxXyxGm.jpg",
                "https://i.imgur.com/U6hhGHb.jpg","https://i.imgur.com/9rAUzTq.jpg",
  			        "https://i.imgur.com/P6vJBym.jpg","https://i.imgur.com/6UE0l4U.jpg",
                "https://i.imgur.com/HfPm8fQ.jpg","https://i.imgur.com/ixWZiwq.jpg",
                "https://i.imgur.com/ttSUMZi.jpg","https://i.imgur.com/Bbd3yAC.jpg",
                "https://i.imgur.com/vwBCJfI.jpg",
                "https://i.imgur.com/YI8cvBp.jpg","https://i.imgur.com/LxI8gUn.jpg",
                "https://i.imgur.com/FGwIRJW.jpg"];

  var url = ["https://www.youtube.com/channel/UCu_gP1CZewpWOugaeHvmG_w",
            "https://twitter.com/Javier35670363",
            "https://www.instagram.com/javierenrmo/"];
  //variables para el indice del arreglo "ambos"
  var i=0;
  var t;
  //funcion rotacion para cambiar las imagenes segun i
  function Rotacion(){
  	document.getElementById("carr").src=imagenes[i];
  	i++;
  	if(i>imagenes.length-1)i=0;
  	t =setTimeout("Rotacion()",5000);
  }

  var para = document.querySelector('caja');
  var mql = window.matchMedia('(max-width: 600px)');
  var mql2 = window.matchMedia('(max-width: 750px)');

  function screenTest(e) {
    if (e.matches) {
      document.getElementById("caja").style.margin= "0px";
    }
  }

  function screenTest2(e){
    if (e.matches) {
      document.getElementById("gal").style.margin= "0px";
    }
  }

  screenTest(mql);
  mql.addListener(screenTest);

  mql.onchange = function() {
    console.log(mql);
  }

  screenTest2(mql2);
  mql2.addListener(screenTest2);

  mql2.onchange = function(){
    console.log(mql2);
  }

$(document).ready(function() {
	/*$(document).load(function(){
		$("#imgtd1").css({
			src: "../imagenes/"+imagenes[i]
		});
		i++;
		if(i>imagenes.length-1)i=0;
		setTimeout(back(), 3000)
	});*/

  Rotacion();

  /*carrusel*/
    $("a").click(function(){
	$("#gal").css({
		margin: "0px"
	});
		var pos = $("a").index(this);
		if (pos == 0){
		    $("#caja").css({
			    margin:"0px 0px",
			    transition:"1s"
		    });
		}
		else if(pos == 1){
			$("#caja").css({
			    margin:"0px 0px 0px -100%",
			    transition:"1s"
		    });
		}
		else if(pos == 2){
			$("#caja").css({
			    margin:"0px 0px 0px -200%",
			    transition:"1s"
		    });
		}
	});

  /*Information*/
  $(".info").mouseover(function(){
    $(this).children().eq(0).css({
      height:"100px",
      opacity:"0.5",
      transition: "1s"
    })
  });

  $(".info").mouseout(function(){
    $(this).children().eq(0).css({
      height:"250px",
      opacity:"1",
      transition: "1s"
    });
  });

  $(".info").click(function(){
    $(location).attr('href', 'posts.html')
  });

  /*Gallery*/
  $(".slid").click(function(){
    var ind = $(this).index();
    var pant = $(window).width();
    if(pant < 600){
      if(ind == 0){
        $("#gal").css({
          margin: "0px",
          transition: "1s"
        });
      }else if(ind == 1){
        $("#gal").css({
          margin: "0px 0px 0px -50%",
          transition: "1s"
        });
      }
    }
	});

  $("#gal .col-4").click(function(){
    var ind = $(this).index();
    clearTimeout(t);
    i = ind;
    Rotacion();
  });


	$("#gal .col-4").mouseover(function(){
    var pant = $(window).width();
    if(pant < 600){
      $(this).css({
  			opacity:"1.0",
        transform:"scale(1.5)"
  		});
    }else{
      $("#gal .col-4").css({
        opacity:"1.0"
      })
    }
	});

	$("#gal .col-4").mouseout(function(){
    var pant = $(window).width();
    if(pant < 600){
      $(this).css({
  			opacity:"0.5",
        transform:"scale(1)"
  		});
    }
	});

	$(".imgtd").click(function(){
		var x = $(".imgtd").index(this);
		i = x;
	});

  /*Posts*/
  $(".cont_mention").click(function(){
    $(location).attr('href', 'contentPosts.html')
  });

  /*Footer*/
  $(".img").mouseover(function(){
    $(this).css({
      transform:"scale(1.5)"
    });
  });

  $(".img").mouseout(function(){
    $(this).css({
      transform:"scale(1)"
    });
  });

  $(".img").click(function(){
    var i = $(".img").index(this);
    $(location).attr('href',url[i]);
  });

  //Desplegar mas elementos
  var nuevo = $("<div class=\"col-3\">"+
    "<div class=\"cont_mention\">"+
        "<div class=\"img_mention\">"+
          "<!--<img src=\"\" alt=\"\">-->"+
        "</div>"+
      "<div>"+
          "<h2>Post 1</h2>"+
          "<p>"+
            "There is not content, come back later."+
          "</p>"+
      "</div>"+
      "</div>"+
  "</div>")
  $(".morePosts").click(function(){

    $(".row").append(nuevo)
  });

  //Scroll
  $(window).scroll(function(){
    var windowHeight = $(window).scrollTop();
    var contenido1 = $("#in1").offset().top;
    var contenido2 = $("#in2").offset().top;
    var contenido3 = $("#in3").offset().top;
    var tama = $(window).width();

    if(tama<= 600){
      if (windowHeight >= (contenido1-200) && windowHeight < (contenido1+50)){
        $("#in1").children().eq(0).css({
          height:"100px",
          opacity:"0.5",
          transition: "1s"
        });
      }else if (windowHeight >= (contenido2-200) && windowHeight < (contenido2+50)){
        $("#in1").children().eq(0).css({
          height:"250px",
          opacity:"1",
          transition: "1s"
        });
        $("#in2").children().eq(0).css({
          height:"100px",
          opacity:"0.5",
          transition: "1s"
        });
      }else if (windowHeight >= (contenido3-200) && windowHeight < (contenido3+50)){
        $("#in2").children().eq(0).css({
          height:"250px",
          opacity:"1",
          transition: "1s"
        });
        $("#in3").children().eq(0).css({
          height:"100px",
          opacity:"0.5",
          transition: "1s"
        });
      }else if (windowHeight >= (contenido3+100)){
        $("#in3").children().eq(0).css({
          height:"250px",
          opacity:"1",
          transition: "1s"
        });
      }
    }

  });

  //$(".info").mouseout(function(){
    //$(this).children().eq(0).css({
      //height:"250px",
      //opacity:"1",
      //transition: "1s"
    //});
  //});

});
