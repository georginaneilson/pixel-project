$(document).ready(function() {
  console.log("document ready");
  });


  // Select color input
  // Select size input
$('#buttonSubmit').click(function getUserInput() {

  const height = $('input#inputHeight').val();
  const width = $('input#inputWidth').val();

      console.log(height);
      console.log(width);
      $( "p" ).text( 'width =' + width + ', height =' + height);
});

  function makeGrid() {

    // Your code goes here!

  }
