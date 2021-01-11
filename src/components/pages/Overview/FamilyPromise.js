import React from "react";
import fsplogo from "../../../assets/fsp-logo.jpg";

const FamilyPromise = () => {
  return (
    <>
      <main id="content" class="site-content">
        <div class="inner outer">
          <article class="post post-full">
            <header class="post-header inner-sm">
              <h1 class="post-title line-top">
                Family Promise Homeless Shelter
              </h1>
              <div class="post-subtitle">
                Transforming the lives of families experiencing homelessness.
                Because every child deserves a home.
              </div>
            </header>
            <div class="post-image">
              <img src={fsplogo} alt="Family Promise Homeless Shelter" />
            </div>
            <div class="post-content inner-sm">
              <p>
                Family Promise helps local communities coordinate their
                compassion to address the root causes of family homelessness.
                They tap existing local resources to empower families towards
                economic stability. Families come to them in crisis; they help
                them rebuild their lives with new skills and ongoing support.
                They address the issue holistically, providing prevention
                services before families reach crisis, shelter and case
                management when they become homeless, and stabilization programs
                once they have secured housing to ensure they remain
                independent.
              </p>
              <blockquote>
                <p>
                  "When Family Promise began, it was a local response to a
                  problem in Union County, New Jersey. Thirty years later, we
                  are a national movement involving more than 200,000 volunteers
                  and serving more than 110,000 people yearly." -Family Promises
                </p>
              </blockquote>
              <p>
              The shelter currently has a paper intake system, so the head of household needs to fill out around 30 pages of questions.
              Supervisors at the shelter are meeting guests that they serve on the worst day of the guest's lives. On top of becoming homeless and having nobody to stay with, the guests are required to manually fill out 20 to 30 pages of forms in order to be admitted into the shelter. Parents must keep their children in line of sight at all times, so a new guest needs to fill out this paper work and keep track of their children at the same time.
              </p>
              <p>
              Family Promise strives to show compassion on newly homeless families and transition them in the smoothest way possible, which is why they needed our team to find a solution to this problem and provide timely vital information in an efficient way to the staff that help homeless families.
              </p>
              <div style={{display:'flex', justifyContent:'center'}}>
            <a class="button" href="/overview/product">
            <bold>&rArr;</bold> Product: Digital Intake Form
            </a>
          </div>
            </div>
          </article>
        </div>
      </main>
    </>
  );
};

export default FamilyPromise;
