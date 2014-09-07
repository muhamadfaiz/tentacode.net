<?php

namespace spec\Tentacode\Post;

use PhpSpec\ObjectBehavior;
use Prophecy\Argument;
use Tentacode\Post\Content;
use DateTime;

class PostSpec extends ObjectBehavior
{
    function let(Content $content, DateTime $date)
    {
        $this->beConstructedWith(
            $content,
            'something-something',
            $date
        );
    }

    function it_is_initializable()
    {
        $this->shouldHaveType('Tentacode\Post\Post');
    }

    function it_has_a_content($content)
    {
        $this->getContent()->shouldReturn($content);
    }

    function it_has_a_date($date)
    {
        $this->getDate()->shouldReturn($date);
    }

    function it_has_a_slug()
    {
        $this->getSlug()->shouldReturn('something-something');
    }
}
