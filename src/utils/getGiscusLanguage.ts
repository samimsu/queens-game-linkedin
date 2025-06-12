export function getGiscusLanguage(language: string): string | undefined {
  const giscusLanguageMap: Record<string, string> = {
    zh: "zh-CN", // Map 'zh' to 'zh-CN' for Giscus
    // Add other mappings as needed
  };

  return giscusLanguageMap[language];
}
