import Link from "next/link";

export function Footer() {
  return (
    <footer className="h-8 w-full bg-background/50 text-center text-secondary-foreground">
      <div className="flex items-center justify-between border-t border-input px-4 py-2">
        <div
          aria-label="Disclaimer"
          className="text-center text-sm font-semibold"
        >
          &copy; 2024 ReelGram. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
