import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Streakaholic — Privacy Policy & Terms | Meta Modern Monkey",
  description: "Privacy Policy and Terms of Service for Streakaholic.",
};

export default function StreakaholicPrivacyPage() {
  return (
    <main className="min-h-screen relative">
      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <Link
          href="/"
          className="text-sm text-synthwave-cyan hover:text-synthwave-pink transition-colors duration-300"
        >
          ← Meta Modern Monkey
        </Link>

        <h1 className="mt-6 text-3xl sm:text-4xl font-bold text-white">
          Streakaholic
        </h1>
        <p className="mt-2 text-sm text-gray-400">
          Privacy Policy &amp; Terms of Service — last updated 2026-08-08
        </p>

        <section className="mt-12">
          <h2 className="text-xl font-semibold text-synthwave-cyan border-b border-synthwave-pink/20 pb-2">
            Privacy Policy
          </h2>
          <p className="mt-4 text-gray-300 leading-relaxed">
            Streakaholic doesn&rsquo;t collect, transmit, or sell any of your data. Every task,
            streak, and completion is stored only on this device &mdash; there&rsquo;s no account,
            no sign-in, and no server involved. Exporting your data creates a local file that only
            ever leaves this device if you choose to share it yourself.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-synthwave-cyan border-b border-synthwave-pink/20 pb-2">
            Terms of Service
          </h2>
          <p className="mt-4 text-gray-300 leading-relaxed">
            Streakaholic is provided as-is, without warranty of any kind. Since your data lives
            only on this device, you&rsquo;re responsible for backing it up (Settings → Export
            Data) &mdash; reinstalling the app, switching devices, or clearing app data will erase
            it. The developer isn&rsquo;t liable for any lost data or missed streaks. By using this
            app, you agree to these terms.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-synthwave-cyan border-b border-synthwave-pink/20 pb-2">
            Contact
          </h2>
          <p className="mt-4 text-gray-300 leading-relaxed">
            Questions or support requests:{" "}
            <a
              href="mailto:support@metamodernmonkey.com"
              className="text-synthwave-cyan hover:text-synthwave-pink transition-colors duration-300"
            >
              support@metamodernmonkey.com
            </a>
          </p>
        </section>
      </div>

      <Footer />
    </main>
  );
}
