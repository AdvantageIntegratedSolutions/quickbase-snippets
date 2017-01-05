//Current Active Tab
var number activeTab = 1;

//Tab Settings
var text tabOne = "Tab 1";
var text tabOneForm = "2";

var text tabTwo = "Tab 2";
var text tabTwoForm = "10";

var text tabThree = "Tab 3";
var text tabThreeForm = "11";

var text tabFour = "Tab 4";
var text tabFourForm = "12";

var text tabFive = "Tab 5";
var text tabFiveForm = "13";

var text rootUrl = URLRoot() & "db/" & Dbid() & "?a=dr&rid=" & URLEncode([Record ID#]) & "&dfid=";

//Styling
var text activeButtonColor = "#4ea0e6";
var text activeTextColor = "#fff";
var text activeHoverColor = "#356e9f";
var text inactiveButtonColor = "#fff";
var text inactiveTextColor = "#000";
var text inactiveHoverColor = "#eeeeee";
var text fontSize = "20px";
var text tabWidth = "118px";
var text tabHeight = "40px";
var text spacing = "2px";

//Hyperlink Buttons
var text buttonStyle = "font-size: " & $fontSize & "; cursor: pointer; width: " & $tabWidth & "; height: " & $tabHeight & "; margin-right: " & $spacing & "; display: inline-block; text-align: center;";

var text centerer = "'display: inline-block; height: 100%; vertical-align: middle;'";
var text link = "'vertical-align: middle; display: inline-block;'";

var text inactive = $buttonStyle & "background-color: " & $activeButtonColor & "; color:" & $activeTextColor;
var text active = $buttonStyle & "background-color: " & $inactiveButtonColor & "; color: black" & $inactiveTextColor;

"<a style='"& If($activeTab = 1, $active, $inactive) &"' href='" & $rootUrl & $tabOneForm & "' onMouseOver='this.style.backgroundColor=\""& If($activeTab = 1, $inactiveHoverColor, $activeHoverColor) & "\"'" & " onMouseOut='this.style.backgroundColor=\"" & If($activeTab = 1, $inactiveButtonColor, $activeButtonColor) & "\"'><span style=" & $centerer & "></span><span style=" & $link & ">"& $tabOne &"</span></a>" &
"<a style='"& If($activeTab = 2, $active, $inactive) &"' href='" & $rootUrl & $tabTwoForm & "' onMouseOver='this.style.backgroundColor=\""& If($activeTab = 2, $inactiveHoverColor, $activeHoverColor) & "\"'" & " onMouseOut='this.style.backgroundColor=\"" & If($activeTab = 2, $inactiveButtonColor, $activeButtonColor) & "\"'><span style=" & $centerer & "></span><span style=" & $link & ">"& $tabTwo &"</span></a>" &
"<a style='"& If($activeTab = 3, $active, $inactive) &"' href='" & $rootUrl & $tabThreeForm & "' onMouseOver='this.style.backgroundColor=\""& If($activeTab = 3, $inactiveHoverColor, $activeHoverColor) & "\"'" & " onMouseOut='this.style.backgroundColor=\"" & If($activeTab = 3, $inactiveButtonColor, $activeButtonColor) & "\"'><span style=" & $centerer & "></span><span style=" & $link & ">"& $tabThree &"</span></a>" &
"<a style='"& If($activeTab = 4, $active, $inactive) &"' href='" & $rootUrl & $tabFourForm & "' onMouseOver='this.style.backgroundColor=\""& If($activeTab = 4, $inactiveHoverColor, $activeHoverColor) & "\"'" & " onMouseOut='this.style.backgroundColor=\"" & If($activeTab = 4, $inactiveButtonColor, $activeButtonColor) & "\"'><span style=" & $centerer & "></span><span style=" & $link & ">"& $tabFour &"</span></a>" &
"<a style='"& If($activeTab = 5, $active, $inactive) &"' href='" & $rootUrl & $tabFiveForm & "' onMouseOver='this.style.backgroundColor=\""& If($activeTab = 5, $inactiveHoverColor, $activeHoverColor) & "\"'" & " onMouseOut='this.style.backgroundColor=\"" & If($activeTab = 5, $inactiveButtonColor, $activeButtonColor) & "\"'><span style=" & $centerer & "></span><span style=" & $link & ">"& $tabFive &"</span></a>"