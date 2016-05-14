# gulp-options
Add options parameters in Gulp to be used like:
```bash
gulp build --myopt1 --myopt2
```
## Install

```bash
npm install gulp-options`
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
});

```

### gulp commands with example gulpfile.js
```bash
gulp mytask --prod      # source files moved to  release/ folder
gulp mytask --debug     # source files moved to  debug/ folder
gulp mytask             # source files moved to  dev/ folder
```
