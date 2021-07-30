function sound(key)
    { 
        switch(key)
        {
            
            case "a":
                var A = new Audio("1.wav")
                A.play();"a".addClass("play");
                break;
            case "s":
            var S= new Audio("2.wav");
            S.play();
            break;
            case "d":
            var D= new Audio("3.wav");
            D.play();
            break;case "f":
            var F= new Audio("4.wav");
            F.play();
            break;case "g":
            var G= new Audio("5.wav");
            G.play();
            break;case "h":
            var H= new Audio("6.wav");
            H.play();
            break;
            case "j":
            var J= new Audio("7.wav");
            J.play();
            break;
            case "k":
            var k= new Audio("8.wav");
            k.play();
            break;
            case "l":
            var L= new Audio("9.wav");
            L.play();
            break;
        }
    }

   function press(key)
   {
       
      var btnpress= document.querySelector("."+key);
      btnpress.classList.add("pressed");
      setTimeout(function(){
          btnpress.classList.remove("pressed");
      },100);
   }
    
    noofbuttons= document.querySelectorAll(".button").length; 
    for(var i=0; i<noofbuttons; i++)
    {
       document.querySelectorAll(".button")[i].addEventListener("click", function() {
           var playonclick = this.innerHTML;
           press(playonclick);
           sound(playonclick);
           
       });
    }

    
    document.addEventListener("keypress",function(p)
    {
        press(p.key); 
        sound(p.key);
    })

