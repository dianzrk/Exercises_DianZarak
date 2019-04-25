/*   Frameworks: jQuery 3.3.1
 */

(function($){
      $.fn.CodehimClock = function(options) {
      var setting = $.extend({
    		        showSeconds: true,
                 showDate: true,
                 clockSize: "original",
  		   }, options);

        return this.each(function() {
 var clockDale,
   secondHand,
   minuteHand,
   hourHand,
   clockCenter,
   clockLogo,
   smallPoints,
   dateSticker,
   dayShow,
   dateShow,
   $time,
   $second,
   $minute,
   $hour,
   $csp,
   $cmp,
   $chp;

    $time = new Date();
    $second = $time.getSeconds();
    $minute = $time.getMinutes();
    $hour = $time.getHours();
 $csp = 0; //current second position
 $cmp = 0; //current minutes position
 $chp = 0; //current hour position


  for (var y = 6; y <= 360; y +=6){

    if ( (y/$second).valueOf() === 6){
         $csp = y;
      }
    if ( (y/$minute).valueOf() === 6){
         $cmp = y;
     }
}


  for (var v = 0; v <= 360; v += 15){
    var hoursHand = $hour*30+($minute/2.1).valueOf();
    $chp = hoursHand;
  }

//Creating clock structure
  clockDale = $div();
  secondHand = $div();
  minuteHand = $div();
  hourHand =  $div();
  clockCenter = $div();
  clockLogo = $div();
  dateSticker = $div();
  dayShow = $span();
  dateShow = $span();

// Clock numbers
 var r = 1;
      do {
             var num = $span();
             var $thisClass = "number " + "p"+r;
             $(num).html(r)
             .addClass($thisClass)
             .appendTo(clockDale);
     r++;
          } while( r <= 12 );

setInterval(function(){

var $time = new Date();
var second = $time.getSeconds();
var minute = $time.getMinutes();
var hour = $time.getHours();


   $csp += 6;
   $cmp += 0.10;
   $chp += 0.0016666667;


if ($csp >= 360 || second == 0){
    $csp = 0;
    $chp += 0.10;
}


$(secondHand).addClass("seconds-hand")
.css({
      'transform' : 'rotate('+ $csp+'deg)',
      'transformOrigin' : 'bottom',
      'transition' :  '0s',
});

//minutes
$(minuteHand).addClass("minutes-hand")
.css({
      'transform' : 'rotate('+$cmp+'deg)',
      'transformOrigin' : 'bottom',
});

//hours
$(hourHand).addClass("hours-hand")
.css({
      'transform' : 'rotate('+$chp+'deg)',
      'transformOrigin' : 'bottom',
});

},1000);

$(clockDale)
    .append(minuteHand)
    .append(hourHand)

// applying clock settings
    .addClass(setting.clockSize);

if( setting.showSeconds == true){
    $(clockDale).append(secondHand);
}


$(clockCenter)
    .addClass("clock-center")
    .appendTo(clockDale);

$(clockLogo)
    .html("")
    .addClass("clock-logo")
    .appendTo(clockDale);

var $stData = [];

for (var st =6; st <= 360; st +=6){

   var stRot = {
   'transform' : 'rotate('+st+'deg)',
   '\-webkit\-transform' : 'rotate('+st+'deg)',
};


   $stData.push(stRot);
}


 for (var $sr = 0; $sr <= 59; $sr++)
       {
             smallPoints = $span();
           var $thisClass = "point" + " pt"+$sr;
             $(smallPoints)
                 .addClass($thisClass)
                 .css($stData[$sr])
                .appendTo(clockDale);
          }


var days = [
   "Sun",
   "Mon",
   "Tue",
   "Wed",
   "Thu",
   "Fri",
   "Sat"
   ];

var $thisDay = $time.getDay();
var $thisDate = $time.getDate();
var daleinner = $div();
var spinner1 = $div();
var spinner2 = $div();

$(dayShow).html(days[$thisDay])
    .addClass("day")
    .appendTo(dateSticker);

$(dateShow).html($thisDate)
    .addClass("date")
    .appendTo(dateSticker);

if (setting.showDate == true){
    $(dateSticker)
      .addClass("date-box")
      .appendTo(clockDale);
}

$(daleinner)
    .addClass("dale-inner")
    .appendTo(clockDale);

$(spinner1)
    .addClass("logo-outer")
    .appendTo(clockDale);

$(spinner2)
    .addClass("logo-outer1")
    .appendTo(clockDale);

$(clockDale)
    .addClass("codehim-clock-dale")
    .appendTo(this);




var d = new Date();
//console.log("Now: " + d);

var utc_offset = d.getTimezoneOffset();
//console.log(utc offset: "" + utc_offset);
d.setMinutes(d.getMinutes()+ utc_offset);
console.log("utc: " +d);

//Mumbai -> +5.5 from utc
var mumbai_offset = 5.5*60;
d.setMinutes(d.getMinutes()+ utc_offset);
console.log("Mumbai: " +d);




function $div(){
   return document.createElement("div");
}
function $span(){
   return document.createElement("span");
}
        });
      };

    })(jQuery);
