# Why my previous blog sucked

tl;dr — I put this new blog [on github](http://github.com/tentacode/tentacode-blog) and it's much more convenient.

So yeah, I did not used my previous blog much, and there are numerous reasons why, so here is a list of problems I had:

## Over Engineered

I'm sure a lot of coder know this syndrome, when you want to do something for yourself, you want it to be perfect, complicated and to suit 100% of your needs (and looks good). For my part I had a work in progress project consisting of a fully generic website generator I could use for bands, mini-site and such, with Symfony2, full CMS, users credentials, generic backends… So I decided it could be a good chance to try it for my portfolio and forgot about the motto:

> Keep It Simple, Stupid.

A blog is just a blog, and generic projects do have a tendency to be a pain in the ass when you want to do something a bit specific, duh.

### ⇢ What I did

I tried to focus only on blogging, so I ended up writing the smallest application for handling posts with [Silex](http://silex.sensiolabs.org/) micro-framework and [Parsedown](http://parsedown.org/) a small library to parse Markdown content. I also used a pro website template that I just tweaked a bit to make it more personal.

## I don't want to be the sysadmin of my blog

I also had my own private server, rented, unless I forgot to pay for it and eventually they shut it down and I had to find a database backup and… you get the point. A pain to maintain and even with tools like [Capifony](http://capifony.org/) deployment was not that easy.

### ⇢ What I did

I put it all on [github](http://github.com/tentacode/tentacode-blog): it's a good way to show a simple example of my code and it's also very convenient. Now that the posts are in Markdown format I don't have to bother about backups anymore, everything that my website ever needs is on my repository.

I needed a bit more than Github Pages to actually host the blog so I decided to go for a free plan with [Heroku](https://www.heroku.com) which handles  PHP5, [bower](http://bower.io/) and [Grunt](http://gruntjs.com/) properly.

## Posting was tedious

To add or update a post, I had to connect on my backend, go into my not so welled designed CMS, filling all the required fields for date, title and post picture and finally write the content of my post in a WYSIWYG textarea. I actually had to make the post content elsewhere and copy/paste it after because I prefer to write in a text editor. And if I found a typo or something I had to do the exact same boring process.

### ⇢ What I did

Then again, Markdown really helped! I just have to write my post in a cool editor ([thank you @pborreli by the way](https://twitter.com/pborreli/status/573531080382373889)) following a small **YYYYMMDD_slug.md** naming convention  and push it to github. And if I find a typo I can just use the github markdown editor for a quick & dirty commit!

The icing on the cake is my deployment workflow with [Codeship](https://codeship.com/projects) that ensure that my tests are green before automatically publishing to Heroku, yay Continuous Deployment!