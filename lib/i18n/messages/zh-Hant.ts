import type { Messages } from "./en";
import type { DeepPartial } from "./types";

const zhHant: DeepPartial<Messages> = {
  nav: {
    pdf: "PDF",
    image: "圖片",
    convert: "轉檔",
    language: "語言",
  },
  footer: {
    tagline: "私密、純瀏覽器運作的檔案工具",
    home: "首頁",
    privacy: "隱私權",
    terms: "服務條款",
    contact: "聯絡我們",
  },
  home: {
    title: "免費、私密的檔案工具",
    subtitle:
      "在瀏覽器中直接轉換、壓縮並合併 PDF 與圖片。不會上傳任何檔案，你的檔案絕不離開你的裝置。",
    badge: "🔒 100% 在瀏覽器運作 · 免註冊 · 不儲存檔案",
    toolsCount: "{count} 項工具，持續增加中。",
  },
  categories: {
    pdf: "PDF 工具",
    image: "圖片工具",
    convert: "轉檔",
  },
  tool: {
    trust: "100% 在您的瀏覽器中 · 檔案從不上傳 · 無需註冊",
    home: "首頁",
    howItWorks: "運作方式",
    faq: "常見問題",
    related: "相關工具",
    privateHeading: "100% 私密",
    privateBody:
      "一切都在你的瀏覽器中，使用你裝置自身的運算能力執行。不上傳、不儲存、免註冊。",
  },
  privacyNote:
    "你的檔案在瀏覽器中處理，絕不離開你的裝置。",
  widgets: {
    dropTitleMulti: "將檔案拖放到這裡",
    dropTitleSingle: "將檔案拖放到這裡",
    browse: "或點選以瀏覽",
    remove: "移除",
    moveUp: "上移",
    moveDown: "下移",
    working: "處理中…",
    loadingTool: "正在載入工具…",
    ready: "你的檔案已就緒",
    download: "下載",
    startOver: "重新開始",
    was: "原本",
    smaller: "更小",
    larger: "更大",
    dismiss: "關閉",
    bestEffort: "盡力轉換：",
    comingSoonBanner: "這項工具仍在開發中，目前尚未推出。",
    betaConversion: "🚧 Beta — 這項轉換即將推出。",
    emailDemo: "我們還在開發這項功能。留下你的電子郵件，一旦準備好我們就會通知你。",
    emailPlaceholder: "you@example.com",
    notifyMe: "通知我",
    notifyThanks: "謝謝！我們會再與你聯繫。（這只是 UI 示範，不會被儲存。）",
  },
  affiliate: {
    disclosure: "本頁部分連結為聯盟行銷連結。若你透過這些連結購買，我們可能會獲得佣金，但你不需支付任何額外費用。",
    ctaHeading: "需要每次都完美的轉換結果嗎？",
    ctaBody: "這個瀏覽器內工具免費且盡力而為。若你需要在複雜或大型檔案上獲得像素級完美的結果，專屬的桌面應用程式能做得更多。",
    ctaButton: "查看推薦工具",
  },
  consent: {
    message: "我們使用 Cookie 進行分析，未來也可能用於廣告。你可以接受或拒絕非必要的 Cookie。",
    accept: "接受",
    reject: "拒絕",
    learnMore: "隱私權政策",
  },
  suggest: {
    prompt: "要以 {lang} 瀏覽本網站嗎？",
    accept: "切換至 {lang}",
    dismiss: "不用了，謝謝",
  },
  notFound: {
    title: "找不到頁面",
    body: "這個工具或頁面（目前）不存在。",
    cta: "返回所有工具",
  },
  legal: {
    privacy: {
      title: "隱私權政策",
      updated: "最後更新：2026 年 6 月",
      sections: [
        {
          heading: "簡短版本",
          body: "你的檔案在瀏覽器中處理，絕不離開你的裝置。我們不會上傳、不會儲存，也無法看見它們。",
        },
        {
          heading: "檔案處理的運作方式",
          body: "FileTools 上的每一項工具都完全以用戶端 JavaScript 執行。當你選取檔案時，它會被讀入瀏覽器的記憶體、在你自己的裝置上處理，再提供給你下載。任何檔案資料都不會傳送到伺服器。",
        },
        {
          heading: "分析與 Cookie",
          body: "我們可能會使用注重隱私的彙整式分析，以了解哪些工具受歡迎。我們不會販售個人資料。若日後加入廣告，本政策將會更新並清楚說明。",
        },
        {
          heading: "聯絡我們",
          body: "對隱私權有疑問嗎？請參閱我們的聯絡頁面。",
        },
      ],
    },
    terms: {
      title: "服務條款",
      updated: "最後更新：2026 年 6 月",
      sections: [
        {
          heading: "接受條款",
          body: "使用 FileTools 即表示你同意這些條款。若你不同意，請勿使用本網站。",
        },
        {
          heading: "服務內容",
          body: "FileTools 提供免費、以瀏覽器為基礎的工具，用於處理 PDF 與圖片檔案。所有處理都在你的裝置上進行。本服務按「現狀」提供，不附帶任何形式的擔保。",
        },
        {
          heading: "你的責任",
          body: "你需對自己處理的檔案負責，並自行保留備份。由於處理在本機進行，我們不對任何資料遺失負責，你應始終保留原始檔案的副本。",
        },
        {
          heading: "可接受的使用方式",
          body: "請勿使用 FileTools 處理你沒有權利的內容，或以任何違法的方式使用。",
        },
        {
          heading: "責任限制",
          body: "在法律允許的最大範圍內，FileTools 及其作者對因使用或無法使用本服務所造成的任何損害概不負責。",
        },
        {
          heading: "條款變更",
          body: "我們可能會不時更新這些條款。繼續使用本網站即表示你接受現行條款。",
        },
      ],
    },
    contact: {
      title: "聯絡我們",
      intro:
        "發現錯誤、有功能建議，或想要新工具嗎？我們很樂意聽到你的意見。",
      emailHeading: "電子郵件",
      emailBody: "你可以透過 hello@filetools.example.com 與我們聯絡。",
      filesHeading: "關於檔案的提醒",
      filesBody:
        "請勿將你的檔案寄給我們。每一項工具都完全在你的瀏覽器中執行，所以我們無法存取它們，也不需要它們就能協助你。",
    },
  },
};

export default zhHant;
