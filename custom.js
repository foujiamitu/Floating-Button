window.onscroll = function(){
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            document.getElementById("floatingBtn").style.display = "block";
        } else {
            document.getElementById("floatingBtn").style.display = "none";
        }
    }
    $(document).ready(function(){ 
        $(window).scroll(function(){ 
            if ($(this).scrollTop() > 500) { 
                $('#floatingBtn').fadeIn(); 
            } else { 
                $('#floatingBtn').fadeOut(); 
            } 
        }); 
        $('#floatingBtn').click(function(){ 
            $("html, body").animate({ scrollTop: 0 }, 600); 
            return false; 
      });
});