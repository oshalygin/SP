module.exports = function () {

    var deploymentPath = "./wwwroot/";
    var devPath = "./application";
    var appJsDev = devPath + "**/*.js";
    var bowerJson = require("./bower.json");
    var layout = "./Views/Shared/";
    var layoutInjector = "./Views/Shared/_Layout.cshtml";
    var testScriptInjector = "~/../..tests/SP.WEB.Tests/angular.references.spec.js";
    var testScriptInjectorDestination = "~/../..tests/SP.WEB.Tests/";
    var javaScriptTestProject = "~/../../tests/SP.WEB.Tests/";
    var karmaConfig = __dirname + "/karma.conf.js";

    var config = {
        appJavaScriptFiles:
        [
            //Gulp Files
            "./gulp.config.js", "./gulpfile.js",
            //Angular Files
            appJsDev
        ],

        tsTypingDefinitions: "./typings/**/*.d.ts",

        appTypeScriptFiles: [
            devPath + "**/*.ts"
        ],

        bowerFiles: "lib/**",
        wwwrootBower: deploymentPath + "lib",

        karmaConfiguration: karmaConfig,
        javaScriptTestProject: javaScriptTestProject,

        javaScriptTestFiles: javaScriptTestProject + "post.controller.spec.js",

        appTsDev: devPath + "/**/*.ts",
        appHtmlFiles: "application/**/*.html",
        appJsDev: appJsDev,
        appJsDepolyment: deploymentPath + "**/*.js",

        appDeployFolder: deploymentPath,
        appDevFolder: devPath,
        wwwrootApplication: deploymentPath + "application",

        bower: {
            json: bowerJson,
            directory: "lib/",
            ignorePath: "../.."

        },


        js: [
            devPath + "/**/*.model.js",
            devPath + "/**/*.module.js",
            devPath + "/**/*.core.js",
            devPath + "/**/app.js",
            devPath + "/**/app.run.js",
            devPath + "/**/*.config.js",
            devPath + "/**/apiendpoints.services.js",
            devPath + "/**/httpFactory.services.js",
            devPath + "/**/*.services.js",
            devPath + "/**/*.routes.js",
            devPath + "/**/*.directive.js",
            devPath + "/**/*.widget.js",
            devPath + "/**/*.filter.js",
            devPath + "/**/*.controller.js",
            devPath + "/**/*.js"
        ],

        layoutPage: layout,
        layoutInjector: layoutInjector,
        testScriptInjector: testScriptInjector,
        testScriptInjectorDestination: testScriptInjectorDestination

    };

    config.getWiredepDefaultOptions = function () {


        var options = {
            bowerJson: config.bower.json,
            directory: config.bower.directory,
            ignorePath: config.bower.ignorePath,
              fileTypes: {
                html: {
                replace: {
                // ReSharper disable once StringLiteralWrongQuotes
                    js: '<script src="~{{filePath}}"></script>', // jshint ignore:line
                    css: '<link rel="stylesheet" href="~{{filePath}}" />' // jshint ignore:line
                    }
                }
            }


        };

        return options;
    };

    config.getWiredepTestOptions = function () {

        var options = {
            bowerJson: config.bower.json,
            directory: config.bower.directory,
            ignorePath: config.bower.ignorePath,
              fileTypes: {
                html: {
                replace: {
                // ReSharper disable once StringLiteralWrongQuotes
                    js: '///<reference path="../../~{{filePath}} " />', // jshint ignore:line
                    }
                }
            }
        };

        return options;
    };

    return config;
};
