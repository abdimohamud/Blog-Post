import React from "react";
import roadblock from "../../../assets/roadblock.png";

const Blockers = () => {
  return (
    <>
      <main id="content" class="site-content">
        <div class="inner outer">
          <article class="post post-full">
            <header class="post-header inner-sm">
              <h1 class="post-title line-top">Blockers &amp; Challenges</h1>
              <div class="post-subtitle">Overcoming adversity in team environment</div>
            </header>
            <div class="post-image">
              <img src={roadblock} alt="Blockers &amp; Challenges" />
            </div>
            <div class="post-content inner-sm">
              <p>
              Many projects are structured to work in teams, and each team includes employees from different cultural backgrounds with different skills and talents. Teams that include members with a diverse personality and knowledge are better equipped to achieve more production and efficiency because they include creative members, organized members, and members that are somewhere in the middle. Although it may seem like a chaotic brew of personalities at times, the mixture of strengths and weaknesses helps avoid the problems of teams that all have the same personalities. For example, the labs team I am in includes people that are highly creative which at times may seem like more work and potential obstacles, but it's beneficial to hear more than one way of approaching a task or solution to a problem. To balance this, we also have members that prefer focusing functionality over features, which helps give a better perspective on the realistic outcome of a project even though it does not seem as unique at times.
              </p>
              <p>
              An issue that occurred early in the process was lack of perspective of the two frameworks integrating with each other. Our team had some sense of how data science and the web was going to come together in the product, but we had some confusion on what each side needed from each other. I was able to address this issue when I wanted more clarification on how I can provide the data science members the data they needed, and this sparked a group meeting which broke down everyone’s role and impact for this project. Our ability to communicate effectively when we reached an issue/concern that impacted everyone was what made us such a good team. People were open to express concerns clearly and effective, so we resolved issues as soon as they arose.
              </p>
              <blockquote>
                <p>
                “There is no better than adversity. Every defeat, every heartbreak, every loss, contains its own seed, its own lesson on how to improve your performance the next time.”– Malcolm X
                </p>
              </blockquote>
              <p>
              My teammates tend to describe myself as someone who can be  helpful, reliable, and resourceful when it comes to meeting a certain deadline, common goal, or completing a task. I tend to make my teammates' concerns or challenges a top priority at times, and am willing to make sure everyone who is confused or uncertain about something gets clarification or the resources to understand.
              </p>
              <br/>
              <p>
                ... But that doesnt mean our experiecne was free of challenges or blockers along the way.
              </p>
              <br/>
              <p>
              An issue that occurred early in the process was lack of perspective of the two frameworks integrating with each other. Our team had some sense of how data science and the web was going to come together in the product, but we had some confusion on what each side needed from each other. I was able to address this issue when I wanted more clarification on how I can provide the data science members the data they needed, and this sparked a group meeting which broke down everyone’s role and impact for this project. Our ability to communicate effectively when we reached an issue/concern that impacted everyone was what made us such a good team. People were open to express concerns clearly and effective, so we resolved issues as soon as they arose.
              </p>
              <p>
              Whenever I am in a setting of picking roles or tasks in a team, I tend to organize my priorities while accomplishing that task by importance/impact in contribution to a  team. By doing this, I am able to be a meaningful contributor to a team while also being resourceful for any help or clarification from other team members as well. I also just make sure that I put myself in a position where I can help in a way that isn't delaying my progress, or setting some time aside instead of completely stopping what I’m doing in order to help.
              </p>
            </div>
          </article>
          <div style={{ display: "flex", justifyContent: "center" }}>
                <a class="button" href="/overview/final-result">
                  <bold>&rArr;</bold> Final Result
                </a>
              </div>
        </div>
      </main>
    </>
  );
};

export default Blockers;
