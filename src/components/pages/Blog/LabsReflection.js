import React, { Fragment } from "react";
import Markdown from "react-markdown";
import books from "../../../assets/books.jpg";
import demo from "../../../assets/demo.gif";

const LabsReflection = () => {
  const firstCode = {
    code: `
    function filterIt(id) {
      const result = state.data.filter(item=> item.id = id)
      setModal(result)
      }
    `
  };
  const secondCode = {
    code: `
      icon: InfoIcon,
      tooltip: 'More Info',
      onClick: (event, rowData) => {
        setModal(state.data[rowData.id]);
         toggleModal(event);
                 
  `
  };
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
                fair share of setbacks and challenges. I embrace challenges,
                however, as I believe overcoming challenges makes you stronger
                as a person.
              </p>

              <p>
                Getting to work for a stakeholder who is involved in a
                non-profit in sheltering the homeless was really an eye-opening
                experience for me, considering that our product of a digital
                intake form would truly have an impact on a real world problem
                involving people who may be truly down on their luck, which
                really tested my passion and skill in solving a problem and
                collaborating with a team that share the same end goal in
                finding the solution.
              </p>
              <p>
                It definitely motivated and pushed my work ethic to know that
                this would impact the lives of people who check into Family
                Promises of Spokane. Our delivered product would ease the
                transition and processing of a family's worst day of their
                lives, as well as increase the efficiency for the staff members
                who worked there.
              </p>
              <p>
                Throughout planning with my teammates on user stories and roles
                for these applications, and designing wireframe and schemas for
                them as well, I truly believe the two weeks we've spent getting
                together and making plans was worth it. It definitely brought
                new ideas and challenges we didn't initially think of, and also
                increased our communication and trust in one another when giving
                input or feedback in the process.
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
                gave us his take and advice (which really was beneficial
                considering he had experience in the project), that we were able
                to create a working schema.
              </p>
              <p>
                One of the bigger pieces I worked on was implementing a modal
                that displayed additional information for a guest when clicked
                on in the list of members. This was a feature that was intended
                for the user role of supervisors in order to be able to view
                demographics, barriers, and other factors such as whether or not
                they had a pet. This was a task that had many factors and
                obstacles to consider when implementing , such as the handling
                state and making the feature dynamic enough so that the
                information is accessible for each member and not result in
                errors.
              </p>
              <p>
                What I originally intended to do was filter the members by the
                ID, then match the member that was selected to view their
                additional info.
              </p>
              {<Markdown source={firstCode.code} />}
              <p>
                Eventually, what I did after figuring out that the ID of a
                member was in chronological order, was simply just returning the
                index of the member inside on the on-click event of the button,
                which really made it so easier and efficient to render the
                information instead of fetching twice!
              </p>
              {<Markdown source={secondCode.code} />}
              <img src={demo} alt="democode" />
              <br />
              <br />
              <p>
                All in all, getting to collaborate with a team with the same
                interests towards a common goal of solving a problem that
                impacts people really made me become more ambitious and eager to
                work in the same setting again. It's amazing to know that you
                have a support system that could keep you accountable and also
                be resourceful when you need it the most! If you put trust in
                your team members and communicate effectively by either giving
                input or receiving feedback, the sky’s really the limit in what
                you can accomplish!
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
