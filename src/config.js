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
   * COMPANY NAME
   * This appears in the header, footer, page titles, and meta tags.
   * Keep it concise and professional.
   */
  companyName: "Your Furniture Company",

  /**
   * PHONE NUMBER
   * Main contact phone number (displayed with formatting).
   * Example: "+387 61 123 456" or "+387 33 123 456"
   * This number will be shown on the website and made clickable on mobile devices.
   */
  phone: "+387 XX XXX XXXX",

  /**
   * WHATSAPP NUMBER
   * WhatsApp contact number for instant messaging.
   * 
   * IMPORTANT FORMAT:
   * - Must include country code WITHOUT the + symbol
   * - Remove all spaces, dashes, and parentheses
   * - Example: "38761123456" (not "+387 61 123 456")
   * 
   * This creates a WhatsApp link like: https://wa.me/38761123456
   * When clicked, opens WhatsApp chat with this number.
   */
  whatsappNumber: "38761123456",

  /**
   * EMAIL ADDRESS
   * Primary contact email for inquiries.
   * This will be used in contact forms and mailto: links.
   */
  email: "contact@yourcompany.com",

  /**
   * PHYSICAL ADDRESS
   * Your business address (appears in footer and contact section).
   * Can be full address or just city/region.
   * Example: "Trg Fra Grge Martića 2, 71000 Sarajevo, BiH"
   */
  address: "Sarajevo, Bosnia and Herzegovina",

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
    alt: "Your Furniture Company Logo",
  },

  /**
   * HERO SECTION (Homepage banner)
   * The large banner section at the top of your homepage.
   */
  hero: {
    /**
     * Hero background image path (place file in /public folder).
     * NOTE: Provide path WITHOUT file extension (e.g., "/images/hero" not "/images/hero.jpg")
     * The LazyImage component will automatically use .webp and .jpg versions.
     * 
     * Recommended:
     * - Format: WebP (with JPG fallback)
     * - Dimensions: 1920x1080px (landscape)
     * - File size: Under 500KB
     * - Content: Your best furniture showcase photo
     */
    image: "/images/hero",

    /**
     * Main hero headline
     * The primary message visitors see first.
     * Keep it short, impactful, and benefit-focused.
     * Example: "Handcrafted Wooden Furniture for Your Home"
     */
    title: "Premium Wooden Furniture",

    /**
     * Hero subheading/tagline
     * Secondary message that complements the title.
     * Mention your product categories or unique selling point.
     * Example: "Custom Kitchens • Dining Tables • TV Stands • Wardrobes"
     */
    tagline: "Kitchens, Tables, TV Stands, Wardrobes",

    /**
     * Call-to-action button text (optional)
     * The text on the main action button in the hero.
     * Example: "View Our Gallery" or "Get Free Quote"
     */
    ctaText: "View Our Work",

    /**
     * Call-to-action button link (optional)
     * Where the CTA button should link to.
     * Example: "/gallery" or "#contact"
     */
    ctaLink: "#gallery",
  },

  /**
   * BUSINESS INFORMATION
   * Additional business details for footer and about section.
   */
  business: {
    /**
     * Business registration number (PIB, JIB, or similar)
     * Optional - leave empty if you don't want to display it.
     */
    registrationNumber: "",

    /**
     * Year business was established
     * Example: 2010
     * Used to show "Since 2010" or calculate years in business.
     */
    establishedYear: 2024,

    /**
     * Business hours
     * When customers can reach you or visit.
     * Example: "Mon-Fri: 8:00-16:00, Sat: 9:00-13:00"
     */
    workingHours: "Mon-Fri: 8:00-17:00",

    /**
     * Short company description (for About section)
     * 2-3 sentences about your company, values, or specialties.
     */
    description:
      "We create high-quality, custom wooden furniture for homes and businesses. With years of experience and attention to detail, we bring your vision to life.",
  },

  /**
   * PRODUCT CATEGORIES
   * Main furniture categories you offer.
   * These will be displayed in the services/products section.
   */
  categories: [
    {
      name: "Kitchens",
      description: "Custom kitchen cabinets and installations",
      icon: "🏠", // You can replace with SVG icon path later
    },
    {
      name: "Tables",
      description: "Dining tables, coffee tables, and desks",
      icon: "🪑",
    },
    {
      name: "TV Stands",
      description: "Modern entertainment centers and TV units",
      icon: "📺",
    },
    {
      name: "Wardrobes",
      description: "Built-in and standalone wardrobe solutions",
      icon: "🚪",
    },
  ],

  /**
   * SEO SETTINGS
   * Search engine optimization metadata.
   */
  seo: {
    /**
     * Default page title suffix
     * Appears after the page title in browser tabs.
     * Example: "Home | Your Furniture Company"
     */
    titleSuffix: " | Your Furniture Company",

    /**
     * Default meta description
     * Short description for search engines (150-160 characters).
     * Appears in Google search results.
     */
    description:
      "Custom wooden furniture manufacturer in Bosnia and Herzegovina. Specializing in kitchens, tables, TV stands, and wardrobes. Quality craftsmanship since 2024.",

    /**
     * Keywords for SEO (comma-separated)
     * Relevant terms people might search for.
     */
    keywords:
      "furniture, wooden furniture, custom furniture, kitchen cabinets, dining tables, wardrobes, TV stands, Sarajevo, Bosnia",

    /**
     * Open Graph image (for social media sharing)
     * When someone shares your site on Facebook/LinkedIn.
     * Should be 1200x630px, placed in /public folder.
     */
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

