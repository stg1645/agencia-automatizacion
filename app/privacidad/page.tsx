import Link from "next/link";

export default function PrivacidadPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white p-8 md:p-24 font-sans">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-blue-500 hover:text-blue-400 mb-8 inline-block transition-colors">
          ← Back to Home
        </Link>
        
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="space-y-6 text-zinc-300 leading-relaxed">
          <p><strong>Last Updated:</strong> April 2026</p>
          
          <h2 className="text-2xl font-semibold text-white mt-8">1. Information We Collect</h2>
          <p>
            Garphus Cloud AI collects basic contact information and usage data exclusively to provide software integration services, workflow automation, and connection to the WhatsApp Business API through authorized providers (such as YCloud). We do not sell or share your data with unauthorized third parties.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">2. Use of WhatsApp API</h2>
          <p>
            By using our WhatsApp automation services, messages are processed through Meta's infrastructure and our secure cloud servers. We strictly adhere to the Commerce and WhatsApp Business Policies. End-user data interacting with our AI agents is used temporarily to generate coherent responses and execute requested actions.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">3. Retention and Security</h2>
          <p>
            We implement industry-standard security measures to protect your information. Chat histories processed by our agents and orchestrated via n8n are retained only as long as necessary for the context of the conversation or as stipulated in the service level agreements with each client.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">4. Jurisdiction</h2>
          <p>
            This policy is governed by the laws of the Republic of Colombia, operating from Valledupar, Cesar. Any dispute will be resolved in this jurisdiction.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">5. Contact Us</h2>
          <p>
            For inquiries related to your data, deletion of information, or support regarding our integrations, please contact us at <strong>santiago@garphus.cloud</strong>.
          </p>
        </div>
      </div>
    </main>
  );
}
