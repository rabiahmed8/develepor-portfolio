"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

const NEEDS = ["A new website", "A redesign", "A bug fixed", "A new feature", "A web app", "An AI assistant", "Not sure yet"];

type Status = "idle" | "sending" | "sent" | "error";

const input =
  "mt-1.5 w-full rounded-xl border border-black/15 bg-white px-3.5 py-2.5 text-[15px] text-[#16171d] outline-none transition placeholder:text-black/40 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20";

export default function EnquiryForm({ email, whatsapp }: { email: string; whatsapp: string }) {
  const [need, setNeed] = useState(NEEDS[0]);
  const [status, setStatus] = useState<Status>("idle");

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...Object.fromEntries(data), need }),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div role="status" className="grid h-full min-h-[320px] place-items-center rounded-2xl bg-white p-8 text-center text-[#16171d]">
        <div>
          <CheckCircle2 className="mx-auto text-emerald-600" size={44} aria-hidden />
          <h3 className="mt-4 text-xl font-semibold">Got it. Thank you!</h3>
          <p className="mt-2 text-black/65">Your message is in my inbox. I’ll reply to you by email.</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="rounded-2xl bg-white p-5 text-[#16171d] shadow-2xl shadow-black/20 sm:p-7">
      <fieldset>
        <legend className="text-sm font-semibold">What do you need?</legend>
        <div className="mt-2.5 flex flex-wrap gap-2">
          {NEEDS.map((n) => (
            <label
              key={n}
              className={`cursor-pointer rounded-full border px-3.5 py-1.5 text-sm transition has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-emerald-600/40 ${
                need === n
                  ? "border-emerald-700 bg-emerald-700 text-white"
                  : "border-black/15 bg-white text-black/75 hover:border-black/40"
              }`}
            >
              <input
                type="radio"
                name="need-choice"
                value={n}
                checked={need === n}
                onChange={() => setNeed(n)}
                className="sr-only"
              />
              {n}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium">
          Your name
          <input name="name" required maxLength={100} autoComplete="name" className={input} />
        </label>
        <label className="block text-sm font-medium">
          Your email
          <input name="email" type="email" required maxLength={200} autoComplete="email" className={input} />
        </label>
      </div>
      <label className="mt-4 block text-sm font-medium">
        Your current website <span className="font-normal text-black/55">(if you have one)</span>
        <input name="website" maxLength={300} placeholder="yourbusiness.com" autoComplete="url" className={input} />
      </label>
      <label className="mt-4 block text-sm font-medium">
        Tell me a bit about it
        <textarea
          name="message"
          required
          rows={4}
          maxLength={5000}
          placeholder="What your business does, and what you’d like built, changed or fixed."
          className={`${input} resize-y`}
        />
      </label>

      {/* Hidden from people; only bots fill it in. */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Company
          <input name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-700 px-6 py-3.5 font-semibold text-white transition hover:bg-emerald-800 disabled:opacity-70"
      >
        {status === "sending" ? (
          <>
            <Loader2 size={18} className="animate-spin" aria-hidden /> Sending…
          </>
        ) : (
          <>
            Send it to Rabi <ArrowRight size={18} aria-hidden />
          </>
        )}
      </button>

      <p role="alert" className="mt-3 min-h-5 text-sm text-rose-700">
        {status === "error" && (
          <>
            That didn’t send. Please email me at{" "}
            <a href={`mailto:${email}`} className="font-semibold underline">
              {email}
            </a>{" "}
            or{" "}
            <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="font-semibold underline">
              message me on WhatsApp
            </a>
            .
          </>
        )}
      </p>
    </form>
  );
}
