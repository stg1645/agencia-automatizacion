import Link from "next/link";

export default function PrivacidadPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white p-8 md:p-24 font-sans">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-blue-500 hover:text-blue-400 mb-8 inline-block transition-colors">
          ← Volver al inicio
        </Link>
        
        <h1 className="text-4xl font-bold mb-8">Política de Privacidad</h1>
        
        <div className="space-y-6 text-zinc-300 leading-relaxed">
          <p><strong>Última actualización:</strong> Abril de 2026</p>
          
          <h2 className="text-2xl font-semibold text-white mt-8">1. Información que recopilamos</h2>
          <p>
            Nuestra Agencia de Automatización recopila información básica de contacto y datos de uso exclusivamente para proveer servicios de integración de software, automatización de flujos y conexión con la API de WhatsApp Business a través de proveedores autorizados (como YCloud). No vendemos ni compartimos sus datos con terceros no autorizados.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">2. Uso de la API de WhatsApp</h2>
          <p>
            Al utilizar nuestros servicios de automatización de WhatsApp, los mensajes son procesados a través de la infraestructura de Meta y nuestros servidores seguros en la nube. Nos adherimos estrictamente a las Políticas de Comercio y de WhatsApp Business. Los datos de los usuarios finales que interactúan con nuestros agentes de IA se utilizan temporalmente para generar respuestas coherentes y ejecutar las acciones solicitadas.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">3. Retención y Seguridad</h2>
          <p>
            Implementamos medidas de seguridad estándar de la industria para proteger su información. Los historiales de chat procesados por nuestros agentes (como Cosmo) y orquestados mediante n8n se retienen únicamente el tiempo necesario para el contexto de la conversación o según lo estipulado en los acuerdos de nivel de servicio con cada cliente.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">4. Jurisdicción</h2>
          <p>
            Esta política se rige bajo las leyes de la República de Colombia, operando desde Valledupar, Cesar. Cualquier disputa será resuelta en esta jurisdicción.
          </p>
        </div>
      </div>
    </main>
  );
}

