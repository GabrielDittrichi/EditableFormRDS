import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 're_dummy_key'); // Set this in .env.local

export async function POST(req: Request) {
  try {
    const { email, subject, body, answers } = await req.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // You must verify your domain in Resend to send from it, 
    // or use a testing email if not verified.
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';

    // Formatar as respostas para incluir no e-mail
    const answersText = Object.entries(answers)
      .map(([key, val]) => `${key}: ${val}`)
      .join('\n');

    const fullBody = `${body}\n\nResumo das suas respostas:\n${answersText}`;

    const data = await resend.emails.send({
      from: `Formulário <${fromEmail}>`,
      to: [email],
      subject: subject || 'Confirmação de Resposta',
      text: fullBody,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ error: 'Error sending email' }, { status: 500 });
  }
}
