const translations = {
  en: {
    nav_about: "About",
    nav_research: "Research",
    nav_publications: "Publications",
    nav_projects: "Projects",
    nav_contact: "Contact",

    display_name: "Zuhe Liu",
    hero_eyebrow: "Master's Student in Computer Science, Chiba University",
    subtitle: "Multimodal Wireless Sensing and Human-State Estimation",
    about_p1: "I am a master's student in Computer Science at Chiba University, working on multimodal wireless sensing, IoT-based smart spaces, affective computing, and non-contact physiological state estimation.",
    about_p2: "My research explores how Wi-Fi CSI, environmental sensors, and machine learning can support robust understanding of physiological changes, location, activity, emotion, and comfort in adaptive indoor environments.",

    news_title: "News",
    news_1: "Personal academic website updated with research, education, and project information.",
    news_2: "Presented a poster at the 2025 IEEE CASS Chiba Workshop.",
    news_3: "Started master's research on Wi-Fi CSI-based human-state estimation.",
    news_4: "Completed an IoT middleware project using MQTT and ECHONET Lite.",
    news_5: "Co-authored an IEICE technical report on group emotion estimation using environmental data.",

    research_title: "Research Interests",
    research_statement_title: "Research Statement",
    research_statement_text: "My research asks how everyday indoor spaces can sense and respond to human physiological and behavioral states without intrusive devices. I aim to connect signal-level sensing, human-state modeling, and adaptive environmental control into practical smart-space systems.",
    research_1_title: "Research Direction 1: Multimodal Wireless Sensing",
    research_1_text: "Combines Wi-Fi CSI and indoor environmental signals as complementary sensing modalities. The focus is on extracting stable features from wireless and ambient data for non-contact indoor perception.",
    research_2_title: "Research Direction 2: Non-contact Physiological State Estimation",
    research_2_text: "Estimates HRV-related indicators such as LF/HF, while tracking location and activity without relying only on wearable devices. These signals provide a basis for emotion and comfort estimation.",
    research_3_title: "Research Direction 3: Smart Space and Adaptive Environment Control",
    research_3_text: "Builds adaptive indoor systems that connect human-state estimation with environmental regulation. The goal is to support context-aware control of lighting, sound, temperature, and humidity.",

    education_title: "Education",
    education_1_title: "Chiba University, Japan",
    education_1_text: "M.S. student in Computer Science",
    education_2_title: "Hokuriku University, Japan",
    education_2_text: "B.A. in Management",
    education_3_title: "Dalian University of Foreign Languages, China",
    education_3_text: "B.Eng. in Network Engineering",

    presentations_title: "Academic Presentations",
    publications_title: "Publications",
    paper_1_title: "Application and Security Analysis of Virtual Private Network (VPN) in Network Communication",
    paper_1_meta: "Zuhe Liu. Academic Journal of Computing & Information Science, Vol. 6, Issue 11, 2023, pp. 52-59.",
    presentation_1_title: "A Study on Group Emotion Estimation Using Environmental Data",
    presentation_1_meta: "Co-author, IEICE Technical Report, CS2026-5, May 2026.",
    presentation_1_text: "Co-authored a technical report on group emotion estimation using environmental data.",
    presentation_2_title: "Emotion Estimation from Indoor Environmental Sensors with Machine and Deep Learning Models",
    presentation_2_meta: "Presenter, 2025 IEEE CASS Chiba Workshop, December 2025.",
    presentation_2_text: "Presented a non-invasive emotion recognition study combining indoor environmental sensor data with machine learning and deep learning models.",

    projects_title: "Projects",
    project_1_title: "MQTT-ECHONET Lite Protocol Conversion Middleware",
    project_1_meta: "Short-term Researcher, JAIST, August 2024 - September 2024",
    project_1_text: "Developed Java-based middleware for cross-protocol communication between application clients and smart home devices, supporting device discovery, remote control, status acquisition, and feedback mechanisms.",
    project_1_detail_1: "Implemented device discovery using UDP broadcast and ECHONET Lite message handling.",
    project_1_detail_2: "Mapped MQTT control topics to ECHONET Lite GET, SET, and OBSERVE commands.",
    project_1_detail_3: "Designed status acquisition and feedback flows for smart home device monitoring.",
    project_1_tags: "Java / MQTT / ECHONET Lite / UDP / TCP / IoT Middleware",
    experience_title: "Experience",
    experience_1_title: "Teaching Assistant, Qingteng Education Group",
    experience_1_text: "Supported students preparing for Japanese graduate school entrance examinations by organizing admissions information, refining preparation plans, and translating complex application requirements into practical study guidance.",
    experience_2_title: "Discrete Mathematics Instructor, Zhiri Education Group",
    experience_2_text: "Designed and delivered tutoring materials for international students preparing for graduate study in Japan.",
    contact_title: "Contact",
    location: "Location: Chiba, Japan",
    footer_updated: "Last updated: June 2026"
  },

  zh: {
    nav_about: "关于我",
    nav_research: "研究方向",
    nav_publications: "论文",
    nav_projects: "项目经历",
    nav_contact: "联系方式",

    display_name: "刘祖赫",
    hero_eyebrow: "千叶大学计算机科学硕士研究生",
    subtitle: "多模态无线感知与人体状态估计",
    about_p1: "我目前就读于日本千叶大学计算机科学专业，研究兴趣包括多模态无线感知、物联网智能空间、情感计算以及非接触式生理状态估计。",
    about_p2: "我的研究关注如何结合 Wi-Fi CSI、环境传感器数据与机器学习方法，对人体生理变化、空间位置、动作状态、情绪与舒适度进行更稳定的理解，并服务于自适应智能空间系统。",

    news_title: "最新动态",
    news_1: "个人学术主页已补充研究方向、教育背景、项目经历与论文信息。",
    news_2: "在 2025 IEEE CASS Chiba Workshop 进行海报发表。",
    news_3: "开始基于 Wi-Fi CSI 的人体状态估计方向硕士研究。",
    news_4: "完成基于 MQTT 与 ECHONET Lite 的 IoT 中间件项目。",
    news_5: "\u5171\u540c\u4f5c\u8005\u8bba\u6587\u300a\u57fa\u4e8e\u73af\u5883\u6570\u636e\u7684\u96c6\u4f53\u60c5\u7eea\u4f30\u8ba1\u7814\u7a76\u300b\u53d1\u8868\u4e8e\u7535\u5b50\u4fe1\u606f\u901a\u4fe1\u5b66\u4f1a\u6280\u672f\u7814\u7a76\u62a5\u544a\u3002",

    research_title: "研究方向",
    research_statement_title: "研究概述",
    research_statement_text: "我的研究关注日常室内空间如何在不依赖侵入式设备的情况下感知并响应人体生理与行为状态。我希望将信号级感知、人体状态建模与自适应环境控制连接起来，构建更实用的智能空间系统。",
    research_1_title: "研究方向 1：多模态无线感知",
    research_1_text: "将 Wi-Fi CSI 与室内环境信号作为互补感知模态进行联合分析。重点在于从无线信号与环境数据中提取稳定特征，用于非接触式室内感知。",
    research_2_title: "研究方向 2：非接触式生理状态估计",
    research_2_text: "估计 LF/HF 等 HRV 相关指标，同时在不完全依赖可穿戴设备的情况下分析位置与动作状态。这些信号为情绪与舒适度估计提供基础。",
    research_3_title: "研究方向 3：智能空间与自适应环境调节",
    research_3_text: "构建将人体状态估计与环境调节相连接的自适应室内系统。目标是支持照明、声音、温度与湿度的情境感知控制。",

    education_title: "教育背景",
    education_1_title: "日本 千叶大学",
    education_1_text: "计算机科学 硕士研究生",
    education_2_title: "日本 北陆大学",
    education_2_text: "管理学 本科",
    education_3_title: "大连外国语大学",
    education_3_text: "网络工程 本科",

    presentations_title: "学术发表",
    publications_title: "论文",
    paper_1_title: "Application and Security Analysis of Virtual Private Network (VPN) in Network Communication",
    paper_1_meta: "Zuhe Liu. Academic Journal of Computing & Information Science, Vol. 6, Issue 11, 2023, pp. 52-59.",
    presentation_1_title: "\u57fa\u4e8e\u73af\u5883\u6570\u636e\u7684\u96c6\u4f53\u60c5\u7eea\u4f30\u8ba1\u7814\u7a76",
    presentation_1_meta: "\u5171\u540c\u4f5c\u8005\uff0c\u7535\u5b50\u4fe1\u606f\u901a\u4fe1\u5b66\u4f1a\u6280\u672f\u7814\u7a76\u62a5\u544a\uff0cCS2026-5\uff0c2026 \u5e74 5 \u6708\u3002",
    presentation_1_text: "\u5171\u540c\u53c2\u4e0e\u57fa\u4e8e\u73af\u5883\u6570\u636e\u7684\u96c6\u4f53\u60c5\u7eea\u4f30\u8ba1\u7814\u7a76\uff0c\u5e76\u4f5c\u4e3a\u6280\u672f\u7814\u7a76\u62a5\u544a\u53d1\u8868\u3002",
    presentation_2_title: "Emotion Estimation from Indoor Environmental Sensors with Machine and Deep Learning Models",
    presentation_2_meta: "发表者，2025 IEEE CASS Chiba Workshop，2025 年 12 月。",
    presentation_2_text: "结合室内环境传感器采集的温度、光照等多维数据与机器学习、深度学习模型，进行非侵入式情绪识别研究展示。",

    projects_title: "项目经历",
    project_1_title: "MQTT-ECHONET Lite 协议转换中间件",
    project_1_meta: "短期研究员，日本北陆先端科学技术大学院大学（JAIST），2024.08 - 2024.09",
    project_1_text: "面向智能家居设备跨协议通信场景，开发基于 Java 的中间件，实现应用端控制指令向智能家居设备控制命令的转换，支持设备发现、远程控制、状态获取与反馈机制。",
    project_1_detail_1: "基于 UDP 广播实现设备发现，并处理 ECHONET Lite 消息解析流程。",
    project_1_detail_2: "将 MQTT 控制主题映射为 ECHONET Lite 的 GET、SET 与 OBSERVE 指令。",
    project_1_detail_3: "设计智能家居设备状态获取与反馈流程，用于设备运行状态监测。",
    project_1_tags: "Java / MQTT / ECHONET Lite / UDP / TCP / IoT Middleware",
    experience_title: "经历",
    experience_1_title: "青藤教育集团，教学助理",
    experience_1_text: "指导学生准备日本大学院入学考试，定期整理日本大学院入试相关信息，协助学生梳理报考方向、备考节奏与申请要求，将复杂的入试流程转化为清晰可执行的学习与准备方案。",
    experience_2_title: "知日教育集团，离散数学课程讲师",
    experience_2_text: "独立设计面向日本留学生的离散数学辅导课程大纲与教学内容，帮助学生巩固数学基础。",
    contact_title: "联系方式",
    location: "所在地：日本千叶",
    footer_updated: "最后更新：2026年6月"
  },

  ja: {
    nav_about: "自己紹介",
    nav_research: "研究分野",
    nav_publications: "論文",
    nav_projects: "プロジェクト",
    nav_contact: "連絡先",

    display_name: "劉祖赫(リュウ　ソカク)",
    hero_eyebrow: "千葉大学 情報科学専攻 修士課程",
    subtitle: "マルチモーダル無線センシングと人体状態推定",
    about_p1: "千葉大学情報科学専攻の修士課程に在籍し、マルチモーダル無線センシング、IoT ベースのスマート空間、感情計算、非接触型生理状態推定に関心を持っています。",
    about_p2: "Wi-Fi CSI、環境センサデータ、機械学習を組み合わせ、人体の生理的変化、位置、動作、感情、快適度をより安定して理解し、自適応型スマート空間に応用することを目指しています。",

    news_title: "ニュース",
    news_1: "研究分野、学歴、プロジェクト、論文情報を個人学術ホームページに追加しました。",
    news_2: "2025 IEEE CASS Chiba Workshop でポスター発表を行いました。",
    news_3: "Wi-Fi CSI に基づく人体状態推定に関する修士研究を開始しました。",
    news_4: "MQTT と ECHONET Lite を用いた IoT ミドルウェアプロジェクトを完了しました。",
    news_5: "\u5171\u8457\u8ad6\u6587\u300c\u74b0\u5883\u30c7\u30fc\u30bf\u3092\u7528\u3044\u305f\u96c6\u56e3\u611f\u60c5\u63a8\u5b9a\u306b\u95a2\u3059\u308b\u7814\u7a76\u300d\u304c\u96fb\u5b50\u60c5\u5831\u901a\u4fe1\u5b66\u4f1a\u6280\u8853\u7814\u7a76\u5831\u544a\u306b\u63b2\u8f09\u3055\u308c\u307e\u3057\u305f\u3002",

    research_title: "研究分野",
    research_statement_title: "研究概要",
    research_statement_text: "私の研究は、日常的な室内空間が侵襲的なデバイスに依存せず、人間の生理状態や行動状態をどのように感知し応答できるかに焦点を当てています。信号レベルのセンシング、人体状態モデリング、自適応型環境制御を結びつけ、実用的なスマート空間システムの構築を目指しています。",
    research_1_title: "研究方向 1：マルチモーダル無線センシング",
    research_1_text: "Wi-Fi CSI と室内環境信号を相補的なセンシングモダリティとして分析します。無線信号と環境データから安定した特徴を抽出し、非接触型の室内認識に活用します。",
    research_2_title: "研究方向 2：非接触型生理状態推定",
    research_2_text: "LF/HF などの HRV 関連指標を推定し、ウェアラブル機器だけに依存せずに位置や動作状態を分析します。これらの信号を感情・快適度推定の基盤として利用します。",
    research_3_title: "研究方向 3：スマート空間と自適応型環境制御",
    research_3_text: "人体状態推定と環境調整を結びつける自適応型室内システムを構築します。照明、音、温度、湿度を文脈に応じて制御することを目指します。",

    education_title: "学歴",
    education_1_title: "千葉大学（日本）",
    education_1_text: "情報科学専攻 修士",
    education_2_title: "北陸大学（日本）",
    education_2_text: "マネジメント学 学士",
    education_3_title: "大連外国語大学（中国）",
    education_3_text: "ネットワークエンジニアリング 学士",

    presentations_title: "発表",
    publications_title: "論文",
    paper_1_title: "Application and Security Analysis of Virtual Private Network (VPN) in Network Communication",
    paper_1_meta: "Zuhe Liu. Academic Journal of Computing & Information Science, Vol. 6, Issue 11, 2023, pp. 52-59.",
    presentation_1_title: "\u74b0\u5883\u30c7\u30fc\u30bf\u3092\u7528\u3044\u305f\u96c6\u56e3\u611f\u60c5\u63a8\u5b9a\u306b\u95a2\u3059\u308b\u7814\u7a76",
    presentation_1_meta: "\u5171\u8457\u8005\u3001\u96fb\u5b50\u60c5\u5831\u901a\u4fe1\u5b66\u4f1a\u6280\u8853\u7814\u7a76\u5831\u544a\u3001CS2026-5\u30012026\u5e745\u6708\u3002",
    presentation_1_text: "\u74b0\u5883\u30c7\u30fc\u30bf\u3092\u7528\u3044\u305f\u96c6\u56e3\u611f\u60c5\u63a8\u5b9a\u306b\u95a2\u3059\u308b\u6280\u8853\u7814\u7a76\u5831\u544a\u3092\u5171\u8457\u3057\u307e\u3057\u305f\u3002",
    presentation_2_title: "Emotion Estimation from Indoor Environmental Sensors with Machine and Deep Learning Models",
    presentation_2_meta: "発表者、2025 IEEE CASS Chiba Workshop、2025 年 12 月。",
    presentation_2_text: "室内環境センサから取得した温度・照度などの多次元データと機械学習・深層学習モデルを組み合わせ、非侵襲的な感情認識研究を発表しました。",

    projects_title: "プロジェクト",
    project_1_title: "MQTT-ECHONET Lite プロトコル変換ミドルウェア",
    project_1_meta: "短期研究員、北陸先端科学技術大学院大学（JAIST）、2024.08 - 2024.09",
    project_1_text: "スマートホーム機器のクロスプロトコル通信に向けて、Java ベースのミドルウェアを開発し、機器発見、遠隔制御、状態取得、フィードバック機構を実装しました。",
    project_1_detail_1: "UDP ブロードキャストを用いた機器発見と ECHONET Lite メッセージ処理を実装しました。",
    project_1_detail_2: "MQTT の制御トピックを ECHONET Lite の GET、SET、OBSERVE コマンドに対応付けました。",
    project_1_detail_3: "スマートホーム機器の状態監視に向けて、状態取得とフィードバックの流れを設計しました。",
    project_1_tags: "Java / MQTT / ECHONET Lite / UDP / TCP / IoT Middleware",
    experience_title: "経験",
    experience_1_title: "青藤教育グループ、ティーチングアシスタント",
    experience_1_text: "日本の大学院入試を目指す学生を支援し、入試関連情報を定期的に整理するとともに、志望校選定、準備計画、出願要件の理解をサポートし、複雑な入試プロセスを実行しやすい学習計画へ落とし込みました。",
    experience_2_title: "知日教育グループ、離散数学講師",
    experience_2_text: "日本留学を目指す学生向けに離散数学の補習カリキュラムと教材を設計し、数学基礎の定着を支援しました。",
    contact_title: "連絡先",
    location: "所在地：日本 千葉",
    footer_updated: "最終更新：2026年6月"
  }
};

function setLanguage(language) {
  const dictionary = translations[language] || translations.en;
  document.documentElement.lang = language;

  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.getAttribute("data-i18n");
    if (dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  document.querySelectorAll(".language-switch button").forEach(button => {
    const isActive = button.dataset.language === language;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  localStorage.setItem("language", language);
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLanguage = localStorage.getItem("language") || "en";
  setLanguage(savedLanguage);
});
