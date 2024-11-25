import React from "react";

const TermsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-14">
      <h1 className="text-3xl font-bold mb-6">Términos y Condiciones de Uso</h1>
      <p className="text-gray-200 mb-4">
        Fecha de entrada en vigor: <strong>[2024-11-25]</strong>
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Introducción</h2>
        <p className="text-gray-200 mb-4">
          Bienvenido a DigiMarkPro, un sitio web que ofrece servicios de marketing digital y software como servicio
          (SaaS) especializado en soluciones para PYMEs. Estos términos y condiciones (&quot;Términos&quot;) rigen el uso de
          nuestro sitio web y los servicios ofrecidos. Al acceder o utilizar nuestro sitio, aceptas estar sujeto a estos
          Términos.
        </p>
        <p className="text-gray-200 mb-4">
          Si tienes alguna consulta, puedes contactarnos en:
        </p>
        <ul className="list-disc list-inside text-gray-200 mb-4">
          <li>Correo: contact@digimarkpro.com</li>
          <li>Teléfono: +1 (555) 123-4567</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Servicios Ofrecidos</h2>
        <p className="text-gray-200 mb-4">Ofrecemos:</p>
        <ul className="list-disc list-inside text-gray-200 mb-4">
          <li>
            <strong>Marketing Digital:</strong> Gestión de campañas de Google Ads, incluyendo estrategias de búsqueda,
            display, y remarketing.
          </li>
          <li>
            <strong>SaaS para PYMEs:</strong> Plataforma para crear y gestionar landing pages, análisis de datos y
            automatización de marketing.
          </li>
        </ul>
        <p className="text-gray-200">
          Nos reservamos el derecho de modificar, actualizar o discontinuar los servicios en cualquier momento sin
          previo aviso.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Condiciones de Uso</h2>
        <p className="text-gray-200 mb-4">Para utilizar nuestros servicios:</p>
        <ul className="list-disc list-inside text-gray-200 mb-4">
          <li>Debes ser mayor de edad (18 años en Argentina).</li>
          <li>No debes utilizar nuestros servicios para actividades ilegales, difamatorias o que violen derechos de terceros.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Responsabilidades del Cliente</h2>
        <ul className="list-disc list-inside text-gray-200 mb-4">
          <li>Proporcionar información veraz y actualizada.</li>
          <li>Garantizar el pago puntual de los servicios contratados.</li>
          <li>Cumplir con todas las normativas locales aplicables a su actividad comercial.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Pagos y Tarifas</h2>
        <ul className="list-disc list-inside text-gray-200 mb-4">
          <li>Los precios se detallan en la sección correspondiente de nuestro sitio web. Estos pueden variar según el plan contratado.</li>
          <li>Los pagos deben realizarse mediante los métodos indicados (tarjeta de crédito, transferencia bancaria, etc.).</li>
          <li>No se realizan reembolsos, salvo en circunstancias excepcionales que serán evaluadas caso por caso.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Propiedad Intelectual</h2>
        <p className="text-gray-200 mb-4">
          Todo el contenido de DigiMarkPro, incluyendo texto, gráficos, logos y software, es propiedad de DigiMarkPro o
          de sus licenciantes. No se permite su reproducción, distribución o uso sin autorización previa.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">7. Protección de Datos</h2>
        <p className="text-gray-200 mb-4">
          Cumplimos con la Ley 25.326 de Protección de Datos Personales de Argentina. Los datos recopilados serán
          utilizados exclusivamente para la prestación de servicios. Consulta nuestra{" "}
          <a href="/privacy" className="text-primary hover:underline">
            Política de Privacidad
          </a>{" "}
          para más detalles.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">8. Limitación de Responsabilidad</h2>
        <ul className="list-disc list-inside text-gray-200 mb-4">
          <li>
            DigiMarkPro no se responsabiliza por resultados obtenidos a través de nuestras campañas publicitarias, que
            dependen de múltiples factores externos.
          </li>
          <li>Interrupciones temporales del servicio SaaS debido a mantenimiento o problemas técnicos.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">9. Modificaciones a los Términos</h2>
        <p className="text-gray-200 mb-4">
          Nos reservamos el derecho de modificar estos Términos en cualquier momento. Los cambios entrarán en vigor
          inmediatamente después de su publicación en el sitio web.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">10. Jurisdicción y Ley Aplicable</h2>
        <p className="text-gray-200 mb-4">
          Estos Términos se rigen por las leyes de la República Argentina. Cualquier disputa relacionada con los
          servicios será resuelta por los tribunales competentes de [ciudad/provincia donde operas].
        </p>
      </section>

      <p className="text-gray-200 mt-8">
        Si tienes preguntas sobre estos Términos, contáctanos en:{" "}
        <a href="mailto:contact@digimarkpro.com" className="text-primary hover:underline">
          contact@digimarkpro.com
        </a>
        .
      </p>
    </div>
  );
};

export default TermsPage;
