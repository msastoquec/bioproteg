
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const data = await request.json();
    const { name, company, email, phone, subject, message, consent } = data || {};

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ ok: false, error: 'Faltan campos obligatorios.' }, { status: 400 });
    }
    if (!consent) {
      return NextResponse.json({ ok: false, error: 'Debes autorizar el tratamiento de datos.' }, { status: 400 });
    }

    const host = process.env.SMTP_HOST;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const to   = process.env.TO_EMAIL || user;

    if (!host || !user || !pass) {
      return NextResponse.json({ ok: false, error: 'SMTP no configurado.' }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host,
      port: Number(process.env.SMTP_PORT || 465),
      secure: true,
      auth: { user, pass },
    });

    const html = `
      <h2>Nuevo contacto desde Bioproteg.com</h2>
      <p><b>Nombre:</b> ${name}</p>
      <p><b>Empresa/Entidad:</b> ${company || '(no informado)'}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Teléfono:</b> ${phone || '(no informado)'}</p>
      <p><b>Asunto:</b> ${subject}</p>
      <p><b>Mensaje:</b><br/>${(message || '').replace(/\n/g,'<br/>')}</p>
      <hr/>
      <p>Consentimiento: ${consent ? 'Sí' : 'No'}</p>
    `;

    await transporter.sendMail({
      from: `"Bioproteg Web" <${user}>`,
      to,
      subject: `Contacto Web: ${subject}`,
      replyTo: email,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false, error: 'Error en el servidor.' }, { status: 500 });
  }
}
