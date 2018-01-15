export default {
    input: 'tmp/esm5/ngx-example-library.js',
    output: {
        file: 'dist/bundles/ngx-example-library.umd.js',
        format: 'umd'
    },
    name: 'ngxAppsLibrary',
    globals: {
        // Angular dependencies
        '@angular/animations': 'ng.animations',
        '@angular/core': 'ng.core',
        '@angular/common': 'ng.common',
        '@angular/common/http': 'ng.common.http',
        '@angular/cdk': 'ng.cdk',
        '@angular/cdk/a11y': 'ng.cdk.a11y',
        '@angular/cdk/accordion': 'ng.cdk.accordion',
        '@angular/cdk/bidi': 'ng.cdk.bidi',
        '@angular/cdk/coercion': 'ng.cdk.coercion',
        '@angular/cdk/collections': 'ng.cdk.collections',
        '@angular/cdk/keycodes': 'ng.cdk.keycodes',
        '@angular/cdk/layout': 'ng.cdk.layout',
        '@angular/cdk/observers': 'ng.cdk.observers',
        '@angular/cdk/overlay': 'ng.cdk.overlay',
        '@angular/cdk/platform': 'ng.cdk.platform',
        '@angular/cdk/portal': 'ng.cdk.portal',
        '@angular/cdk/rxjs': 'ng.cdk.rxjs',
        '@angular/cdk/scrolling': 'ng.cdk.scrolling',
        '@angular/cdk/stepper': 'ng.cdk.stepper',
        '@angular/cdk/table': 'ng.cdk.table',
        '@angular/forms': 'ng.forms',
        '@angular/http': 'ng.http',
        '@angular/router': 'ng.router',
        '@angular/platform-browser': 'ng.platform-browser',
        'bowser': 'bowser',
        'ng2-page-scroll': 'ng2PageScroll',
        'rxjs/Subject': 'Rx',
        'rxjs/Observable': 'Rx',
        'rxjs/Rx': 'Rx'
    },
    external: [
        '@angular/core',
        '@angular/common',
        '@angular/platform-browser',
        '@angular/router',
        'bowser',
        'ng2-page-scroll',
        'rxjs/Rx',
        'rxjs/Subject',
        'rxjs/Observable'
    ]
};
