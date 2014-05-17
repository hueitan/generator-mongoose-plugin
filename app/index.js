'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');


var MongoosePluginGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  askFor: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay('Welcome to the marvelous Mongoose Plugin generator!'));

    var prompts = [{
      name: 'pluginName',
      message: 'What\'s your Mongoose Plugin name?',
    }, {
      name: 'description',
      message: "Describe your Mongoose Plugin."
    }];

    this.prompt(prompts, function (props) {
      this.slugname = this._.slugify(props.pluginName);
      this.safeSlugname = this.slugname.replace(/-+([a-zA-Z0-9])/g, function (g) {
            return g[1].toUpperCase();
      });
      this.mongooseName = 'mongoose-' + this.slugname;
      this.description = props.description;

      done();
    }.bind(this));
  },

  app: function () {
    this.copy('_package.json', 'package.json');
    this.copy('_bower.json', 'bower.json');

    this.copy('index.js', 'index.js');
    this.copy('README.md', 'README.md');
  },

  otherFiles: function () {

  }
});

module.exports = MongoosePluginGenerator;
