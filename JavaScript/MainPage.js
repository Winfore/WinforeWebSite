/**
 * Created by wangfan on 2016/07/27.
 */
(function ($) {
    var windowHeight = $(window).height();
    $('.MainArticle').height(windowHeight).css({
        'line-height': windowHeight + 'px'
    });;
}(jQuery));