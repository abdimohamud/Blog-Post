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
                Amet nibh adipiscing adipiscing. Commodo ante vis placerat
                interdum massa massa primis. Tempus condimentum tempus non ac
                varius cubilia adipiscing placerat lorem turpis at. Aliquet
                lorem porttitor interdum. Amet lacus. Aliquam lobortis faucibus
                blandit ac phasellus. In amet magna non interdum volutpat
                porttitor metus a ante ac neque. Nisi turpis. Commodo col.
                Interdum adipiscing mollis ut aliquam id ante adipiscing commodo
                integer arcu amet Ac interdum ac non praesent. Cubilia lacinia
                interdum massa faucibus blandit nullam. Accumsan phasellus nunc
                integer. Accumsan euismod nunc adipiscing lacinia erat ut sit.
                Arcu amet. Id massa aliquet arcu accumsan lorem amet accumsan
                commodo odio cubilia ac eu interdum placerat placerat arcu
                commodo lobortis adipiscing semper ornare pellentesque.
              </p>
              <p>
                Amet nibh adipiscing adipiscing. Commodo ante vis placerat
                interdum massa massa primis. Tempus condimentum tempus non ac
                varius cubilia adipiscing placerat lorem turpis at. Aliquet
                lorem porttitor interdum. Amet lacus. Aliquam lobortis faucibus
                blandit ac phasellus. In amet magna non interdum volutpat
                porttitor metus a ante ac neque. Nisi turpis. Commodo col.
                Interdum adipiscing mollis ut aliquam id ante adipiscing commodo
                integer arcu amet blandit adipiscing arcu ante.
              </p>
            </div>
          </article>
        </div>
      </main>
    </>
  );
};

export default FamilyPromise;
