// コンテンツデータ（docs/spec/detail.md Section 4 に準拠）
// このファイルに集約し、HTML への直書きは避ける

export const profile = {
  name: { en: 'Hiroki Nema', ja: '根間 大輝' },
  title: 'Full-Stack Engineer',
  location: 'Okinawa, JP',
  email: '',          // 後から設定
  github: '',         // 後から設定
  description:
    '沖縄を拠点に活動するフルスタックエンジニア。' +
    '業務系システム（VBA / Access / PHP / SQL Server）の設計・開発・保守を中心に、' +
    'AI ツール活用を組み合わせた開発効率化にも取り組んでいる。',
};

// About セクション: 数値カード × 3
export const stats = [
  { value: '8',   label: 'Years Experience' },
  { value: 'AI×', label: 'AI Native Dev'    },
  { value: 'Pro', label: 'Former Dancer'    },
];

// スキル（docs/spec/detail.md Section 4 の 6 項目）
export const skills = [
  { name: 'VBA / Access',         category: 'BACKEND',   years: 8, level: 95 },
  { name: 'T-SQL / SQL Server',   category: 'DATABASE',  years: 8, level: 90 },
  { name: 'PHP',                  category: 'BACKEND',   years: 7, level: 85 },
  { name: 'JavaScript',           category: 'FRONTEND',  years: 7, level: 80 },
  { name: 'HTML / CSS',           category: 'FRONTEND',  years: 7, level: 85 },
  { name: 'Claude Code / Copilot', category: 'AI × DEV', years: 1, level: 75 },
];

// 経歴（職務経歴書 原本より）
export const career = [
  {
    period: '2017.08 — Present',
    company: '沖縄情報システム株式会社',
    role: 'Software Engineer（派遣→正社員）',
    description:
      'LP ガス販売店向け基幹システム（SILPS）の開発・保守・次期バージョン開発を担当。' +
      '要件定義から運用保守まで一気通貫でフルスタック対応。' +
      'PHP / AngularJS / SQL Server による Web 系業務システムの開発・機能追加も兼務。' +
      '生成 AI（Claude Code / GitHub Copilot）の社内導入を主導し開発効率化を推進。' +
      'Microsoft Access 資格取得を目標にした社内研修の講師も担当（2 期）。',
    tags: ['VBA / Access', 'T-SQL', 'PHP', 'JavaScript', 'VBS', 'SQL Server', 'Claude Code', 'GitHub Copilot'],
  },
  {
    period: '2016',
    company: '沖縄県委託 職業訓練',
    role: 'Web プログラマー養成科 受講',
    description:
      'HTML / CSS / Java を体系的に学習。' +
      'サーティファイ主催 Web クリエイター能力認定試験（上級）・' +
      'Java プログラミング能力認定試験（2 級）を取得。' +
      '本訓練をきっかけにエンジニアへ転身。',
    tags: ['HTML / CSS', 'Java'],
  },
  {
    period: '2009 — 2016',
    company: 'フリーランス',
    role: 'プロダンサー / インストラクター',
    description:
      'フリーランスのダンサーとしてキャリアをスタート。' +
      'インストラクターとして生徒への指導・教育も経験。' +
      'この経験が後の研修講師・プレゼンテーション能力の基盤となっている。',
    tags: ['Dance', 'Instruction', 'Education'],
  },
];

// 資格
export const qualifications = [
  { name: 'LP ガス保安業務員',                          year: '2023.12' },
  { name: 'Java プログラミング能力認定試験 2 級（サーティファイ）', year: '2016.09' },
  { name: 'Web クリエイター能力認定試験 上級（サーティファイ）',   year: '2016.06' },
  { name: '普通自動車第一種運転免許',                       year: '2005.05' },
];

// 制作実績
export const works = [
  {
    num: '01',
    title: 'SILPS — LPG 販売管理システム',
    description:
      '沖縄情報システム㈱での主要プロジェクト。' +
      'Access VBA + SQL Server による LPG 販売・配送管理システムの新規開発。' +
      '帳票出力・発注書自動生成・在庫管理機能を含む大規模業務システム。',
    stack: ['Access VBA', 'SQL Server', 'PHP'],
    url: '',          // GitHub Pages URL（後から設定）
    tag: 'Business System',
  },
  {
    num: '02',
    title: 'OIS-Web — 業務 Web システム',
    description:
      'PHP / AngularJS / SQL Server による社内向け Web 業務システム。' +
      '複数部門の業務フローをシステム化し、運用効率を向上させた。',
    stack: ['PHP', 'AngularJS', 'SQL Server', 'HTML / CSS'],
    url: '',          // GitHub Pages URL（後から設定）
    tag: 'Web System',
  },
];

// リンク
export const links = [
  { label: 'GitHub', url: '',          icon: 'github' },  // 後から設定
  { label: 'Email',  url: 'mailto:',   icon: 'mail'   },  // 後から設定
];
