import { ContactForm } from "@/components/contact-form";

export default function ContactPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-headline">
              Contact Us
            </h1>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Have a project in mind? Let's talk about it. Fill out the form
              below and we'll get back to you as soon as possible.
            </p>
          </div>
          <div className="mt-16">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
