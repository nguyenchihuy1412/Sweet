document.addEventListener("DOMContentLoaded",function(){
        /* Heart function */
        var love = setInterval(function(){
        var r_num = Math.floor(Math.random() * 40) + 1;
        var r_size = Math.floor(Math.random() * 65) + 10;
        var r_left = Math.floor(Math.random() * 100) + 1;
        var r_bg = Math.floor(Math.random() * 25) + 100;
        var r_time = Math.floor(Math.random() * 5) + 5;
        
        $('.bg_heart').append("<div class='heart' style='width:"+r_size+"px;height:"+r_size+"px;left:"+r_left+"%;background:rgba(255,"+(r_bg-25)+","+r_bg+",1);-webkit-animation:love "+r_time+"s ease;-moz-animation:love "+r_time+"s ease;-ms-animation:love "+r_time+"s ease;animation:love "+r_time+"s ease'></div>");
        
        $('.bg_heart').append("<div class='heart' style='width:"+(r_size-10)+"px;height:"+(r_size-10)+"px;left:"+(r_left+r_num)+"%;background:rgba(255,"+(r_bg-25)+","+(r_bg+25)+",1);-webkit-animation:love "+(r_time+5)+"s ease;-moz-animation:love "+(r_time+5)+"s ease;-ms-animation:love "+(r_time+5)+"s ease;animation:love "+(r_time+5)+"s ease'></div>");
        
        $('.heart').each(function(){
          var top = $(this).css("top").replace(/[^-\d\.]/g, '');
          var width = $(this).css("width").replace(/[^-\d\.]/g, '');
          if(top <= -100 || width >= 150){
            $(this).detach();
          }
        });
      },500);
      /* End heart function */

      /* Button fuvction */
      var nut1 = document.getElementById('n1');
      var nut2 = document.getElementById('n2');
      var nut3 = document.getElementById('n3');
      var nut4 = document.getElementById('n4');

      var h1 = document.getElementById('h1');
      var h2 = document.getElementById('h2');
      var h3 = document.getElementById('h3');
      var h4 = document.getElementById('h4');
      
      var tt = "lan1"

      nut1.onclick = function(){
        if(tt == "lan1")
        {
          h1.classList.add('display');
          h1.classList.remove('display1');
          tt = "lan2";
        }
        else if(tt = "lan2")
        {
          h1.classList.remove('display');
          h1.classList.add('display1');
          tt = "lan1"
        }
      };

      nut2.onclick = function(){
        if(tt == "lan1")
        {
          h2.classList.add('display');
          h2.classList.remove('display1');
          tt = "lan2";
        }
        else if(tt = "lan2")
        {
          h2.classList.remove('display');
          h2.classList.add('display1');
          tt = "lan1"
        }
      };

      nut3.onclick = function(){
        if(tt == "lan1")
        {
          h3.classList.add('display');
          h3.classList.remove('display1');
          tt = "lan2";
        }
        else if(tt = "lan2")
        {
          h3.classList.remove('display');
          h3.classList.add('display1');
          tt = "lan1"
        }
      };

      nut4.onclick = function(){
        if(tt == "lan1")
        {
          h4.classList.add('display');
          h4.classList.remove('display1');
          tt = "lan2";
        }
        else if(tt = "lan2")
        {
          h4.classList.remove('display');
          h4.classList.add('display1');
          tt = "lan1"
        }
      };
      /* End button function */
},false);