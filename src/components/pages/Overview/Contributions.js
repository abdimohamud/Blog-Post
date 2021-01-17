import React, { useEffect, useState } from "react";
// import PullRequestTemplate from "./PullRequestTemplate";
import marked from "marked";
import readMe from "../../../assets/prRequest.md";
import roadblock from "../../../assets/contribute.jpg";

const Contributions = () => {
  const [markdown, setMarkdown] = useState(null);
  useEffect(() => {
    fetch(readMe)
      .then(response => {
        return response.text();
      })
      .then(text => {
        setMarkdown(marked(text));
      });
  }, []);
  return (
    <>
      <main id="content" class="site-content">
        <div class="inner outer">
          <article class="post post-full">
            <header class="post-header inner-sm">
              <h1 class="post-title line-top">Contributions</h1>
              <div class="post-subtitle">Determining the workflow for our tasks</div>
            </header>
            <div class="post-image">
              <img src={roadblock} alt="Contributions" />
            </div>
            <div class="post-content inner-sm">
              <blockquote>
                <p>
                  "Design can be art. Design can be aesthetics. Design is so
                  simple, that's why it is so complicated." - Paul Rand,
                </p>
              </blockquote>
              <p>
              As a team, it was up to us to decide how we want our workflow to go in completing, reviewing, and pushing our tasks to our main project. We decided to make a Pull request template to follow so that we would be able to explain the task we achieved and include resources or questions and challenges that came up during the process. 
              {/* your Pull-Requests to look. Your goal for this afternoon is to create an MD file that you share across your team and include in your repositories (DS, WEB-FE, WEB-BE, iOS all need a copy of the template in their respective repository). */}
              </p>
              <p>
                The criterias we set up for creating a pull request consisted of standards that most production-level projects followed in the industry which were:
              </p>
              <ul>
                <h5>Atomic, well-named commits</h5>
                <li>Commits are well named.</li>
                <li>Commits have descriptive messages.</li>
                <li>Each commit introduces atomic changes.</li>
                <span/>
                <h5>Code maintainability</h5>
                <li>Code is consistently formatted.</li>
                <li>Has config files to enforce linting and formatting.</li>
                <li>No instance on duplicate code.</li>
                <span/>
                <h5>Adequate reviews</h5>
                <li>PRs were reviewed by more than one team members.</li>
                <li>PR requests were sent to multiple reviewers.</li>
                <li>Active high quality discussions evident in PRs.</li>
              </ul>
              <p>
               We were able to create a template to use for pull requests and included it in our repository for future versions so that they would understand the flow of our contributions throughout the project.
              </p>
              {markdown ? (
                <section style={{ border: "1px solid" }}>
                  <article dangerouslySetInnerHTML={{ __html: markdown }} />
                </section>
              ) : (
                ""
              )}
              <br />
              <br />
              <br />
              <div style={{ display: "flex", justifyContent: "center" }}>
                <a class="button" href="/overview/blockers">
                  <bold>&rArr;</bold> Blockers and Challenges
                </a>
              </div>
            </div>
          </article>
        </div>
      </main>
    </>
  );
};

export default Contributions;
