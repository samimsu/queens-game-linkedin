import { describe, expect, test } from "vitest";
import {
  decodeLevelRegions,
  encodeLevelRegions,
  EncodingMode,
  getHashForLevelId,
  getLevelNameFromId,
} from "@/utils/generated/levelEncoder.ts";

const size7EncodedLevel = "EEAAAAAEAAAAFFEDAFFFFEDDFFBFEDDFFBFEDDFCCFEFFFGGG";
const size11EncodedLevel =
  "AAAAAAAABBBACAAAAAAABBACDDAAEABBBACDDAAEAABBACCCFAEAABBGHHHFFIAABBGHJJJJIAABBGHJJJJIABBBGHJJJJIIIBBGKJJKJJJJJBGKKKKKJJJJB";
const size18EncodedLevel =
  "AAAAAABBBBBBBBBBBBAAAAAAAAABBBBBBBBBAAAAAAAAAACBBBBBDDAAAAAAAAAACCCCBEDDAAAAAAAAFACCCCEEDDAAAAAFFFFACCCCEEEEAAAAFFGGHAAACCCCEEAAAAAFFFHAAAICCCCCAAAAAFFFHAAIIIIICCAAAAAFFHHJAIIIIICKLLAAMFFFHJAIIIJJCKLLAMMFFFFJJJJJJJCKLLAAAFFFFFJJJJJJCCLNNNAAAFFFJJJJJJCCLLLOOOOFFFJJJPPJCCLLLLLOOOFFJPPPPJJJLLLLOOOOFOJQQPRJJJLLLLLOOOOOJQQQRJJJ";

