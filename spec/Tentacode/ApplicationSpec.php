<?php

namespace spec\Tentacode;

use PhpSpec\ObjectBehavior;
use Prophecy\Argument;

class ApplicationSpec extends ObjectBehavior
{
    function it_is_initializable()
    {
        $this->shouldHaveType('Tentacode\Application');
        $this->shouldHaveType('Silex\Application');
    }
}
