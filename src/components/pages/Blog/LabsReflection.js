import React from "react";
import { Link } from "react-router-dom";
import books from "../../../assets/books.jpg";

const LabsReflection = () => {
  return (
    <>
      <main id="content" class="site-content">
        <div class="inner outer">
          <article class="post post-full">
            <header class="post-header inner-sm">
              <h1 class="post-title line-top">Labs Reflection</h1>
            </header>
            <div class="post-image">
              <img src={books} alt="Labs Reflection" />
            </div>
            <div class="post-content inner-sm">
              <p>
                <strong>As we wrap up our final sprint for Lambda Labs,</strong>{" "}
                it has been a very fun journey, but not one that hasn’t seen its
                fair share of setbacks and challenges. I feel like however,
                embrace challenges as I believe overcoming challenges makes you
                stronger as a person.
              </p>
              <p>
                Getting to work for a stakeholder who is involved in a
                non-profit in sheltering the homeless was really a eye-opening
                experience for me, considering that our product of a digital
                intake form would truly have an impact on a problem, which
                really tested my passion and skill in solving a problem and
                collaborating with a team who share the same end goal in finding
                the solution. It's definitely motivated and pushed my work ethic
                knowing that this would impact the lives of people who check
                into Family Promises of Spokane, in easing the transition and
                process of a family's worst day of their lives, as well increase
                the efficiency for the staff members who worked there too.
              </p>
              <p>
                Through planning with my teammates on user stories and roles for
                these applications, and designing wireframe and schemas for them
                as well, I truly believe the two weeks we've spent getting
                together and making plans was worth it. It definitely brought
                new ideas and challenges we didn't initially think of at first,
                and also increased our communication and trust within one
                another when giving input or feedback in the process.
              </p>
              <p>
                The challenges we've encountered individually when working on a
                task really tested our trust and communication skills in
                reaching out and getting advice or feedback for overcoming them.
                It was definitely great to know we can count one another for
                help and accountability as well in our daily standup meetings.
                One example of a challenge we've faced was figuring out the
                database schema for the application. We didn't quite get that
                much clarification from the stakeholder considering that he
                wanted to see what we could come up with. There was a point in
                time where my team member Leslie and I were frustrated, and it
                wasn't until we reached out to another member on our team who
                gave us his take and advice which really was beneficial
                considering he had experience.
              </p>
              <p>
                One of the bigger pieces I worked on was implementing a module
                that displayed additional information for a guest when clicked
                on in the list of members. This was a feature that was intended
                for supervisors in order to be able to view demographics,
                barriers, and other factors such as whether or not they had a
                pet. This was a task that had many factors and obstacles to
                consider when implementing it, such as handling state and making
                the feature dynamic enough so that the information is accessible
                for each member and not result in errors being thrown.
              </p>
            </div>
            <footer class="post-meta inner-sm">
              <time class="published" datetime="2021-01-07 00:00">
                January 07, 2021
              </time>
            </footer>
          </article>
        </div>
      </main>
    </>
  );
};

export default LabsReflection;
