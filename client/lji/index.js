import angular from 'angular';

export default angular.module('lji', [])
    .run(['$templateCache', ($templateCache) => {
        $templateCache.put(
            'scripts/core/menu/views/about.html',
            require('./views/about.html')
        );
    }]);
