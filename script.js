const translations = {
  en: {
    nav_about: "About",
    nav_research: "Research",
    nav_publications: "Publications",
    nav_projects: "Research and Development",
    nav_contact: "Contact",

    display_name: "Zuhe Liu",
    hero_eyebrow: "Master's Student in Computer Science, Chiba University",
    subtitle: "Contactless Human Sensing and Physiological State Modeling",
    about_p1: "I am a master's student in Computer Science at Chiba University. My research focuses on contactless human sensing and physiological state modeling using wireless sensing, environmental sensing, and machine learning.",
    about_p2: "I study the relationship between environmental changes and human physiological responses, with particular attention to individual differences, response delays, and the reliability of state estimates.",

    news_title: "News",
    news_1: "Personal academic website updated with research, education, and project information.",
    news_2: "Presented a poster at the 2025 IEEE CASS Chiba Workshop.",
    news_3: "Started master's research on Wi-Fi CSI-based human-state estimation.",
    news_4: "Completed an IoT middleware project using MQTT and ECHONET Lite.",
    news_5: "Second author of an IEICE technical report on group emotion estimation using environmental data.",

    research_title: "Research Interests",
    research_statement_title: "Contactless Human Sensing and Physiological State Modeling",
    research_statement_text: "My research centers on contactless human sensing and physiological state modeling. By combining wireless sensing, environmental sensing, and machine learning, I study the relationship between environmental changes and human physiological responses and explore ways to monitor human states with less reliance on cameras and wearable devices. I am particularly interested in individual differences in physiological responses, response delays, and the reliability of state estimates.",
    research_intro: "My current research focuses on three areas:",
    research_1_title: "Wireless Sensing and Contactless Physiological Monitoring",
    research_1_text: "I use Wi-Fi channel state information (CSI) to investigate sensing methods for respiration, activity, and related physiological changes, and evaluate their effectiveness against physiological measurements from wearable devices.",
    research_2_title: "Modeling Environmental Changes and Physiological Responses",
    research_2_text: "I combine environmental data, such as temperature and humidity, with physiological signals to analyze shared patterns, individual differences, and time delays in autonomic responses under the same environmental conditions, exploring associations between the environment and human states.",
    research_3_title: "Multisource Information Fusion and Reliability Evaluation",
    research_3_text: "I combine environmental information with human sensing data to explore methods for estimating physiological and affective states, using probabilistic modeling and uncertainty evaluation to improve the trustworthiness of the estimates.",
    research_outlook: "In the future, I hope to apply these methods to everyday health monitoring, older adult care, and companion robots, developing sensing systems that balance privacy, user burden, and adaptability to real-world environments.",
    keyword_environment: "Environmental Sensing",
    keyword_physiology: "Physiological State Modeling",
    keyword_individual: "Individual Differences",
    keyword_delay: "Response Delay",
    keyword_reliability: "Reliability Evaluation",
    keyword_ml: "Machine Learning",

    education_title: "Education",
    education_1_title: "Chiba University, Japan",
    education_1_text: "M.S. student in Computer Science",
    education_2_title: "Hokuriku University, Japan",
    education_2_text: "B.A. in Management",
    education_3_title: "Dalian University of Foreign Languages, China",
    education_3_text: "B.Eng. in Network Engineering",

    presentations_title: "Oral and Poster Presentations",
    international_conferences_title: "International Conferences",
    conference_1_meta: "Z. Liu, J. Qian, and N. Komuro, \"Probabilistic Group Emotion Estimation from Environmental Sensor Data Using Entropy-Based Reliability Evaluation,\" Proc. 15th International Conference on Communications, Circuits and Systems (ICCCAS), pp. 95-99, Jul. 2026 (Takasaki, Japan).",
    publications_title: "Publications",
    paper_1_title: "Application and Security Analysis of Virtual Private Network (VPN) in Network Communication",
    paper_1_meta: "Z. Liu, \"Application and Security Analysis of Virtual Private Network (VPN) in Network Communication,\" Academic Journal of Computing & Information Science, Vol. 6, Issue 11, pp. 52-59, 2023.",
    presentation_1_title: "A Study on Group Emotion Estimation Using Environmental Data",
    presentation_1_meta: "Jingshi Qian, Zuhe Liu, and Nobuyoshi Komuro, \"A Study on Group Emotion Estimation Using Environmental Data,\" IEICE Technical Report, Vol. 126, No. 19, CS2026-5, pp. 20-23, May 2026 (Kushiro Chamber of Commerce & Industry).",
    presentation_2_title: "Emotion Estimation from Indoor Environmental Sensors with Machine and Deep Learning Models",
    presentation_2_meta: "Z. Liu and N. Komuro, \"Emotion Estimation from Indoor Environmental Sensors with Machine and Deep Learning Models,\" 2025 IEEE CASS Chiba Workshop, Dec. 2025（Chiba University, Japan, 千葉大学）",

    projects_title: "Research and Development Experience",
    project_1_title: "MQTT-ECHONET Lite Protocol Conversion Middleware",
    project_1_meta: "Japan Advanced Institute of Science and Technology (JAIST), August 2024 - September 2024",
    project_1_text: "Developed Java-based middleware for cross-protocol communication between application clients and smart home devices, supporting device discovery, remote control, status acquisition, and feedback mechanisms.",
    project_1_detail_1: "Implemented device discovery using UDP broadcast and ECHONET Lite message handling.",
    project_1_detail_2: "Mapped MQTT control topics to ECHONET Lite GET, SET, and OBSERVE commands.",
    project_1_detail_3: "Designed status acquisition and feedback flows for smart home device monitoring.",
    project_1_tags: "Java / MQTT / ECHONET Lite / UDP / TCP / IoT Middleware",
    experience_title: "Teaching Experience",
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
    nav_projects: "研究开发",
    nav_contact: "联系方式",

    display_name: "刘祖赫",
    hero_eyebrow: "千叶大学计算机科学硕士研究生",
    subtitle: "非接触人体感知与生理状态建模",
    about_p1: "我目前就读于日本千叶大学计算机科学专业，研究围绕非接触人体感知与生理状态建模展开，结合无线感知、环境传感和机器学习开展研究。",
    about_p2: "我关注环境变化与人体生理反应之间的关系，尤其关注生理反应的个体差异、时间延迟，以及状态推定结果的可靠性。",

    news_title: "最新动态",
    news_1: "个人学术主页已补充研究方向、教育背景、项目经历与论文信息。",
    news_2: "在 2025 IEEE CASS Chiba Workshop 进行海报发表。",
    news_3: "开始基于 Wi-Fi CSI 的人体状态估计方向硕士研究。",
    news_4: "完成基于 MQTT 与 ECHONET Lite 的 IoT 中间件项目。",
    news_5: "\u4f5c\u4e3a\u7b2c\u4e8c\u4f5c\u8005\u7684 IEICE \u6280\u672f\u7814\u7a76\u62a5\u544a\u300aA Study on Group Emotion Estimation Using Environmental Data\u300b\u5df2\u53d1\u8868\u3002",

    research_title: "研究方向",
    research_statement_title: "非接触人体感知与生理状态建模",
    research_statement_text: "我的研究围绕非接触人体感知与生理状态建模展开，结合无线感知、环境传感和机器学习，研究环境变化与人体生理反应之间的关系，并探索减少对摄像头和穿戴设备依赖的人体状态监测方法。我尤其关注生理反应的个体差异、时间延迟，以及状态推定结果的可靠性。",
    research_intro: "目前主要开展以下三个方面的研究：",
    research_1_title: "无线感知与非接触生理监测",
    research_1_text: "利用 Wi-Fi 信道状态信息（CSI），研究呼吸、活动及相关生理变化的感知方法，并通过与穿戴式生理测量数据对照，评估其有效性。",
    research_2_title: "环境变化与生理反应建模",
    research_2_text: "结合温湿度等环境数据与生理信号，分析同一环境下人体自主神经反应的共性、个体差异和时间延迟，探索环境与人体状态之间的关联。",
    research_3_title: "多源信息融合与可靠性评估",
    research_3_text: "结合环境信息和人体感知信息，探索生理及情感状态的推定方法，利用概率建模与不确定性评估，提高推定结果的可信度。",
    research_outlook: "未来希望将相关方法应用于日常健康监测、老年人看护和陪伴机器人，构建兼顾隐私、使用负担与实际环境适应性的感知系统。",
    keyword_environment: "环境传感",
    keyword_physiology: "生理状态建模",
    keyword_individual: "个体差异",
    keyword_delay: "时间延迟",
    keyword_reliability: "可靠性评估",
    keyword_ml: "机器学习",

    education_title: "教育背景",
    education_1_title: "日本 千叶大学",
    education_1_text: "计算机科学 硕士研究生",
    education_2_title: "日本 北陆大学",
    education_2_text: "管理学 本科",
    education_3_title: "大连外国语大学",
    education_3_text: "网络工程 本科",

    presentations_title: "口头及海报发表等",
    international_conferences_title: "国际会议",
    conference_1_meta: "Z. Liu, J. Qian, and N. Komuro, \"Probabilistic Group Emotion Estimation from Environmental Sensor Data Using Entropy-Based Reliability Evaluation,\" Proc. 15th International Conference on Communications, Circuits and Systems (ICCCAS), pp. 95-99, Jul. 2026 (Takasaki, Japan).",
    publications_title: "论文",
    paper_1_title: "Application and Security Analysis of Virtual Private Network (VPN) in Network Communication",
    paper_1_meta: "Z. Liu, \"Application and Security Analysis of Virtual Private Network (VPN) in Network Communication,\" Academic Journal of Computing & Information Science, Vol. 6, Issue 11, pp. 52-59, 2023.",
    presentation_1_title: "A Study on Group Emotion Estimation Using Environmental Data",
    presentation_1_meta: "Jingshi Qian, Zuhe Liu, and Nobuyoshi Komuro, \"A Study on Group Emotion Estimation Using Environmental Data,\" IEICE Technical Report, Vol. 126, No. 19, CS2026-5, pp. 20-23, May 2026 (Kushiro Chamber of Commerce & Industry).",
    presentation_2_title: "Emotion Estimation from Indoor Environmental Sensors with Machine and Deep Learning Models",
    presentation_2_meta: "Z. Liu and N. Komuro, \"Emotion Estimation from Indoor Environmental Sensors with Machine and Deep Learning Models,\" 2025 IEEE CASS Chiba Workshop, Dec. 2025（Chiba University, Japan, 千葉大学）",

    projects_title: "研究开发经历",
    project_1_title: "MQTT-ECHONET Lite 协议转换中间件",
    project_1_meta: "日本北陆先端科学技术大学院大学（JAIST），2024.08 - 2024.09",
    project_1_text: "面向智能家居设备跨协议通信场景，开发基于 Java 的中间件，实现应用端控制指令向智能家居设备控制命令的转换，支持设备发现、远程控制、状态获取与反馈机制。",
    project_1_detail_1: "基于 UDP 广播实现设备发现，并处理 ECHONET Lite 消息解析流程。",
    project_1_detail_2: "将 MQTT 控制主题映射为 ECHONET Lite 的 GET、SET 与 OBSERVE 指令。",
    project_1_detail_3: "设计智能家居设备状态获取与反馈流程，用于设备运行状态监测。",
    project_1_tags: "Java / MQTT / ECHONET Lite / UDP / TCP / IoT Middleware",
    experience_title: "教学指导经历",
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
    nav_publications: "論文誌",
    nav_projects: "研究開発経験",
    nav_contact: "連絡先",

    display_name: "劉祖赫(リュウ　ソカク)",
    hero_eyebrow: "千葉大学 情報科学専攻 修士課程",
    subtitle: "非接触人体センシングと生理状態モデリング",
    about_p1: "千葉大学情報科学専攻の修士課程に在籍し、非接触人体センシングと生理状態モデリングを中心に、無線センシング、環境センシング、機械学習を組み合わせた研究に取り組んでいます。",
    about_p2: "環境変化と人体の生理反応の関係を研究し、特に生理反応の個人差、時間遅延、状態推定結果の信頼性に注目しています。",

    news_title: "ニュース",
    news_1: "研究分野、学歴、プロジェクト、論文情報を個人学術ホームページに追加しました。",
    news_2: "2025 IEEE CASS Chiba Workshop でポスター発表を行いました。",
    news_3: "Wi-Fi CSI に基づく人体状態推定に関する修士研究を開始しました。",
    news_4: "MQTT と ECHONET Lite を用いた IoT ミドルウェアプロジェクトを完了しました。",
    news_5: "\u7b2c2\u8457\u8005\u3068\u3057\u3066\u53c2\u753b\u3057\u305f IEICE \u6280\u8853\u7814\u7a76\u5831\u544a\u300cA Study on Group Emotion Estimation Using Environmental Data\u300d\u304c\u63b2\u8f09\u3055\u308c\u307e\u3057\u305f\u3002",

    research_title: "研究分野",
    research_statement_title: "非接触人体センシングと生理状態モデリング",
    research_statement_text: "私の研究は、非接触人体センシングと生理状態モデリングを中心に、無線センシング、環境センシング、機械学習を組み合わせ、環境変化と人体の生理反応の関係を明らかにすることを目指しています。また、カメラやウェアラブル機器への依存を減らした人体状態のモニタリング手法を探究しています。特に、生理反応の個人差、時間遅延、状態推定結果の信頼性に注目しています。",
    research_intro: "現在、主に以下の三つのテーマに取り組んでいます。",
    research_1_title: "無線センシングと非接触生理モニタリング",
    research_1_text: "Wi-Fi のチャネル状態情報（CSI）を用いて、呼吸、活動、および関連する生理変化のセンシング手法を研究し、ウェアラブル機器による生理計測データとの比較を通じて、その有効性を評価します。",
    research_2_title: "環境変化と生理反応のモデリング",
    research_2_text: "温湿度などの環境データと生理信号を組み合わせ、同一環境下における自律神経反応の共通性、個人差、時間遅延を分析し、環境と人体状態の関連を探究します。",
    research_3_title: "多源情報の融合と信頼性評価",
    research_3_text: "環境情報と人体センシング情報を組み合わせ、生理状態や感情状態の推定手法を探究し、確率モデリングと不確実性評価を通じて推定結果の信頼性向上を目指します。",
    research_outlook: "将来は、これらの手法を日常の健康モニタリング、高齢者の見守り、コンパニオンロボットに応用し、プライバシー、利用者の負担、実環境への適応性を両立するセンシングシステムの構築を目指しています。",
    keyword_environment: "環境センシング",
    keyword_physiology: "生理状態モデリング",
    keyword_individual: "個人差",
    keyword_delay: "時間遅延",
    keyword_reliability: "信頼性評価",
    keyword_ml: "機械学習",

    education_title: "学歴",
    education_1_title: "千葉大学（日本）",
    education_1_text: "情報科学専攻 修士",
    education_2_title: "北陸大学（日本）",
    education_2_text: "マネジメント学 学士",
    education_3_title: "大連外国語大学（中国）",
    education_3_text: "ネットワークエンジニアリング 学士",

    presentations_title: "口頭発表等",
    international_conferences_title: "国際会議",
    conference_1_meta: "Z. Liu, J. Qian, and N. Komuro, \"Probabilistic Group Emotion Estimation from Environmental Sensor Data Using Entropy-Based Reliability Evaluation,\" Proc. 15th International Conference on Communications, Circuits and Systems (ICCCAS), pp. 95-99, Jul. 2026 (Takasaki, Japan).",
    publications_title: "論文誌",
    paper_1_title: "Application and Security Analysis of Virtual Private Network (VPN) in Network Communication",
    paper_1_meta: "Z. Liu, \"Application and Security Analysis of Virtual Private Network (VPN) in Network Communication,\" Academic Journal of Computing & Information Science, Vol. 6, Issue 11, pp. 52-59, 2023.",
    presentation_1_title: "\u74b0\u5883\u30c7\u30fc\u30bf\u3092\u7528\u3044\u305f\u96c6\u56e3\u611f\u60c5\u63a8\u5b9a\u306b\u95a2\u3059\u308b\u7814\u7a76",
    presentation_1_meta: "\u92ad \u9759\u77f3, \u5289 \u7956\u8d6b, \u5c0f\u5ba4 \u4fe1\u559c, \u0022\u74b0\u5883\u30c7\u30fc\u30bf\u3092\u7528\u3044\u305f\u96c6\u56e3\u611f\u60c5\u63a8\u5b9a\u306b\u95a2\u3059\u308b\u7814\u7a76,\u0022 \u96fb\u5b50\u60c5\u5831\u901a\u4fe1\u5b66\u4f1a\u30b3\u30df\u30e5\u30cb\u30b1\u30fc\u30b7\u30e7\u30f3\u30b7\u30b9\u30c6\u30e0\u7814\u7a76\u4f1a, Vol. 126, No. 19, pp. 20-23, \u4ee4\u548c8\u5e745\u6708\uff08\u91e7\u8def\u5546\u5de5\u4f1a\u8b70\u6240\uff09\u3002",
    presentation_2_title: "Emotion Estimation from Indoor Environmental Sensors with Machine and Deep Learning Models",
    presentation_2_meta: "Z. Liu and N. Komuro, \"Emotion Estimation from Indoor Environmental Sensors with Machine and Deep Learning Models,\" 2025 IEEE CASS Chiba Workshop, Dec. 2025（Chiba University, Japan, 千葉大学）",

    projects_title: "研究開発経験",
    project_1_title: "MQTT-ECHONET Lite プロトコル変換ミドルウェア",
    project_1_meta: "北陸先端科学技術大学院大学（JAIST）、2024.08 - 2024.09",
    project_1_text: "スマートホーム機器のクロスプロトコル通信に向けて、Java ベースのミドルウェアを開発し、機器発見、遠隔制御、状態取得、フィードバック機構を実装しました。",
    project_1_detail_1: "UDP ブロードキャストを用いた機器発見と ECHONET Lite メッセージ処理を実装しました。",
    project_1_detail_2: "MQTT の制御トピックを ECHONET Lite の GET、SET、OBSERVE コマンドに対応付けました。",
    project_1_detail_3: "スマートホーム機器の状態監視に向けて、状態取得とフィードバックの流れを設計しました。",
    project_1_tags: "Java / MQTT / ECHONET Lite / UDP / TCP / IoT Middleware",
    experience_title: "指導経験",
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
