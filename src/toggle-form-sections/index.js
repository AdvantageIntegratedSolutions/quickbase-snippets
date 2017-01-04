var buttonTitle = "Expand/Collapse Sections";
var button = $($("a:contains('"+buttonTitle+"')")[0]);

var collapsedAttr = "collapsed";
var firstClickAttr = "firstClick";

var collapsed = $(button)[0].hasAttribute(collapsedAttr);
var firstClick = !$(button)[0].hasAttribute(firstClickAttr);

if(firstClick){
  collapsed = $($(".sectionDiv")[1]).hasClass("expanded");
  $(button).attr(firstClickAttr, true);
};

if(collapsed){
  $(button).removeAttr(collapsedAttr)
}else{
  $(button).attr(collapsedAttr, true);
};

$(".sectionTitle").each(function(index, ele){
  var parent = $(ele).closest(".sectionDiv");

  if(collapsed){
    if($(parent).hasClass("expanded")){
      $(ele).trigger("click");
    };
  }else{
    if($(parent).hasClass("collapsed")){
      $(ele).trigger("click");
    };
  };
});