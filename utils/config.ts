export const ENVIRONMENTS = {
    local: 'http://localhost:4000/fashionhub/',
    staging: 'https://staging-env/fashionhub/',
    production: 'https://pocketaces2.github.io/fashionhub/'
  };
  
  export function getBaseUrl(env = process.env.CURRENT_ENV): string {
    return ENVIRONMENTS[env || 'local'];
  }
  