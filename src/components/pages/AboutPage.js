import React, { useEffect, useState } from "react";
import './About.css'
import marked from "marked";
import about from "../../assets/about.jpg";
import readMe from "../../assets/README.md";

const AboutPage = () => {
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
    <div>
      <main id="content" class="site-content">
        <div class="inner outer">
          <article class="post post-full">
            <header class="post-header inner-sm">
              <h1 class="post-title line-top" style={{textAlign:'center'}}>About Us</h1>
              <div class="post-subtitle" style={{textAlign:'center'}}>
                This is a short page about us and our work.
              </div>
            </header>
            <div class="post-content inner-sm">
              {markdown ? (
                <section style={{ border: "1px solid", textAlign:'center' }}>
                  <article dangerouslySetInnerHTML={{ __html: markdown }} />
                </section>
              ) : (
                ""
              )}
              {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                vel venenatis augue. Suspendisse tincidunt, nibh eget sodales
                eleifend, lectus magna elementum lorem, ut bibendum tellus
                turpis quis risus. Vivamus sagittis enim est, et semper lectus
                hendrerit ut.
              </p>
              <blockquote>
                <p>
                  The world always seems brighter when you’ve just made
                  something that wasn’t there before. - Neil Gaiman
                </p>
              </blockquote>
              <p>
                In sollicitudin imperdiet turpis quis accumsan. Pellentesque
                euismod turpis et nisi fermentum accumsan. Sed mollis vehicula
                augue sit amet accumsan. Nunc mollis, risus sed ullamcorper
                bibendum, odio est molestie tellus, venenatis rutrum mauris nibh
                at nibh. In a auctor leo, eu pretium ante. Quisque faucibus
                tincidunt fringilla. Donec tempor accumsan ante, in cursus metus
                tincidunt at. Proin sit amet ligula sed libero consequat
                consectetur eu tincidunt nulla.{" "}
              </p>
              <p>
                <em>Thank You for reading!</em>
              </p> */}
            </div>
          </article>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
