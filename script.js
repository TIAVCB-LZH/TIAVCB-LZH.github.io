const translations = {
  en: {
    nav_about: "About",
    nav_news: "News",
    nav_research: "Research",
    nav_publications: "Publications",
    nav_projects: "Projects",
    nav_contact: "Contact",

    subtitle: "Researcher in Artificial Intelligence, Multimodal Learning, and Intelligent Systems",

    about_p1: "I am interested in multimodal learning, intelligent perception, human-state estimation, smart space systems, and medical AI.",
    about_p2: "My current research focuses on integrating environmental sensing, physiological signals, and machine learning methods to support robust emotion and physiological state estimation.",

    news_title: "News",
    news_1: "Personal academic website launched.",
    news_2: "Preparing a Ph.D. research proposal.",

    research_title: "Research Interests",

    research_1_title: "Multimodal Learning",
    research_1_text: "Learning from heterogeneous data sources such as environmental sensors, wearable signals, Wi-Fi CSI, images, and textual information.",

    research_2_title: "Emotion Estimation",
    research_2_text: "Estimating human emotion, comfort, and physiological states using non-contact and multimodal sensing techniques.",

    research_3_title: "Smart Space Systems",
    research_3_text: "Designing intelligent environments that adapt lighting, sound, temperature, and humidity according to user states.",

    publications_title: "Selected Publications",
    paper_1_title: "Title of Your Paper",

    projects_title: "Projects",
    project_1_title: "Emotion-Driven Smart Space Prototype",
    project_1_text: "A prototype system integrating environmental sensors, Raspberry Pi, Arduino, and machine learning to estimate emotion and adjust indoor environments.",

    contact_title: "Contact",
    location: "Location: Japan"
  },

  zh: {
    nav_about: "关于我",
    nav_news: "动态",
    nav_research: "研究方向",
    nav_publications: "论文",
    nav_projects: "项目",
    nav_contact: "联系方式",

    subtitle: "人工智能、多模态学习与智能系统方向研究者",

    about_p1: "我的研究兴趣包括多模态学习、智能感知、人体状态估计、智能空间系统以及医疗人工智能。",
    about_p2: "目前的研究重点是结合环境传感数据、生理信号与机器学习方法，实现更稳定的情绪和生理状态估计。",

    news_title: "最新动态",
    news_1: "个人学术主页上线。",
    news_2: "正在准备多模态学习与智能系统方向的博士研究计划。",

    research_title: "研究方向",

    research_1_title: "多模态学习",
    research_1_text: "从环境传感器、可穿戴信号、Wi-Fi CSI、图像和文本等异构数据中进行联合建模与学习。",

    research_2_title: "情绪估计",
    research_2_text: "利用非接触式和多模态感知技术估计人的情绪、舒适度和生理状态。",

    research_3_title: "智能空间系统",
    research_3_text: "设计能够根据用户状态自动调节照明、声音、温度和湿度的智能环境。",

    publications_title: "代表论文",
    paper_1_title: "你的论文标题",

    projects_title: "项目经历",
    project_1_title: "情绪驱动智能空间原型系统",
    project_1_text: "该系统结合环境传感器、Raspberry Pi、Arduino 和机器学习方法，用于估计情绪并自动调节室内环境。",

    contact_title: "联系方式",
    location: "所在地：日本"
  },

  ja: {
    nav_about: "自己紹介",
    nav_news: "ニュース",
    nav_research: "研究分野",
    nav_publications: "論文",
    nav_projects: "プロジェクト",
    nav_contact: "連絡先",

    subtitle: "人工知能・マルチモーダル学習・知能システム分野の研究者",

    about_p1: "私の研究関心は、マルチモーダル学習、知的知覚、人間状態推定、スマート空間システム、医療AIにあります。",
    about_p2: "現在は、環境センサデータ、生理信号、機械学習手法を統合し、感情や生理状態をより頑健に推定する研究に取り組んでいます。",

    news_title: "ニュース",
    news_1: "個人学術ホームページを公開しました。",
    news_2: "マルチモーダル学習と知能システムに関する博士研究計画を準備しています。",

    research_title: "研究分野",

    research_1_title: "マルチモーダル学習",
    research_1_text: "環境センサ、ウェアラブル信号、Wi-Fi CSI、画像、テキストなどの異種データを用いた学習に取り組んでいます。",

    research_2_title: "感情推定",
    research_2_text: "非接触型およびマルチモーダルセンシング技術を用いて、人間の感情、快適度、生理状態を推定します。",

    research_3_title: "スマート空間システム",
    research_3_text: "ユーザの状態に応じて、照明、音、温度、湿度を自動調整する知的環境の設計を目指しています。",

    publications_title: "代表論文",
    paper_1_title: "論文タイトル",

    projects_title: "プロジェクト",
    project_1_title: "感情駆動型スマート空間プロトタイプ",
    project_1_text: "環境センサ、Raspberry Pi、Arduino、機械学習を統合し、感情推定と室内環境調整を行うプロトタイプシステムです。",

    contact_title: "連絡先",
    location: "所在地：日本"
  }
};

function setLanguage(language) {
  const elements = document.querySelectorAll("[data-i18n]");

  elements.forEach(element => {
    const key = element.getAttribute("data-i18n");
    element.textContent = translations[language][key];
  });

  localStorage.setItem("language", language);
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLanguage = localStorage.getItem("language") || "en";
  setLanguage(savedLanguage);
});