// src/hooks/useSchemaMarkup.ts
import { useEffect } from 'react';

interface SchemaMarkupProps {
  type: 'Organization' | 'WebPage' | 'Article' | 'LocalBusiness' | 'Service';
  data: Record<string, any>;
}

export const useSchemaMarkup = ({ type, data }: SchemaMarkupProps) => {
  useEffect(() => {
    // Create or update JSON-LD schema script
    let script = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement | null;
    
    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    const schema = {
      '@context': 'https://schema.org',
      '@type': type,
      ...data,
    };

    script.textContent = JSON.stringify(schema);

    return () => {
      // Keep schema in DOM
    };
  }, [type, data]);
};
