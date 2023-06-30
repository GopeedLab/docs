import { defineUserConfig, defaultTheme } from "vuepress";
import markdownItTaskLists from "markdown-it-task-lists";
import { copyCodePlugin } from "vuepress-plugin-copy-code2";

export default defineUserConfig({
  lang: "en-US",
  title: "Gopeed",
  description: "Gopeed docs website",
  head: [
    [
      "script",
      { type: "module", defer: true },
      `
    import { initializeApp } from "/js/firebase-app_9.23.0.js";
    import { getAnalytics } from "/js/firebase-analytics_9.23.0.js";

    const firebaseConfig = {
      apiKey: "AIzaSyBG1Jyk-3J5lgSXAmmjyQjCnxTLQS5e-VU",
      authDomain: "gopeed-4de76.firebaseapp.com",
      projectId: "gopeed-4de76",
      storageBucket: "gopeed-4de76.appspot.com",
      messagingSenderId: "742279468136",
      appId: "1:742279468136:web:f21afb9ea70cdca2c897dd",
      measurementId: "G-6F2570B28S"
    };

    const app = initializeApp(firebaseConfig);
    getAnalytics(app);
    `,
    ],
  ],
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
    editLink: true,
    repo: "GopeedLab/docs",
    docsDir: "docs",
    docsBranch: "main",
    editLinkText: "Edit this page on GitHub",
    locales: {
      "/": {
        selectLanguageName: "English",
        navbar: [
          {
            text: "Develop Guide",
            link: "/",
          },
          {
            text: "API Reference",
            link: "/zh/api.md",
          },
        ],
        sidebar: {
          "/": [
            {
              text: "Develop Guide",
              children: ["/index.md", "/dev-api.md", "/dev-extension.md"],
            },
          ],
          "/api.html": [
            {
              text: "API Reference",
              children: ["/zh/api.md"],
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
