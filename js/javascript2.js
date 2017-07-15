$(window).ready(function () {
    //first drop down"main"
    $("#main-drop").click(function () {
        $("#drop").slideToggle();

    });
    //    Pages dropdown

    $(".lu-point").click(function () {
        $(this).next().slideToggle();
    })


    //================progress bar
    function bandPerCent(bandwish) {
        $(".band").text(bandwish);
        $(".band").width(bandwish);
        $(window).resize(function () {
            $(".band").text(bandwish);
            $(".band").width(bandwish);
        });

    }

    function diskPerCent(disk) {
        $(".disk").text(disk);
        $(".disk").width(disk);
        $(window).resize(function () {
            $(".disk").text(disk);
            $(".disk").width(disk);
        });


    }
    bandPerCent('72%');
    diskPerCent("37%");
    $("#userWelcome").text("changed")

    //delete function  
    $(".btn-delete").on("click", function () {
        var clas = $(this).parent().attr("class");

        $("." + clas).parents("tr").fadeOut("slow", function () {
            $("." + clas).parents("tr").remove();
        });



        $("." + clas).parents(".latest-drop").prev().fadeOut("slow", function () {

            $("." + clas).parents(".latest-drop").prev().remove();


        });
        $("." + clas).parents(".latest-drop").fadeOut("slow", function () {
            $("." + clas).parents(".latest-drop").remove();
        });



    });
 

      


});

   

