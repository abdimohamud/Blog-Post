import React from "react";
import fsplogo from "../../assets/fsp-logo.jpg";
import intake from "../../assets/intake.png";
import roadblock from "../../assets/roadblock.png";
import roadmap from "../../assets/roadmap.png";
import techstack from "../../assets/techstack.png";
import userflow from "../../assets/userflow.png";
import books from "../../assets/books.jpg";
import isaiah from "../../assets/isaiah.png";
import leslie from "../../assets/leslie.png";
import emily from "../../assets/emily.jpg";

const LandingPage = () => {
  return (
    <>
      <section id="hero" class="block block-hero outer">
        <div class="inner">
          <div class="block-header inner-sm">
            <h1 class="block-title" style={{ textAlign: "center" }}>
              Labs Experience
            </h1>
          </div>
          <div class="block-content inner-sm">
            <p style={{ textAlign: "center" }}>
              Hi there! Welcome to my blog! My name is Abdinajib Mohamud. I am a
              Full Stack Web Developer currently living in the Pacific
              Northwest. This site is my public blog jounral where I recap aloud
              and document my learnings, resources and experience in working
              with a team of devlopers to create a production-level application
              for a stakeholder.{" "}
            </p>
          </div>
          <div
            class="block-buttons inner-sm"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <a class="button" href="/contact">
              Let's talk
            </a>
          </div>
        </div>
      </section>

      <section id="latest-projects" class="block-portfolio block outer">
        <div class="inner">
          <div
            class="block-header inner-sm"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <h2 class="block-title line-top">Overview of Project</h2>
            <p class="block-subtitle">An optional subtitle of the section</p>
          </div>
          <div class="block-content">
            <div class="portfolio-feed layout-tiles">
              <article class="project">
                <a class="project-link" href="/overview/family-promise">
                  <div class="project-thumbnail">
                    <img src={fsplogo} alt="Family Promise Homeless Shelter" />
                  </div>
                  <header class="project-header">
                    <h3 class="project-title">
                      Family Promise Homeless Shelter
                    </h3>
                  </header>
                </a>
              </article>
              <article class="project">
                <a class="project-link" href="/overview/product">
                  <div class="project-thumbnail">
                    <img src={intake} alt="Product: Digital Intake Form" />
                  </div>
                  <header class="project-header">
                    <h3 class="project-title">Product: Digital Intake Form</h3>
                  </header>
                </a>
              </article>
              <article class="project">
                <a class="project-link" href="/overview/product-roadmap">
                  <div class="project-thumbnail">
                    <img src={roadmap} alt="Product Road Map" />
                  </div>
                  <header class="project-header">
                    <h3 class="project-title">Product Road Map</h3>
                  </header>
                </a>
              </article>
              <article class="project">
                <a class="project-link" href="/overview/art-design">
                  <div class="project-thumbnail">
                    <img src={techstack} alt="Architectural Design" />
                  </div>
                  <header class="project-header">
                    <h3 class="project-title">Architectural Design</h3>
                  </header>
                </a>
              </article>
              <article class="project">
                <a class="project-link" href="/overview/userflow">
                  <div class="project-thumbnail">
                    <img src={userflow} alt="User Flow" />
                  </div>
                  <header class="project-header">
                    <h3 class="project-title">User Flow</h3>
                  </header>
                </a>
              </article>
              <article class="project">
                <a class="project-link view-all-link" href="/overview">
                  <div class="project-thumbnail">
                    <img src={roadblock} alt="Contributions" />
                  </div>
                  <span class="view-all-button">View All</span>
                </a>
              </article>
            </div>
          </div>
        </div>
      </section>
      {/* <section id="testimonials" class="block block-testimonials outer">
        <div class="inner">
          <div
            class="block-header inner-sm"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <h2 class="block-title line-top">Feedback from Team Members</h2>
            <p class="block-subtitle">An optional subtitle of the section</p>
          </div>
          <div class="block-content">
            <div class="grid grid-col-3">
              <div class="grid-item">
                <blockquote class="testimonial">
                  <p class="testimonial-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec nisl ligula, cursus id molestie vel, maximus aliquet
                    risus. Vivamus in nibh fringilla.
                  </p>
                  <footer class="testimonial-footer">
                    <img
                      class="testimonial-avatar"
                      src={leslie}
                      alt="Author avatar"
                    />
                    <cite class="testimonial-author">
                      Leslie Rodriguez&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      &nbsp; &nbsp; (Full Stack Developer)
                    </cite>
                  </footer>
                </blockquote>
              </div>
              <div class="grid-item">
                <blockquote class="testimonial">
                  <p class="testimonial-content">
                    Vestibulum a nunc ut eros condimentum posuere. Nullam
                    dapibus quis nunc non interdum. Pellentesque tortor ligula,
                    gravida ac commodo eu.
                  </p>
                  <footer class="testimonial-footer">
                    <img
                      class="testimonial-avatar"
                      src={isaiah}
                      alt="Author avatar"
                    />
                    <cite class="testimonial-author">
                      Isaiah Fowler&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      &nbsp; &nbsp;(Full Stack Developer)
                    </cite>
                  </footer>
                </blockquote>
              </div>
              <div class="grid-item">
                <blockquote class="testimonial">
                  <p class="testimonial-content">
                    Sed laoreet magna commodo libero euismod sodales. Nunc ac
                    libero convallis, interdum ligula vel, pretium diam.
                  </p>
                  <footer class="testimonial-footer">
                    <img
                      class="testimonial-avatar"
                      src={emily}
                      alt="Author avatar"
                    />
                    <cite class="testimonial-author">
                      Emily Arias&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; (UI/Front-End
                      Developer)
                    </cite>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section id="latest-posts" class="block block-posts outer">
        <div class="inner">
          <div
            class="block-header inner-sm"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <h2 class="block-title line-top">Latest from the Blog</h2>
            <p class="block-subtitle">
              Check out my{" "}
              <a href="https://dev.to/abdimohamud" target="_blank">
                posts
              </a>
            </p>
          </div>
          <div class="block-content">
            <div class="post-feed grid grid-col-3">
              <article class="post grid-item">
                <div class="post-inside">
                  <a class="post-thumbnail" href="/blog/labs-reflection/">
                    <img src={books} alt="Labs Reflection" />
                  </a>
                  <header class="post-header">
                    <h3 class="post-title">
                      <a rel="bookmark" href="/blog/labs-reflection/">
                        Labs Reflection
                      </a>
                    </h3>
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
          <div
            class="block-buttons inner-sm"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <a class="button" href="/blog">
              View Blog
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
