import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-300">
        <h1 className="text-4xl font-bold text-white mb-8 tracking-tight">Privacy Policy</h1>
        <p className="mb-8 text-sm text-gray-500">Last Updated: May 2026</p>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">1. Information We Collect</h2>
            <p>We collect public Discord metadata including User IDs, server IDs, and usernames to facilitate the RCN Prime automation system and track your RCN Coin balance.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">2. How We Use Data</h2>
            <p>Data is used exclusively to:
              <ul className="list-disc list-inside mt-2 ml-4">
                <li>Manage virtual economy balances</li>
                <li>Verify premium subscription status</li>
                <li>Prevent system abuse and bot-attacks</li>
                <li>Improve system stability and command processing</li>
              </ul>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">3. Data Security</h2>
            <p>We implement industry-standard security-first design principles. Your data is stored on protected servers with token-based access control and strict input validation pipelines.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">4. Third-Party Sharing</h2>
            <p>RCN Prime does not sell, trade, or rent your personal data to third parties. We only share information with Discord's API as required to process commands and manage server roles.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">5. Your Rights</h2>
            <p>You can request the deletion of your RCN profile data at any time through our support channels. Deleting data will result in the loss of all accumulated RCN Coins and premium roles.</p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
