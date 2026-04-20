// コンテンツデータ（docs/spec/detail.md Section 4 に準拠）
// このファイルに集約し、HTML への直書きは避ける

export const profile = {
  name: { en: 'Hiroki Nema', ja: '根間 大輝' },
  title: 'Full-Stack Engineer',
  location: 'Okinawa, JP',
  email: 'drunkhouse.k29h@gmail.com',
  github: 'https://github.com/h-nema-oknw',
  description:
    '沖縄を拠点に活動するフルスタックエンジニア。' +
    '業務系システム（VBA / Access / PHP / SQL Server）の設計・開発・保守を中心に、' +
    'AI駆動開発を組み合わせた開発を行っている。',
};

// About セクション: 数値カード × 3
export const stats = [
  { value: '8', label: 'Years Experience' },
  { value: 'AI×', label: 'AI Native Dev' },
  { value: 'Pro', label: 'Former Dancer' },
];

// スキル（docs/spec/detail.md Section 4 の 6 項目）
export const skills = [
  { name: 'VBA / Access', category: 'BACKEND', years: 8, level: 95 },
  { name: 'T-SQL / SQL Server', category: 'DATABASE', years: 8, level: 90 },
  { name: 'PHP', category: 'BACKEND', years: 7, level: 85 },
  { name: 'JavaScript', category: 'FRONTEND', years: 7, level: 80 },
  { name: 'HTML / CSS', category: 'FRONTEND', years: 7, level: 85 },
  { name: 'Claude Code / Copilot', category: 'AI × DEV', years: 1, level: 75 },
];

// 経歴（職務経歴書 原本より）
export const career = [
  {
    period: '2017.08 — Present',
    company: '沖縄のプロダクト企業',
    role: 'Software Engineer（派遣→正社員）',
    description:
      'LPガス販売店向け基幹システムの開発・保守・次期バージョン開発を担当。' +
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
  {
    period: '2009.04 — 2013.03',
    company: '沖縄大学',
    role: '人文学部 国際コミュニケーション学科',
    description:
      '国際コミュニケーションを専攻。在学中よりストリートダンス活動を並行し、卒業後はダンサーとしてのキャリアをスタート。',
    tags: ['Communication', 'International Studies'],
  },
];

// 資格
export const qualifications = [
  { name: 'LP ガス保安業務員', year: '2023.12' },
  { name: 'Java プログラミング能力認定試験 2 級（サーティファイ）', year: '2016.09' },
  { name: 'Web クリエイター能力認定試験 上級（サーティファイ）', year: '2016.06' },
  { name: '普通自動車第一種運転免許', year: '2005.05' },
];

// 制作実績
export const works = [
  // 業務で開発
  {
    num: '01',
    category: '業務',
    title: 'LPガス販売管理システム',
    description: 'LPガス販売店の業務（顧客/売上請求/検針/配送/保安/ハンディ端末/他）全般を管理するシステム。',
    stack: ['Access VBA', 'SQL Server', 'PHP', 'HTML', 'CSS', 'Anymore'],
    devices: ['PC', 'TABLET', 'MOBILE'],
    url: '',
    tag: 'Business System',
  },
  // 個人開発
  {
    num: '01',
    category: '個人開発',
    title: 'Map!t（マップイット）',
    description: '付箋とホワイトボードを活用してマインドマップやワークフローを視覚的に整理する会議補助ツール。',
    stack: ['TypeScript', 'CSS', 'Gemini API'],
    devices: ['PC'],
    urls: [
      { label: 'Google AI Studio', url: 'https://ai.studio/apps/64df31cc-8e9c-49ed-bd66-f5bd1cae16f4?fullscreenApplet=true' },
      { label: 'GitHub Pages', url: 'https://h-nema-oknw.github.io/Mapit' },
    ],
    tag: 'Personal Tool',
  },
  {
    num: '02',
    category: '個人開発',
    title: 'HTMLマニュアルエディタ',
    description: 'HTMLで作成されたページ（マニュアル）をノーコードで編集するツール。',
    stack: ['TypeScript', 'HTML', 'CSS'],
    devices: ['PC'],
    urls: [
      { label: 'GitHub Pages', url: 'https://h-nema-oknw.github.io/HTMLManualEditor/' },
    ],
    tag: 'Personal Tool',
  },
];

// リンク
export const links = [
  { label: 'GitHub', url: 'https://github.com/h-nema-oknw', icon: 'github' },
  { label: 'Wantedly', url: 'https://www.wantedly.com/id/hiroki_nema', icon: 'wantedly' },
  { label: 'Email', url: 'mailto:drunkhouse.k29h@gmail.com', icon: 'mail' },
];
