import bronze from "../public/images/bronze.png";
import silver from "../public/images/silver.png";
import gold from "../public/images/gold.png";
import joker from "../public/images/joker.png";
import ace from "../public/images/ace.png";
import hero from "../public/images/hero.png";
import legend from "../public/images/legend.png";
import tanker from "../public/images/tanker.png";
import melee from "../public/images/melee.png";
import range from "../public/images/range.png";
import supporter from "../public/images/supporter.png";
import unranked from "../public/images/unranked.png";

export const imageSelecter = (key) => {
  switch (key) {
    case "tanker":
    case "탱커":
      return tanker;
    case "melee":
    case "근거리딜러":
      return melee;
    case "range":
    case "원거리딜러":
      return range;
    case "supporter":
    case "서포터":
      return supporter;
    case "unranked":
      return unranked;
    case "bronze":
      return bronze;
    case "silver":
      return silver;
    case "gold":
      return gold;
    case "joker":
      return joker;
    case "ace":
      return ace;
    case "hero":
      return hero;
    case "legend":
      return legend;
  }
};
