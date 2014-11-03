<?php

namespace Tentacode\Post;

use Ciconia\Ciconia;

class Content
{
    protected $markdown;

    /**
     * @param string $markdown
     */
    public function __construct($markdown)
    {  
        $this->markdown = $markdown;
    }

    public function getTitle()
    {
        if (preg_match('/^# (.*)$/m', $this->markdown, $matches)) {
            return $matches[1];
        }

        return '';
    }

    public function getBody()
    {
        $markdown = $this->getMarkdownBody();
        $ciconia = new Ciconia();
        
        return $ciconia->render($markdown);
    }

    protected function getMarkdownBody()
    {
        $markdown = str_replace(
            sprintf('# %s', $this->getTitle()), 
            '', 
            $this->markdown
        );

        return trim($markdown);
    }
}
