import React, { useEffect } from "react";
import { getRandomImage } from "../helpers/imageDataHttp";
import { cloudBanner } from "../helpers/imageManager";
import { Picture } from "../interfaces/Pictures";

let defaultMainImage: Picture = {
  url: "",
  title: "",
  size_x: 0,
  size_y: 0,
};

export const HomePage = () => {
  const [state, setState] = React.useState(defaultMainImage);
  useEffect(() => {
    getRandomImage("banner").then((image) => {
      setState(image ? image : defaultMainImage);
    });
  }, []);
  return (
    <div>
      <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item carousel-item-next carousel-item-start">
            <img
              src={state && cloudBanner(state.url)}
              className="bd-placeholder-img"
              alt={state.title}
              width="100%"
              height="100%"
            />

            <div className="container">
              <div className="carousel-caption text-start">
                <h1>Example headline.</h1>
                <p>
                  Some representative placeholder content for the first slide of
                  the carousel.
                </p>
                <p>
                  <a className="btn btn-lg btn-primary" href="#">
                    Sign up today
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
