"use client";

import HomeRight from "./inicio_right";
import HomeLeft from "./inicio_left";

export default function SectionHome(){
    return(
        <div className="about-section slide-page">
           <div className="parentINICIO">
              <div className="childINICIO INLF">
                <HomeLeft/>
              </div>
              <HomeRight/>

            </div>
        </div>
    )
}
