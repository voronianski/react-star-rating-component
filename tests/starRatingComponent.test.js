import React from "react";
import StarRatingComponent from "../index";
import { shallow, mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("StarRating", () => {
  let props;
  let mountedStarRating;
  const starRating = () => {
    try {
      if (!mountedStarRating) {
        mountedStarRating = shallow(<StarRatingComponent {...props} />);
      }
      return mountedStarRating;
    } catch (err) {
      console.error(err);
    }
  };

  beforeEach(() => {
    props = {
      name: "Test Rating",
    };
    mountedStarRating = undefined;
  });

  // All tests will go here
  it("always renders a div", () => {
    const divs = starRating().find("div");
    expect(divs.length).toBeGreaterThan(0);
  });

  describe("the rendered div", () => {
    it("contains five star icons", () => {
      props.starCount = 5;
      const divs = starRating().find("div");
      const wrappingDiv = divs.first();

      expect(wrappingDiv.children()).toEqual(starRating().children());
    });
  });
});
