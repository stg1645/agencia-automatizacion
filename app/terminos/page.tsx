import Link from "next/link";

export default function TerminosPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white p-8 md:p-24 font-sans">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-blue-500 hover:text-blue-400 mb-8 inline-block transition-colors">
          ← Back to Home
        </Link>
        
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        
        <div className="space-y-6 text-zinc-300 leading-relaxed">
          <p><strong>Last Updated:</strong> April 2026</p>
          
          <h2 className="text-2xl font-semibold text-white mt-8">1. Acceptance of Terms</h2>
          <p>
            By accessing and using the services of Garphus Cloud AI, you agree to be bound by these Terms of Service. If you do not agree with any part of the terms, you may not use our integration and development services.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">2. Description of Service</h2>
          <p>
            We provide custom software development services, including the creation of AI agents, orchestration of workflows through n8n, and configuration of the WhatsApp Business API through official providers.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">3. Acceptable Use</h2>
          <p>
            You agree not to use our automated systems to send spam, unsolicited messages, or any content that violates Meta's, WhatsApp's policies, or local laws. Failure to comply with this rule will result in immediate termination of the service.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">4. Limitation of Liability</h2>
          <p>
            Garphus Cloud AI is not responsible for WhatsApp account bans caused by the client's misuse of the API or changes in Meta's platform policies. Our service is limited to the technological configuration and integration of the platforms.
          </p>
        </div>
      </div>
    </main>
  );
}
