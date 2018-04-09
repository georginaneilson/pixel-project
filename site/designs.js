$(document).ready(function() {
  console.log("document ready");


  $("#buttonSubmit").click(function(e) {
    e.preventDefault();
    console.log("button submitted");
    $( "#pixelCanvas" ).empty();
    console.log("canvas cleared?")
    const height = $("#inputHeight").val();
    const width = $("#inputWidth").val();
    console.log(height + " " + width);

    var i;
    if (height < 1) {
      console.log("less than 1")
    } else {

      var heightOutput = "";
      for (i = 0; i < height; i++) {
        heightOutput += "<tr></tr>\n";
        console.log(heightOutput);

      }

      if (width < 1) {
        console.log("width less than 1")
      } else {

        var widthOutput = "";
        for (i = 0; i < width; i++) {
          widthOutput += "<td></td>";
          console.log(widthOutput);

        }
      }


      $( "#pixelCanvas" ).append(heightOutput);
      $( "tr" ).append(widthOutput);
    }

  });


  function makeGrid() {
    console.log("makegrid")
    // var i;
    // if (height < 1) {
    //   console.log("less than 1")
    // } else {
    //   for (i = 0; i < height; i++) {
    //     let heightOutput;
    //     heightOutput + ("<tr></tr>" + \n)
    //     console.log("more than one!")
    //   }
    // }

  }

});


// Select color input
// Select size input
