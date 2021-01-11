import React from "react";
import FeatureList from './FeatureList'
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
            <>
            <FeatureList/>
            </>
            <div style={{display:'flex', justifyContent:'center'}}>
            <a class="button" href="/overview/art-design">
            <bold>&rArr;</bold> Architectural Design
            </a>
          </div>
          </article>
        </div>
      </main>
    </>
  );
};

export default ProductRoadMap;
