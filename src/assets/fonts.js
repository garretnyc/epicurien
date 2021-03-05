import CrimsonTextBold from "./fonts/CrimsonText-Bold.ttf";
import CrimsonTextRegular from "./fonts/CrimsonText-Regular.ttf";

const CrimsonTReg = {
  fontFamily: "CTReguler",
  src: `
      url(${CrimsonTextRegular}) format('truetype')
    `,
};

const CrimsonTBold = {
  fontFamily: "CTBold",
  src: `   
      url(${CrimsonTextBold}) format('truetype'),
    `,
};

export default {
  CrimsonTReg,
  CrimsonTBold
};