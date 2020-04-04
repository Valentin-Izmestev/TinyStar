$(document).ready(function () {
    
//-----------всплытие изображений------------
    var timeShow = setTimeout(function(){
        $('.float-img').show(); 
    }, 0.2);
//    ---------------------------------

    var $openSearch = $('.open-search');
    var $seatchForm = $('.seatch-form');
    var $closeSearch = $('.close-search');
    var $searchBtn = $('.search-btn');
    var $osContol = $('.top-header');
    var $headerSocial = $('.top-header .social');


    $openSearch.bind('click', function (event) {
        event.preventDefault(); 
        if ($(window).width() < 585 && $(window).width() > 400) {
            $headerSocial.hide();
        }
        if ($(window).width() < 400) {
            $seatchForm.slideDown(300);
        } else {
            $seatchForm.fadeIn(300);
        }

        $osContol.addClass('open-search-form');

    });

    $closeSearch.bind('click', function (event) {
        event.preventDefault();

        if ($(window).width() > 400) {
            $seatchForm.fadeOut(300);
        } else {
            $seatchForm.slideUp(300);
        }

        $osContol.removeClass('open-search-form');
        $seatchForm.find('input.search').val('');

        if ($headerSocial.attr('style')) {
            $headerSocial.show(300);
        }
    });
//    ----------------------------------------------
//    -----burger-menu-------------------------------
    var $burgerBtn = $('.burger-btn');
    $burgerBtn.bind('click', function () {
        $(this).parent().toggleClass('open');
    });

//    ----------------------------------------------
//    ------modal--------------------------------
     $('.call-modal').click(function(e){
         e.preventDefault();
        $('.form-modal').arcticmodal()
     });
//    -----------------------------------------
    
//    ---------------add sliders------------
    $('.popular-goods__sl').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 7000,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1050,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true,
                }
            },
            ]
    });
    $('.product-sl').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,  
        draggable: false,
        fade: true,
        cssEase: 'linear',
        asNavFor: '.product-mini-sl',  
        responsive: [
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    draggable: true,
                    fade: false, 
                    autoplay: true,
                    autoplaySpeed: 7000,
                    dots: true
                }
            }
        ]
    });
    $('.product-mini-sl').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,  
        draggable: false,
        vertical: true,
        asNavFor: '.product-sl',  
        focusOnSelect: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 7000, 
    });
//----------------------------------------------
//------управление стрелочками у ссылок сортировки----
    $soringItem = $('.sorting__item');
    $soringItem.bind('click', function (event) {
        event.preventDefault();
        $(this).toggleClass('arrow-down');
    });
//    -----------------------------------------------
//--------------rating-------------------------   
    $(function(){
        var $ratingStar = $('.product-rating__item');
        var $productRating = $('.index-rating');
        
        
        $ratingStar.bind('click', function(event){
            
            var curElInx = $(this).index();
            
            $productRating.val(curElInx +1);
            $ratingStar.removeClass('current');
            
            $ratingStar.each(function(index, element){
                if(index <= curElInx){
                    $(this).addClass('current');
                }
            });
        });
    })
//    -------sctoll pan-------------------------------
    
    $('.scroll_block').jScrollPane({
			autoReinitialise: false,
			showArrows:false
		});
//    ----------------------------------------------
//    -------отрытие фильторв на главной----------
    $cpFilterCaption = $('.control-panel .filter__caption');
    $cpFilterItem = $('.control-panel .filter__item');    
    
    $cpFilterCaption.bind('click', function (event) {
        event.preventDefault(); 
        if($(this).parent().hasClass('filter-arr-top')){
            $(this).parent().removeClass('filter-arr-top'); 
        }else{ 
            $cpFilterCaption.parent().removeClass('filter-arr-top'); 
            $(this).parent().addClass('filter-arr-top');
        } 
    });
    
    $(document).bind('click', function(event){
        if (!$cpFilterItem.is(event.target)  
		    && $cpFilterItem.has(event.target).length === 0) { 
			$cpFilterCaption.parent().removeClass('filter-arr-top'); 
		}
    });
//    -----------------------------------------------------------
//    ------- показ панели фильтров в мобильной версии------------
    $filterBtnOpen = $('.filrt_btn-open');
    $greatShadow = $('.great-shadow');
    $allFilter = $('.filter');
    $FilterClose = $('.filter__close');
    $appleBtn = $('.apply');
    
    function OpenAndCloseFilter(){
        $allFilter.toggleClass('filter-show');
        $greatShadow.fadeToggle();
    }
    
    $filterBtnOpen.bind('click', function(event){
        event.preventDefault();
        OpenAndCloseFilter()
    });
    $FilterClose.bind('click', function(event){
        event.preventDefault();
        OpenAndCloseFilter()
    });
    $greatShadow.bind('click', function(event){
        event.preventDefault();
        OpenAndCloseFilter()
    });
    
    $resetAllBtn = $('.reset-all');
    $resetAllBtn.bind('click', function(event){
        event.preventDefault();
        $allFilter.find('input:checked').prop('checked', false);
        initWorm();
    });
    $appleBtn.bind('click', function(event){
        event.preventDefault();
        OpenAndCloseFilter()
    })
