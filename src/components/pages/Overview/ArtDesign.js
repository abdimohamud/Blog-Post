import React from "react";
import techstack from "../../../assets/techstack.png";

const ArtDesign = () => {
  return (
    <main id="content" class="site-content">
      <div class="inner outer">
        <article class="post post-full">
          <header class="post-header inner-sm">
            <h1 class="post-title line-top">Architectural Design</h1>
            <div class="post-subtitle">Optional Project Subtitle</div>
          </header>
          <div class="post-image">
            <img src={techstack} alt="Architectural Design" />
          </div>
          <div class="post-content inner-sm">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Justo
              eget magna fermentum iaculis eu non diam. Id volutpat lacus
              laoreet non. Faucibus pulvinar elementum integer enim. Malesuada
              fames ac turpis egestas integer eget aliquet nibh. Turpis massa
              sed elementum tempus. Potenti nullam ac tortor vitae purus
              faucibus. Duis ut diam quam nulla porttitor massa. Ultrices dui
              sapien eget mi proin sed libero enim. Nibh venenatis cras sed
              felis eget velit aliquet. Nec ullamcorper sit amet risus nullam.
              Duis at tellus at urna. Pulvinar elementum integer enim neque.
              Amet cursus sit amet dictum sit amet justo. Aliquam nulla facilisi
              cras fermentum odio eu. Cursus in hac habitasse platea dictumst
              quisque sagittis. Euismod nisi porta lorem mollis aliquam ut
              porttitor leo.
            </p>
            <p>
              Eget nunc scelerisque viverra mauris in aliquam sem fringilla.
              Ornare arcu dui vivamus arcu felis bibendum. Et molestie ac
              feugiat sed lectus vestibulum mattis ullamcorper velit. Ut sem
              nulla pharetra diam sit amet nisl suscipit. Fermentum leo vel orci
              porta. Facilisis volutpat est velit egestas. Et pharetra pharetra
              massa massa ultricies mi quis. Id aliquet risus feugiat in ante
              metus dictum at tempor. Magna fermentum iaculis eu non diam
              phasellus. Tellus cras adipiscing enim eu turpis egestas.
            </p>
            <blockquote>
              <p>
                "Designers are meant to be loved, not to be understood." -
                Margaret Oscar
              </p>
            </blockquote>
            <p>
              Orci ac auctor augue mauris augue neque. Id semper risus in
              hendrerit gravida rutrum quisque. Et leo duis ut diam quam nulla
              porttitor massa. Condimentum vitae sapien pellentesque habitant
              morbi. Vulputate odio ut enim blandit volutpat maecenas volutpat
              blandit. Hendrerit dolor magna eget est lorem ipsum dolor sit.
              Ipsum dolor sit amet consectetur. Eu augue ut lectus arcu bibendum
              at. Etiam non quam lacus suspendisse. Leo integer malesuada nunc
              vel. Consequat id porta nibh venenatis. Sollicitudin nibh sit amet
              commodo nulla facilisi nullam. Aliquam sem fringilla ut morbi
              tincidunt augue interdum velit euismod. Facilisis leo vel
              fringilla est ullamcorper eget nulla facilisi etiam.
            </p>
            <p>Final Web Tech Stack</p>
            <p>Styling</p>
            <ul>
              <li>ANT Design</li>
            </ul>
            <p>State Management</p>
            <ul>
              <li>Redux</li>
              <li>
                Redux hooks (useDispatch, useSelector)
                <br />
                Data Request
              </li>
              <li>
                axios
                <br />
                Routing
              </li>
              <li>React Router-Protected Routes based on role</li>
              <li>
                Authenicated Routes
                <br />
                Testing Libr/aries
              </li>
              <li>Backend = Jest SuperTest</li>
              <li>Frontend = React Testing Libr/ary</li>
            </ul>
            <p>Data Science Tech Stack</p>
            <p>Data and Services</p>
            <ul>
              <li>AWS Elastic Beanstalk</li>
              <li>FastAPI</li>
              <li>Psycopg2 Management and Deployment</li>
              <li>Docker</li>
              <li>Flake8 Linter Modeling</li>
              <li>Muticlass Model from SciKitLearn</li>
              <li>Random Forest Data Cleaning</li>
              <li>numPy</li>
              <li>pandas</li>
              <li>pandas-pr</li>
            </ul>
          </div>
        </article>
      </div>
    </main>
  );
};

export default ArtDesign;
