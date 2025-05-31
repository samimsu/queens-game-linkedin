import { CommunityLevel } from "./types";
import level1 from "./community-levels/level1";
import level2 from "./community-levels/level2";
import level3 from "./community-levels/level3";

export const communityLevels: { [key: string]: CommunityLevel } = {
  level1,
  level2,
  level3,
};