//    -----------------------------------------------------------
    //    ползунок UI
//    функция инициализации ползунка
    function initWorm(){
        $("#slider-range").slider({
            range: true,
            min: 0,
            max: 10000,
            values: [500, 3000],
            slide: function (event, ui) {
                $("#from").val(ui.values[0]);
                $("#before").val(ui.values[1]); 
            }
        });  
        $("#from").val( $("#slider-range").slider("values", 0));
        $("#before").val($("#slider-range").slider("values", 1));
    }
    initWorm()
        
        $priceForm = $('.price__form input');
        $priceBefore = $('.price__before input');
//    -------------------------------------------------------------------
// ------------- функция измерени положения ползунка по знач. input------------
        function changeWorm(){
            $( "#slider-range" ).slider({
                    range: true,
                    min: 0,
                    max: 10000,
                    values: [$priceForm.val(), $priceBefore.val()],
                    slide: function (event, ui) { 
                    $("#from").val(ui.values[0]);
                    $("#before").val(ui.values[1]); 
                }
            });
        }
    

        $priceForm.bind('input', function(){ 
                changeWorm(); 
        }); 
        $priceBefore.bind('input', function(){  
                changeWorm(); 
        });
//    ----------------------------------------------
//   ------------ Выбор размера  в таблице размеров-------------------
    $('.size').bind('click', function(event){
        event.preventDefault();
        $(this).toggleClass('selected');
    });
//    ----------------------------------------------
 // ----------Tabs-----------------------------
    var $conrtolElements = $('.description__tab-control__item');
    var $displayElement = $('.description__tab-disp__item'); 
    
    $conrtolElements.bind('click', function(e){  
        e.preventDefault();
        let currentIndex = $(this).index();
        $(this).siblings('.description__tab-control__item').removeClass('active');
        $(this).addClass('active'); 
        let $displayElementsLevel = $(this).parent().next().children('.description__tab-disp__item');
        $displayElementsLevel.removeClass('active');
        $displayElementsLevel.eq(currentIndex).addClass('active');       
    });
//    ----------------------------------------------
//    ----fancybox----------------------------------
    $('.fancybox').fancybox();
//    ----------------------------------------------
//    -------------телефонная маска----------------
    $(".phone-mask").mask("+7 (999) 999-99-99");
//    ---------------------------------------------
//    CAT------------------------------------------ 
    $(function(){
      var cat = $('.cat');
         
      var    mouseLX = 0; 
      var    mouseLY = 0; 
      var    limitLX = parseInt($('.left-eye').width())-8; 
      var    limitLY = parseInt($('.left-eye').height())-8; 
        
      var    mouseRX = 0; 
      var    mouseRY = 0; 
      var    limitRX = parseInt($('.right-eye').width())-8; 
      var    limitRY = parseInt($('.right-eye').height())-8;
        
        $('.main__banner .inner-big').on('mouseout', function(){
             cat.removeClass('woke-up');
        });
      // Определяет границы, по которым будет двигаться объект
      // Определяет границы, по которым будет двигаться объект
      $('.main__banner .inner-big').mousemove(function(e){
         cat.addClass('woke-up');
 
         var offsetL = $('.left-eye').offset();
         var offsetR = $('.right-eye').offset();
          
          
         mouseLX = Math.min(e.pageX - offsetL.left, limitLX);
         mouseLY = Math.min(e.pageY - offsetL.top, limitLY);      
          
         mouseRX = Math.min(e.pageX - offsetR.left, limitRX);
         mouseRY = Math.min(e.pageY - offsetR.top, limitRY);
         // Ищет координаты курсора
         if (mouseLX < 0) mouseLX = 0;
         if (mouseRX < 0) mouseRX = 0;
         // С какого момента (координат) начинать движение за курсором
         if (mouseLY < 0) mouseLY = 0;
         if (mouseRY < 0) mouseRY = 0;
         // Если курсор находится вне веб-страницы на момент загрузки, то установит объект в координатах x=0, y=0.
 
      });
     
      var followerL = $("#pupil-l");
      var followerR = $("#pupil-r");
        
      var xpL = 0, ypL = 0; // Начальные координаты объекта на момент загрузки страницы
      var xpR = 0, ypR = 0; // Начальные координаты объекта на момент загрузки страницы
      var loop = setInterval(function(){
      xpL += (mouseLX - xpL) / 2;
      ypL += (mouseLY - ypL) / 2;      
      xpR += (mouseRX - xpR) / 2;
      ypR += (mouseRY - ypR) / 2;
      followerL.css({left:xpL, top:ypL});
      followerR.css({left:xpR, top:ypR});
 
   }, 10);
   //В данном случае это значение определяет, насколько плавно и быстро будет происходить движение

});
//    -----------------------------------------------
//    ----------form validation-------------------------
    var buttonSubmit = $('.fomr-valid .btn');
 
    $('.fomr-valid input[type="checkbox"]').bind('click', function () {
        console.log('click check');
        if ($(this).is(':checked')) {
            buttonSubmit.attr('disabled', false);
        } else {
            buttonSubmit.attr('disabled', true);
        }

    });
//    ---------------------------------------------------
});

new WOW().init();
