import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'zh';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header
    home: 'Home',
    domainSales: 'Domain Sales',
    contact: 'Contact',
    
    // Home section
    developer: 'Full Stack Developer & Domain Investor',
    location: 'Available Worldwide',
    availableForProjects: 'Available for projects',
    aboutMe: 'About Me',
    aboutMeText: 'Passionate full-stack developer with expertise in modern web technologies. I love creating elegant solutions and have a keen interest in domain investment. Always learning and exploring new technologies to build better digital experiences.',
    skillsAndTech: 'Skills & Technologies',
    currentFocus: 'Current Focus',
    currentFocusText: 'Building modern web applications and investing in premium domain names.',
    interests: 'Interests',
    interestsText: 'Web3, AI/ML, Domain Investment, Open Source, and emerging technologies.',
    goals: 'Goals',
    goalsText: 'Contributing to innovative projects and building valuable digital assets.',
    
    // Domain Sales section
    premiumDomains: 'Premium Domains for Sale',
    premiumDomainsDesc: 'Invest in premium domain names for your next project',
    secureTransfer: 'Secure Transfer',
    fastProcessing: 'Fast Processing',
    globalReach: 'Global Reach',
    keyFeatures: 'Key Features:',
    payWithPayPal: 'Pay with PayPal',
    securePaymentProcess: 'Secure Payment Process',
    securePaymentText: 'All payments are processed securely through PayPal. Domain transfer will be initiated within 24 hours of confirmed payment.',
    protectedByPayPal: 'Protected by PayPal Buyer Protection',
    
    // Contact section
    getInTouch: 'Get In Touch',
    getInTouchDesc: 'Feel free to reach out for collaborations, domain inquiries, or just to say hello!',
    email: 'Email',
    sendEmail: 'Send Email',
    copyEmail: 'Copy Email',
    copied: 'Copied!',
    viewProfile: 'View Profile',
    copyUrl: 'Copy URL',
    copyWeChatId: 'Copy WeChat ID',
    addMeOnWeChat: 'Add me on WeChat to connect',
    letsWorkTogether: "Let's Work Together",
    letsWorkTogetherText: "I'm always interested in new opportunities, collaborations, and interesting projects. Don't hesitate to reach out!",
    respondsWithin24Hours: 'Usually responds within 24 hours',
    
    // Footer
    allRightsReserved: 'All rights reserved.',
    
    // Domain descriptions
    vislabDesc: 'Perfect domain for AI vision lab, computer vision, or visual AI technology companies. Premium .ai extension with high brandability and tech focus.',
    qhhDesc: 'Short and memorable 3-character .ai domain. Ideal for AI startups, tech companies, or personal branding in the artificial intelligence space.'
  },
  zh: {
    // Header
    home: '首页',
    domainSales: '域名销售',
    contact: '联系方式',
    
    // Home section
    developer: '全栈开发者 & 域名投资人',
    location: '全球可服务',
    availableForProjects: '接受项目合作',
    aboutMe: '关于我',
    aboutMeText: '热衷于现代Web技术的全栈开发者。喜欢创造优雅的解决方案，对域名投资有浓厚兴趣。持续学习和探索新技术，致力于构建更好的数字化体验。',
    skillsAndTech: '技能与技术',
    currentFocus: '当前专注',
    currentFocusText: '构建现代Web应用程序，投资优质域名。',
    interests: '兴趣领域',
    interestsText: 'Web3、AI/ML、域名投资、开源项目和新兴技术。',
    goals: '目标',
    goalsText: '为创新项目做贡献，构建有价值的数字资产。',
    
    // Domain Sales section
    premiumDomains: '优质域名出售',
    premiumDomainsDesc: '为您的下一个项目投资优质域名',
    secureTransfer: '安全转移',
    fastProcessing: '快速处理',
    globalReach: '全球覆盖',
    keyFeatures: '主要特色：',
    payWithPayPal: '通过PayPal支付',
    securePaymentProcess: '安全支付流程',
    securePaymentText: '所有付款均通过PayPal安全处理。确认付款后24小时内启动域名转移。',
    protectedByPayPal: '受PayPal买家保护计划保护',
    
    // Contact section
    getInTouch: '联系我',
    getInTouchDesc: '欢迎联系我进行合作、域名咨询或简单的问候！',
    email: '邮箱',
    sendEmail: '发送邮件',
    copyEmail: '复制邮箱',
    copied: '已复制！',
    viewProfile: '查看主页',
    copyUrl: '复制链接',
    copyWeChatId: '复制微信号',
    addMeOnWeChat: '添加微信联系',
    letsWorkTogether: '让我们合作',
    letsWorkTogetherText: '我总是对新机会、合作和有趣的项目感兴趣。请随时联系我！',
    respondsWithin24Hours: '通常24小时内回复',
    
    // Footer
    allRightsReserved: '版权所有。',
    
    // Domain descriptions
    vislabDesc: '适合AI视觉实验室、计算机视觉或视觉AI技术公司的完美域名。优质.ai后缀，品牌价值高，专注科技领域。',
    qhhDesc: '简短易记的3字符.ai域名。适合AI初创公司、科技企业或人工智能领域的个人品牌建设。'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};