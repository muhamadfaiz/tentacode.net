<?php

namespace spec\Tentacode\Post;

use PhpSpec\ObjectBehavior;
use Prophecy\Argument;

class ContentSpec extends ObjectBehavior
{
    function let()
    {
        $markdown = <<<'EOD'
# Aujourd'hui, j'ai mangé des pâtes, VDM.

C'était des pâtes **arrabiata**.
EOD;

        $this->beConstructedWith($markdown);
    }

    function it_is_initializable()
    {
        $this->shouldHaveType('Tentacode\Post\Content');
    }

    function it_has_a_title()
    {
        $this->getTitle()->shouldReturn("Aujourd'hui, j'ai mangé des pâtes, VDM.");
    }

    function it_has_a_body()
    {
        $this->getBody()->shouldReturn("<p>C'était des pâtes <strong>arrabiata</strong>.</p>");
    }

    function it_can_get_a_text_exerpt()
    {
        $this->getExcerpt(15)->shouldReturn("C'était des…");
    }
}
