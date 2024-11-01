import React from "react";
import Link from "next/link";
import ToggleImage from "../../components/toggleImage/ToggleImage";

function FigmaSlider() {
  const images = [
    {
      id: "1",
      imagePath: "/images/slider_handle.png",
      imageAltText: "Figma slider handle",
      width: 0,
      height: 0,
      sizes: "33vw",
      style: { width: "100%", height: "auto" },
    },
    {
      id: "2",
      imagePath: "/images/slider_bar.png",
      imageAltText: "Figma slider bar",
      width: 0,
      height: 0,
      sizes: "33vw",
      style: { width: "100%", height: "auto" },
    },
    {
      id: "3",
      imagePath: "/images/interactions.png",
      imageAltText: "Figma sliderinteractions",
      width: 0,
      height: 0,
      sizes: "33vw",
      style: { width: "100%", height: "auto" },
    },
    {
      id: "4",
      imagePath: "/images/interactions.png",
      imageAltText: "Figma slider interactions",
      width: 0,
      height: 0,
      sizes: "33vw",
      style: { width: "100%", height: "auto" },
    },
    {
      id: "5",
      imagePath: "/images/constraints_zero.png",
      imageAltText: "Figma empty slider constraints",
      width: 0,
      height: 0,
      sizes: "33vw",
      style: { width: "100%", height: "auto" },
    },
    {
      id: "6",
      imagePath: "/images/constraints_half.png",
      imageAltText: "Figma half slider constraints",
      width: 0,
      height: 0,
      sizes: "33vw",
      style: { width: "100%", height: "auto" },
    },
    {
      id: "7",
      imagePath: "/images/constraints_full.png",
      imageAltText: "Figma full slider constraints",
      width: 0,
      height: 0,
      sizes: "33vw",
      style: { width: "100%", height: "auto" },
    },
  ];
  return (
    <div className="section">
      <section className="">
        <div className="">
          {/* Title */}
          <div className="">
            <h1 className="" id="title">
              Figma Slider
            </h1>
            <div className="">June 8th, 2022</div>
            <div className=""></div>
            <p className="">
              I'm working on a mockup for a new feature at work and I've been
              asked to include a slider that allows a user to change "synonym
              sensitivity" on a scale from zero to one. I figured building a
              slider in Figma would be a worthy challenge and one worth sharing.
              What's more, this tutorial will expose you to the Figma concepts
              of components/variants, constraints, interactions, and basic
              styling. Let's jump in!
            </p>
            {/* Slider Image */}
            <ToggleImage params={images["0"]}></ToggleImage>
          </div>
          {/* Table of Contents */}
          <div>
            <div className=""></div>
            <h2 id="toc" className="">
              Table of Contents
            </h2>
            <ol className="">
              <li>
                <Link
                  className="text-accent"
                  scroll={true}
                  href="/pages/figma-slider#components-and-variants"
                >
                  Components and Variants
                </Link>
              </li>
              <li>
                <Link
                  className="text-accent"
                  scroll={true}
                  href="/pages/figma-slider#slider-handle"
                >
                  Slider Handle
                </Link>
              </li>
              <li>
                <Link
                  className="text-accent"
                  scroll={true}
                  href="/pages/figma-slider#slider-bar"
                >
                  Slider Bar
                </Link>
              </li>
              <li>
                <Link
                  className="text-accent"
                  scroll={true}
                  href="/pages/figma-slider#interactions"
                >
                  Interactions
                </Link>
              </li>
              <li>
                <Link
                  className="text-accent"
                  scroll={true}
                  href="/pages/figma-slider#constraints"
                >
                  Constraints
                </Link>
              </li>
            </ol>
            <div className=""></div>
          </div>
          {/* Components and Variants */}
          <div className="">
            <h2 id="components-and-variants" className="">
              Components and Variants{" "}
              <span className="">
                {" "}
                <Link scroll={true} href="/pages/figma-slider#title">
                  #
                </Link>
              </span>
            </h2>
            <p>
              If you think about where you've encountered a slider on the web,
              you might recall that a typical slider consists of three parts: a
              handle, a bar, and some scale indicators. Most sliders increment
              in single digits or, at the most, no more than two decimal points,
              but to build out such a granular slider in Figma wouldn't be
              practical because, well, we don't build apps in Figma we build
              prototypes of apps (which means they don't have to be perfect
              representations of the real thing).
            </p>
            <p>
              That said, we'll be building three sliders in this tutorial in
              order for the slider to, well, slide! The first slider will
              represent the slider if it were at the lowest point of the
              scale—in our case zero or “0”. The second slider will represent
              the slider at half scale (0.5) and the third at full scale (1).
              We'll create a slider “Component” which has three “Variants” each
              representing one of our three slider states of “zero”, “half”, and
              “full”. Before we start building our slider, let's give it a home
              to live within Figma. Let's create a new frame and call it
              “slider”.
            </p>
          </div>
          <div className=""></div>
          {/* Slider Handle */}
          <div className="">
            <h2 id="slider-handle" className="">
              Slider Handle{" "}
              <span className="">
                {" "}
                <Link href="/pages/figma-slider#title">#</Link>
              </span>
            </h2>
            <p>
              Now that we know what we're building and where it should live,
              let's work on the first piece of our slider—the slider handle:
            </p>
            {/* Slider Handle Image */}
            <ToggleImage params={images["1"]}></ToggleImage>
            <p>
              Our handle will be a simple circle shape handle consisting of two
              circles: a big, outer circle and a smaller, inner circle for added
              style. We'll kick things off in Figma by creating a circle shape
              with a width and height of 32 x 32 pixels and a color of dark
              blue. Our inner circle will be white with a measurement of 16 x 16
              pixels. We'll place the inner circle directly in the center of the
              larger circle and we'll frame them together by selecting both and
              clicking “Frame Selection”. Let's name that frame “handle”, drag
              it into our “slider” frame, and we can move on to adding our
              slider bar.
            </p>
          </div>
          {/* Slider Bar */}
          <div className="space-y-4">
            <h2 id="slider-bar" className="">
              Slider Bar{" "}
              <span className="">
                {" "}
                <Link href="/pages/figma-slider#title">#</Link>
              </span>
            </h2>
            <ToggleImage params={images["2"]}></ToggleImage>
            <p>
              Next up is the slider bar which we'll have positioned horizontally
              with the zero scale indicator on the left and the one scale
              indicator on the right. Now, creating the slider bar is a bit
              deceiving in Figma because the bar should look different for each
              of our states. Our empty state will have a single, light-blue
              colored slider bar with the slider handle all the way to the left.
              Our half state will have two bars of equal length with the slider
              handle in the center of the two. Our full state will have a
              single, dark-blue colored slider bar with the slider handle to the
              far right.
            </p>
            <p>
              Why the different colors? When the user moves the slider from
              empty to half we need to indicate to the user that we're
              incrementing the scale. We can do that with our slider indicators
              but we also want to make this more visually obvious (and
              interesting) by using color. The respective colored bars indicate
              to the user that the slider is incrementing the scale when the
              handle is moved from left to right and right to left.
            </p>
            <p>
              We can make our slider bars any length but each variant's slider
              bar length should be uniform. Let's go with 256 pixels which means
              that, for our half-state slider the dark-blue slider bar will be
              128px and the light-blue slider bar will be 128px for a total of
              256 pixels. Since we're starting with an empty state slider we'll
              just create one slider bar with a color of light-blue and a width
              of 256px. We'll now place our slider handle center and to the far
              left of our slider bar and we'll select both the slider bar and
              handle and put them in a frame. We'll then turn that frame into a
              component which we'll name “empty”. Once we have our Figma
              component, we can create two additional variants which we'll call
              “half” and “full”. You'll notice that these variants are identical
              to our default “empty” variant, so we'll need to make some tweaks
              to make each variant represent their respective states. Don't
              forget to add two slider bars for our “half” state!
            </p>
          </div>
          {/* Interactions */}
          <div className="space-y-4">
            <h2 id="interactions" className="">
              Interactions{" "}
              <span className="">
                {" "}
                <Link href="/pages/figma-slider#title">#</Link>
              </span>
            </h2>
            <ToggleImage params={images["3"]}></ToggleImage>
            <p>
              Now that we've built our slider component and variants, let's
              discuss how we'll make our slider interactive. Since we aren't
              writing code in Figma, we have to first think about how we can
              accomplish this with animations or, as Figma calls them,
              “interactions”. So what type of interaction would we use in Figma
              to make our slider functional? Typical interactions that a user
              might have with a web app include clicking their mouse or typing
              with their keyboard; however, a typical slider interaction
              involves a user clicking on the slider handle and dragging the
              slider horizontally or vertically to increase or decrease the
              scale as is indicated by the slider scale indicators. Luckily for
              us, Figma has an “on-drag” interaction that we can use.{" "}
            </p>
            <p>
              Now we need to think about what happens when a user clicks the
              slider handle and drags it. If the “dragging” action is the cause,
              then what's the effect? In our case, we'll choose “Change To” as
              the effect of the user dragging the slider and our “change to”
              effect will point to the next logical slider variant. For
              instance, if a user was to click and drag the slider handle on our
              empty state slider then our Figma interaction would logically
              “change to” our next slider variant of “half”. If the user
              continued to drag the slider handle from the “half” state further
              up the slider scale, then we should set the “change to” action to
              change from the “half” state to the “full” state. Obviously, this
              interaction wouldn't be as as a real slider since the slider, in
              our case, can only be in three positions, but it gets the point
              across and, if you really have the time, you can choose to make
              more variants that go win smaller increments (such as in
              increments of .10 ranging from 0 to 1. For the purposes of this
              tutorial, we'll keep things simple.
            </p>
          </div>
          {/* Constraints */}
          <div className="">
            <h2 id="constraints" className="">
              Constraints{" "}
              <span className="">
                {" "}
                <Link href="/pages/figma-slider#title">#</Link>
              </span>
            </h2>
            <p>
              Our sliders look really good but there's a few problems we haven't
              considered yet and that's reusability and responsiveness. If we
              want to use this slider in our app then we can simply drop it in
              as is, but what if we want to make it bigger? Or, perhaps we're
              fine with the size of the slider but what if whomever is reviewing
              our prototype wants to shrink or grow their size of their viewport
              (screen)? What effect will that have on our slider? Unfortunately,
              because we haven't set any constraints on the pieces of our slider
              we cannot expect it to maintain the positioning of each part of
              the slider and we can expect our slider to get distorted if the
              size of it, or the user's viewport, is changed.
            </p>
            <p>
              With Figma's “constraints” feature we can set constraints on the
              slider bar(s), handle, and even the frames that encapsulate the
              pieces of our slider. When it comes to constraints all you need to
              know is that the constraints applied to the Figma object are
              relative to its parent object. For instance, with our slider
              handle, the inner circle is the child object and the outer circle
              it lives within is its parent object. Furthermore, the outer
              circle's parent object is the frame that it lives within.
            </p>
            <p>
              That said, for our empty state, our slider bar will have its
              horizontal constraint set to “left and right” and a vertical
              constraint set to “top and bottom”. Our empty state's slider
              handle frame will have a horizontal constraint of “left” and a
              vertical constraint of “top and bottom”. Our empty state slider
              handle outer circle will have a horizontal constraint of “left”
              and a vertical constraint of “top and bottom” and our empty state
              slider handle inner circle will have a horizontal and vertical
              constraint both set to “center”.
            </p>
            {/* Empty Slider Constraints */}
            <ToggleImage params={images["4"]}></ToggleImage>
            <p>
              Our half state's constraints is probably the trickiest part of
              this Figma project. Both slider bars will have a horizontal
              constraint of “scale” and a vertical constraint of “top and
              bottom”. Our slider handle frame will have a horizontal constraint
              of “center” so that it maintains its centered position on the
              slider bar and a vertical constraint of “top and bottom”. Our
              outer circle will have a horizontal constraint of “left and right”
              and a vertical constraint of “center” and our inner circle will
              maintain the same “center / center” constraints as was described
              above.
            </p>
            {/* Half Slider Constraints */}
            <ToggleImage params={images["5"]}></ToggleImage>
            <p>
              Last but not least, our full state's constraints are similar to
              our empty state's constraints but inverted for the slider handle
              frame. So, our slider bar will have a horizontal constraint of
              “left and right” and a vertical constraint of “top and bottom”
              whereas the slider handle frame will have a horizontal constraint
              of “right” and a vertical constraint of “top and bottom”. Our
              slider handle outer circle will have a horizontal constraint of
              “top and bottom” and a vertical constraint of “left and right” and
              our inner circle will have a horizontal and vertical constraint
              both set to “center”.
            </p>
            {/* Half Slider Constraints */}
            <ToggleImage params={images["6"]}></ToggleImage>
            <p>
              It took me a little while to understand how constraints worked and
              I came to a better understanding by trying different settings and
              testing their effect. So, change one or two constraints, grab the
              variant frame and shrink and grow it to see what happens. Viola!
              Our slider prototype is now ready to be demonstrated. Pat yourself
              on the back, grab another cup of coffee, and let's go! 🎉
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FigmaSlider;
