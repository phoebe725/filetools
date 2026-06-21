import type { Messages } from "./en";
import type { DeepPartial } from "./types";

const zhHans: DeepPartial<Messages> = {
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
    about: "关于",
    support: "请我喝杯咖啡",
    recommended: "推荐工具",
    pcloud: "pCloud — 云端存储",
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
  widgets: {
    dropTitleMulti: "将文件拖放到此处",
    dropTitleSingle: "将文件拖放到此处",
    browse: "或点击浏览",
    remove: "移除",
    moveUp: "上移",
    moveDown: "下移",
    working: "处理中…",
    loadingTool: "正在加载工具…",
    ready: "你的文件已就绪",
    download: "下载",
    startOver: "重新开始",
    was: "原本",
    smaller: "更小",
    larger: "更大",
    dismiss: "关闭",
    bestEffort: "尽力转换：",
    comingSoonBanner: "此工具正在开发中，暂未上线。",
    betaConversion: "🚧 测试版 — 此转换功能即将推出。",
    emailDemo: "我们仍在开发这项功能。留下你的邮箱，准备就绪时我们会第一时间通知你。",
    emailPlaceholder: "you@example.com",
    notifyMe: "通知我",
    notifyThanks: "谢谢！我们会与你联系。（这只是界面演示，不会被存储。）",
  },
  affiliate: {
    disclosure: "部分链接为合作伙伴链接。如果你通过这些链接购买，我们可能会获得少量佣金，你无需支付额外费用。",
    ctaHeading: "需要每次都完美转换？",
    ctaBody: "这款浏览器内工具是免费的，并会尽力转换。如果你需要处理复杂或大型文件并获得像素级完美的结果，专用的桌面应用能做到更多。",
    ctaButton: "查看推荐工具",
    pcloud: {
      heading: "妥善保存你的文件",
      body: "想保存转换后的文件吗？用 pCloud 获得终身云端存储空间，一次付费，永久拥有。",
      button: "获取 pCloud 终身方案",
    },
  },
  consent: {
    message: "我们使用 Cookie 进行分析，未来也可能用于广告。你可以接受或拒绝非必要的 Cookie。",
    accept: "接受",
    reject: "拒绝",
    learnMore: "隐私政策",
  },
  suggest: {
    prompt: "以 {lang} 查看本网站？",
    accept: "切换到 {lang}",
    dismiss: "不用了",
  },
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
          heading: "Cookie",
          body: "我们将 Cookie 用于两件事：记住你的偏好（例如你选择的语言），以及——仅在你接受我们的 Cookie 横幅之后——分析和广告。你可以拒绝非必要的 Cookie，每款工具仍可完整使用。",
        },
        {
          heading: "广告",
          body: "我们展示来自 Google AdSense 的广告，以保持 FileTools 免费。Google 及其合作伙伴可能会使用 Cookie，根据你此前对本网站及其他网站的访问来投放广告。广告仅在你接受 Cookie 之后才会加载。你可以在 Google 的广告设置（adssettings.google.com）中管理个性化广告。",
        },
        {
          heading: "联盟链接",
          body: "部分页面包含指向第三方产品（例如桌面软件）的联盟链接。如果你点击并完成购买，我们可能会获得佣金，而你无需支付额外费用。这些链接已在页面上注明，并且绝不会影响我们免费的浏览器内工具。",
        },
        {
          heading: "分析",
          body: "我们可能会使用注重隐私的聚合分析，以了解哪些工具更受欢迎。这绝不会包含你文件的内容，它们也绝不会被发送给我们。我们不会出售你的个人数据。",
        },
        {
          heading: "你的选择",
          body: "你可以随时通过 Cookie 横幅接受或拒绝非必要的 Cookie，并使用浏览器设置或 Google 的广告设置来限制广告个性化。",
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
    about: {
      title: "关于 FileTools",
      intro:
        "FileTools 是一套免费、隐私优先的工具集合，用于处理 PDF 和图片——全部完全在你的浏览器中运行。",
      sections: [
        {
          heading: "我们的使命",
          body: "我们希望让日常的文件任务——合并 PDF、转换图片、压缩文件——变得快速、免费且私密，而无需强迫你把敏感文档上传到别人的服务器。",
        },
        {
          heading: "与众不同之处",
          body: "每款工具都作为客户端代码在你自己的设备上运行。你的文件永不离开浏览器，无需注册，也不会存储任何内容。你在这里所做的一切都留在你的电脑上。",
        },
        {
          heading: "我们如何保持免费",
          body: "FileTools 由不打扰用户的广告以及偶尔指向我们真正觉得实用的工具的联盟链接提供资金支持。这让我们能够让每款工具对所有人保持免费。详情请查看我们的隐私政策。",
        },
        {
          heading: "联系我们",
          body: "发现了错误、有想法，或希望某款工具存在？请访问我们的联系页面——我们很乐意听到你的声音。",
        },
      ],
    },
  },
};

export default zhHans;
