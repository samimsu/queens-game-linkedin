export enum EncodingMode {
  BASIC = "BASIC",
  RLE = "RLE",
}

function encodeLevelRegionsBasic(levelRegions: string[][]) {
  const joinedRegions = levelRegions.map((region) => region.join(""));
  return joinedRegions.join("");
}

// run length encoding on level regions
function encodeLevelRegionsRLE(levelRegions: string[][]) {
  let result = "0" + levelRegions[0][0];
  let basicEncodedVersion = encodeLevelRegionsBasic(levelRegions);

  let count = 0;
  for (const char of basicEncodedVersion) {
    if (result.length > 1 && result[result.length - 1] === char) {
      if (count >= 15) {
        const prevChar = result[result.length - 1];
        result += prevChar + Number(count).toString(16).toLowerCase();
        count = 0;
      }
      count++;
    } else {
      if (count > 1) {
        result += count.toString(16).toLowerCase() + char;
      } else {
        result += char;
      }
      count = 1;
    }
  }
  return result + (count === 1 ? "" : count.toString(16).toLowerCase());
}

export function encodeLevelRegions(
  levelRegions: string[][],
  mode: EncodingMode = EncodingMode.BASIC,
): string {
  switch (mode) {
    case EncodingMode.RLE:
      return encodeLevelRegionsRLE(levelRegions);
    case EncodingMode.BASIC:
    default:
      return encodeLevelRegionsBasic(levelRegions);
  }
}

function decodeLevelRegionsRLE(encodedRegionString: string) {
  let currentStr: string = "";

  for (let i = 0; i <= encodedRegionString.length; i += 2) {
    const char = encodedRegionString[i];
    if (
      encodedRegionString[i + 1] >= "A" &&
      encodedRegionString[i + 1] <= "Z"
    ) {
      // no number means single
      currentStr += char;
      i--;
      continue;
    }
    if (
      Number(encodedRegionString[i + 1]) === 1 &&
      Number(encodedRegionString[i + 2]) < 16
    ) {
      // special case where we had more than 15 consecutive characters
      const count = Number.parseInt(
        `${encodedRegionString[i + 1]}${encodedRegionString[i + 2]}`,
        16,
      );
      for (let j = 0; j < count; j++) {
        currentStr += char;
      }
      i++;
    } else {
      const count = Number.parseInt(encodedRegionString[i + 1], 16);
      for (let j = 0; j < count; j++) {
        currentStr += char;
      }
    }
  }
  if (
    encodedRegionString[encodedRegionString.length - 1] >= "A" &&
    encodedRegionString[encodedRegionString.length - 1] <= "Z"
  ) {
    currentStr += encodedRegionString[encodedRegionString.length - 1];
  }
  return decodeLevelRegions(currentStr);
}

export function decodeLevelRegions(encoded: string): string[][] {
  if (encoded.startsWith("0")) {
    return decodeLevelRegionsRLE(encoded.slice(1));
  }
  // Default to basic decoding
  const size = Math.sqrt(encoded.length);
  const regions: string[][] = [];
  for (let i = 0; i < size; i++) {
    regions.push(encoded.slice(i * size, (i + 1) * size).split(""));
  }
  return regions;
}

function hashCode(levelString: string) {
  let h = 0;
  const l = levelString.length;
  let i = 0;

  if (l > 0) {
    while (i < l) {
      h = ((h << 5) - h + levelString.charCodeAt(i++)) | 0; // The "| 0" converts to 32-bit integer
    }
  }
  return h;
}

export function getHashForLevelId(levelId: string): string {
  const levelRegions = encodeLevelRegionsBasic(decodeLevelRegions(levelId));
  const hash = hashCode(levelRegions);
  return hash.toString();
}

export function getSizeForLevelId(levelId: string): number {
  const levelRegions = encodeLevelRegionsBasic(decodeLevelRegions(levelId));
  return Math.floor(Math.sqrt(levelRegions.length));
}

export function getLevelNameFromId(id: string): string {
  return `rnd_${getHashForLevelId(id)}`;
}
