import angular from 'angular';
import {startApp} from 'superdesk-core/scripts/index';

setTimeout(startApp);

export default angular.module('lji', [])
    .run(['$templateCache', ($templateCache) => {
        $templateCache.put(
            'scripts/core/menu/views/about.html',
            require('./views/about.html')
        );
    }]);
