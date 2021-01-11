import React from "react";
import techstack from "../../../assets/techstack.png";

const ArtDesign = () => {
  return (
    <main id="content" class="site-content">
      <div class="inner outer">
        <article class="post post-full">
          <header class="post-header inner-sm">
            <h1 class="post-title line-top">Architectural Design</h1>
            <div class="post-subtitle">Getting Technical with Designs </div>
          </header>
          <div class="post-image">
            <img src={techstack} alt="Architectural Design" />
          </div>
          <div class="post-content inner-sm">
            <p>
              We wanted to be able to have an idea of how the application of the
              intake form would be from a technlogy standpoint, so we made a
              layout of the app connecting all the frameworks we needed in order
              to get a better understanding of how the functionality would look
              like. Overall, we decided as team to stick to stick to using
              engineering standards provided by our stakeholder and also stray
              away from using third party libraries that weren't verified in the
              event that a error or bug would appear in production.
            </p>
            <p>
              The front-end would consist of a react framework hosted by AWS
              Amplify, along with authenication being handled by Okta and
              securing any endpoints provided by our back-end. The back-end
              framework was going to be a Node Express application with
              PostgreSQL as our database and deployed via Heroku.
            </p>
            {/* <blockquote>
              <p>
                "Designers are meant to be loved, not to be understood." -
                Margaret Oscar
              </p>
            </blockquote> */}
            <p>
              Data Science would be integrated in our application as they would
              be using the data provided by a familiy when they filled out an
              application. They would be receiving a POST request with the
              member id from the intake form and using that id to query the
              database, choose the features used to create the classification
              model, predict the exit destination and returning a prediction for
              the exit destination for a family along with the top features in
              JSON format.
            </p>
            <h3>Final Web Tech Stack</h3>
            <p>Styling</p>
            <ul>
              <li>ANT Design</li>
            </ul>
            <p>State Management</p>
            <ul>
              <li>Redux</li>
              <li>Redux hooks (useDispatch, useSelector)</li>
            </ul>

            <p>Data Request</p>
            <ul>
              <li>axios</li>
            </ul>
            <p>Routing</p>
            <ul>
              <li>React Router-Protected Routes based on role</li>
              <li>Authenicated Routes</li>
            </ul>

            <p>Testing Libraries</p>
            <ul>
              <li>Backend = Jest SuperTest</li>
              <li>Frontend = React Testing Libr/ary</li>
            </ul>
            <br />
            <h3>Data Science Tech Stack</h3>
            <br />
            <p>Data and Services</p>
            <ul>
              <li>AWS Elastic Beanstalk</li>
              <li>FastAPI</li>
              <li>Psycopg2 Management and Deployment</li>
              <li>Docker</li>
              <li>Flake8 Linter Modeling</li>
              <li>Muticlass Model from SciKitLearn</li>
              <li>Random Forest Data Cleaning</li>
              <li>numPy</li>
              <li>pandas</li>
              <li>pandas-pr</li>
            </ul>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <a class="button" href="/overview/userflow">
              <bold>&rArr;</bold> User Flow
            </a>
          </div>
        </article>
      </div>
    </main>
  );
};

export default ArtDesign;
