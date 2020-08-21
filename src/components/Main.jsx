import React from "react";
import "./styles/MainStyle.css";
import Profile from "../images/ico-profile.svg";
import Coment from "../images/ico-comments.svg";
import ImagenArticulo from "../images/article-page.jpg";
import Ads1 from "../images/article-ads-01.jpg";
import Ads2 from "../images/article-ads-02.jpg";
import Ads3 from "../images/horizontal-ad.png";
import Ads4 from "../images/article-page-02.jpg";

class Main extends React.Component {
  render() {
    return (
      <main>
        <div className="container">
          <h1 className="my-3">
            How to start a protection strategy for WEB Portals and Applications
          </h1>
          <div className="row">
            <div className="container">
              <div className="col-md-8">
                <div className="row">
                  <div className="col-md-3">
                    <img src={Profile} alt="Profile" className="main_icono" />
                    <p>Guillermo Heins</p>
                  </div>
                  <div className="col-md-6">
                    <img src={Coment} alt="Profile" className="main_icono1" />
                    <p>4 Comments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <article className="row">
            <div className="col-md-8">
              <img
                src={ImagenArticulo}
                alt="imagen_articulo"
                className="main_imagen"
              />
              <p className="text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem
                ipsum dolor sit amet, consectetur
              </p>
              <hr />
              <p>
                The modern software developer has to be something of a swiss
                army knife. Of course, you need to write code that fulfills
                customer functional requirements. It needs to be fast. Further
                you are expected to write This code to be comprehensible and
                extensible sufficiently flexible to allow for the evolutionary
                nature of IT demands, but stable and reliable. You need to be
                able to lay out a useable interface, optimize a database, and
                often set up and maintain a delivery pipeline. You need to be
                able to get these things done by yesterday.
              </p>
              <br />
              <div className="row">
                <div className="ml-5 mb-3 col-md-12">
                  <h2 className="mb-4">
                    Modern web development has many challenges, the security is
                    both very important and often under-emphasized.
                  </h2>
                  <hr className="main_hr_article " />
                </div>
              </div>

              <br />
              <p>
                Somewhere, way down at the bottom of the list of requirements,
                behind, fast, cheap, and flexible is “secure”. That is, until
                something goes wrong, until the system you build is compromised,
                then suddenly security is, and always was, the most important
                thing.
              </p>

              <p className="mb-3">
                Security is a cross-functional concern a bit like Performance.
                And a bit unlike Performance. Like Performance, our business
                owners often know they need Security, but aren’t always sure how
                to quantify it. Unlike Performance, they often don’t know
                “secure enough”.
              </p>
            </div>
            <div className="col-md-4">
              <img src={Ads1} alt="imagen_articulo" />
              <img src={Ads2} alt="imagen_articulo" />
            </div>

            <div className="row">
              <div className="col-md-12 ">
                <div className="container"></div>
                <img
                  src={Ads3}
                  alt="ad_horizontal"
                  className="main_imagen"
                />{" "}
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-md-8">
                <p>
                  The layoffs show that customer appetite might be changing.
                  Last week, home improvement platform Houzz confirmed that it
                  has scratched plans to create in-house furniture for sale. It
                  also laid off 10 people across three locations: the U.K.,
                  Germany and China. Houzz is comparatively larger than Modsy,
                  with a roughly $4 billion valuation. But scratching its
                  in-house plan that would have likely brought in more capital
                  is yet another data point in how e-commerce companies are
                  struggling right now to get consumers to spend on items other
                  than beans, booze and bread starters.
                </p>
                <p>
                  In retrospect there were rumblings that the company was
                  cutting staff. A number of recent reviews from its Glassdoor
                  page note layoffs, with one review from March 25, 2020 calling
                  them “mass” in nature; our original source on the company’s
                  recent cuts also noted their breadth.
                </p>
                <img src={Ads4} alt="" className="main_imagen mb-3" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <hr />
                <p>
                  To that end, the company is initially targeting the automotive
                  market but also sees its technology finding a home in other
                  products such as consumer electronics, medical devices, grid
                  energy storage, drones, and more.
                </p>

                <p>
                  In terms of commercial traction, it’s still early days.
                  However, Addionics says it is currently working with an
                  unnamed tier-1 American automotive company on a
                  proof-of-concept design and testing Addionics cells in
                  vehicles.
                </p>
                <hr />
                <h4>Related topics</h4>
                <div className="row mb-4">
                  <div className="col-3">
                    <button type="button" className="btn btn-outline-primary ">
                      CyberSecurity
                    </button>
                  </div>
                  <div className="col-3">
                    <button type="button" className="btn btn-outline-primary">
                      Aplications
                    </button>
                  </div>
                  <div className="col-3">
                    <button type="button" className="btn btn-outline-primary">
                      Cloud
                    </button>
                  </div>
                  <div className="col-3">
                    <button type="button" className="btn btn-outline-primary">
                      Storage Services
                    </button>
                  </div>
                </div>
                <hr />
              </div>

              <div className="col-md-4"></div>
            </div>
          </article>
        </div>
      </main>
    );
  }
}

export default Main;
