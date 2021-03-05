import { red, amber, grey } from "@material-ui/core/colors";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import Fonts from "./assets/fonts";

// A custom theme for this app

export const CTReg = {
    fontFamily: ["CTRegular"].join(","),
  };
  
export const CTBold = {
    fontFamily: ["CTBold"].join(","),
    color: "black",
    fontWeight: "bold",
    marginBottom: "10px",
    letterSpacing: "0.015rem",
    fontSize: "20px",
  };

const drawerWidth = 300;
const lightMuiTheme = createMuiTheme({
  type: "light",
  palette: {
    primary: {
      main: "#FFF",
    },
    secondary: {
      main: "#26372d",
      light: "#feefc3",
    },
    tertiary: {
      main: "#948e8c",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#FFF",
      highlight: "#F1F3F4",
    },
  },
  paletteIntranet: {
    primary: {
      main: "#FFFFFF",
    },
    secondary: {
      main: "#3C4B64",
    },
    button: {
      main: "#3C4B64",
      font: "#0000008a",
      delete: "#E55353",
      add: "#2FB85D",
      orange: "#F29400",
    },
  },
  typography: {
    ...CTReg,
    overline: {
      fontWeight: 500,
      fontSize: "0.7rem",
    },
  },
  drawerHeader: {
    color: "#FFFFFF",
    textTransform: "uppercase",
    fontFamily: "gelion_boldbold",
    fontSize: "26px",
    lineHeight: "24px",
    fontWeight: "bold",
    paddingLeft: "20px",
    paddingBottom: "20px",
    letterSpacing: "0.84px",
  },
  drawerSubtitle: {
    color: "#FFFFFF",
    textTransform: "uppercase",
    fontSize: "18px",
    lineHeight: "30px",
    paddingLeft: "20px",
  },

  drawerButton: {
    color: "#FFFFFF",
    backgroundColor: "#F29400",
    border: "1px solid white",
    borderRadius: "9px",
    "&:hover": {
      color: "#F29400",
      backgroundColor: "#FFFFFF",
    },
    "&:focus": {
      color: "#F29400",
      backgroundColor: "#FFFFFF",
    },
  },
  drawerButtonDash: {
    color: "#FFFFFF",
    backgroundColor: "#F29400",
    marginLeft: "25px",
    border: "1px solid white",
    borderRadius: "9px",
    "&:hover": {
      color: "#F29400",
      backgroundColor: "#FFFFFF",
    },
    "&:focus": {
      color: "#F29400",
      backgroundColor: "#FFFFFF",
    },
  },
  shape: {
    borderRadius: "0.5rem",
  },
  zIndex: {
    appBar: 1200,
    drawer: 1100,
  },
  topBar: {
    height: "56px",
  },
  header: {
    button: {},
  },
  drawer: {
    width: drawerWidth,
    borderTopRightRadius: "70px",
    borderBottomRightRadius: "70PX",
    height: "95%",
    backgroundColor: "#F29400",
    backgroundImage: "url('/map-afrique.svg')",
    marginTop: "60px",
  },
  mixins: {
    display: "column",
    drawer: {
      minWidth: 280,
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [Fonts.CrisomTBold, Fonts.CrimsonTReg],
      },
    },
    MuiListItemText: {
      primary: {
        ...CTReg,
        fontWeight: 500,
        fontSize: "0.87rem",
      },
    },
  },

  custom: {
    fontFamily: {
      CTRegular: CTReg,
      CTBold: CTBold,
    },
    palette: {
      iconColor: "#5f6368",
      itemBorderColor: "#DDDDDD",
      iconHighlight: grey[900],
      notesCheckbox: grey[700],
      profilePopColor: "#FFF",
      noteBackground: {
        default: "#0000",
        red: "#F28B82",
        orange: "#FBBC04",
        yellow: "#FFF475",
        green: "#CCFF90",
        cyan: "#A7FFEB",
        lightblue: "#CBF0F8",
        darkblue: "#AECBFA",
        purple: "#D7AEFB",
        pink: "#FDCFE8",
        brown: "#E6C9A8",
        grey: "#E8EAED",
      },
      noteColorCheck: "#0007",
      labelBackground: "#0002",
    },
  },
});

export const light = responsiveFontSizes(lightMuiTheme);