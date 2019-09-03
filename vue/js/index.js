$(function(){
    var flag=true;
    $(".webproject").mouseenter(function(){
        if(flag){
            $(".webproject ul").fadeIn(100,function(){
                flag=false;
            });

        }  
    }).siblings().mouseenter(function(){
           if(!flag){
               $(".webproject ul").slideUp(100,function(){
                flag=true;
            }); 
           } 

        })


        $(".webproject ul").mouseleave(function(){       
                $(".webproject ul").slideUp(100); 
                flag=true;

        })   
   
   $(".webproject li").mouseover(function(){
       $(this).addClass("liStyle").siblings().removeClass("liStyle");
   });
})