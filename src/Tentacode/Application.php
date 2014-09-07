<?php

namespace Tentacode;

use Silex\Application as BaseApplication;
use Silex\Application\TwigTrait;
use Silex\Provider\TwigServiceProvider;
use Silex\Provider\UrlGeneratorServiceProvider;
use Tentacode\Post\PostRepository;

class Application extends BaseApplication
{
    use TwigTrait;

    protected $postRepository;

    public function __construct()
    {
        parent::__construct();

        $this->postRepository = new PostRepository();

        $this->register(new TwigServiceProvider(), [
            'twig.path' => __DIR__.'/Views',
        ]);
        $this->register(new UrlGeneratorServiceProvider());

        $this->get('/', function() { 
            return $this->render('Post/list.html.twig', [
                'posts' => $this->postRepository->getPosts()
            ]); 
        }); 

        $this
            ->get('/{slug}', function($slug) { 
                return $this->render('Post/post.html.twig', [
                    'post' => $this->postRepository->findPostBySlug($slug)
                ]); 
            })
            ->bind('post')
        ;
    }
}
