import { defineConfig } from "vitepress";
import markdownItTaskLists from "markdown-it-task-lists";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "en-US",
  title: "Gopeed Docs",
  description: "Gopeed docs website",
  srcDir: "docs",
  sitemap: {
    hostname: "https://docs.gopeed.com",
  },
  appearance: "dark",
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
    root: {
      label: "English",
      lang: "en",
      title: "Gopeed Docs",
      description: "Gopeed docs website",
      themeConfig: {
        socialLinks: [
          { icon: "github", link: "https://github.com/GopeedLab/gopeed" },
          { icon: "discord", link: "https://discord.gg/ZUJqJrwCGB" },
        ],
        nav: [
          {
            text: "Guide",
            link: "/index.md",
          },
          {
            text: "Development",
            link: "/dev.md",
          },
          {
            text: "RESTFul API",
            link: "https://docs.gopeed.com/site/openapi/index.html",
          },
          {
            text: "SDK Reference",
            link: "https://docs.gopeed.com/site/reference/index.html",
          },
          {
            text: "Donate",
            link: "/donate.md",
          },
        ],
        sidebar: [
          {
            text: "Guide",
            items: [
              {
                text: "Introduction",
                link: "/index.md",
              },
              {
                text: "Install",
                link: "/install.md",
              },
            ],
          },
          {
            text: "Development",
            items: [
              {
                text: "API Integration",
                link: "/dev-api.md",
              },
              {
                text: "Extension Development",
                link: "/dev-extension.md",
              },
            ],
          },
        ],
        outline: "deep",
      },
    },
    zh: {
      label: "简体中文",
      lang: "zh-CN",
      title: "Gopeed 文档",
      description: "Gopeed 文档网站",
      themeConfig: {
        socialLinks: [
          { icon: "github", link: "https://github.com/GopeedLab/gopeed" },
          { icon: "discord", link: "https://discord.gg/ZUJqJrwCGB" },
        ],
        nav: [
          {
            text: "指南",
            link: "/zh/index.md",
          },
          {
            text: "开发",
            link: "/zh/dev.md",
          },
          {
            text: "RESTFul API",
            link: "https://docs.gopeed.com/site/openapi/index.html",
          },
          {
            text: "SDK Reference",
            link: "https://docs.gopeed.com/site/reference/index.html",
          },
          {
            text: "捐赠",
            link: "/donate.md",
          },
        ],
        sidebar: [
          {
            text: "指南",
            items: [
              {
                text: "介绍",
                link: "/zh/index.md",
              },
              {
                text: "安装",
                link: "/zh/install.md",
              },
            ],
          },
          {
            text: "开发",
            items: [
              {
                text: "API 对接",
                link: "/zh/dev-api.md",
              },
              {
                text: "扩展开发",
                link: "/zh/dev-extension.md",
              },
            ],
          },
        ],
        outline: "deep",
      },
    },
    "zh-TW": {
      label: "正體中文",
      lang: "zh-TW",
      title: "Gopeed 文件",
      description: "Gopeed 文件網站",
      themeConfig: {
        socialLinks: [
          { icon: "github", link: "https://github.com/GopeedLab/gopeed" },
          { icon: "discord", link: "https://discord.gg/ZUJqJrwCGB" },
        ],
        nav: [
          {
            text: "指南",
            link: "/zh-tw/index.md",
          },
          {
            text: "開發",
            link: "/zh-tw/dev.md",
          },
          {
            text: "RESTFul API",
            link: "https://docs.gopeed.com/site/openapi/index.html",
          },
          {
            text: "SDK Reference",
            link: "https://docs.gopeed.com/site/reference/index.html",
          },
          {
            text: "捐贈",
            link: "/zh-tw/donate.md",
          },
        ],
        sidebar: [
          {
            text: "指南",
            items: [
              {
                text: "介紹",
                link: "/zh-tw/index.md",
              },
              {
                text: "安裝",
                link: "/zh-tw/install.md",
              },
            ],
          },
          {
            text: "開發",
            items: [
              {
                text: "API 對接",
                link: "/zh-tw/dev-api.md",
              },
              {
                text: "擴充開發",
                link: "/zh-tw/dev-extension.md",
              },
            ],
          },
        ],
        outline: "deep",
      },
    },
  },
  themeConfig: {
    logo: "/images/logo.png",
    logoLink: "https://gopeed.com",
    editLink: {
      pattern: "https://github.com/GopeedLab/docs/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },
    search: {
      provider: "local",
    },
    lastUpdated: {
      text: "Updated at",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },
  },
  markdown: {
    config: (md) => {
      md.use(markdownItTaskLists);
    },
  },
});
