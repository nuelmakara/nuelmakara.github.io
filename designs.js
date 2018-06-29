// Select color input
function invokeColor() {
    let col = $("td");
    col.click(function () {
    const color = $("#colorPicker").val();
    if ($(this).attr("style")){
        $(this).removeAttr("style");
     } else {
        $(this).attr("style", "background-color:" + color);
     }
    }
   );
}
// Select size input
$("#sizePicker").submit(function(evt){
    evt.preventDefault();
    let height = $("#inputHeight").val();
    let width = $("#inputWidth").val();
   makeGrid(height, width);
    invokeColor();
});

// Your code goes here!
function makeGrid(row,col){$("tr").remove();
  let i=1;
  while(i <= row){$("#pixelCanvas").append("<tr></tr>");i++;}
   let j=1;
  while(j <= col){$("tr").append("<td></td>");j++;}
}
// add colors to the cells

