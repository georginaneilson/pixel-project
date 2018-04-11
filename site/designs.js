$(document).ready(function() {
  console.log('document ready');
  let color = $("#colorPicker").val();
  console.log(color);


  //makegrid function
  $('#buttonSubmit').click(function makegrid(e) {
    e.preventDefault();
    $('#pixelCanvas').empty();
    const height = $('#inputHeight').val();
    const width = $('#inputWidth').val();
    if (height < 1) {} else {
      var heightOutput = '';
      for (let i = 0; i < height; i++) {
        heightOutput += '<tr></tr>\n';
      }
      if (width < 1) {} else {
        var widthOutput = '';
        for (let i = 0; i < width; i++) {
          widthOutput += '<td></td>';
        }
      }
      $('#pixelCanvas').append(heightOutput);
      $('tr').append(widthOutput);
    }
  });


  // Select color input
  $("#colorPicker").change(function() {
    color = $("#colorPicker").val();
    console.log('The new color is ' + color);
    //$("h1").css('background', $(this).val());
  });

  $("p").on('click', function() {

    console.log('The cell color should be ' + color);
    //$("h1").css('background', $(this).val());
  });


});


// Select size input
