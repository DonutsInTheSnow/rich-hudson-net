'use client';

import { FormEvent, useState } from 'react';

const towns = [
  'Wolfeboro',
  'Alton',
  'Meredith',
  'Center Harbor',
  'Moultonborough',
  'Tuftonboro',
  'Ossipee',
  'Wakefield',
  'Gilford',
  'Laconia',
  'Other Lakes Region',
];

const ctaOptions = [
  'Call now',
  'Book / schedule',
  'Request a quote',
  'Join',
  'Donate',
  'Visit us',
  'Other',
];

export default function QuickSiteForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [hasDomain, setHasDomain] = useState('not-sure');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    setMessage('');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch('/api/quick-site', {
        method: 'POST',
        body: data,
      });

      if (!res.ok) throw new Error('Request failed');

      setStatus('ok');
      form.reset();
      setHasDomain('not-sure');
    } catch {
      setStatus('error');
      setMessage('Something went wrong. Email me directly and I’ll follow up.');
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="bg-white rounded-xl shadow-lg p-8 md:p-10 space-y-10"
    >
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Quick Site form</h2>
        <p className="text-gray-600">
          Required fields are marked. File uploads can wait if you need to send
          a Drive or Dropbox link in the message instead.
        </p>
      </div>

      <fieldset className="space-y-5">
        <legend className="text-2xl font-semibold text-gray-900 mb-2">
          Contact
        </legend>

        <div className="grid md:grid-cols-2 gap-5">
          <Field label="Business name" name="business" required />
          <Field label="Your name" name="person" required />
          <Field label="Email" name="email" type="email" required />
          <Field label="Phone" name="phone" type="tel" required />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-800 mb-1">
            Town / area <span className="text-gray-500">(required)</span>
          </label>
          <select
            name="town"
            required
            className="w-full rounded-lg border border-gray-300 px-3 py-2.5 bg-white text-gray-900"
          >
            <option value="">Select…</option>
            {towns.map((town) => (
              <option key={town} value={town}>
                {town}
              </option>
            ))}
          </select>
        </div>
      </fieldset>

      <fieldset className="space-y-5">
        <legend className="text-2xl font-semibold text-gray-900 mb-2">
          Domain
        </legend>
        <p className="text-gray-600 text-sm">
          I’ll help you buy a new domain or point DNS on one you already own.
        </p>

        <div className="flex flex-wrap gap-4 text-gray-800">
          {[
            ['yes', 'I already have a domain'],
            ['no', 'I need a new one'],
            ['not-sure', 'Not sure'],
          ].map(([value, label]) => (
            <label key={value} className="flex items-center gap-2">
              <input
                type="radio"
                name="has_domain"
                value={value}
                checked={hasDomain === value}
                onChange={() => setHasDomain(value)}
              />
              {label}
            </label>
          ))}
        </div>

        {hasDomain === 'yes' && (
          <Field label="Current domain" name="current_domain" placeholder="yourbusiness.com" />
        )}
        {hasDomain !== 'yes' && (
          <Field
            label="Preferred new domain (optional)"
            name="preferred_domain"
            placeholder="yourbusiness.com"
          />
        )}
      </fieldset>

      <fieldset className="space-y-5">
        <legend className="text-2xl font-semibold text-gray-900 mb-2">
          The three answers
        </legend>

        <TextArea
          label="Who are you? What do you do, who is it for, and where? Write 3–5 sentences I can use on the site."
          name="who"
          required
          placeholder="Example: We are a family-owned bakery on Main Street in Wolfeboro. We bake breakfast pastries, bread, and custom cakes for locals and weekend visitors. Most of our customers want something fresh the same morning, not a chain store pastry. We also take cake orders for birthdays, weddings, and lakeside gatherings."
        />
        <TextArea
          label="What&apos;s happening now, or coming next? Include hours, current offers, season, or the next thing people should know."
          name="now"
          required
          placeholder="Example: We are open Tuesday–Saturday, 7am–2pm. Fall hours start September 8. This month we have weekend pastry specials and are booking holiday cakes through December. If someone needs a cake this week, they should call rather than order online."
        />
        <TextArea
          label="Why should someone call, book, buy, join, visit, or donate? Give the real reason, not a slogan."
          name="why"
          required
          placeholder="Example: Everything is baked in-house the morning you buy it. You can talk to the person who made it, pick up the same day, and get a cake that tastes like it came from a neighbor&apos;s kitchen — not a catalog."
        />
      </fieldset>

      <fieldset className="space-y-5">
        <legend className="text-2xl font-semibold text-gray-900 mb-2">
          What should appear on the site
        </legend>

        <div className="grid md:grid-cols-2 gap-5">
          <Field label="Phone to show on the site" name="site_phone" />
          <Field label="Email to show on the site" name="site_email" type="email" />
        </div>
        <Field label="Address or service area" name="address" />
        <Field label="Hours (or “by appointment”)" name="hours" />

        <div>
          <label className="block text-sm font-medium text-gray-800 mb-1">
            Main call-to-action
          </label>
          <select
            name="cta"
            className="w-full rounded-lg border border-gray-300 px-3 py-2.5 bg-white text-gray-900"
          >
            {ctaOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <Field label="Instagram URL" name="instagram" />
          <Field label="Facebook URL" name="facebook" />
          <Field label="YouTube URL" name="youtube" />
          <Field label="X / Twitter URL" name="x" />
        </div>
      </fieldset>

      <fieldset className="space-y-5">
        <legend className="text-2xl font-semibold text-gray-900 mb-2">
          Images
        </legend>
        <p className="text-gray-600 text-sm">
          Logo optional. Up to 6 photos. Best: storefront, work, team, or the
          place itself. jpg, png, or webp.
        </p>
        <div>
          <label className="block text-sm font-medium text-gray-800 mb-1">Logo</label>
          <input
            type="file"
            name="logo"
            accept=".jpg,.jpeg,.png,.webp,image/jpeg,image/png,image/webp"
            className="block w-full text-sm text-gray-800 file:mr-4 file:rounded-lg file:border-0 file:bg-amber-800 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-amber-900"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-800 mb-1">
            Up to 6 photos
          </label>
          <input
            type="file"
            name="photos"
            accept=".jpg,.jpeg,.png,.webp,image/jpeg,image/png,image/webp"
            multiple
            className="block w-full text-sm text-gray-800 file:mr-4 file:rounded-lg file:border-0 file:bg-amber-800 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-amber-900"
          />
        </div>
        <TextArea
          label="Or paste image URLs"
          name="photo_links"
          placeholder="https://www.dropbox.com/...  or  https://drive.google.com/file/d/..."
        />
        <p className="text-sm text-gray-600 -mt-3">
          This box is for links only — not pasted photos. For Google Drive, use
          Share → Anyone with the link, then paste that URL. Dropbox: Copy link.
        </p>
      </fieldset>

      <fieldset className="space-y-3">
        <legend className="text-2xl font-semibold text-gray-900 mb-2">
          Scope
        </legend>
        <Check
          name="scope_simple"
          required
          label="I understand this is a simple static site with one revision before launch."
        />
        <Check
          name="scope_content"
          required
          label="I’ll provide final text and photos now, or within 48 hours."
        />
        <Check
          name="scope_hourly"
          required
          label="I understand extra changes after launch are billed hourly."
        />
      </fieldset>

      <div>
        <button
          type="submit"
          disabled={status === 'sending'}
          className="inline-block bg-amber-800 text-white font-semibold px-8 py-3 rounded-lg hover:bg-amber-900 disabled:opacity-60"
        >
          {status === 'sending' ? 'Sending…' : 'Submit Quick Site form'}
        </button>
        <p className="mt-4 text-gray-600">
          I&apos;ll review this and email you to confirm if a $399 spot is still
          available.
        </p>
        {status === 'ok' && (
          <p className="mt-3 text-green-700 font-semibold">
            Received. I&apos;ll be in touch shortly.
          </p>
        )}
        {status === 'error' && (
          <p className="mt-3 text-red-700 font-semibold">{message}</p>
        )}
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = 'text',
  required = false,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-800 mb-1">
        {label}{' '}
        {required && <span className="text-gray-500">(required)</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-gray-900"
      />
    </div>
  );
}

function TextArea({
  label,
  name,
  required = false,
  placeholder,
}: {
  label: string;
  name: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-800 mb-1">
        {label} {required && <span className="text-gray-500">(required)</span>}
      </label>
      <textarea
        name={name}
        required={required}
        placeholder={placeholder}
        rows={4}
        className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-gray-900"
      />
    </div>
  );
}

function Check({
  name,
  label,
  required = false,
}: {
  name: string;
  label: string;
  required?: boolean;
}) {
  return (
    <label className="flex items-start gap-3 text-gray-800">
      <input type="checkbox" name={name} required={required} className="mt-1" />
      <span>{label}</span>
    </label>
  );
}
