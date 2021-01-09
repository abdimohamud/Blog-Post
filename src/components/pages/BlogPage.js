import React from "react";
import books from "../../assets/books.jpg";

const BlogPage = () => {
  return (
    <>
      <main id="content" class="site-content">
        <div class="inner outer">
          <header class="page-header inner-sm">
            <h1 class="page-title line-top">Blog</h1>
            <div class="page-subtitle">News, tips and highlights</div>
          </header>
          <div class="post-feed grid grid-col-3">
            <article class="post grid-item">
              <div class="post-inside">
                <a class="post-thumbnail" href="/blog/labs-reflection/">
                  <img src={books} alt="Labs Reflection" />
                </a>
                <header class="post-header">
                  <h2 class="post-title">
                    <a rel="bookmark" href="/blog/labs-reflection/">
                      Labs Reflection
                    </a>
                  </h2>
                  <div class="post-meta">
                    <time class="published" datetime="2021-01-07 00:00">
                      January 07, 2021
                    </time>
                  </div>
                </header>
                <p class="post-content">
                  A review of the overall process, challenges, and lessons I
                  learned from delivering product features in a team
                  environment.
                </p>
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
};

export default BlogPage;
