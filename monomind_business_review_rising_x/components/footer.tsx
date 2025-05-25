import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted py-8">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              All rights reserved by{" "}
              <Link
                href="https://www.monomind.one"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline inline-flex items-center"
              >
                MonoMind <ExternalLink className="ml-1" size={14} />
              </Link>
            </p>
          </div>
          <div className="text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} MonoMind Business Review</p>
          </div>
        </div>
      </div>
    </footer>
  );
}