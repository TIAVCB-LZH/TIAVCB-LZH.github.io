const translations = {
  en: {
    nav_about: "About",
    nav_news: "News",
    nav_research: "Research",
    nav_publications: "Publications",
    nav_projects: "Projects",
    nav_contact: "Contact",

    subtitle: "Multimodal Wireless Sensing and Human-State Estimation",

    about_p1: "I am interested in multimodal wireless sensing, intelligent perception, human-state estimation, smart space systems, and non-contact physiological state monitoring.",
    about_p2: "My current research focuses on the non-contact estimation of human physiological changes, spatial location, and activity states by integrating Wi-Fi CSI, environmental sensor data, and machine learning methods. Specifically, I aim to infer HRV-related indicators such as the LF/HF ratio using Wi-Fi CSI and environmental data, while also using CSI to sense human location and behavioral activities. This work supports more robust human-state understanding and adaptive smart-space regulation.",

    news_title: "News",
    news_1: "Personal academic website launched.",

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

    subtitle: "多模态无线感知与人体状态估计",

    about_p1: "我的研究兴趣包括多模态无线感知、智能感知、人体状态估计、智能空间系统以及非接触式生理状态监测。",
    about_p2: "目前的研究重点是结合 Wi-Fi CSI、环境传感器数据与机器学习方法，对人体生理变化、空间位置和动作状态进行非接触式估计。具体而言，我尝试利用 Wi-Fi CSI 与环境数据推测 HRV 相关指标中的 LF/HF，并通过 CSI 感知人的位置与行为动作，从而支持更加稳定的人体状态理解与智能空间调节。",

    news_title: "最新动态",
    news_1: "个人学术主页上线。",

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

    subtitle: "マルチモーダル無線センシングおよび人間状態推定",

    about_p1: "私の研究関心は、マルチモーダル無線センシング、知能的センシング、人間状態推定、スマートスペースシステム、および非接触型の生理状態モニタリングにあります。",
    about_p2: "現在の研究では、Wi-Fi CSI、環境センサデータ、および機械学習手法を組み合わせることで、人間の生理的変化、空間的位置、行動状態を非接触で推定することに重点を置いています。具体的には、Wi-Fi CSI と環境データを用いて、HRV 関連指標である LF/HF 比を推定するとともに、CSI によって人の位置や行動を感知することを試みています。これにより、より安定した人間状態の理解とスマートスペースの適応的制御を支援することを目指しています。",

    news_title: "ニュース",
    news_1: "個人学術ホームページを公開しました。",

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
