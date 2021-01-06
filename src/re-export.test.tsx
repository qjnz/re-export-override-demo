import React from "react";
import { render } from "./test-utils";
import { Person, PersonComp } from "./re-export";

test("should return overriden Person", () => {
  expect(Person("anything")).toBe(2);
});

test("should return overriden Person Comp", () => {
  const { container } = render(<PersonComp />);
  expect(container.firstChild).toMatchInlineSnapshot(`
    <div>
      Person 2
    </div>
  `);
});
