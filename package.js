Package.describe({
  name: 'mvgalle:nativeandroid2',
  version: '0.0.9',
  // Brief, one-line summary of the package.
  summary: 'port of http://nativedroid.godesign.ch/material/ to meteor',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/mvgalle/mvgalle-nativeandroid2',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');

  // we bundle all font files, but the client will request only one of them via the CSS @font-face rule
  api.addFiles(['jquery.mobile.min.js'], ["client"]);
  api.addFiles(['nativeandroid2.js',
    'css/flexboxgrid.min.css',
    'css/googleRobotoDraft.css',
    'css/googleRobotoItalic.css',
    'css/jquery.mobile.min.css',
    'css/material-design-iconic-font.min.css',
    'css/nativedroid2.color.cyan.css',
    'css/nativedroid2.css'
      ], ["client"]);

  api.addAssets(['fonts/Material-Design-Iconic-Font.eot',
    'fonts/Material-Design-Iconic-Font.svg',
    'fonts/Material-Design-Iconic-Font.ttf',
    'fonts/Material-Design-Iconic-Font.woff'], ["client"]);
});


Package.onTest(function(api) {
  api.use('tinytest');
  api.use('mvgalle:nativeandroid2');
  api.addFiles('nativeandroid2-tests.js');
});

