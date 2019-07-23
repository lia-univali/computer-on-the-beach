
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

      $("#mc1Main").click(function(){
        if($("#idMc1").css('display') == 'none'){
          $("#idMc1").show();
        }else{ 
          $("#idMc1").hide();
        }
      });

      $("#mc2Main").click(function(){
        if($("#idMc2").css('display') == 'none'){
          $("#idMc2").show();
        }else{ 
          $("#idMc2").hide();
        }
      });

      $('#programacao.dropdown').on('mouseenter', () => {
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

/*bloco tabela inscrições */

function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("myTable");
  switching = true;
  //Set the sorting direction to ascending:
  dir = "asc"; 
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      /*check if the two rows should switch place,
      based on the direction, asc or desc:*/
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch= true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      //Each time a switch is done, increase this count by 1:
      switchcount ++;      
    } else {
      /*If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again.*/
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

