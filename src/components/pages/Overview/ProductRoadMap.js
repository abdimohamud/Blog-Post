import React from "react";
import roadmap from "../../../assets/roadmap.png";

const ProductRoadMap = () => {
  return (
    <>
      <main id="content" class="site-content">
        <div class="inner outer">
          <article class="post post-full">
            <header class="post-header inner-sm">
              <h1 class="post-title line-top">Product Road Map</h1>
              <div class="post-subtitle">Optional Project Subtitle</div>
            </header>
            <div class="post-image">
              <img src={roadmap} alt="Product Road Map" />
            </div>
            <div class="post-content inner-sm">
              <p>
                Feature Name,Description,Release,Track User Roles,"Each user
                should have one associated role determining which features are
                available to them. Flows should be designed to accommodate the
                addition of more user roles in the future.
              </p>
              <p>Support the following user roles:</p>
              <ul>
                <li>Executive Director</li>
                <li>Supervisor</li>
                <li>Case Manager</li>
                <li>
                  Guest","MVP, Release 1",Web User Profiles,All users should be
                  able to view and update a user profile.,"MVP, Release 1",Web
                  Guest Intake,"Guests should be able to check in to the shelter
                  using a form. This form should be as simple and user-friendly
                  as possible.
                </li>
              </ul>
              <p>
                We need to distinguish new guests from returning guests and log
                the check-in accordingly. New guests should have a profile
                created for them.","MVP, Release 1",Web Guest List &amp;
                Lookup,Supervisors should be able to view all guests currently
                checked into the shelter.,"MVP, Release 1",Web Guest Risk
                Classification,"Build an interpretable, multiclass predictive
                model to attempt to assess the most likely outcome for arriving
                guests:
              </p>
              <ul>
                <li>Permanent exit</li>
                <li>Temporary exit</li>
                <li>Emergency shelter</li>
                <li>Transitional housing</li>
                <li>Unknown/other</li>
              </ul>
              <p>
                This model needs to be interpretable because of the sensitive
                nature of the decision. All guests will receive a standard level
                of case management resources, but the guests classified as most
                at-risk may receive additional attention.
              </p>
              <p>
                Include UX elements that caution the end user and place
                predictions/numbers in context.","MVP, Release 2",DS Case
                Management Logs,"Case Managers should be able to look up guests
                and log notes associated with ongoing case management. Case
                Managers should be able to view and edit and Guests should be
                able to view those notes.
              </p>
              <p>
                Entries should be confidential between the case manager and the
                guest.","MVP, Release 2",Web Guest Messaging,Guests and Case
                Managers should be able to post mutually viewable private
                messages.,Stretch,Web Guest Flags,"Supervisors should be able to
                log ""flags"" associated with a guest that show up prominently
                when the guest's file is viewed:
              </p>
              <ul>
                <li>
                  ""Yellow flag"": Something to pay attention to or keep in mind
                  about the guest.
                </li>
                <li>
                  ""Red flag"": Something serious enough to prevent a
                  reenrollment of the guest.
                </li>
              </ul>
              <p>
                Flags should have a ""Description"" field associated with them
                for further information.",Stretch,Web
              </p>
            </div>
          </article>
        </div>
      </main>
    </>
  );
};

export default ProductRoadMap;
