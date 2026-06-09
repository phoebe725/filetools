import { type Messages } from "./en";

const zhHans: Messages = {
  nav: {
    pdf: "PDF",
    image: "图片",
    convert: "转换",
    language: "语言",
  },
  footer: {
    tagline: "私密的浏览器内文件工具",
    home: "首页",
    privacy: "隐私",
    terms: "条款",
    contact: "联系我们",
  },
  home: {
    title: "免费、私密的文件工具",
    subtitle:
      "在浏览器中直接转换、压缩和合并 PDF 与图片。无需上传，文件永不离开你的设备。",
    badge: "🔒 100% 浏览器内处理 · 无需注册 · 不存储文件",
    toolsCount: "{count} 款工具，持续增加中。",
  },
  categories: {
    pdf: "PDF 工具",
    image: "图片工具",
    convert: "转换",
  },
  tool: {
    trust: "100% 在您的浏览器中 · 文件从不上传 · 无需注册",
    home: "首页",
    howItWorks: "使用方法",
    faq: "常见问题",
    related: "相关工具",
    privateHeading: "100% 私密",
    privateBody:
      "所有处理都在你的浏览器中、利用你设备自身的算力完成。无需上传、不存储、无需注册。",
  },
  privacyNote:
    "你的文件在浏览器中处理，永不离开你的设备。",
  notFound: {
    title: "页面未找到",
    body: "该工具或页面（暂时）不存在。",
    cta: "返回全部工具",
  },
  legal: {
    privacy: {
      title: "隐私政策",
      updated: "最后更新：2026 年 6 月",
      sections: [
        {
          heading: "简而言之",
          body: "你的文件在浏览器中处理，永不离开你的设备。我们不会上传它们，不会存储它们，也无法看到它们。",
        },
        {
          heading: "文件处理的原理",
          body: "FileTools 上的每款工具都完全以客户端 JavaScript 运行。当你选择文件时，它会被读入浏览器内存，在你自己的设备上处理，并以下载的形式返回给你。任何文件数据都不会传输到服务器。",
        },
        {
          heading: "分析与 Cookie",
          body: "我们可能会使用注重隐私的聚合分析，以了解哪些工具更受欢迎。我们不会出售个人数据。如果将来加入广告，本政策将更新以对此作出清晰说明。",
        },
        {
          heading: "联系我们",
          body: "对隐私有疑问？请查看我们的联系页面。",
        },
      ],
    },
    terms: {
      title: "服务条款",
      updated: "最后更新：2026 年 6 月",
      sections: [
        {
          heading: "接受条款",
          body: "使用 FileTools 即表示你同意这些条款。如果你不同意，请不要使用本网站。",
        },
        {
          heading: "本服务",
          body: "FileTools 提供免费的、基于浏览器的工具，用于处理 PDF 和图片文件。所有处理都在你的设备上进行。本服务按“现状”提供，不附带任何形式的保证。",
        },
        {
          heading: "你的责任",
          body: "你需对自己处理的文件负责，并自行做好备份。由于处理在本地进行，我们对任何数据丢失概不负责，你应始终保留原始文件的副本。",
        },
        {
          heading: "可接受的使用",
          body: "请勿使用 FileTools 处理你无权处理的内容，或以任何违法的方式使用。",
        },
        {
          heading: "责任限制",
          body: "在法律允许的最大范围内，FileTools 及其作者对因使用或无法使用本服务而产生的任何损害概不负责。",
        },
        {
          heading: "条款变更",
          body: "我们可能会不时更新这些条款。继续使用本网站即表示你接受当前的条款。",
        },
      ],
    },
    contact: {
      title: "联系我们",
      intro:
        "发现了错误、有功能建议，或想要一款新工具？我们很乐意听到你的声音。",
      emailHeading: "电子邮件",
      emailBody: "请通过 hello@filetools.example.com 联系我们。",
      filesHeading: "关于文件的说明",
      filesBody:
        "请不要把你的文件发送给我们。每款工具都完全在你的浏览器中运行，因此我们无法访问它们，也不需要它们来提供帮助。",
    },
  },
};

export default zhHans;
