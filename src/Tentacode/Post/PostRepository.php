<?php

namespace Tentacode\Post;

use Symfony\Component\Finder\Finder;

class PostRepository
{
    public function getPosts()
    {
        $posts = [];

        foreach ($this->getPostFiles() as $filename) {
            $posts[] = $this->createPostFromFile($filename);
        }

        return $this->sortPosts($posts);
    }

    public function findPostBySlug($slug)
    {
        $postFile = $this->getPostFileBySlug($slug);

        return $this->createPostFromFile($postFile);
    }

    protected function createPostFromFile($filename)
    {
        $content = new Content(file_get_contents($filename));

        if (!preg_match('/^([0-9]{8})_(.*)\.md$/', basename($filename), $matches)) {
            throw new \RuntimeException(sprintf(
                'One post have an invalid filename "%s"',
                $filename
            ));
        }

        $date = new \DateTime($matches[1]);
        $slug = $matches[2];

        return new Post($content, $slug, $date);
    }

    protected function getPostFiles()
    {
        $finder = new Finder();

        return $finder
            ->files()
            ->in($this->getPostDirectory())
        ;
    }

    protected function getPostFileBySlug($slug)
    {
        $finder = new Finder();

        $files = $finder
            ->files()
            ->name(sprintf('*%s.md', $slug))
            ->in($this->getPostDirectory())
        ;

        foreach ($files as $file) {
            return $file;
        }

        throw new \RuntimeException('File not found.');
    }

    protected function getPostDirectory()
    {
        return str_replace(
            'src/Tentacode/Post', 
            'post', 
            __DIR__
        );
    }

    protected function sortPosts(array $posts)
    {
        return $posts;
    }
}
