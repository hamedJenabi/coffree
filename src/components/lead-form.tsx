"use client";

import { FormEvent, useMemo, useState } from "react";
import styles from "@/app/page.module.scss";

type LeadKind = "member" | "cafe";
type Status = "idle" | "saving" | "success" | "error";

type LeadFormProps = {
  kind: LeadKind;
};

const copy = {
  member: {
    title: "Member list",
    intro: "Get first access to founding pricing.",
    button: "Join member list",
    success: "You are on the founding member list.",
  },
  cafe: {
    title: "Cafe list",
    intro: "Test Sip Club with selected drinks.",
    button: "Join cafe list",
    success: "Cafe interest saved. Nice.",
  },
};

export default function LeadForm({ kind }: LeadFormProps) {
  const [status, setStatus] = useState<Status>("idle");

  const fields = useMemo(() => copy[kind], [kind]);
  const isCafe = kind === "cafe";
  const isSaving = status === "saving";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("saving");

    const formData = new FormData(event.currentTarget);
    const payload: Record<string, string> = { kind };

    formData.forEach((value, key) => {
      if (typeof value === "string") {
        payload[key] = value.trim();
      }
    });

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Lead capture failed");
      }

      event.currentTarget.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className={styles.leadForm} onSubmit={handleSubmit}>
      <h3>{fields.title}</h3>
      <p>{fields.intro}</p>

      <label className={styles.formField}>
        {isCafe ? "Contact name" : "Name"}
        <input name="name" type="text" autoComplete="name" required />
      </label>

      {isCafe ? (
        <label className={styles.formField}>
          Cafe name
          <input name="cafeName" type="text" autoComplete="organization" required />
        </label>
      ) : null}

      <label className={styles.formField}>
        Email
        <input name="email" type="email" autoComplete="email" required />
      </label>

      <label className={styles.formField}>
        Area
        <input
          name="area"
          type="text"
          placeholder="Example: near Karlsplatz"
          required
        />
      </label>

      {isCafe ? (
        <label className={styles.formFieldWide}>
          Eligible drinks
          <textarea
            name="eligibleDrinks"
            placeholder="Example: espresso, cappuccino, iced tea"
            required
          />
        </label>
      ) : (
        <label className={styles.formField}>
          Usual order
          <input
            name="drink"
            type="text"
            placeholder="Example: matcha latte"
            required
          />
        </label>
      )}

      <button type="submit" disabled={isSaving}>
        {isSaving ? "Saving..." : fields.button}
      </button>

      <p
        className={`${styles.formMessage} ${
          status === "error" ? styles.formMessageError : ""
        }`}
        aria-live="polite"
      >
        {status === "success" ? fields.success : null}
        {status === "error" ? "Something went wrong. Please try again." : null}
      </p>
    </form>
  );
}
