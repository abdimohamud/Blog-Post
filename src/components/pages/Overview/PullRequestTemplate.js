import React from "react";

const PullRequestTemplate = () => {
  return (
    <>
      {/* <link rel="stylesheet" href="https://stackedit.io/style.css" /> */}
      <body class="stackedit">
        <div class="stackedit__html">
          <h1 id="pr-description">PR Description</h1>
          <p>
            Description of what is contained in pull request?
            <br />
            Description of why this change/addition is needed?
            <br />
            Which user story or task is this PR tied to?
            <br />
            How many files and/or lines were changed?
          </p>
          <h2 id="type-of-change​">Type of Change​</h2>
          <p>Types of Change:</p>
          <ul>
            <li>[] New feature</li>
            <li>[] Refactoring / Bug fix</li>
            <li>[] Documentation update</li>
          </ul>
          <h2 id="testing​">Testing​</h2>
          <ul>
            <li>[] Yes</li>
            <li>[] No</li>
            <li>[] Not needed</li>
          </ul>
          <h2 id="completeness">Completeness</h2>
          <p>Is this feature complete</p>
          <ul>
            <li>[] Feature Complete</li>
            <li>
              [] Feature Incomplete, user story/trello card linked
              <br />​
            </li>
          </ul>
          <h1 id="pr-requirements">PR Requirements</h1>
          <ul>
            <li>[] Clean and concise commenting</li>
            <li>[] Clean and comprehensive documentation included</li>
            <li>[] Conforms to engineering standards and checks</li>
            <li>[] There are no merge conflicts</li>
            <li>[] There are no warnings</li>
            <li>
              [] Corresponding documentation elsewhere has been updated to
              reflect these changes
              <br />​
            </li>
          </ul>
          <h2 id="requester-questions">Requester Questions</h2>
          <p>
            ​<br />
            <code>
              Add any questions, comments, or concerns you have as the person
              initiating the pull request for your reviewers
            </code>
          </p>
          <h2 id="other">Other</h2>
          <p>
            <a href="https://www.notion.so/1fc04e4fedeb429ba873b7c68d281707?v=74054da7991341c0bf970f39410c43da">
              Rubric
            </a>
            <br />
            <a href="https://www.notion.so/Pull-Request-Template-f9264f79e1b649b9845961b5aba3eaff">
              Template Guidelines
            </a>
            <br />​
          </p>
        </div>
      </body>
    </>
  );
};

export default PullRequestTemplate;
