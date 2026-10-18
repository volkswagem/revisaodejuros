import { LegalPage } from '@/app/legal-pages';
import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Política de Privacidade', description: 'Informações sobre o tratamento de dados pessoais pela Auditia Legal.' };
export default function PrivacyPage() { return <LegalPage type="privacy" />; }
