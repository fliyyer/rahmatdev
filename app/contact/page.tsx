import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch for collaboration, freelance work, or product opportunities."
};

export default function ContactPage() {
  return (
    <section className="py-14">
      <div className="mb-10 space-y-3">
        <h1 className="text-4xl font-semibold">Contact</h1>
        <p className="text-lg leading-relaxed text-muted-foreground">
          Have a project, collaboration, or role in mind? Send me a message.
        </p>
      </div>
      <div className="rounded-lg border p-6 md:p-8">
        <ContactForm />
      </div>
    </section>
  );
}
