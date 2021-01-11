import React from "react";
import intake from "../../../assets/intake.png";

const Product = () => {
  return (
    <>
      <main id="content" class="site-content">
        <div class="inner outer">
          <article class="post post-full">
            <header class="post-header inner-sm">
              <h1 class="post-title line-top">Product: Digital Intake Form</h1>
              <div class="post-subtitle">Replacing a paper intake system with a digital intake system</div>
            </header>
            <div class="post-image">
              <img src={intake} alt="Product: Digital Intake Form" />
            </div>
            <div class="post-content inner-sm">
              <p>
                Family Promise needs a digital intake system to digitize the
                intake process and allow supervisors, case managers, the
                executive director, and guests to access data relevant to them.
                They also need a way to identify risk factors for guests who are
                unlikely to exit to housing and determine which guests are more
                likely to require additional case management
              </p>
              <blockquote>
                <p>
                  "Samantha is a single mother of two children. She just became
                  homeless and found a shelter in her area.It's the worst day of
                  the familie's lives. Upon arriving to the shelter she is
                  informed that she will need to fill out a 30 page paper intake
                  packet to be enrolled in the shelter's program. " - J Wylie
                  (stakeholder)
                </p>
              </blockquote>
              <p>
                The technology stack of this product consisted of the following:
              </p>
              <ul>
                <li>
                  <strong>Back-End:</strong> Node{" "}
                </li>
                <li>
                  <strong>Front-End:</strong> React
                </li>
                <li>
                  <strong>Data Science:</strong> PostgreSQL{" "}
                </li>
                <li>
                  <strong>Authenication:</strong> Okta
                </li>
              </ul>
              <p>
                We were informed that this was a user experience-heavy
                challenge, and we couldn't take the tradionial role of just
                making the basic functionality.
              </p>
              <p>
                Supervisors and case managers would be using this application on
                a daily basis and would need a user interface that is easy to
                display and compute information coming in from the guests that
                check in.
              </p>
              <p>
                We also also had to keep in mind of the user roles of the
                application and how the guest, supervisor, and case manager of
                the shelter needs to be able to view, edit, read, and create
                operations overall.{" "}
              </p>
              <ul>
                <li>
                  <strong>Family Promise Supervisor</strong>: Responsible for
                  handling the day-to-day needs of the guests at the shelter,
                  including conducting intakes of new families.{" "}
                </li>
                <li>
                  <strong>Family Promise Case Manager:</strong> Writes case
                  notes on guests the shelter is serving as they work with them.{" "}
                </li>
                <li>
                  <strong>Guest:</strong> A "head of household" arriving to or
                  checked into the shelter as part of a family unit of some
                  kind.
                </li>
              </ul>
              <div style={{display:'flex', justifyContent:'center'}}>
            <a class="button" href="/overview/product-roadmap">
            <bold>&rArr;</bold> Product Road Map
            </a>
          </div>
            </div>
          </article>
        </div>
      </main>
    </>
  );
};

export default Product;
