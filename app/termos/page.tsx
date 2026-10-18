import { LegalPage } from '@/app/legal-pages';
import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Termos de Uso', description: 'Termos de uso e limites informativos do website Auditia Legal.' };
export default function TermsPage() { return <LegalPage type="terms" />; }
