// When mouse over #name, 
	// MICHELLE TANG expand to MENGSHUANG MICHELLE TANG
	// h2 slide down

// When mouse over cover img
	// opacity of the img become 40% (already did it in CSS)
	// .hidden_text shows up in the middle of the img one line after another


$(document).ready(function(){
  
  var $randomnbr = $('.nbr');
  var $timer= 6;
  var $it;
  var $data = 0;
  var index;
  var change;
  var letters = ["m", "i", "c", "h", "e", "l", "l", "e", "t", "a", "n", "g"];
  
  $randomnbr.each(function(){
      
    change = Math.round(Math.random()*100);
    $(this).attr('data-change', change);
    
  });
  
  function random(){
    return Math.round(Math.random()*9);
  };
  
  function select(){
    return Math.round(Math.random()*$randomnbr.length+1);
  };
  
  function value(){
    $('.nbr:nth-child('+select()+')').html(''+random()+'');
    $('.nbr:nth-child('+select()+')').attr('data-number', $data);
    $data++;
    
    $randomnbr.each(function(){
        if(parseInt($(this).attr('data-number')) > parseInt($(this).attr('data-change'))){
          index = $('.ltr').index(this);
          $(this).html(letters[index]);
          $(this).removeClass('nbr');
        }
    });
    
  };
  
  $it = setInterval(value, $timer);
    
});
