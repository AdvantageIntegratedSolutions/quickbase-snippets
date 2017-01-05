var contentLabel = "Fixed Info Content";
var colorLabel = "Fixed Info Color";

var content = getValue(contentLabel)
var contentColor = getValue(colorLabel);

var style = {
  position: "fixed",
  bottom: "0px",
  right: "0px",
  width: "200px",
  height: "60px",
  padding: "10px",
  z-index: 9999,
  color: "white",
  "border-radius": "5px 0px 0px 5px",
  "background-color": contentColor
};

var styleString = "";
for(attr in style){
  styleString += attr + ":" + style[attr] + ";";
};

var fixedInfo = "<div style='"+styleString+"'>"+content+"</div>";
$('body').append(fixedInfo);

function getValue(label){
  var label = $("label:contains('"+label+"')")[0];
  return $(label).parent("td").next("td").html();
};