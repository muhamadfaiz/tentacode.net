[ ![Codeship Status for tentacode/tentacode-blog](https://codeship.com/projects/09870e40-18cf-0132-b7b1-16ba1201bcd0/status)](https://www.codeship.io/projects/34273) [![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/tentacode/tentacode-blog/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/tentacode/tentacode-blog/?branch=master) [![Build Status](https://scrutinizer-ci.com/g/tentacode/tentacode-blog/badges/build.png?b=master)](https://scrutinizer-ci.com/g/tentacode/tentacode-blog/build-status/master)

# Tentacode.net

Oh hi. It's the code of [my website](http://tentacode.net).

![Website screenshot](web/img/website-screenshot.png)

## Run it

You need php >= 5.5 and node.

If you want to run it yourself, it's as simple as :

```
composer install
npm install
grunt
```

`php -S localhost:1337 -t web`

Blog should be available at [http://localhost:1337/app.php](http://localhost:1337/app.php)
