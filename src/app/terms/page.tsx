import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-300">
        <h1 className="text-4xl font-bold text-white mb-8 tracking-tight">Terms of Service</h1>
        <p className="mb-8 text-sm text-gray-500">Last Updated: May 2026</p>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
            <p>By accessing or using the RCN Prime platform, bot, or website, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">2. Services Description</h2>
            <p>RCN Prime (formerly Hustlehub) provides Discord community automation, virtual economy systems, and infrastructure tools. These services are provided "as is" and subject to change at any time.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">3. User Conduct</h2>
            <p>Users must comply with Discord's official Terms of Service. Any attempt to abuse the RCN Coin economy, bypass security layers, or engage in fraudulent hiring practices will result in an immediate permanent ban.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">4. Premium Subscriptions</h2>
            <p>Premium tiers are granted via manual onboarding. Once the RCN team grants the roles after payment verification, subscriptions are generally non-refundable unless a critical system failure prevents access to features.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">5. Limitation of Liability</h2>
            <p>RCN Prime is not responsible for any transactions, disputes, or losses occurring between users in external Discord servers. We act solely as a provider of infrastructure and automation tools.</p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
