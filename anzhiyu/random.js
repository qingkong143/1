var posts=["posts/5380/","posts/46542/","posts/63044/","posts/46808/","posts/7278/","posts/15227/","posts/13108/","posts/36724/","posts/18046/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};