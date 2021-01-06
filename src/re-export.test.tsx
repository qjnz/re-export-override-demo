import React from "react";
import { render } from "./test-utils";
import { Person, PersonComp, Text } from "./re-export";

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


test("should return overriden Text component", () => {
  const { container } = render(<Text />);
  expect(container.firstChild).toMatchInlineSnapshot(`
    <span>
      Override Text
    </span>
  `);
});
