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
              <p>
                Sed risus pretium quam vulputate dignissim suspendisse in est.
                Vitae auctor eu augue ut lectus arcu. Tristique magna sit amet
                purus. Aliquet enim tortor at auctor urna nunc. Id leo in vitae
                turpis massa sed elementum tempus. Egestas maecenas pharetra
                convallis posuere morbi leo urna molestie at. Amet consectetur
                adipiscing elit duis tristique sollicitudin. Egestas sed sed
                risus pretium quam vulputate. Nunc eget lorem dolor sed viverra
                ipsum nunc. Consequat mauris nunc congue nisi vitae suscipit
                tellus. Fames ac turpis egestas maecenas pharetra convallis
                posuere morbi leo. Et ultrices neque ornare aenean euismod
                elementum nisi quis. Varius morbi enim nunc faucibus a
                pellentesque sit amet. Vitae proin sagittis nisl rhoncus mattis
                rhoncus urna. In mollis nunc sed id semper risus in hendrerit
                gravida.
              </p>
              <blockquote>
                <p>
                  "Design is not a single object or dimension. Design is messy
                  and complex." - Natasha Jen
                </p>
              </blockquote>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Morbi tincidunt augue interdum velit euismod in. Justo laoreet
                sit amet cursus sit amet dictum sit. Viverra aliquet eget sit
                amet. Scelerisque varius morbi enim nunc faucibus a pellentesque
                sit. Lectus nulla at volutpat diam ut venenatis tellus. Nunc
                consequat interdum varius sit. Ultrices neque ornare aenean
                euismod elementum. Ante metus dictum at tempor commodo. Sed
                vulputate odio ut enim blandit volutpat maecenas volutpat
                blandit. Etiam non quam lacus suspendisse faucibus interdum
                posuere lorem.
              </p>
              <p>
                Aliquet nibh praesent tristique magna sit amet purus. Tincidunt
                nunc pulvinar sapien et ligula ullamcorper. Lacus sed viverra
                tellus in. Fringilla phasellus faucibus scelerisque eleifend
                donec pretium vulputate. Bibendum neque egestas congue quisque
                egestas diam in. Iaculis nunc sed augue lacus viverra. Sagittis
                orci a scelerisque purus. Cursus mattis molestie a iaculis at
                erat pellentesque adipiscing commodo. Vulputate sapien nec
                sagittis aliquam malesuada bibendum arcu vitae elementum. Arcu
                dictum varius duis at. Eleifend mi in nulla posuere sollicitudin
                aliquam ultrices. Velit scelerisque in dictum non consectetur a
                erat nam at. Cum sociis natoque penatibus et magnis dis
                parturient montes nascetur. Adipiscing commodo elit at imperdiet
                dui. Sed tempus urna et pharetra pharetra. Imperdiet sed euismod
                nisi porta lorem mollis aliquam ut. Ultricies mi eget mauris
                pharetra et ultrices neque. Et malesuada fames ac turpis egestas
                sed tempus urna et. At tempor commodo ullamcorper a.
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
