var posts=["posts/d87f7e0c/","posts/33483/","posts/15edad24/","posts/d50a/","posts/d50a/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };