import { useState, type FormEvent } from "react";
import { EMAIL, reasons } from "./data";
import { buttonClass } from "./ui";

type Reason = (typeof reasons)[number];

export function NewsletterForm({ tone = "light" }: { tone?: "light" | "dark" }) {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);
  const dark = tone === "dark";

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!consent) {
      setError("Please confirm that you would like to subscribe.");
      return;
    }
    setError("");
    const href = `mailto:${EMAIL}?subject=${encodeURIComponent("Newsletter signup")}&body=${encodeURIComponent(
      `Please add ${email} to The Academy Project mailing list.\n\nYes, subscribe me to your newsletter.`,
    )}`;
    window.location.href = href;
    setDone(true);
  }

  return (
    <form onSubmit={onSubmit} className="mt-4" noValidate>
      <label className={`block text-sm font-semibold ${dark ? "text-ivory" : "text-ink"}`} htmlFor={`news-${tone}`}>
        Email
      </label>
      <div className="mt-2 flex flex-col gap-2 sm:flex-row">
        <input
          id={`news-${tone}`}
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@email.com"
          className={`min-h-12 w-full border px-3 ${dark ? "border-white/20 bg-white/10 text-white placeholder:text-white/50" : "border-line bg-white text-ink"}`}
          aria-invalid={error ? true : undefined}
        />
        <button type="submit" className={buttonClass(dark ? "light" : "red", "shrink-0 px-4")}>
          Subscribe
        </button>
      </div>
      <label className={`mt-3 flex items-start gap-2 text-sm ${dark ? "text-ivory/75" : "text-ink-soft"}`}>
        <input
          type="checkbox"
          className="mt-1"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
        />
        <span>Yes, subscribe me to your newsletter.</span>
      </label>
      {error ? (
        <p className={`mt-2 text-sm ${dark ? "text-[#ffd5d8]" : "text-tap"}`} role="alert">
          {error}
        </p>
      ) : null}
      {done ? (
        <p className={`mt-3 text-sm ${dark ? "text-ivory/80" : "text-ink-soft"}`} role="status">
          Your email app should open a note to {EMAIL}. If it does not, email us directly and we will add you.
        </p>
      ) : null}
    </form>
  );
}

export function ContactForm({ initialReason = "General Question" }: { initialReason?: Reason }) {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [reason, setReason] = useState<Reason>(initialReason);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (!first.trim() || !last.trim() || !message.trim()) {
      setError("Please complete your name and message.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    const body = [
      `First name: ${first.trim()}`,
      `Last name: ${last.trim()}`,
      `Email: ${email.trim()}`,
      `Phone: ${phone.trim() || "Not provided"}`,
      `Reason for contact: ${reason}`,
      "",
      message.trim(),
    ].join("\n");
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(`Website inquiry: ${reason}`)}&body=${encodeURIComponent(body)}`;
    setDone(true);
  }

  const field = "mt-1.5 min-h-12 w-full border border-line bg-white px-3 text-ink";

  return (
    <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2" noValidate>
      <div>
        <label className="text-sm font-semibold" htmlFor="first">
          First name
        </label>
        <input id="first" name="given-name" autoComplete="given-name" required className={field} value={first} onChange={(e) => setFirst(e.target.value)} />
      </div>
      <div>
        <label className="text-sm font-semibold" htmlFor="last">
          Last name
        </label>
        <input id="last" name="family-name" autoComplete="family-name" required className={field} value={last} onChange={(e) => setLast(e.target.value)} />
      </div>
      <div>
        <label className="text-sm font-semibold" htmlFor="email">
          Email
        </label>
        <input id="email" name="email" type="email" autoComplete="email" required className={field} value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label className="text-sm font-semibold" htmlFor="phone">
          Phone
        </label>
        <input id="phone" name="tel" type="tel" autoComplete="tel" className={field} value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>
      <div className="sm:col-span-2">
        <label className="text-sm font-semibold" htmlFor="reason">
          Reason for contact
        </label>
        <select
          id="reason"
          name="reason"
          className={field}
          value={reason}
          onChange={(e) => setReason(e.target.value as Reason)}
        >
          {reasons.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label className="text-sm font-semibold" htmlFor="message">
          Message
        </label>
        <textarea id="message" name="message" required rows={6} className={`${field} min-h-36 py-3`} value={message} onChange={(e) => setMessage(e.target.value)} />
      </div>
      {error ? (
        <p className="text-sm text-tap sm:col-span-2" role="alert">
          {error}
        </p>
      ) : null}
      <div className="sm:col-span-2">
        <button type="submit" className={buttonClass("red")}>
          Send message
        </button>
        {done ? (
          <p className="mt-3 text-sm text-ink-soft" role="status">
            Your email app should open with this message addressed to {EMAIL}. If it does not, please write to us directly.
          </p>
        ) : (
          <p className="mt-3 text-sm text-muted">This opens an email to {EMAIL}. We do not store messages on this page.</p>
        )}
      </div>
    </form>
  );
}
