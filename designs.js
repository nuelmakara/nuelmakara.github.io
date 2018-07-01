// .colorPicker; .pixelCanvas; .sizePicker; .inputHeight and .inputWidth represents the HTML Elements of (ColorPallette)+
//Table, table rows and columns  sizes, and input field for capturing sizes of the rows and columns!
/**
* @description Targets the colorPicker (.colorPicker) 
*which sets the value selected by the user to 'col' *variable corresponds to a '<td>'.
*The '<td>' has an event listener that attaches the *selected colorPicker value to the <td> element when *clicked! on('click');
*The Css style gets applied to the <td> onClick event *and on doubleClick removes (.removeAttr()) from the *style attribute from the <td> element.
*/
function invokeColor(){
  let col = $("td");
    col.click(function(){
    const color = $(".colorPicker").val();
    if ($(this).attr("style")){
   $(this).removeAttr("style");
 } 
   else {
    $(this).attr("style","background-color:"+ color);
     }
  });
}
/**
* @description Targets the table element(.sizePicker) *and uses a submit function with a corresponding *'.preventdefault()':[to prevent the form from *submitting] method to take the values of grid height *and grid width and draw <td> and <tr>.
*setting the values as parameters for makeGrid();
*event listener handles the firing of the submit action *and calls another method evt.preventDefault()
* @param {variable} height which gets values *from .inputHeight.
* @param {variable} width which gets its value *from .inputWidth.
*@description calls the invokeColor function which *applies the chosen color to the cell <td> selected by *the user.
*/
// Select size input and output a grid of same dimension
$(".sizePicker").submit(function(evt){
  evt.preventDefault();
    let height = $(".inputHeight").val();
      let width = $(".inputWidth").val();
    makeGrid(height, width);
  invokeColor();
});
/**
* @description Takes two parameters representing 
*'row' and 'column' and uses the return values to draw *corresponding <td> and <tr> elements on the PixelCanvas *(table)
* @param {variable} row
* @param {variable} col
* @returns {grid} a table with appended '<tr></tr>' that *gets appended to <td></td>.
*@deacription A while loop is used to loop through the *different values of .inputHeight and .inputWidth so *that a corresponding grid of rows and cols can be *drawn.
*/
function makeGrid(row,col){
  $("tr").remove();
  let i=1;
    while(i <= row){
    $(".pixelCanvas").append("<tr></tr>");
  i++;
}
  let j=1;
    while(j <= col){
    $("tr").append("<td></td>");
  j++;
}
}



