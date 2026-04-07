import { ref, computed } from 'vue'

// Déclaration globale pour Google Analytics
declare global {
  function gtag(...args: any[]): void
}

export interface ConsentSettings {
  analytics: boolean
  marketing: boolean
  functional: boolean
  essential: boolean
}

export interface CookieConsent {
  version: number
  timestamp: number
  settings: ConsentSettings
}

const CONSENT_VERSION = 1
const CONSENT_COOKIE_NAME = 'cookie-consent'
const CONSENT_EXPIRY_DAYS = 365

export const useCookieConsent = () => {
  const showSettings = ref(false)
  const isLoading = ref(false)

  // État par défaut (cookies essentiels toujours activés)
  const consentSettings = ref<ConsentSettings>({
    analytics: false,
    marketing: false,
    functional: false,
    essential: true
  })

  // Vérifier si le consentement existe
  const hasConsent = computed(() => {
    return getCookie(CONSENT_COOKIE_NAME) !== null
  })

  // Récupérer les paramètres de consentement depuis les cookies
  const loadConsentFromCookie = (): boolean => {
    const cookieValue = getCookie(CONSENT_COOKIE_NAME)
    if (!cookieValue) return false

    try {
      const consent: CookieConsent = JSON.parse(cookieValue)

      // Vérifier la version
      if (consent.version !== CONSENT_VERSION) {
        return false // Version obsolète
      }

      consentSettings.value = consent.settings
      return true
    } catch (error) {
      console.warn('Erreur lors du chargement du consentement:', error)
      return false
    }
  }

  // Sauvegarder le consentement dans les cookies
  const saveConsentToCookie = (settings: ConsentSettings) => {
    const consent: CookieConsent = {
      version: CONSENT_VERSION,
      timestamp: Date.now(),
      settings: { ...settings, essential: true } // Cookies essentiels toujours true
    }

    setCookie(CONSENT_COOKIE_NAME, JSON.stringify(consent), CONSENT_EXPIRY_DAYS)
    consentSettings.value = settings
  }

  // Accepter tous les cookies
  const acceptAll = () => {
    const settings: ConsentSettings = {
      analytics: true,
      marketing: true,
      functional: true,
      essential: true
    }
    saveConsentToCookie(settings)
    showSettings.value = false
    applyConsent(settings)
  }

  // Accepter seulement les essentiels
  const acceptEssentialOnly = () => {
    const settings: ConsentSettings = {
      analytics: false,
      marketing: false,
      functional: false,
      essential: true
    }
    saveConsentToCookie(settings)
    showSettings.value = false
    applyConsent(settings)
  }

  // Sauvegarder les choix personnalisés
  const saveCustomSettings = (settings: ConsentSettings) => {
    saveConsentToCookie(settings)
    showSettings.value = false
    applyConsent(settings)
  }

  // Ouvrir les paramètres
  const openSettings = () => {
    showSettings.value = true
  }

  // Appliquer le consentement (activer/désactiver les services)
  const applyConsent = (settings: ConsentSettings) => {
    // Google Analytics
    if (settings.analytics && typeof gtag !== 'undefined') {
      gtag('consent', 'update', {
        analytics_storage: 'granted'
      })
    } else if (typeof gtag !== 'undefined') {
      gtag('consent', 'update', {
        analytics_storage: 'denied'
      })
    }

    // Marketing cookies (publicité)
    if (settings.marketing && typeof gtag !== 'undefined') {
      gtag('consent', 'update', {
        ad_storage: 'granted',
        ad_user_data: 'granted',
        ad_personalization: 'granted',
      })
    } else if (typeof gtag !== 'undefined') {
      gtag('consent', 'update', {
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
      })
    }

    // Functional cookies (préférences utilisateur)
    if (settings.functional && typeof gtag !== 'undefined') {
      gtag('consent', 'update', {
        functionality_storage: 'granted'
      })
    } else if (typeof gtag !== 'undefined') {
      gtag('consent', 'update', {
        functionality_storage: 'denied'
      })
    }
  }

  // Initialiser le consentement
  const initializeConsent = () => {
    if (loadConsentFromCookie()) {
      // Consentement existant chargé
      applyConsent(consentSettings.value)
    } else {
      // Par défaut, refuser tout sauf essentiel
      if (typeof gtag !== 'undefined') {
        gtag('consent', 'default', {
          analytics_storage: 'denied',
          ad_storage: 'denied',
          ad_user_data: 'denied',
          ad_personalization: 'denied',
          functionality_storage: 'denied'
        })
      }
    }
  }

  return {
    showSettings,
    isLoading,
    consentSettings,
    hasConsent,
    acceptAll,
    acceptEssentialOnly,
    saveCustomSettings,
    openSettings,
    initializeConsent
  }
}

// Utilitaires pour les cookies
function setCookie(name: string, value: string, days: number) {
  const expires = new Date()
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000)
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax${location.protocol === 'https:' ? ';Secure' : ''}`
}

function getCookie(name: string): string | null {
  const nameEQ = name + '='
  const ca = document.cookie.split(';')
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c && c.charAt(0) === ' ') c = c.substring(1, c.length)
    if (c && c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length)
  }
  return null
}
