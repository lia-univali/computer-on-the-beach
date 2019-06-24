
/*$(document).ready(() => { 
      $('#p1').on('click', () => {
      $('#p1michel').show();
  });     
      $('#pfecha').on('click', () => {
      $('#p1michel').hide();
  }); 
});*/

$(document).ready(function(){

      $("#autor1Main").click(function(){
        if($("#p1").css('display') == 'none'){
          $("#p1").show();
        }else{ 
          $("#p1").hide();
        }
    }); 
      $("#autor2Main").click(function(){
        if($("#p2").css('display') == 'none'){
          $("#p2").show();
        }else{ 
          $("#p2").hide();
        }
     }); 

         $("#autor3Main").click(function(){
        if($("#p3").css('display') == 'none'){
          $("#p3").show();
        }else{ 
          $("#p3").hide();
        }
      });

      $("#autor4Main").click(function(){
        if($("#p4").css('display') == 'none'){
          $("#p4").show();
        }else{ 
          $("#p4").hide();
        }
      });

      $("#autor5Main").click(function(){
        if($("#p5").css('display') == 'none'){
          $("#p5").show();
        }else{ 
          $("#p5").hide();
        }
      });

      $("#autor6Main").click(function(){
        if($("#p6").css('display') == 'none'){
          $("#p6").show();
        }else{ 
          $("#p6").hide();
        }
      });

      $("#workShop").click(function(){
        if($("#wsDetalhes").css('display') == 'none'){
          $("#wsDetalhes").show();
        }else{ 
          $("#wsDetalhes").hide();
        }
      });

      $('#programacao').on('mouseenter', () => {
        $("#menuProgramacao").show()
      });
      $('#chamadas').on('mouseenter', () => {
        $("#menuChamadas").show()
      });
      
      $('#programacao').on('mouseleave', () => {
        $("#menuProgramacao").hide();
      });
      $('#chamadas').on('mouseleave', () => {
        $("#menuChamadas").hide();
      });

  });



