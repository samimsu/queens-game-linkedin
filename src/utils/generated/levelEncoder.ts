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

function md5(inputString: string): string {
    const hc="0123456789abcdef";
    function rh(n: number) {
        let j, s = "";for(j=0; j<=3; j++) s+=hc.charAt((n>>(j*8+4))&0x0F)+hc.charAt((n>>(j*8))&0x0F);return s;}
    function ad(x: number, y: number) {
        const l = (x & 0xFFFF) + (y & 0xFFFF);
        const m = (x >> 16) + (y >> 16) + (l >> 16);return (m<<16)|(l&0xFFFF);}
    function rl(n: number, c: number)            {return (n<<c)|(n>>>(32-c));}
    function cm(q: number, a: any, b: any, x: any, s: any, t: any)    {return ad(rl(ad(ad(a,q),ad(x,t)),s),b);}
    function ff(a: number, b: number, c: number, d: number, x: any, s: number, t: number)  {return cm((b&c)|((~b)&d),a,b,x,s,t);}
    function gg(a: number, b: number, c: number, d: number, x: any, s: number, t: number)  {return cm((b&d)|(c&(~d)),a,b,x,s,t);}
    function hh(a: number, b: number, c: number, d: number, x: any, s: number, t: number)  {return cm(b^c^d,a,b,x,s,t);}
    function ii(a: number, b: number, c: number, d: number, x: any, s: number, t: number)  {return cm(c^(b|(~d)),a,b,x,s,t);}
    function sb(x: string) {
        let i;
        const nblk = ((x.length + 8) >> 6) + 1;
        const blks = new Array(nblk * 16);for(i=0; i<nblk*16; i++) blks[i]=0;
        for(i=0;i<x.length;i++) blks[i>>2]|=x.charCodeAt(i)<<((i%4)*8);
        blks[i>>2]|=0x80<<((i%4)*8);blks[nblk*16-2]=x.length*8;return blks;
    }

    let i, x = sb("" + inputString), a = 1732584193, b = -271733879, c = -1732584194, d = 271733878, olda, oldb, oldc,
        oldd;
    for(i=0;i<x.length;i+=16) {olda=a;oldb=b;oldc=c;oldd=d;
        a=ff(a,b,c,d,x[i+ 0], 7, -680876936);d=ff(d,a,b,c,x[i+ 1],12, -389564586);c=ff(c,d,a,b,x[i+ 2],17,  606105819);
        b=ff(b,c,d,a,x[i+ 3],22,-1044525330);a=ff(a,b,c,d,x[i+ 4], 7, -176418897);d=ff(d,a,b,c,x[i+ 5],12, 1200080426);
        c=ff(c,d,a,b,x[i+ 6],17,-1473231341);b=ff(b,c,d,a,x[i+ 7],22,  -45705983);a=ff(a,b,c,d,x[i+ 8], 7, 1770035416);
        d=ff(d,a,b,c,x[i+ 9],12,-1958414417);c=ff(c,d,a,b,x[i+10],17,     -42063);b=ff(b,c,d,a,x[i+11],22,-1990404162);
        a=ff(a,b,c,d,x[i+12], 7, 1804603682);d=ff(d,a,b,c,x[i+13],12,  -40341101);c=ff(c,d,a,b,x[i+14],17,-1502002290);
        b=ff(b,c,d,a,x[i+15],22, 1236535329);a=gg(a,b,c,d,x[i+ 1], 5, -165796510);d=gg(d,a,b,c,x[i+ 6], 9,-1069501632);
        c=gg(c,d,a,b,x[i+11],14,  643717713);b=gg(b,c,d,a,x[i+ 0],20, -373897302);a=gg(a,b,c,d,x[i+ 5], 5, -701558691);
        d=gg(d,a,b,c,x[i+10], 9,   38016083);c=gg(c,d,a,b,x[i+15],14, -660478335);b=gg(b,c,d,a,x[i+ 4],20, -405537848);
        a=gg(a,b,c,d,x[i+ 9], 5,  568446438);d=gg(d,a,b,c,x[i+14], 9,-1019803690);c=gg(c,d,a,b,x[i+ 3],14, -187363961);
        b=gg(b,c,d,a,x[i+ 8],20, 1163531501);a=gg(a,b,c,d,x[i+13], 5,-1444681467);d=gg(d,a,b,c,x[i+ 2], 9,  -51403784);
        c=gg(c,d,a,b,x[i+ 7],14, 1735328473);b=gg(b,c,d,a,x[i+12],20,-1926607734);a=hh(a,b,c,d,x[i+ 5], 4,    -378558);
        d=hh(d,a,b,c,x[i+ 8],11,-2022574463);c=hh(c,d,a,b,x[i+11],16, 1839030562);b=hh(b,c,d,a,x[i+14],23,  -35309556);
        a=hh(a,b,c,d,x[i+ 1], 4,-1530992060);d=hh(d,a,b,c,x[i+ 4],11, 1272893353);c=hh(c,d,a,b,x[i+ 7],16, -155497632);
        b=hh(b,c,d,a,x[i+10],23,-1094730640);a=hh(a,b,c,d,x[i+13], 4,  681279174);d=hh(d,a,b,c,x[i+ 0],11, -358537222);
        c=hh(c,d,a,b,x[i+ 3],16, -722521979);b=hh(b,c,d,a,x[i+ 6],23,   76029189);a=hh(a,b,c,d,x[i+ 9], 4, -640364487);
        d=hh(d,a,b,c,x[i+12],11, -421815835);c=hh(c,d,a,b,x[i+15],16,  530742520);b=hh(b,c,d,a,x[i+ 2],23, -995338651);
        a=ii(a,b,c,d,x[i+ 0], 6, -198630844);d=ii(d,a,b,c,x[i+ 7],10, 1126891415);c=ii(c,d,a,b,x[i+14],15,-1416354905);
        b=ii(b,c,d,a,x[i+ 5],21,  -57434055);a=ii(a,b,c,d,x[i+12], 6, 1700485571);d=ii(d,a,b,c,x[i+ 3],10,-1894986606);
        c=ii(c,d,a,b,x[i+10],15,   -1051523);b=ii(b,c,d,a,x[i+ 1],21,-2054922799);a=ii(a,b,c,d,x[i+ 8], 6, 1873313359);
        d=ii(d,a,b,c,x[i+15],10,  -30611744);c=ii(c,d,a,b,x[i+ 6],15,-1560198380);b=ii(b,c,d,a,x[i+13],21, 1309151649);
        a=ii(a,b,c,d,x[i+ 4], 6, -145523070);d=ii(d,a,b,c,x[i+11],10,-1120210379);c=ii(c,d,a,b,x[i+ 2],15,  718787259);
        b=ii(b,c,d,a,x[i+ 9],21, -343485551);a=ad(a,olda);b=ad(b,oldb);c=ad(c,oldc);d=ad(d,oldd);
    }
    return rh(a)+rh(b)+rh(c)+rh(d);
}

// export function getHashForLevel(levelRegions: string[][]): string {
//     const str = encodeLevelRegionsBasic(levelRegions)
//     return uuid(str, 'random-levels');
// }

export   function getHashForLevelId(levelId: string): string {
    return md5(levelId);
    // const strBuf = new TextEncoder().encode(levelId);
    // const arrayBuffer = await crypto.subtle.digest("SHA-1", strBuf);
    // const view = new DataView(arrayBuffer);
    // let result = "";
    // for (let i = 0; i < arrayBuffer.byteLength; i += 4) {
    //     result += ('00000000' + view.getUint32(i).toString(16)).slice(-8);
    // }
    //
    // return uuid(result, 'random-levels');
}
