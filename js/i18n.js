/**
 * i18n messages for MobaXterm Keygen (v3.0).
 * Supported locales: en (English), zh (简体中文), ja (日本語).
 */
const messages = {
  en: {
    localeName: 'English',
    badge: 'v20.X, 26.2 & 26.3 Compatible',
    tagline: 'Fast, and secure license generator.',
    toggleTheme: 'Toggle Theme',
    language: 'Language',
    tabKeyGenerator: 'Key Generator',
    tabCustomMerger: 'Merger',
    editionLabel: 'Edition Type',
    editionPlaceholder: 'Select Edition',
    editions: {
      Professional: 'Professional',
      Educational: 'Educational',
      Personal: 'Personal'
    },
    usernameLabel: 'Username',
    usernamePlaceholder: 'e.g. JohnDoe',
    versionLabel: 'Version',
    versionPlaceholder: '26.3',
    userNumLabel: 'Number of Users',
    userNumPlaceholder: '1',
    generateLicense: 'Generate License',
    mergerHowToTitle: 'How it works',
    mergerStep1Prefix: 'Generate a license using the',
    mergerStep1Strong: 'Key Generator',
    mergerStep1Suffix: '.',
    mergerStep2Prefix: 'Run',
    mergerStep3Prefix: 'Export settings to',
    mergerStep4: 'Upload both files below to merge.',
    licenseFileLabel: 'License (.mxtpro)',
    customSettingsFileLabel: 'Custom Settings (.custom)',
    dropzonePrompt: 'Click to upload',
    dropzoneRelease: 'Release to upload',
    dropzoneHint: 'MAX size 10MB',
    removeFile: 'Remove file',
    mergeFiles: 'Merge Files',
    merging: 'Merging...',
    footerCreatedWith: 'Handcrafted with',
    footerBy: 'by',
    footerTranslatedBy: 'Translation by',
    footerRights: 'v3.0 © 2026 All rights reserved',
    errors: {
      licenseTypeRequired: 'Please select an edition',
      userNameRequired: 'Username is required',
      userNameLettersOnly: 'Only letters allowed (no spaces, numbers or special chars)',
      versionRequired: 'Version is required',
      versionInvalidFormat: 'Enter a valid version format (e.g., 26.3)',
      versionUnsupported: 'Currently only versions 20.X, 25.X and 26.X are supported',
      userNumRequired: 'Number of users is required',
      userNumInvalid: 'Enter a valid number greater than 0',
      invalidMxtpro: 'Please select a valid .mxtpro file',
      invalidCustom: 'Please select a valid .custom file'
    },
    toasts: {
      generateSuccess: 'License generated successfully!',
      generateError: 'Error generating license. Please try again.',
      createFileError: 'Error creating license file. Please try again.',
      mergeSuccess: 'Files merged successfully!',
      mergeError: 'Error merging files. Please try again.',
      uploadBoth: 'Please upload both required files'
    }
  },
  zh: {
    localeName: '简体中文',
    badge: '兼容 v20.X、26.2 和 26.3',
    tagline: '快速、安全的许可证生成器。',
    toggleTheme: '切换主题',
    language: '语言',
    tabKeyGenerator: '密钥生成器',
    tabCustomMerger: '合并工具',
    editionLabel: '版本类型',
    editionPlaceholder: '选择版本',
    editions: {
      Professional: '专业版',
      Educational: '教育版',
      Personal: '个人版'
    },
    usernameLabel: '用户名',
    usernamePlaceholder: '例如 JohnDoe',
    versionLabel: '版本号',
    versionPlaceholder: '26.3',
    userNumLabel: '用户数量',
    userNumPlaceholder: '1',
    generateLicense: '生成许可证',
    mergerHowToTitle: '使用方法',
    mergerStep1Prefix: '使用',
    mergerStep1Strong: '密钥生成器',
    mergerStep1Suffix: '生成许可证。',
    mergerStep2Prefix: '运行',
    mergerStep3Prefix: '将设置导出到',
    mergerStep4: '在下方上传两个文件进行合并。',
    licenseFileLabel: '许可证文件 (.mxtpro)',
    customSettingsFileLabel: '自定义设置文件 (.custom)',
    dropzonePrompt: '点击上传',
    dropzoneRelease: '松开即可上传',
    dropzoneHint: '最大 10MB',
    removeFile: '移除文件',
    mergeFiles: '合并文件',
    merging: '正在合并…',
    footerCreatedWith: '精心打造，用',
    footerBy: '作者',
    footerTranslatedBy: '翻译支持',
    footerRights: 'v3.0 © 2026 版权所有',
    errors: {
      licenseTypeRequired: '请选择一个版本类型',
      userNameRequired: '用户名为必填项',
      userNameLettersOnly: '只允许使用字母（不能有空格、数字或特殊字符）',
      versionRequired: '版本号为必填项',
      versionInvalidFormat: '请输入有效的版本格式（例如 26.3）',
      versionUnsupported: '目前仅支持版本 20.X、25.X 和 26.X',
      userNumRequired: '用户数量为必填项',
      userNumInvalid: '请输入大于 0 的有效数字',
      invalidMxtpro: '请选择有效的 .mxtpro 文件',
      invalidCustom: '请选择有效的 .custom 文件'
    },
    toasts: {
      generateSuccess: '许可证生成成功！',
      generateError: '生成许可证时出错，请重试。',
      createFileError: '创建许可证文件时出错，请重试。',
      mergeSuccess: '文件合并成功！',
      mergeError: '合并文件时出错，请重试。',
      uploadBoth: '请同时上传两个必需的文件'
    }
  },
  ja: {
    localeName: '日本語',
    badge: 'v20.X、26.2、26.3 に対応',
    tagline: '高速・安全なライセンスジェネレーター。',
    toggleTheme: 'テーマを切り替え',
    language: '言語',
    tabKeyGenerator: 'キージェネレーター',
    tabCustomMerger: 'マージ',
    editionLabel: 'エディション',
    editionPlaceholder: 'エディションを選択',
    editions: {
      Professional: 'プロフェッショナル版',
      Educational: '教育版',
      Personal: '個人版'
    },
    usernameLabel: 'ユーザー名',
    usernamePlaceholder: '例：JohnDoe',
    versionLabel: 'バージョン',
    versionPlaceholder: '26.3',
    userNumLabel: 'ユーザー数',
    userNumPlaceholder: '1',
    generateLicense: 'ライセンスを生成',
    mergerHowToTitle: '使い方',
    mergerStep1Prefix: '',
    mergerStep1Strong: 'キージェネレーター',
    mergerStep1Suffix: 'でライセンスを生成します。',
    mergerStep2Prefix: '次を実行します：',
    mergerStep3Prefix: '設定を次にエクスポートします：',
    mergerStep4: '下に両方のファイルをアップロードしてマージします。',
    licenseFileLabel: 'ライセンス (.mxtpro)',
    customSettingsFileLabel: 'カスタム設定 (.custom)',
    dropzonePrompt: 'クリックしてアップロード',
    dropzoneRelease: '離してアップロード',
    dropzoneHint: '最大 10MB',
    removeFile: 'ファイルを削除',
    mergeFiles: 'ファイルをマージ',
    merging: 'マージ中…',
    footerCreatedWith: '心を込めて',
    footerBy: '制作：',
    footerTranslatedBy: '翻訳：',
    footerRights: 'v3.0 © 2026 All rights reserved',
    errors: {
      licenseTypeRequired: 'エディションを選択してください',
      userNameRequired: 'ユーザー名は必須です',
      userNameLettersOnly: '使用できるのは英字のみです（スペース・数字・特殊文字は使えません）',
      versionRequired: 'バージョンは必須です',
      versionInvalidFormat: '有効なバージョン形式を入力してください（例：26.3）',
      versionUnsupported: '現在対応しているのはバージョン 20.X、25.X、26.X のみです',
      userNumRequired: 'ユーザー数は必須です',
      userNumInvalid: '0 より大きい有効な数値を入力してください',
      invalidMxtpro: '有効な .mxtpro ファイルを選択してください',
      invalidCustom: '有効な .custom ファイルを選択してください'
    },
    toasts: {
      generateSuccess: 'ライセンスを生成しました！',
      generateError: 'ライセンスの生成中にエラーが発生しました。もう一度お試しください。',
      createFileError: 'ライセンスファイルの作成中にエラーが発生しました。もう一度お試しください。',
      mergeSuccess: 'ファイルをマージしました！',
      mergeError: 'ファイルのマージ中にエラーが発生しました。もう一度お試しください。',
      uploadBoth: '必要な 2 つのファイルを両方アップロードしてください'
    }
  }
};

const SUPPORTED_LOCALES = ['en', 'zh', 'ja'];

/**
 * Detect the locale to use: a previously saved choice wins, otherwise fall
 * back to the browser/system language, defaulting to English.
 * @returns {'en'|'zh'|'ja'}
 */
function detectLocale() {
  const saved = (typeof localStorage !== 'undefined') ? localStorage.lang : null;
  if (saved && SUPPORTED_LOCALES.includes(saved)) {
    return saved;
  }

  const candidates = (typeof navigator !== 'undefined')
    ? (navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language])
    : [];

  for (const raw of candidates) {
    if (!raw) continue;
    const lang = raw.toLowerCase();
    if (lang.startsWith('zh')) return 'zh';
    if (lang.startsWith('ja')) return 'ja';
    if (lang.startsWith('en')) return 'en';
  }
  return 'en';
}

export { messages, detectLocale, SUPPORTED_LOCALES };
