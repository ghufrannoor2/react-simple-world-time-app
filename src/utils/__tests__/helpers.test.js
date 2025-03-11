import { convertTo24HrTimeInMinutes } from "../helpers.js";
import { describe, test, expect } from "vitest";

describe("convertTo24HrTimeInMinutes", () => {
  const TEST_CASES = [
    ["12:00 AM", 0],
    ["12:01 AM", 1],
    ["1:00 AM", 60],
    ["5:00 AM", 300],
    ["11:00 AM", 660],
    ["11:59 AM", 719],
    ["12:00 PM", 720],
    ["12:01 PM", 721],
    ["1:00 PM", 780],
    ["5:00 PM", 1020],
    ["11:00 PM", 1380],
    ["11:59 PM", 1439],
  ];

  test.each(TEST_CASES)(
    "%s = %i minutes from 12:00 AM",
    (time, expectedTimeInMinutes) => {
      const timeInMinutes = convertTo24HrTimeInMinutes(time);
      expect(timeInMinutes).toEqual(expectedTimeInMinutes);
    }
  );
});
