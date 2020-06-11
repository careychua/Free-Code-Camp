// without ready, code might run before HTML is rendered
$(document).ready(function(){
    /*
    $("#target4").remove();                     // remove selector element

    $("button").addClass("animated bounce");    // add classes by element
    $(".well").addClass("animated shake");      // add classes by class
    $("#target3").addClass("animated fadeOut"); // add classes by id
        
    $("button").removeClass("btn-default");     // remove classes by selector
        
    $("#target1").css("color", "red");          // change CSS properties
    $("#target1").prop("disabled", true);       // change non-CSS properties

    $("#target4").html("<em>#target4</em>");    // replace with HTML code within its tags
    $("#target4").text("<em>#target4</em>");    // replace text within its 
        
    $("#target2").appendTo("#right-well");      // append to another selector
    $("#target5").clone();                      // copy selector

    $("#target1").parent();                     // select parent element of selector
    $("#right-well").children();                // select children elements of selector

    $(".target:nth-child(2)");                  // select nth child with class target of element
    $(".target:even");                      // select even from index 0, with class target of element
    $(".target:odd");                       // select odd from index 0, with class target of element
    */

    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true);
    $("#target4").remove();
    $("#target2").appendTo("#right-well");
    $("#target5").clone().appendTo("#left-well");
    $("#target1").parent().css("background-color", "red");
    $("#right-well").children().css("color", "orange");
    $(".target:nth-child(2)").addClass("animated bounce");
    $(".target:even").addClass("animated shake");
    $("body").addClass("animated hinge");
});