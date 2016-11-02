# gulp-options
Add options parameters in Gulp to be used like:
```bash
gulp build --myopt1 --myopt2 --myopt3=val
```
## Install

```bash
npm install gulp-options
```
## Example

### gulpfile.js
```js
var gulp = require('gulp');
var options = require('gulp-options');

gulp.task('mytask', function() {

    if (options.has('prod')) {

        // Do prod stuff...
        return gulp.src('src/**/*.*').pipe(gulp.dest('release/'));

    } else if (options.has('debug')) {

        // Do debug stuff..
        return gulp.src('src/**/*.*').pipe(gulp.dest('debug/'));

    } else {

        // Do default stuff..
        return gulp.src('src/**/*.*').pipe(gulp.dest('dev/'));
    }

    // Get option value
    if (options.has('env')) {
        const env = options.get('env');
        return gulp.src('src/**/*.*').pipe(gulp.dest(`${env}/`));
    }
});

```

### gulp commands with example gulpfile.js
```bash
gulp mytask --prod          # source files moved to  release/ folder
gulp mytask --debug         # source files moved to  debug/ folder
gulp mytask --env=customenv # source files moved to  customenv/ folder
gulp mytask                 # source files moved to  dev/ folder
```
