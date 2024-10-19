import { levels } from "./levels";

const getAvailableLevels = () => {
  const levelKeys = Object.keys(levels);
  const availableLevels = levelKeys.map((key) =>
    parseInt(key.replace("level", ""), 10)
  );

  return availableLevels;
};

export default getAvailableLevels;
