import { LegalPage } from '@/app/legal-pages';
import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Política de Cookies', description: 'Informações sobre cookies e tecnologias essenciais no website Auditia Legal.' };
export default function CookiesPage() { return <LegalPage type="cookies" />; }
