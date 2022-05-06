import React from "react";
import withAsian from "../../../../imgs/IMG_4976.jpg";
function About() {
  //write code here

  return (
    <section id="about" className="section-container">
      <div className="container">
        <div className="flex flex-col md:flex-row w-full gap-x-10">
          <div className="about-img">
            <img src={withAsian} alt="with asian girl" />
          </div>
          <div className="md:w-1/2">
            <h1 className="my-2">About us</h1>
            <p>
              Magic & Fun has founded on 2015 with all passion and Happiness to
              serve our customers who gave us the trust to bring Happiness and
              enjoyment to events. We worked in big events and mada TV shows to
              let people know how to decorate their own home themselves using
              simple ideas. We are making any event amazing through two methods:
            </p>
          </div>
        </div>
        <ol>
          <li>
            <span>Decorating location</span>
            This Step is important to make the place ready and amazing for
            audience. we are very careful about first impression that's why it's
            very important to make a style decoration for every event.
          </li>
          <li>
            <span>Do our magic for audience</span>
            Doing our magic balloon and amazing science show etc.. will turn any
            event to an amazing memory which audience will memorize always ..
            Not only children but also adults as well.
          </li>
        </ol>
        <p>
          We offer our Services for many occasions and it's wide usage So, it's
          suitable for companies marketing to attract families in their
          Advertising campaigns , festivals and Opening parties and so on.
        </p>
      </div>
    </section>
  );
}

export default About;
