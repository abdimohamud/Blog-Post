import React from "react";
import paper from "../../../assets/paper.png";

const FinalResult = () => {
  return (
    <>
      <main id="content" class="site-content">
        <div class="inner outer">
          <article class="post post-full">
            <header class="post-header inner-sm">
              <h1 class="post-title line-top">Final Result</h1>
              <div class="post-subtitle">Our Application in Production</div>
            </header>
            <div class="post-image">
              <img src={paper} alt="Final Result" />
            </div>
            <div class="post-content inner-sm">
              <p>
                Wow, these two weeks have been exciting. We have a lot of work
                ahead of us, but I feel like we’re making solid progress. I
                spent much of the first work becoming more familiar with my
                team, helping to decide on the stack for our project, and
                researching the stack we decided on. Deciding on the stack was
                the main challenge of the first week; it was difficult to agree
                as a team on learning a completely new stack.
              </p>
              <blockquote>
                <p>
                  "Design is not a single object or dimension. Design is messy
                  and complex." - Natasha Jen
                </p>
              </blockquote>
              <p>
              The second week has been a little easier, though I feel that we’re still tackling the learning curve of the new stack. By the time the third week rolled around, it was clear what our objective was as a team and now was the easiest but time consuming part, bringing it to life with coding. 
              My main personal challenge overall was just setting time aside to get tasks done and connecting the front-end and back-end together. But overall, I felt like I improved on my work ethic and delivery when it came to accomplishing tasks or components in a timely-fashion and minimal bugs and errors. I'm really happy with the final result and product our group were able to produce, and its really amazing when reflecting back to the ammount of progress and work we achieved.
              </p>
            </div>
            <div class="post-content inner-sm" style={{ textAlign: "center" }}>
              <p>From this....</p>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <iframe
                src="https://csb-dwwj6.netlify.app/"
                style={{
                  width: "700px",
                  height: "770px",
                  border: "1px solid",
                  overflowX: "hidden",
                  overflowY: "hidden"
                }}
                title="pdf intake form"
                scroll="no"
                allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
              />
            </div>
            <br />
            <div class="post-content inner-sm" style={{ textAlign: "center" }}>
              <p>.... To this!</p>
            </div>{" "}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <iframe
                src="https://csb-3mjet.netlify.app/"
                style={{
                  width: "100%",
                  height: "600px",
                  border: "1px solid",
                  overflowX: "hidden",
                  overflowY: "hidden"
                }}
                title="intake form MAonsfduiif"
                scroll="no"
                allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
              />
            </div>
          </article>
        </div>
      </main>
    </>
  );
};

export default FinalResult;
