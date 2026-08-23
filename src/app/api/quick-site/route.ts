import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'nodejs';

const resend = new Resend(process.env.RESEND_API_KEY);

const TO_EMAIL = process.env.QUICK_SITE_TO_EMAIL || 'you@gmail.com';
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'Quick Site <onboarding@resend.dev>';

export async function POST(req: NextRequest) {
  try {
    const form = await req.formData();

    const get = (key: string) => String(form.get(key) || '').trim();

    const fields = {
      business: get('business'),
      person: get('person'),
      email: get('email'),
      phone: get('phone'),
      town: get('town'),
      has_domain: get('has_domain'),
      current_domain: get('current_domain'),
      preferred_domain: get('preferred_domain'),
      who: get('who'),
      now: get('now'),
      why: get('why'),
      site_phone: get('site_phone'),
      site_email: get('site_email'),
      address: get('address'),
      hours: get('hours'),
      cta: get('cta'),
      instagram: get('instagram'),
      facebook: get('facebook'),
      youtube: get('youtube'),
      x: get('x'),
      photo_links: get('photo_links'),
    };

    const attachments: { filename: string; content: Buffer }[] = [];
    const fileNotes: string[] = [];

    for (const [key, value] of form.entries()) {
      if (typeof value === 'string') continue;
      const file = value as File;
      if (!file || file.size === 0) continue;

      if (file.size > 7 * 1024 * 1024) {
        fileNotes.push(`${key}: ${file.name} skipped (over 7MB)`);
        continue;
      }

      const buffer = Buffer.from(await file.arrayBuffer());
      attachments.push({ filename: file.name, content: buffer });
      fileNotes.push(`${key}: ${file.name}`);
    }

    const html = `
      <h2>Quick Site Special submission</h2>
      <p><strong>Business:</strong> ${escapeHtml(fields.business)}</p>
      <p><strong>Name:</strong> ${escapeHtml(fields.person)}</p>
      <p><strong>Email:</strong> ${escapeHtml(fields.email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(fields.phone)}</p>
      <p><strong>Town:</strong> ${escapeHtml(fields.town)}</p>

      <h3>Domain</h3>
      <p><strong>Has domain:</strong> ${escapeHtml(fields.has_domain)}</p>
      <p><strong>Current:</strong> ${escapeHtml(fields.current_domain)}</p>
      <p><strong>Preferred:</strong> ${escapeHtml(fields.preferred_domain)}</p>

      <h3>Who are you?</h3>
      <p>${nl2br(escapeHtml(fields.who))}</p>

      <h3>What’s happening now?</h3>
      <p>${nl2br(escapeHtml(fields.now))}</p>

      <h3>Why you?</h3>
      <p>${nl2br(escapeHtml(fields.why))}</p>

      <h3>Site details</h3>
      <p><strong>Site phone:</strong> ${escapeHtml(fields.site_phone)}</p>
      <p><strong>Site email:</strong> ${escapeHtml(fields.site_email)}</p>
      <p><strong>Address / area:</strong> ${escapeHtml(fields.address)}</p>
      <p><strong>Hours:</strong> ${escapeHtml(fields.hours)}</p>
      <p><strong>CTA:</strong> ${escapeHtml(fields.cta)}</p>

      <h3>Social</h3>
      <p>Instagram: ${escapeHtml(fields.instagram)}<br>
         Facebook: ${escapeHtml(fields.facebook)}<br>
         YouTube: ${escapeHtml(fields.youtube)}<br>
         X: ${escapeHtml(fields.x)}</p>

      <h3>Photo links</h3>
      <p>${nl2br(escapeHtml(fields.photo_links))}</p>

      <h3>Files</h3>
      <p>${fileNotes.length ? fileNotes.map(escapeHtml).join('<br>') : 'None'}</p>
    `;

    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      replyTo: fields.email || undefined,
      subject: `Quick Site: ${fields.business || 'New submission'}`,
      html,
      attachments,
    });

    if (error) {
      console.error('Resend error', error);
      return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function nl2br(value: string) {
  return value.replaceAll('\n', '<br>');
}
