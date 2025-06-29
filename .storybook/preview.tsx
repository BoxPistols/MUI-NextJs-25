import type { Preview } from "@storybook/nextjs";
import "../src/app/globals.css";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import React from "react";
import theme from "../src/theme";

// Storybookのグローバル背景に応じてMUIテーマのmodeを切り替える
const withMuiTheme = (Story, context) => {
  // Storybookの背景グローバル値を取得
  const bgValue = context.globals.backgrounds?.value;
  console.log("Storybook background value:", bgValue);
  const isDark = bgValue === "#1f2937";
  // MUIテーマをmodeに応じて生成
  // paletteの型エラー回避のためanyキャスト
  const muiTheme = createTheme({
    ...theme,
    palette: isDark ? (theme.palette as any).dark : (theme.palette as any).light,
  });

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Story />
    </ThemeProvider>
  );
};

export const decorators = [withMuiTheme];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#ffffff" },
        { name: "dark", value: "#1f2937" },
      ],
    },
  },
};

export default preview;
