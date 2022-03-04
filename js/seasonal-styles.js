$("document").ready(function(){
    $('.seasons a').click(function(e){//find all a tags inside class of seasons
        e.preventDefault();//stop default submission
        var season = $(this).attr("href");//contents of href attribute of this element
        alert(season);
    });
});$('document').ready(function(){
    //   $("li.seasons a").css("color", "orange");

    // change pic with an id of logo to season 
    // change pic with an id of wear to clothing

    $("li.default a").click(function(e){//find all a tags inside class of seasons
        e.preventDefault();//stop default submission
        let Default = $(this).attr("href");//contents of href attribute of this element
        $("#wear").attr('src', 'images/300x400.png');
        $("#logo").attr('src', 'images/four-seasons.gif');
        $("header > h3").css('color', '');
        $('html').css('background-color', '');

        alert("boring!");
    });

    $("li.spring a").click(function(e){//find all a tags inside class of seasons
        e.preventDefault();//stop default submission
        let spring = $(this).attr("href");//contents of href attribute of this element
        $("#wear").attr('src', 'images/spring-wear.jpg');
        $("#logo").attr('src', 'images/spring.gif');
        $("header > h3").css('color', '#2B7129');
        $('html').css('background-color', '#2B7129');

        alert("The birds are chirping and the flowers are blooming");
    });

    $("li.summer a").click(function(e){//find all a tags inside class of seasons
        e.preventDefault();//stop default submission
        let summer = $(this).attr("href");//contents of href attribute of this element
        $("#wear").attr('src', 'images/summer-wear.jpg');
        $("#logo").attr('src', 'images/summer.gif');
        $("header > h3").css('color', '#EBA52B');
        $('html').css('background-color', '#EBA52B');

        alert("Make sure to wear sunscreen, it's HOT!");
    });

    $("li.fall a").click(function(e){//find all a tags inside class of seasons
        e.preventDefault();//stop default submission
        let fall = $(this).attr("href");//contents of href attribute of this element
        $("#wear").attr('src', 'images/fall-wear.jpg');
        $("#logo").attr('src', 'images/fall.gif');
        $("header > h3").css('color', '#A81124');
        $('html').css('background-color', '#A81124');

        alert("Get your flannel on, the leaves are falling");
    });

    $("li.winter a").click(function(e){//find all a tags inside class of seasons
        e.preventDefault();//stop default submission
        let winter = $(this).attr("href");//contents of href attribute of this element
        $("#wear").attr('src', 'images/winter-wear.jpg');
        $("#logo").attr('src', 'images/winter.gif');
        $("header > h3").css('color', '#005393');
        $('html').css('background-color', '#005393');

        alert("Brrrr! It's cold, time to build a snowman.");
    });

});