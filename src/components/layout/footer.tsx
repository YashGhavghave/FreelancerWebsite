import Link from "next/link";
import { CodeXml } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <CodeXml className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline">.Dev</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} .Dev Freelance Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
