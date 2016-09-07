import { fade } from 'material-ui/utils/colorManipulator';
import {
  green500,
  grey100,
  grey300,
  grey400,
  grey500,
  white,
  darkBlack,
  fullBlack
} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { globalColors, globalFonts } from './../../../common/styles/globals';

const muiTheme = getMuiTheme({
  fontFamily: globalFonts.fontFamily,
  palette: {
    primary1Color: globalColors.primary1Color,
    primary2Color: globalColors.primary2Color,
    primary3Color: grey400,
    backgroundColor: globalColors.backgroundColor,
    accent1Color: globalColors.accent1Color,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: fullBlack,
    alternateTextColor: globalColors.alternateTextColor,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: green500,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack
  }
});

export default muiTheme ;
