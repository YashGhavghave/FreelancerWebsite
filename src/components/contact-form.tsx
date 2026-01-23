
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import emailjs from "@emailjs/browser";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  user_name: z.string().min(2, "Name must be at least 2 characters."),
  user_email: z.string().email("Please enter a valid email address."),
  project_category: z.string().min(1, "Please select a project category."),
  contact_number: z.string().optional(),
});

const serviceCategories = [
  "Android Development",
  "Desktop App Development",
  "AI/ML Model Development",
  "LLM Development",
  "Web Development",
  "Other",
];

export function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      user_name: "",
      user_email: "",
      project_category: "",
      contact_number: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_123wdja";
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_icg727s";
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "g4Ix9bhbrYFOH_-eO";

    if (serviceId === "YOUR_SERVICE_ID") {
      console.warn("Email.js is not configured. Please set NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, and NEXT_PUBLIC_EMAILJS_PUBLIC_KEY in your environment variables.")
      toast({
        variant: "destructive",
        title: "Email not sent",
        description: "Email functionality is not configured by the developer.",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.send(serviceId, templateId, values, publicKey);
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. We'll be in touch soon.",
      });
      form.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        variant: "destructive",
        title: "Failed to Send Message",
        description:
          "There was a problem sending your message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6"
      >
        <FormField
          control={form.control}
          name="user_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="user_email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input placeholder="User@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="project_category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project Category</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {serviceCategories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="contact_number"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contact Number (Optional)</FormLabel>
              <FormControl>
                <Input placeholder="+1 (555) 123-4567" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Send Message
        </Button>
      </form>
    </Form>
  );
}
