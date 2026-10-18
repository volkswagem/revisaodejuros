import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', display: 'swap' });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://auditia-legal.onrender.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Auditia Legal | Revisão Técnica de Juros Abusivos',
    template: '%s | Auditia Legal',
  },
  description: 'Análise jurídica e financeira de contratos de crédito para identificar juros abusivos, anatocismo e erros de cálculo com clareza técnica.',
  keywords: ['revisão de juros abusivos', 'anatocismo', 'revisão de financiamento', 'auditoria contratual de crédito', 'juros de financiamento'],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'Auditia Legal',
    locale: 'pt_BR',
    title: 'Revisão técnica de juros abusivos | Auditia Legal',
    description: 'Leia o seu contrato com a precisão que ele merece. Diagnóstico técnico preliminar, sem promessas de resultado.',
    images: [{ url: '/manus-storage/async-images/13SCgrLNmgK74wyYvtnZSb/image-1.webp', width: 1600, height: 900, alt: 'Mesa editorial com contrato de crédito e calculadora' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Auditia Legal | Revisão Técnica de Crédito',
    description: 'Análise jurídica e financeira para entender os números do seu contrato.',
    images: ['/manus-storage/async-images/13SCgrLNmgK74wyYvtnZSb/image-1.webp'],
  },
  robots: { index: true, follow: true },
};

const legalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Auditia Legal',
  description: 'Consultoria jurídica e financeira especializada em revisão técnica de contratos de crédito.',
  url: siteUrl,
  areaServed: 'BR',
  serviceType: ['Revisão de juros abusivos', 'Auditoria contratual de crédito', 'Análise de financiamento'],
  availableLanguage: 'pt-BR',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${playfair.variable} bg-paper font-sans text-ink`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }} />
        {children}
      </body>
    </html>
  );
}
