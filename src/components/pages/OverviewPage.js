import React from "react";
import { Link } from "react-router-dom";
import fsplogo from "../../assets/fsp-logo.jpg";
import intake from "../../assets/intake.png";
import roadblock from "../../assets/roadblock.png";
import roadmap from "../../assets/roadmap.png";
import techstack from "../../assets/techstack.png";
import userflow from "../../assets/userflow.png";
const OverviewPage = () => {
  return (
    <>
      <main id="content" class="site-content">
        <div class="inner outer">
          <header class="page-header inner-sm">
            <h1 class="page-title line-top">Project Overiew</h1>
            <p class="page-subtitle">
              This is an optional subtitle for the portfolio page.
            </p>
          </header>
          <div class="portfolio-feed layout-mosaic">
            <article class="project">
              <Link to="/overview/family-promise">
                <span class="project-link">
                  <div class="project-thumbnail">
                    <img src={fsplogo} alt="Family Promise Homeless Shelter" />
                  </div>
                  <header class="project-header">
                    <h2 class="project-title">
                      Family Promise Homeless Shelter
                    </h2>
                  </header>
                </span>
              </Link>{" "}
            </article>
            <article class="project">
              <Link to="/overview/product">
                <span class="project-link">
                  <div class="project-thumbnail">
                    <img src={intake} alt="Product: Digital Intake Form" />
                  </div>
                  <header class="project-header">
                    <h2 class="project-title">Product: Digital Intake Form</h2>
                  </header>
                </span>
              </Link>
            </article>
            <article class="project">
              <Link to="/overview/product-roadmap">
                <span class="project-link">
                  <div class="project-thumbnail">
                    <img src={roadmap} alt="Product Road Map" />
                  </div>
                  <header class="project-header">
                    <h2 class="project-title">Product Road Map</h2>
                  </header>
                </span>
              </Link>
            </article>
            <article class="project">
              <Link to="/overview/art-design">
                <span class="project-link">
                  <div class="project-thumbnail">
                    <img src={techstack} alt="Architectural Design" />
                  </div>
                  <header class="project-header">
                    <h2 class="project-title">Architectural Design</h2>
                  </header>
                </span>
              </Link>
            </article>
            <article class="project">
              <Link to="/overview/userflow">
                <span class="project-link">
                  <div class="project-thumbnail">
                    <img src={userflow} alt="User Flow" />
                  </div>
                  <header class="project-header">
                    <h2 class="project-title">User Flow</h2>
                  </header>
                </span>
              </Link>
            </article>
            <article class="project">
              <Link to="/overview/contributions">
                <span class="project-link" >
                  <div class="project-thumbnail">
                    <img src={roadblock} alt="Contributions" />
                  </div>
                  <header class="project-header">
                    <h2 class="project-title">Contributions</h2>
                  </header>
                </span>
              </Link>
            </article>
            <article class="project">
              <Link to="/overview/blockers">
                <span class="project-link">
                  <div class="project-thumbnail">
                    <img src={roadblock} alt="Blockers &amp; Challenges" />
                  </div>
                  <header class="project-header">
                    <h2 class="project-title">Blockers &amp; Challenges</h2>
                  </header>
                </span>
              </Link>
            </article>
          </div>
        </div>
      </main>
    </>
  );
};

export default OverviewPage;
