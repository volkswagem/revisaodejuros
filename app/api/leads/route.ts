import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const required = ['contractType', 'contractValue', 'totalInstallments', 'paidInstallments', 'name', 'email', 'phone'];
    const missing = required.filter((key) => !payload?.[key]);

    if (missing.length > 0) {
      return NextResponse.json({ ok: false, error: 'Campos obrigatórios em falta.' }, { status: 400 });
    }

    const total = Number(payload.totalInstallments);
    const paid = Number(payload.paidInstallments);
    const value = Number(payload.contractValue);

    if (!Number.isFinite(value) || value <= 0 || !Number.isInteger(total) || total < 1 || !Number.isInteger(paid) || paid < 0 || paid > total) {
      return NextResponse.json({ ok: false, error: 'Dados de contrato inválidos.' }, { status: 400 });
    }

    // Demonstração: num ambiente real, substituir por webhook ou base de dados com controlos LGPD.
    console.info('[auditia-demo-lead]', JSON.stringify({
      ...payload,
      receivedAt: new Date().toISOString(),
    }));

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: 'Não foi possível registar a triagem.' }, { status: 400 });
  }
}
