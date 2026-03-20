// src/hooks/useSEO.ts
import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  ogUrl?: string;
  canonicalUrl?: string;
}

export const useSEO = ({
  title,
  description,
  keywords = '',
  ogImage = '/logo.jpg',
  ogType = 'website',
  ogUrl = 'https://sayvai.com',
  canonicalUrl,
}: SEOProps) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMeta = (name: string, content: string, isProperty: boolean = false) => {
      let element = document.querySelector(
        isProperty 
          ? `meta[property="${name}"]` 
          : `meta[name="${name}"]`
      );
      
      if (!element) {
        element = document.createElement('meta');
        if (isProperty) {
          element.setAttribute('property', name);
        } else {
          element.setAttribute('name', name);
        }
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Update standard meta tags
    updateMeta('description', description);
    if (keywords) updateMeta('keywords', keywords);

    // Update Open Graph tags
    updateMeta('og:title', title, true);
    updateMeta('og:description', description, true);
    updateMeta('og:image', ogImage, true);
    updateMeta('og:type', ogType, true);
    updateMeta('og:url', ogUrl, true);

    // Update Twitter tags
    updateMeta('twitter:title', title);
    updateMeta('twitter:description', description);
    updateMeta('twitter:image', ogImage);

    // Update canonical URL
    if (canonicalUrl) {
      let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.rel = 'canonical';
        document.head.appendChild(canonical);
      }
      canonical.href = canonicalUrl;
    }

    // Cleanup
    return () => {
      // Meta tags stay in DOM for next page
    };
  }, [title, description, keywords, ogImage, ogType, ogUrl, canonicalUrl]);
};
