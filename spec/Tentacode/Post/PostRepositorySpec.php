<?php

namespace spec\Tentacode\Post;

use PhpSpec\ObjectBehavior;
use Prophecy\Argument;

class PostRepositorySpec extends ObjectBehavior
{
    function it_is_initializable()
    {
        $this->shouldHaveType('Tentacode\Post\PostRepository');
    }

    function it_gets_posts()
    {
        $this->getPosts()->shouldBeArray();
    }
}
