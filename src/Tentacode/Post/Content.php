<?php

namespace Tentacode\Post;

use ParsedownExtra;

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

    public function getText()
    {
        $html = $this->getBody();

        return strip_tags($html);
    }

    public function getExcerpt($characterCount)
    {
        $text = trim($this->getText());
        if (strlen($text) <= $characterCount) {
            return $text;
        }

        $text = substr($text, 0, $characterCount);
        $text = substr($text, 0, strrpos($text,' '));
        $text = $text."…";

        return $text;
    }

    public function getBody()
    {
        $markdown = $this->getMarkdownBody();
        $parser = new ParsedownExtra();
        
        return $parser->text($markdown);
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
