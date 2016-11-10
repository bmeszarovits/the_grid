var rows = 16;
var columns = 16;
var $square = $("<div />", {
  class: 'square'
});

function fillGrid() {
  var box = $(".box_main").empty();
  for (var i = 0; i < rows*columns; i++) {
    box.append($square.clone());
  }
}

$(document).ready(function() {
  
  fillGrid();

  var hoverEffects = {
    black: function() {
      $(this).css("background", "#000")
    },
    colorFade: function() {
      $(this).css("background", "#cfd8dc");
      $(this).fadeToggle("2500");
    },
    rainbow: function() {
      var rainbow = ["red", "blue", "yellow", "green", "pink", "violet", "purple", "brown", "aqua", "gold"];
      var rand = rainbow[Math.floor(Math.random() * rainbow.length)];
      $(this).css("background", rand);
    }
  };
  var activeEffect = $.noop;

  $(".left1").click(function() {activeEffect = hoverEffects.black});
  $(".left2").click(function() {activeEffect = hoverEffects.colorFade});
  $(".right1").click(function() {location.reload();});
  $(".right2").click(function() {activeEffect = hoverEffects.rainbow});

  
  $('.box_main').on('mouseenter mouseleave','.square',function() {
    activeEffect.apply(this);
  })

  $(".button_down").click(function() {
    var setup = prompt("enter a value between 1 and 64", "0");
    
    rows = setup;
    columns = setup;
    fillGrid();
    $(".square").width(100/columns + '%');
    $(".square").height(100/rows + '%');
  });
});

// improved and optimized version of my original js code with the help of a tons of Googling
// thank you interwebs and Odin Project  