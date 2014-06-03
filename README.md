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
3. `npm install -g grunt`
4. Read Article [по установке git](http://git-scm.com/book/ru/%D0%92%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5-%D0%A3%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0-Git), под Вашу операционную систему

These 4 steps, you perform a one-time, and more is not needed. In them we install programs, knowledge of which is **not required** to work

###Begin
To start working with a new project, you will need to perform three new statements:

1. `git clone git@github.com:jslby/fewatcher.git my_project`, где `my_project` это директория, где будет Ваше приложение
2. `npm install`
3. `grunt`

In the first statement, we clone the repository itself on your computer, then run the install all dependencies.
The last statement run the server with your layout on `http://0.0.0.0:3000`

After that you can work in a directory `souce`.
The site will be available at `0.0.0.0:3000`.

Finished layout is stored in a directory `dest`.

###Credits
* [grunt](https://github.com/gruntjs/grunt)
* [grunt-autoprefixer](https://github.com/nDmitry/grunt-autoprefixer)