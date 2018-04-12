$(document).ready(function() {
  //Get default color value
  let color = $('#colorPicker').val();
  const pixelCanvas = $('#pixelCanvas');
  //Create the pixel grid
  $('#buttonSubmit').on('click', function makegrid(event) {
    //prevent the default submit action
    event.preventDefault();
    //Clear the grid on submit
    pixelCanvas.empty();
    const inputHeight = $('#inputHeight').val();
    const inputWidth = $('#inputWidth').val();
    for (let tableHeight = 1; tableHeight <= inputHeight; tableHeight++) {
      let tableRow = '';
      let tableData = '';
      let tableWidth = 1;
      while (tableWidth <= inputWidth) {
        tableData += '<td></td>';
        tableWidth ++;
      }
      tableRow = '<tr>' + tableData + '</tr>'
      pixelCanvas.append(tableRow);
    }
  });

  // Get color value
  $('#colorPicker').on('change', function() {
    color = $(this).val();
  });

  //Change background color of the clicked td
  pixelCanvas.on('click', 'td', function() {
    $(this).css('background-color', color);
  });

});
