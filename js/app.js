// -----------------------------------------------------------
// Votre code ici
// -----------------------------------------------------------

$(document).ready(function () {



  
   
  
  //creation de la grille

  $(function () {
    $(".pixel").remove();
    $(".swatch").removeClass("is-active");
    
    let widthCase = parseInt($('#content').css('width'))/32;
    console.log(widthCase)
    $('.pixel').css({"width": 500, "height": widthCase})
    

    
    for (let i = 0; i < 1024; i++) {
      $("#content").append(`<div class="pixel" id='${i}'></div>`);
    }


    //selection des couleurs

    $(".swatch").click(function(){

        $(".swatch").removeClass("is-active")
        $(this).addClass("is-active");
        

        var coloru = $(this).css("background-color")
        
        $(".pixel").click(function () {
            console.log("hhhhh");
            
            $(this).css( "background-color", coloru);
            
          });

          



      })
    

   


      //gomme
      $(".pixel").dblclick(function () {
        console.log("hey");
        $(this).css({ "background-color": "white" });
      });

      // reset
      
      $("#reset").click(function () {
        ;
        $(".pixel").css({ "background-color": "white" });
      });
     
    
  });

  //export
  let exp = $('#export');
  exp.click(function(){
      domtoimage.toJpeg(document.getElementById('content'))
      .then(function(dataUrl){
          let link = document.createElement('a');
          link.download = 'image.jpeg';
          link.href = dataUrl;
          link.click();
          btnExport();
      });
  });
  
});
