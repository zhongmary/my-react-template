import { strReverse } from "@utils";

describe("strReverse", () => {
  it('"mary"==>"yram"', () => {
    expect(strReverse("mary")).toBe("yram");
  });
});
