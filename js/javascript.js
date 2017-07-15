$(window).ready(function () {
    //first drop down"main"
    $("#main-drop").click(function () {
        $("#drop").slideToggle();

    });
    //    latest users dropdown

    $(".lu-point").click(function () {
        $(this).next().slideToggle();
    })

    //to change the latest users information 
    //two places at one

    $(".l-u-2").each(function () {
        $(this).html("changed");
    });
    //================
    
    function bandPerCent(bandwish){
        $(".band").text(bandwish);
        $(".band").width(bandwish);
        $(window).resize(function(){
        $(".band").text(bandwish);
        $(".band").width(bandwish);
        });
        
    }
    function diskPerCent(disk) {
        $(".disk").text(disk);
        $(".disk").width(disk);
        $(window).resize(function(){
            $(".disk").text(disk);
        $(".disk").width(disk);
        });
        
        
    }
    bandPerCent('30%');
    diskPerCent("70%");
    $("#userWelcome").text("changed")
    
    


});
