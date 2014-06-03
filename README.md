#insurance express templates

###toolbox:
* jade - preprocessor html;
* stylus - preprocessor css(nib);
* connect - app server;
* copy - copying files to bypass the preprocessor;
* watch - planner. Performs the function of the change tracking file and fast compiling from source.

###installation Procedure:
Let us first establish the necessary tools to work

1. Download and install the latest version [nodeJS](http://nodejs.org/download/)
2. After installation you will be available **node package manager**
3. `npm install -g grunt-cli`

These 3 steps, you perform a one-time, and more is not needed. In them we install programs, knowledge of which is **not required** to work

###Begin
To start working with a new project, you will need to perform three new statements:

1. Create some dir and run console
2. `npm install`
3. `grunt`

In the first statement, we clone the repository itself on your computer, then run the install all dependencies.
The last statement run the server with your layout on `http://127.0.0.1:3000`

After that you can work in a directory `souce`.
The site will be available at `127.0.0.1:3000`.

Finished layout is stored in a directory `dest`.

###Credits
* [grunt](https://github.com/gruntjs/grunt)
* [grunt-autoprefixer](https://github.com/nDmitry/grunt-autoprefixer)
