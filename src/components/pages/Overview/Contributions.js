import React from "react";
import PullRequestTemplate from "./PullRequestTemplate";
import roadblock from "../../../assets/roadblock.png";
const Contributions = () => {
  return (
    <>
      <main id="content" class="site-content">
        <div class="inner outer">
          <article class="post post-full">
            <header class="post-header inner-sm">
              <h1 class="post-title line-top">Contributions</h1>
              <div class="post-subtitle">Optional Project Subtitle</div>
            </header>
            <div class="post-image">
              <img src={roadblock} alt="Contributions" />
            </div>
            <div class="post-content inner-sm">
            <iframe src="https://codesandbox.io/embed/intake-form-maonsfduiif-3mjet?fontsize=14&hidenavigation=1&theme=dark&view=preview"
     style={{width:"100%", height:"500px", border:"0", borderRadius:" 4px", overflow:"hidden"}}
     title="intake form MAonsfduiif"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
              <blockquote>
                <p>
                  "Design can be art. Design can be aesthetics. Design is so
                  simple, that's why it is so complicated." - Paul Rand,
                </p>
              </blockquote>
              <p>
                Nisl purus in mollis nunc sed id semper. Congue mauris rhoncus
                aenean vel elit scelerisque mauris pellentesque. Etiam erat
                velit scelerisque in dictum non consectetur. Tincidunt praesent
                semper feugiat nibh sed pulvinar proin gravida hendrerit. Cursus
                eget nunc scelerisque viverra mauris in aliquam sem. Aliquam id
                diam maecenas ultricies mi eget mauris pharetra. Nisi quis
                eleifend quam adipiscing vitae proin sagittis nisl. Elit at
                imperdiet dui accumsan. Senectus et netus et malesuada fames ac
                turpis. Justo nec ultrices dui sapien eget mi proin sed libero.
                Aliquet eget sit amet tellus cras adipiscing enim eu turpis.
                Nisl purus in mollis nunc sed id. Elit duis tristique
                sollicitudin nibh sit. Duis ultricies lacus sed turpis.
                Porttitor eget dolor morbi non. Scelerisque eu ultrices vitae
                auctor eu augue ut. At urna condimentum mattis pellentesque id.
                Massa eget egestas purus viverra accumsan. Fermentum dui
                faucibus in ornare quam. Pharetra vel turpis nunc eget lorem.
              </p>
              <p>
                Sodales neque sodales ut etiam sit amet nisl. Sodales ut etiam
                sit amet nisl purus. Nisi vitae suscipit tellus mauris a diam
                maecenas sed. Egestas purus viverra accumsan in nisl nisi
                scelerisque. Gravida cum sociis natoque penatibus et magnis dis
                parturient. In hac habitasse platea dictumst vestibulum. Cras
                semper auctor neque vitae tempus quam pellentesque nec nam.
                Tellus integer feugiat scelerisque varius morbi enim nunc.
                Ultricies mi eget mauris pharetra et ultrices neque ornare.
                Vitae suscipit tellus mauris a diam. Commodo viverra maecenas
                accumsan lacus vel. Libero id faucibus nisl tincidunt eget
                nullam.
              </p>
              <p>
                Nibh praesent tristique magna sit amet purus gravida. Aenean
                pharetra magna ac placerat vestibulum lectus mauris. Nulla
                aliquet enim tortor at auctor. Lobortis elementum nibh tellus
                molestie. Vitae proin sagittis nisl rhoncus mattis. Velit
                scelerisque in dictum non consectetur a erat. Elementum
                curabitur vitae nunc sed. Nisl nisi scelerisque eu ultrices
                vitae auctor eu. Proin libero nunc consequat interdum varius
                sit. Molestie ac feugiat sed lectus vestibulum mattis
                ullamcorper. Turpis cursus in hac habitasse. Adipiscing elit
                pellentesque habitant morbi tristique.
              </p>
              {/* <PullRequestTemplate /> */}
            </div>
          </article>
        </div>
      </main>
    </>
  );
};

export default Contributions;
