import React from "react";
import userflow from "../../../assets/userflow.png";

const UserFlow = () => {
  return (
    <>
      <main id="content" class="site-content">
        <div class="inner outer">
          <article class="post post-full">
            <header class="post-header inner-sm">
              <h1 class="post-title line-top">User Flow</h1>
              <div class="post-subtitle">Optional Project Subtitle</div>
            </header>
            <div class="post-image">
              <img src={userflow} alt="User Flow" />
            </div>
            <div class="post-content inner-sm">
              <p>
                In order to undestand how this application would work, we had to
                look it in a different prespective. It would help us in the long
                run considering the fact that this product relied heavily on
                user experience and needed to be easy to use for even a guest to
                fill out their own form.
              </p>
              <p>
                User Roles: Each user should have one associated role
                determining which features are available to them. Flows should
                be designed to accommodate the addition of more user roles in
                the future.{" "}
              </p>
              <h6>Our product supported the following user roles:</h6>
              <ul>
                <li>Executive Director</li>
                <li>Supervisor </li>
                <li>Case Manager </li>
                <li>Guest</li>
                <li>
                  All users should be able to view and update a user profile.
                </li>
                <li>
                  Guests should be able to check in to the shelter using a form.
                  This form should be as simple and user-friendly as possible.
                  We need to distinguish new guests from returning guests and
                  log the check-in accordingly. New guests should have a profile
                  created for them.
                </li>
                <li>
                  Supervisors should be able to view all guests currently
                  checked into the shelter.
                </li>
                <li>
                  Case Managers should be able to look up guests and log notes
                  associated with ongoing case management. Case Managers should
                  be able to view and edit and Guests should be able to view
                  those notes. Entries should be confidential between the case
                  manager and the guest.
                </li>
              </ul>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <a class="button" href="/overview/contributions">
                <bold>&rArr;</bold> Contributions
              </a>
            </div>
          </article>
        </div>
      </main>
    </>
  );
};

export default UserFlow;
