import { Globe, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Footer() {
  return (
    <footer className="bg-rcn-dark border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-rcn-purple to-rcn-cyan flex items-center justify-center">
                <span className="text-white text-sm font-black">R</span>
              </div>
              <span className="text-2xl font-bold text-white tracking-tighter">RCN Prime</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              The Digital Operating System for Discord servers. Automate your community, build virtual economies, and scale securely.
            </p>
            <div className="flex space-x-4">
              <a href="https://discord.gg/8gYnm86Nym" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <MessageSquare size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Platform</h3>
            <ul className="space-y-2">
              <li><a href="#bot" className="text-gray-400 hover:text-white transition-colors">RCN Bot</a></li>
              <li><a href="#coins" className="text-gray-400 hover:text-white transition-colors">Coins System</a></li>
              <li><a href="#premium" className="text-gray-400 hover:text-white transition-colors">Premium Plans</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} RCN Prime. All rights reserved.
          </p>
          <Button href="https://discord.gg/8gYnm86Nym" target="_blank" rel="noopener noreferrer" variant="outline" size="sm" className="text-xs">
            Join Discord Server
          </Button>
        </div>
      </div>
    </footer>
  );
}
