"use client";

import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

export function Hero3D() {
  return (
    <section className="relative flex items-center justify-center h-screen w-full overflow-hidden bg-transparent">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-headline">
          <span className="block text-primary">.Dev</span>
          <span className="block text-foreground">Freelance Hub</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-muted-foreground sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Building high-quality Android, Desktop, AI/ML, and Web applications with competitive pricing.
        </p>
        <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <div className="rounded-md shadow">
              <Button asChild size="lg">
                <a href="#services">Our Services</a>
              </Button>
          </div>
          <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
            <Button asChild variant="secondary" size="lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
