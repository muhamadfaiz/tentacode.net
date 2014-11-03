<?php

namespace Tentacode\Post;

use DateTime;

class Post
{
    protected $content;
    protected $slug;
    protected $date;

    /**
     * @param string $slug
     */
    public function __construct(Content $content, $slug, DateTime $date)
    {
        $this->content = $content;
        $this->slug = $slug;
        $this->date = $date;
    }

    public function getContent()
    {
        return $this->content;
    }

    public function getDate()
    {
        return $this->date;
    }

    public function getSlug()
    {
        return $this->slug;
    }
}
