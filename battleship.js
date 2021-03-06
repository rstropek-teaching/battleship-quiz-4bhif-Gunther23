$(() => {
  // Select table containing the battleground
  const battleground = $('#battleground');

  // Build 10 x 10 grid for battleground
  for (let row = 0; row < 10; row++) {
    // Create table row
    const tr = $('<tr>');
    for (let column = 0; column < 10; column++) {
      // Create table cell with CSS class `water`. Note that we use
      // HTML data attributes  to store the coordinates of each cell
      // (see https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes). 
      // That makes it much easier to find cells based on coordinates later.
      $('<td>').addClass('water').attr('data-r', row).attr('data-c', column).appendTo(tr);
    }

    // Add table row to battleground table
    tr.appendTo(battleground);
  }


  
  $('#generate').click(() => {

    var randomlength;
    var randomwidth;
    var direction;
    var ships = [2,3,3,4,5];
   
    direction = Math.floor()*2;
    for(let i = 0;i<ships.length;i++){
      randomlength = Math.floor()*8;
      randomwidth = Math.floor()*8;
      for (let j = 0;j<ships[i].length;i++){
        $('td[data-r="randomlength"][data-r="randomwidth"]').removeClass('water').addClass('ship');
      }
      
    }
    

    // Here you have to add your code for building a random battleground.

    // Tip: The next line of code demonstrates how you can select a table cell
    // using coordinates, remove CSS classes and add CSS classes. 
    $('td[data-r="1"][data-c="1"]').removeClass('water').addClass('ship');
  //  $('td[data-r="2"][data-c="1"]').removeClass('water').addClass('ship');
  //  $('td[data-r="3"][data-c="1"]').removeClass('water').addClass('ship');
  });
});
