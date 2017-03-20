(function(angular) {
  // "use strict";

  // start your ride
  // 主模块，作用：将所有其他的模块依赖进来
  angular.module('moviecat', [
  	// 将 首页模块 加载进来
  	'moviecat.home',
    'moviecat.details',
  	'moviecat.movie_list',
    'moviecat.jsonp',
    'moviecat.menu_active',
  ]);



})(angular);
