"use client";

import { useActionState } from "react";
import { authenticate } from "./actions";

export default function LoginPage() {
  const [state, formAction, pending] = useActionState(authenticate, {
    error: false,
  });

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="rounded-lg bg-white px-8 py-10 shadow-sm">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/asuno-logo.png"
            alt="Asuno"
            style={{ height: 24 }}
            className="mb-8"
          />

          <h1 className="text-lg font-semibold text-foreground">
            Zugang zum Angebot
          </h1>
          <p className="mt-1 text-sm text-foreground-muted">
            Bitte Passwort eingeben, um das Dokument zu öffnen.
          </p>

          <form action={formAction} className="mt-6">
            <input
              type="password"
              name="password"
              placeholder="Passwort"
              autoFocus
              required
              className="w-full rounded border border-border bg-white px-4 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-foreground-muted/50 focus:border-foreground"
            />

            {state.error && (
              <p className="mt-2 text-sm text-red-600">
                Falsches Passwort. Bitte erneut versuchen.
              </p>
            )}

            <button
              type="submit"
              disabled={pending}
              className="mt-4 w-full rounded bg-foreground px-4 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-50"
            >
              {pending ? "Wird geprüft..." : "Öffnen"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
