# Webpack-on-Rails

Rails 5.1 example app leveraging webpack and react with various additional
goodies such as linting, react hot reloading and css hot reloading.

## Install and Setup
You'll need a few dependencies to start the app:

- [ruby 2.4.1](https://www.ruby-lang.org/en/)
- [yarn](https://yarnpkg.com/en/)

Once you have the dependencies installed, clone and run the example with:

    $ git clone git@github.com:madrailers/webpack-on-rails.git
    $ cd webpack-on-rails
    $ bundle install
    $ yarn install
    $ bundle exec foreman start

## Look Around
The new [webpacker](https://github.com/rails/webpacker) integration in Rails
5.1 has a nontrivial number of moving parts that you'll eventually touch as you
build out your front-end pipeline.

**First**, check out the `config/webpack` directory. Trace through the includes
starting with `config/webpack/configuration.js`.

**Second**, look at the loaders that are currently configured in the
`config/webpack\loaders` directory.

**Third**, take a look at the entry points in `app/javascript/packs`. These are
the files that are referenced from Rails views that import the bundles created
by webpack.

**Fourth**, check out how we import the bundles in
`app/views/layouts/application.html.erb`. In that file we're importing both the
`index.jsx` bundle as well as the hot-reloadable `index.css`.
