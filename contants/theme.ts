import { ThemeProp } from "react-native-paper/lib/typescript/types"

export const darkTheme: ThemeProp = {
        "colors": {
          "primary": "rgb(156, 215, 105)",
          "onPrimary": "rgb(26, 55, 0)",
          "primaryContainer": "rgb(40, 80, 0)",
          "onPrimaryContainer": "rgb(183, 244, 129)",
          "secondary": "rgb(248, 189, 42)",
          "onSecondary": "rgb(64, 45, 0)",
          "secondaryContainer": "rgb(92, 67, 0)",
          "onSecondaryContainer": "rgb(255, 223, 160)",
          "tertiary": "rgb(255, 179, 172)",
          "onTertiary": "rgb(104, 0, 8)",
          "tertiaryContainer": "rgb(147, 0, 16)",
          "onTertiaryContainer": "rgb(255, 218, 214)",
          "error": "rgb(255, 180, 171)",
          "onError": "rgb(105, 0, 5)",
          "errorContainer": "rgb(147, 0, 10)",
          "onErrorContainer": "rgb(255, 180, 171)",
          "background": "rgb(26, 28, 24)",
          "onBackground": "rgb(227, 227, 220)",
          "surface": "rgb(26, 28, 24)",
          "onSurface": "rgb(227, 227, 220)",
          "surfaceVariant": "rgb(68, 72, 62)",
          "onSurfaceVariant": "rgb(196, 200, 186)",
          "outline": "rgb(142, 146, 134)",
          "outlineVariant": "rgb(68, 72, 62)",
          "shadow": "rgb(0, 0, 0)",
          "scrim": "rgb(0, 0, 0)",
          "inverseSurface": "rgb(227, 227, 220)",
          "inverseOnSurface": "rgb(47, 49, 44)",
          "inversePrimary": "rgb(56, 107, 1)",
          "elevation": {
            "level0": "transparent",
            "level1": "rgb(33, 37, 28)",
            "level2": "rgb(36, 43, 31)",
            "level3": "rgb(40, 49, 33)",
            "level4": "rgb(42, 50, 34)",
            "level5": "rgb(44, 54, 35)"
          },
          "surfaceDisabled": "rgba(227, 227, 220, 0.12)",
          "onSurfaceDisabled": "rgba(227, 227, 220, 0.38)",
          "backdrop": "rgba(45, 50, 40, 0.4)"
        }
};
  
export const lightTheme: ThemeProp = {
        "colors": {
          "primary": "rgb(156, 215, 105)",
          "onPrimary": "rgb(26, 55, 0)",
          "primaryContainer": "rgb(40, 80, 0)",
          "onPrimaryContainer": "rgb(183, 244, 129)",
          "secondary": "rgb(248, 189, 42)",
          "onSecondary": "rgb(64, 45, 0)",
          "secondaryContainer": "rgb(92, 67, 0)",
          "onSecondaryContainer": "rgb(255, 223, 160)",
          "tertiary": "rgb(255, 179, 172)",
          "onTertiary": "rgb(104, 0, 8)",
          "tertiaryContainer": "rgb(147, 0, 16)",
          "onTertiaryContainer": "rgb(255, 218, 214)",
          "error": "rgb(255, 180, 171)",
          "onError": "rgb(105, 0, 5)",
          "errorContainer": "rgb(147, 0, 10)",
          "onErrorContainer": "rgb(255, 180, 171)",
          "background": "rgb(26, 28, 24)",
          "onBackground": "rgb(227, 227, 220)",
          "surface": "rgb(26, 28, 24)",
          "onSurface": "rgb(227, 227, 220)",
          "surfaceVariant": "rgb(68, 72, 62)",
          "onSurfaceVariant": "rgb(196, 200, 186)",
          "outline": "rgb(142, 146, 134)",
          "outlineVariant": "rgb(68, 72, 62)",
          "shadow": "rgb(0, 0, 0)",
          "scrim": "rgb(0, 0, 0)",
          "inverseSurface": "rgb(227, 227, 220)",
          "inverseOnSurface": "rgb(47, 49, 44)",
          "inversePrimary": "rgb(56, 107, 1)",
          "elevation": {
            "level0": "transparent",
            "level1": "rgb(33, 37, 28)",
            "level2": "rgb(36, 43, 31)",
            "level3": "rgb(40, 49, 33)",
            "level4": "rgb(42, 50, 34)",
            "level5": "rgb(44, 54, 35)"
          },
          "surfaceDisabled": "rgba(227, 227, 220, 0.12)",
          "onSurfaceDisabled": "rgba(227, 227, 220, 0.38)",
          "backdrop": "rgba(45, 50, 40, 0.4)"
        }
};

export const theme: ThemeProp = {
    ...darkTheme,
    roundness: 1
};
  