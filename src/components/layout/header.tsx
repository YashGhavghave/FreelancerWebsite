"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CodeXml, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Services", href: "/#services" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
    const isHome = pathname === '/';
    const targetHref = isHome ? href.substring(href.indexOf('#')) : href;
    const isPageLink = href.startsWith('/') && !href.includes('#');
    
    const linkClasses = cn(
        "text-sm font-medium transition-colors hover:text-primary",
        (isPageLink && pathname === href)
          ? "text-primary"
          : "text-muted-foreground"
      );

    if (isPageLink) {
        return <Link href={href} className={linkClasses} onClick={() => setIsMobileMenuOpen(false)}>{children}</Link>
    }

    // For anchor links on the same page, we need to handle them differently
    if (isHome && href.includes('#')) {
      return (
        <a href={targetHref} className={linkClasses} onClick={(e) => {
          e.preventDefault();
          document.querySelector(targetHref)?.scrollIntoView({ behavior: 'smooth' });
          setIsMobileMenuOpen(false);
        }}>
          {children}
        </a>
      );
    }
    
    // For anchor links from other pages
    return (
      <Link href={href} className={linkClasses} onClick={() => setIsMobileMenuOpen(false)}>
        {children}
      </Link>
    );
  };


  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="flex items-center space-x-2">
            <CodeXml className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline">.Dev</span>
          </Link>
        </div>
        <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.name} href={link.href}>
              {link.name}
            </NavLink>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="px-2 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <Link
                href="/"
                className="flex items-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <CodeXml className="h-6 w-6 mr-2 text-primary" />
                <span className="font-bold font-headline">.Dev</span>
              </Link>
              <div className="my-4 h-px w-full bg-border" />
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <NavLink key={link.name} href={link.href}>
                    {link.name}
                  </NavLink>
                ))}
              </div>
            </SheetContent>
          </Sheet>
          <Link href="/contact" className="hidden md:inline-flex">
            <Button>Get a Quote</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
