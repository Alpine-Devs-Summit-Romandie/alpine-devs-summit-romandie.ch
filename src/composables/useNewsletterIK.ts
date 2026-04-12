export type InfomaniakIntegrationFormConfig = {
  formId: string
  formKey: string
  formCssClassId: string
}
const useNewsletterIK = () => {
  function loadExternalScripts() {
    // Load Altcha script
    const altchaScript = document.createElement('script');
    altchaScript.src = 'https://cdn.jsdelivr.net/gh/altcha-org/altcha/dist/altcha.min.js';
    altchaScript.type = 'module';
    altchaScript.defer = true;
    document.head.appendChild(altchaScript);

    // Load mcaptcha Altcha script
    const mcaptchaScript = document.createElement('script');
    mcaptchaScript.src = 'https://newsletter.storage5.infomaniak.com/mcaptcha/altcha.js';
    mcaptchaScript.defer = true;
    document.head.appendChild(mcaptchaScript);

    // Load Infomaniak webform script
    const epochInSeconds = Math.floor(Date.now() / 1000)
    const webformScript = document.createElement('script');
    webformScript.type = 'text/javascript';
    webformScript.src = `https://newsletter.infomaniak.com/v3/static/webform_index.js?v=${epochInSeconds}`;
    webformScript.defer = true;
    document.head.appendChild(webformScript);
  }

  return {
    loadExternalScripts,
  };
};

export default useNewsletterIK;
