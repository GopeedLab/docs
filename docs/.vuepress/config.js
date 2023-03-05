import { defineUserConfig, defaultTheme } from "vuepress";
import markdownItTaskLists from "markdown-it-task-lists";
import { copyCodePlugin } from "vuepress-plugin-copy-code2";

export default defineUserConfig({
  lang: "en-US",
  title: "Gopeed",
  description: "Gopeed docs website",
  locales: {
    "/": {
      lang: "en-US",
      title: "Gopeed",
      description: "Gopeed docs website",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "Gopeed",
      description: "Gopeed 文档网站",
    },
  },
  theme: defaultTheme({
    logo: "/logo.png",
    locales: {
      "/": {
        selectLanguageName: "English",
        navbar: [
          {
            text: "Develop Guide",
            link: "/",
          },
        ],
        sidebar: {
          "/": [
            {
              text: "API Reference",
              children: ["/index.md", "/develop.md"],
            },
          ],
        },
      },
      "/zh/": {
        selectLanguageName: "中文（简体）",
        navbar: [
          {
            text: "开发指南",
            link: "/zh/",
          },
          {
            text: "接口文档",
            link: "/zh/api",
          },
        ],
        sidebar: {
          "/zh/": [
            {
              text: "开发指南",
              children: [
                "/zh/index.md",
                "/zh/dev-api.md",
                "/zh/dev-extension.md",
              ],
            },
          ],
          "/zh/api.html": [
            {
              text: "接口文档",
              children: ["/zh/api.md"],
            },
          ],
        },
      },
    },
  }),
  plugins: [[copyCodePlugin()]],
  extendsMarkdown: (md) => {
    md.use(markdownItTaskLists);
  },
});
