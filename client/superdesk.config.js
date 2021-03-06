/**
 * This is the default configuration file for the Superdesk application. By default,
 * the app will use the file with the name "superdesk.config.js" found in the current
 * working directory, but other files may also be specified using relative paths with
 * the SUPERDESK_CONFIG environment variable or the grunt --config flag.
 */
module.exports = function(grunt) {
    return {
        apps: [
            'lji',
            'superdesk.analytics',
        ],
        importApps: [
            '../lji',
            'superdesk-analytics',
        ],
        defaultRoute: '/workspace/monitoring',

        langOverride: {
            'en': {
                'ANPA Category': 'Category',
                'ANPA CATEGORY': 'CATEGORY',
                'About Superdesk': 'How to Use Superdesk',
            },
            'fr_CA': {
                'About Superdesk': 'Comment utiliser Superdesk',
            },
        },

        view: {
            timeformat: 'HH:mm',
            dateformat: 'DD.MM.YYYY',
        },

        features: {
            preview: 1,
            customAuthoringTopbar: {
                toDesk: true,
                publish: true,
                publishAndContinue: false,
            },
            hideCreatePackage: true,
            swimlane: {defaultNumberOfColumns: 4},
            editor3: true,
            validatePointOfInterestForImages: true,
            editorHighlights: true
        },
        workspace: {
            analytics: true
        },
        enabledExtensions: {
        },
    };
};
