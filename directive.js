/**
 * Created by Weetao on 2017-06-08.
 */
angular.module('app').directive('show',function(){
    return {
        restrict: 'AE',
        replace: true,
        link:function (scope,el) {
            $(el).hover(function () {
               $(this).animate({
                    left: '-43px'
                }, 300);
                $('.fixed-footer').delay(200).animate({
                    left: 0
                }, 500)
            })
        }
    }
});
angular.module('app').directive('close',function(){
    return {
        restrict: 'AE',
        replace: true,
        link:function (scope,el) {
            $(el).click(function () {
                $(this).parents('.fixed-footer').animate({
                    left: '-100%'
                }, 500);
                $('.show').delay(700).animate({
                    left: 0
                }, 300)
            })
        }
    }
});