describe("levelEncoder", () => {
  describe("basic tests", () => {
    test("Decode pre-created level (11)", () => {
      const levelRegions = decodeLevelRegions(size11EncodedLevel);
      expect(levelRegions.length, "Should be 11 rows").toEqual(11);
      expect(levelRegions[0].length, "Should be 11 cols").toEqual(11);
      for (let i = 0; i < levelRegions.length; i++) {
        expect(levelRegions[i].length, `Row ${i} should have 11 cols`).toEqual(
          11,
        );
        for (let j = 0; j < levelRegions[i].length; j++) {
          expect(
            levelRegions[i][j] >= "A",
            `Row ${i} Col ${j} should be A-Z`,
          ).toBe(true);
          expect(
            levelRegions[i][j] <= "Z",
            `Row ${i} Col ${j} should be A-Z`,
          ).toBe(true);
        }
      }
    });
    test("Decode pre-created level (7)", () => {
      const levelRegions = decodeLevelRegions(size7EncodedLevel);
      expect(levelRegions.length, "Should be 7 rows").toEqual(7);
      expect(levelRegions[0].length, "Should be 7 cols").toEqual(7);
      for (let i = 0; i < levelRegions.length; i++) {
        expect(levelRegions[i].length, `Row ${i} should have 7 cols`).toEqual(
          7,
        );
        for (let j = 0; j < levelRegions[i].length; j++) {
          expect(
            levelRegions[i][j] >= "A",
            `Row ${i} Col ${j} should be A-Z`,
          ).toBe(true);
          expect(
            levelRegions[i][j] <= "Z",
            `Row ${i} Col ${j} should be A-Z`,
          ).toBe(true);
        }
      }
    });
    test("Round trip", () => {
      const levelRegions = decodeLevelRegions(size11EncodedLevel);
      const reEncoded = encodeLevelRegions(levelRegions);

      expect(reEncoded).toEqual(size11EncodedLevel);
    });
  });

  describe("RLE tests", () => {
    test("Simple case", () => {
      let testString = "AAAAAAAAAAABBBBB";
      const levelRegions = decodeLevelRegions(testString);
      const encodedRLE = encodeLevelRegions(levelRegions, EncodingMode.RLE);
      console.log("Encoded:", encodedRLE);
      let regions = decodeLevelRegions(encodedRLE);
      expect(regions).toEqual(levelRegions);
    });

    test("more than 15 consecutive chars", () => {
      const str = encodeLevelRegions(
        decodeLevelRegions("DAADDDDDDDDDDDDDDDDDDD"),
        EncodingMode.RLE,
      );
      expect(encodeLevelRegions(decodeLevelRegions(str))).toEqual(
        "ABBAAAAAAAAAAAAAAAAAAA",
      );
    });

    test("recovery from encoding issue", () => {
      // from a real level that was encoded with 19 consecutive characters
      // because of a bug. note that D13 really means 19 Ds
      const nineteenCharacters =
        "0DA2D13J7D4G2J5D3GC2I2J2D2G3C3JED2F2C3E3F5C3B2F6C2B2F6CHB2";
      const actual =
        "DAADDDDDDDDDDDDDDDDDDDJJJJJJJDDDDGGJJJJJDDDGCCIIJJDDGGGCCCJEDDFFCCCEEEFFFFFCCCBBFFFFFFCCBBFFFFFFCHBB";
      const decodedPlain = decodeLevelRegions(actual);
      expect(decodedPlain.length).toEqual(10);
      expect(decodedPlain[0].length).toEqual(10);
      const encodedRLE = encodeLevelRegions(decodedPlain, EncodingMode.RLE);
      const encodedPlain = encodeLevelRegions(decodedPlain, EncodingMode.BASIC);
      console.log("Encoded:", encodedRLE, "plain", encodedPlain);
      const decodedRle = decodeLevelRegions(nineteenCharacters);
      expect(decodedRle.length).toEqual(10);
      expect(decodedRle[0].length).toEqual(10);
      expect(decodedPlain).toEqual(decodedRle);
    });
    test("Size 7", () => {
      const levelRegions = decodeLevelRegions(size7EncodedLevel);
      const encodedRLE = encodeLevelRegions(levelRegions, EncodingMode.RLE);
      console.log("Encoded:", encodedRLE);
      let regions = decodeLevelRegions(encodedRLE);
      expect(regions).toEqual(levelRegions);
    });

    test("Round trip", () => {
      const levelRegions = decodeLevelRegions(size11EncodedLevel);
      const reEncoded = encodeLevelRegions(levelRegions, EncodingMode.RLE);
      console.log(
        "RLE Encoded:",
        reEncoded.length,
        size11EncodedLevel.length,
        reEncoded,
      );
      expect(
        reEncoded.length,
        "RLE encoded should be shorter",
      ).toBeLessThanOrEqual(size11EncodedLevel.length);
      const reDecoded = decodeLevelRegions(reEncoded);
      expect(reDecoded).toEqual(levelRegions);
    });

    test("Round trip 18", () => {
      const levelRegions = decodeLevelRegions(size18EncodedLevel);
      const reEncoded = encodeLevelRegions(levelRegions, EncodingMode.RLE);

      expect(
        reEncoded.length,
        "RLE encoded should be shorter than basic encoding",
      ).toBeLessThanOrEqual(size18EncodedLevel.length);
      console.log("RLE Encoded:", reEncoded.length, size18EncodedLevel.length);
      const reDecoded = decodeLevelRegions(reEncoded);
      expect(reDecoded).toEqual(levelRegions);
    });
    test("Hash 10x10", () => {
      const r = getHashForLevelId(
        "0I4A5K2I4A6KI3A8I4A2H2A3I2J3A2H4I3JGA2H4C2I2GAB2H3C2I2GAB2H3FC2IG3BH3FC2I2G2BD2HFCI4E5",
      );
      expect(r).toEqual("1276250035");
    });
    test("Get name", () => {
      const r = getLevelNameFromId(
        "0AB5C9DA2B4C2EC4D3FA2B2C2E3C3DG2F2ABC2E2HE2CD2G2FA2BCE2H3E2IDG2A2B2CI3HI4D3AC6I3C5DC2J2C3J2CKC8J5C2K2C7LJ3LC2MK2C5L6CM3K2C4LC2NL2C2MK2C7N3C3K2C3OC3N5C2KC4OC2N2C3N2C4P2OCcP3O",
      );
      expect(r).toEqual("rnd_-1483228415");
    });
  });
});
