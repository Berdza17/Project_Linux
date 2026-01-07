/**
 * ============================================
 * SITE CONFIGURATION FILE
 * ============================================
 * 
 * This is the ONLY file you need to edit to customize your furniture website.
 * All company information, contact details, and branding settings are here.
 * 
 * DO NOT hardcode company information anywhere else in the codebase.
 * Components will automatically pull data from this config file.
 * 
 * After making changes:
 * 1. Save this file
 * 2. Restart the dev server (npm run dev)
 * 3. Your changes will appear site-wide
 */

export const siteConfig = {
  /**
   * NAZIV FIRME
   * Pojavljuje se u zaglavlju, podnožju, naslovima stranica i meta tagovima.
   */
  companyName: "Vaša Firma za Namještaj",

  /**
   * BROJ TELEFONA
   * Glavni kontakt telefon (prikazan s formatiranjem).
   */
  phone: "+387 XX XXX XXXX",

  /**
   * WHATSAPP BROJ
   * WhatsApp kontakt broj za direktne poruke.
   * 
   * VAŽAN FORMAT:
   * - Mora uključivati pozivni broj države BEZ + simbola
   * - Uklonite sve razmake, crtice i zagrade
   * - Primjer: "38761123456" (ne "+387 61 123 456")
   */
  whatsappNumber: "38761123456",

  /**
   * EMAIL ADRESA
   * Primarna kontakt email adresa za upite.
   */
  email: "kontakt@vasafirma.com",

  /**
   * FIZIČKA ADRESA
   * Vaša poslovna adresa (pojavljuje se u podnožju i kontakt sekciji).
   */
  address: "Sarajevo, Bosna i Hercegovina",

  /**
   * SOCIAL MEDIA LINKS
   * Add your social media profile URLs.
   * Leave empty ("") if you don't have that social media account.
   * These will appear as clickable icons in the footer.
   */
  socialLinks: {
    /**
     * Instagram profile URL
     * Example: "https://instagram.com/yourcompany"
     */
    instagram: "",

    /**
     * Facebook page or profile URL
     * Example: "https://facebook.com/yourcompany"
     */
    facebook: "",

    /**
     * LinkedIn company page URL
     * Example: "https://linkedin.com/company/yourcompany"
     */
    linkedin: "",

    /**
     * TikTok profile URL (optional)
     * Example: "https://tiktok.com/@yourcompany"
     */
    tiktok: "",
  },

  /**
   * COMPANY LOGO
   * Your company logo image settings.
   */
  logo: {
    /**
     * Path to your logo file (place file in /public folder).
     * Example: "/logo.png" or "/images/logo.svg"
     * 
     * Recommended:
     * - Format: PNG or SVG (SVG preferred for scalability)
     * - Size: Max 200px width, transparent background
     * - File size: Under 50KB
     */
    path: "/images/logo.jpg",

    /**
     * Alt text for logo (for accessibility and SEO).
     * Describe what the logo shows.
     * Example: "Premium Wooden Furniture Company Logo"
     */
    alt: "Logo Vaše Firme za Namještaj",
  },

  /**
   * HERO SEKCIJA (Baner na početnoj stranici)
   */
  hero: {
    image: "/images/hero",
    title: "Premium Drveni Namještaj",
    tagline: "Kuhinje, Stolovi, TV Komode, Ormari",
    ctaText: "Pogledaj Naše Radove",
    ctaLink: "#gallery",
  },

  /**
   * POSLOVNE INFORMACIJE
   */
  business: {
    registrationNumber: "",
    establishedYear: 2024,
    workingHours: "Pon-Pet: 8:00-17:00",
    description:
      "Izrađujemo visokokvalitetni, prilagođeni drveni namještaj za domove i poslovne prostore. S godinama iskustva i pažnjom na detalje, oživljavamo vašu viziju.",
  },

  /**
   * KATEGORIJE PROIZVODA
   */
  categories: [
    {
      name: "Kuhinje",
      description: "Prilagođeni kuhinjski elementi i instalacije",
      icon: "🏠",
    },
    {
      name: "Stolovi",
      description: "Trpezarijski stolovi, stolići za kafu i radni stolovi",
      icon: "🪑",
    },
    {
      name: "TV Komode",
      description: "Moderni entertainment centri i TV jedinice",
      icon: "📺",
    },
    {
      name: "Ormari",
      description: "Ugradbeni i samostojeći ormari",
      icon: "🚪",
    },
  ],

  /**
   * SEO POSTAVKE
   */
  seo: {
    titleSuffix: " | Vaša Firma za Namještaj",
    description:
      "Proizvodnja prilagođenog drvenog namještaja u Bosni i Hercegovini. Specijalizirani za kuhinje, stolove, TV komode i ormare. Kvalitetna izrada.",
    keywords:
      "namještaj, drveni namještaj, prilagođeni namještaj, kuhinjski elementi, trpezarijski stolovi, ormari, TV komode, Sarajevo, Bosna",
    ogImage: "/og-image.jpg",
  },
};

/**
 * ============================================
 * HELPER FUNCTIONS
 * ============================================
 * Utility functions to format config data.
 * You don't need to edit these.
 */

/**
 * Get formatted WhatsApp link
 * Converts the whatsappNumber into a clickable wa.me link
 */
export function getWhatsAppLink(message = "") {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsappNumber}${
    message ? "?text=" + encodedMessage : ""
  }`;
}

/**
 * Get formatted phone link (tel:)
 * Makes phone number clickable on mobile devices
 */
export function getPhoneLink() {
  return `tel:${siteConfig.phone.replace(/\s/g, "")}`;
}

/**
 * Get formatted email link (mailto:)
 * Creates an email link with optional subject
 */
export function getEmailLink(subject = "") {
  const encodedSubject = encodeURIComponent(subject);
  return `mailto:${siteConfig.email}${subject ? "?subject=" + encodedSubject : ""}`;
}

/**
 * Get years in business
 * Calculates how many years the company has been operating
 */
export function getYearsInBusiness() {
  const currentYear = new Date().getFullYear();
  return currentYear - siteConfig.business.establishedYear;
}

/**
 * Get full page title
 * Combines page name with site title
 */
export function getPageTitle(pageName = "") {
  if (!pageName) return siteConfig.companyName;
  return `${pageName}${siteConfig.seo.titleSuffix}`;
}

