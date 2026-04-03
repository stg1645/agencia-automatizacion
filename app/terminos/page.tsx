import Link from "next/link";

export default function TerminosPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white p-8 md:p-24 font-sans">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-blue-500 hover:text-blue-400 mb-8 inline-block transition-colors">
          ← Volver al inicio
        </Link>
        
        <h1 className="text-4xl font-bold mb-8">Términos de Servicio</h1>
        
        <div className="space-y-6 text-zinc-300 leading-relaxed">
          <p><strong>Última actualización:</strong> Abril de 2026</p>
          
          <h2 className="text-2xl font-semibold text-white mt-8">1. Aceptación de los Términos</h2>
          <p>
            Al acceder y utilizar los servicios de nuestra Agencia de Automatización, usted acepta estar sujeto a estos Términos de Servicio. Si no está de acuerdo con alguna parte de los términos, no podrá utilizar nuestros servicios de integración y desarrollo.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">2. Descripción del Servicio</h2>
          <p>
            Proporcionamos servicios de desarrollo de software, incluyendo la creación de agentes de IA, orquestación de flujos de trabajo mediante n8n y configuración de la API de WhatsApp Business a través de proveedores oficiales.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">3. Uso Aceptable</h2>
          <p>
            Usted se compromete a no utilizar nuestros sistemas automatizados para enviar spam, mensajes no solicitados, o cualquier contenido que viole las políticas de Meta, WhatsApp o las leyes locales. El incumplimiento de esta norma resultará en la terminación inmediata del servicio.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">4. Limitación de Responsabilidad</h2>
          <p>
            No nos hacemos responsables por bloqueos de cuentas de WhatsApp originados por el mal uso de la API por parte del cliente o por cambios en las políticas de Meta. Nuestro servicio se limita a la configuración e integración tecnológica de las plataformas.
          </p>
        </div>
      </div>
    </main>
  );
}
