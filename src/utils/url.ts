// src/utils/url.ts
export function getBasePath() {
    return process.env.NODE_ENV === 'production' ? '/agi-safety-interactive' : '';
  }