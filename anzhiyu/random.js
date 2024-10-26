var posts=["posts/9ae68f8a/","posts/9ae68a89/","posts/9ae68f81/","posts/9ae28f81/","posts/d50a/","posts/9qe48f89/","posts/9ae68f8s/","posts/9qe68f89/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };