
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const data = await request.json();
    const { email, consent } = data || {};
    if (!email) return NextResponse.json({ ok: false, error: 'Email requerido.' }, { status: 400 });
    if (!consent) return NextResponse.json({ ok: false, error: 'Debes autorizar el tratamiento de datos.' }, { status: 400 });

    // Aquí podrías integrar un servicio de mailing (MailerLite / Sendinblue) o enviar a tu correo.
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: false, error: 'Error en el servidor.' }, { status: 500 });
  }
}
