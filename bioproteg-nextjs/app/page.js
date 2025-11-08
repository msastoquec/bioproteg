import PrivacyModalLink from "@/components/PrivacyModalLink";
import Section from "@/components/Section";

function Hero() {
  return (
    <header className="py-16">
      <div className="flex items-center gap-6">
        <img src="/img/LOGO_BIOPROTEG_V-U.jpg" alt="Bioproteg" className="w-28 h-auto rounded" />
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">
            Ingeniería geotécnica y pavimentos para proyectos eficientes, sustentables y económicos.
          </h1>
          <p className="mt-2 text-sm tracking-widest font-semibold">GREEN TECHNOLOGIES IN CIVIL CONSTRUCTIONS</p>
        </div>
      </div>
      <p className="mt-6 text-lg leading-relaxed max-w-3xl">
        Bioproteg S.A.S. es una empresa dedicada a la construcción y consultoría en obras civiles, así como al suministro de materiales y servicios para la ejecución de carreteras, obras de urbanismo, acueductos y alcantarillados.
      </p>
      <p className="mt-3 text-lg leading-relaxed max-w-3xl">
        Nuestro equipo combina experiencia técnica con un sólido compromiso ambiental y social, lo que nos ha convertido en pioneros y especialistas en Nuevas Tecnologías de Construcción de Vías a Bajo Costo, aplicadas tanto en corredores terciarios como en zonas urbanas.
      </p>
      <p className="mt-4 text-base max-w-3xl">
        <b>Con más de dos décadas de experiencia,</b> aplicamos soluciones de ingeniería que integran sostenibilidad, eficiencia económica y cumplimiento normativo en proyectos públicos y privados. Ayudamos a municipios, contratistas y empresas a construir vías más duraderas, económicas y ambientalmente responsables, respaldadas por resultados comprobados en campo.
      </p>
    </header>
  );
}

function ServiceCard({ title, children }) {
  return (
    <div className="rounded-2xl border p-5 shadow-sm bg-white">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <div className="text-sm leading-relaxed">{children}</div>
    </div>
  );
}

export default function Page() {
  return (
    <main className="pb-20">
      <Hero />

      <Section id="servicios" title="Servicios">
        <div className="grid md:grid-cols-2 gap-5">
          <ServiceCard title="1. Estabilización química de suelos">
            <p>
              Mejoramos la capacidad portante de suelos mediante la aplicación controlada de aditivos químicos tradicionales como la cal (INV 236-22) y de aditivos químicos no tradicionales como polímeros, organosilanos y sales inorgánicas, entre otros (INV 237-22).
              Esta metodología permite transformar suelos de baja calidad en materiales aptos para soporte estructural, optimizando espesores, reduciendo costos y acelerando los tiempos de ejecución.
            </p>
            <p className="mt-2">
              Bioproteg es pionera en la implementación de soluciones de bajo costo para vías terciarias y urbanas, con resultados comprobados en campo y total cumplimiento de las especificaciones INVIAS 2022.
            </p>
          </ServiceCard>

          <ServiceCard title="2. Capas de rodadura en mezclas ecológicas (ECOASFALTO, Asfalto Natural Modificado y RAP)">
            <p>
              Desarrollamos e implementamos capas de rodadura elaboradas con mezclas en frío, asfalto natural modificado y materiales reciclados como RAP, una alternativa sostenible que reduce significativamente la huella ambiental y los costos de ejecución.
              Estas soluciones eliminan la necesidad de procesos de calentamiento, disminuyen el consumo energético y permiten intervenir vías urbanas y rurales sin depender de plantas de producción en caliente, logrando resultados de alta durabilidad y desempeño.
            </p>
            <p className="mt-2">
              Nuestras mezclas están alineadas con las prácticas recomendadas por las especificaciones INVIAS 2022 (artículo 442-22 y relacionados), y han demostrado ahorros económicos sustanciales frente a los métodos convencionales.
              Son ideales para municipios, contratistas de obras públicas, y constructores de conjuntos y condominios residenciales que requieren soluciones eficientes, económicas y con menor impacto ambiental.
            </p>
          </ServiceCard>

          <ServiceCard title="3. Diseño geotécnico y estructural de pavimentos">
            <p>
              Realizamos estudios geotécnicos, aforos vehiculares, cálculos de tránsito de diseño y diseños estructurales de pavimentos mediante metodologías actualizadas con tecnología de punta, orientadas a garantizar desempeño, economía y sostenibilidad en cada proyecto.
            </p>
            <p className="mt-2">
              Somos especialistas en el diseño de estructuras viales basadas en capas estabilizadas con aditivos químicos y en carpetas asfálticas elaboradas con mezclas en frío, asfaltos naturales modificados y materiales reciclados como RAP, optimizando espesores y prolongando la vida útil del pavimento.
            </p>
            <p className="mt-2">
              Contamos con la capacidad de desarrollar estudios de suelos especializados, incluyendo caracterización física y química de materiales, orientados al análisis, formulación y diseño de capas estabilizadas de alto desempeño.
            </p>
            <ul className="mt-2 list-disc pl-5">
              <li>Estudios hidrológicos e hidráulicos</li>
              <li>Estudios topográficos y diseño geométrico</li>
              <li>Estudios geotécnicos y evaluación de subrasantes</li>
              <li>Estudios económicos, presupuestales y análisis financieros</li>
              <li>Modelación estructural de alternativas y recomendaciones constructivas</li>
            </ul>
            <p className="mt-2">
              Este enfoque multidisciplinario nos permite entregar soluciones confiables, eficientes y ajustadas a la realidad técnica y presupuestal del territorio, con trazabilidad completa y cumplimiento de los lineamientos técnicos exigidos por las entidades públicas y la normativa vigente.
            </p>
          </ServiceCard>

          <ServiceCard title="4. Gestión, presupuestación y planeación de proyectos">
            <p>
              Acompañamos a entidades públicas, contratistas y empresas privadas en la estructuración, análisis y planeación de proyectos viales mediante procesos técnicos rigurosos que garantizan viabilidad, eficiencia y sostenibilidad financiera.
            </p>
            <ul className="mt-2 list-disc pl-5">
              <li>Elaboración, revisión y optimización de APU y AIU</li>
              <li>Preparación de estudios previos, especificaciones técnicas y documentos base</li>
              <li>Presupuestos detallados ajustados a condiciones reales de obra</li>
              <li>Cronogramas, planificación operativa y programación de recursos</li>
              <li>Alternativas constructivas con criterios económicos y ambientales</li>
              <li>Recomendaciones técnicas que optimizan el uso de tecnologías de bajo costo</li>
            </ul>
            <p className="mt-2">
              Contamos con amplia experiencia en la participación y estructuración de proyectos contratados mediante procesos de licitación pública, lo que nos brinda una visión sólida de requisitos técnicos, presupuestales y documentales. Esta trayectoria respalda nuestra capacidad para anticipar riesgos, optimizar recursos y aportar valor real en la gerencia técnica de proyectos viales.
            </p>
          </ServiceCard>

          <ServiceCard title="5. Cumplimiento normativo y aseguramiento de calidad">
            <p>
              Todas nuestras soluciones se desarrollan bajo el marco regulatorio vigente en Colombia, garantizando que cada proceso constructivo, cada material y cada recomendación técnica pueda ser auditada, verificada y trazada desde la etapa de diseño hasta la ejecución en campo.
            </p>
            <ul className="mt-2 list-disc pl-5">
              <li>Especificaciones Generales de Construcción de Carreteras INVIAS 2022</li>
              <li>Reglamento Técnico del Sector de Agua Potable y Saneamiento Básico RAS 2017</li>
              <li>Reglamento Colombiano de Construcción Sismo Resistente NSR-10 (cuando aplica)</li>
              <li>Normas INV e ICONTEC relacionadas con suelos, pavimentos y control de materiales</li>
              <li>Normas y estándares internacionales aplicables según el tipo de proyecto</li>
            </ul>
            <ul className="mt-2 list-disc pl-5">
              <li>Control técnico de materiales y verificación de especificaciones</li>
              <li>Ensayos de laboratorio y pruebas en campo según norma</li>
              <li>Control documental, evidencia fotográfica y fílmica de todas las actividades</li>
              <li>Informes estructurados con trazabilidad y soportes verificables</li>
              <li>Procesos aptos para auditorías técnicas transparentes, con información clara y verificable</li>
            </ul>
            <p className="mt-2">
              Este enfoque garantiza que los proyectos cumplan los requisitos exigidos por las entidades públicas y privadas, a la vez que asegura la durabilidad y el desempeño esperado de las soluciones constructivas.
            </p>
          </ServiceCard>

          <ServiceCard title="6. Construcción con tecnologías tradicionales y obras civiles complementarias">
            <p>
              Además de nuestras soluciones basadas en tecnologías innovadoras de bajo costo, contamos con amplia experiencia en la construcción de carreteras mediante métodos y tecnologías tradicionales, aplicando procesos que garantizan calidad, durabilidad y cumplimiento normativo.
            </p>
            <ul className="mt-2 list-disc pl-5">
              <li>Mejoramientos mecánicos de subrasantes, compactación y conformación</li>
              <li>Suministro e instalación de capas granulares (subbase, base y seleccionados)</li>
              <li>Suministro, producción e instalación de mezclas asfálticas en caliente</li>
              <li>Construcción de sistemas de acueducto y alcantarillado</li>
              <li>Urbanismos viales: andenes, bordillos, sardineles, accesos y obras complementarias</li>
              <li>Obras de drenaje vial: sumideros, tuberías, cunetas, filtros, disipadores, box culverts</li>
              <li>Obras de contención y manejo de taludes</li>
              <li>Movimientos de tierra: excavaciones, cortes, rellenos y plataformas</li>
            </ul>
            <p className="mt-2">
              Este conjunto de capacidades nos permite desarrollar proyectos viales integrales, combinando la eficiencia de nuevas tecnologías con la solidez y experiencia en métodos constructivos tradicionales.
            </p>
          </ServiceCard>
        </div>
      </Section>

      <Section id="proyectos" title="Proyectos">
        <div className="grid md:grid-cols-2 gap-5">
          <div className="rounded-2xl border p-5 bg-white shadow-sm">
            <h3 className="font-semibold">Nobsa, Boyacá — Contrato RAP 084 de 2023</h3>
            <p className="text-sm mt-1 italic">Intervención en vías urbanas y rurales con mezcla en frío tipo RAP</p>
            <div className="grid grid-cols-2 gap-2 mt-3">
              <img src="/img/RAP_NOBSA_ANTES.jpeg" alt="Antes" className="rounded" />
              <img src="/img/RAP_NOBSA_DESUPUES.jpeg" alt="Después" className="rounded" />
            </div>
            <ul className="list-disc pl-5 text-sm mt-3">
              <li>Recuperación funcional inmediata</li>
              <li>Reducción de costos cercana al 40% frente a tecnologías tradicionales</li>
              <li>Reutilización de materiales y menor impacto ambiental</li>
              <li>Mejor comportamiento superficial y seguridad vial</li>
            </ul>
          </div>

          <div className="rounded-2xl border p-5 bg-white shadow-sm">
            <h3 className="font-semibold">Nobsa, Boyacá — Contrato 497 de 2023</h3>
            <p className="text-sm mt-1 italic">Estabilización química y carpeta en frío con asfalto natural modificado</p>
            <div className="grid grid-cols-2 gap-2 mt-3">
              <img src="/img/497_ANTES.jpg" alt="Antes" className="rounded" />
              <img src="/img/497_DESPUES.jpg" alt="Después" className="rounded" />
            </div>
            <p className="text-sm mt-3">
              Contexto: vías urbanas hacia zonas de crecimiento residencial con obras de contención y drenaje. Solución: estabilización de subrasante con aditivos no tradicionales + carpeta en frío de asfalto natural modificado.
            </p>
            <ul className="list-disc pl-5 text-sm mt-2">
              <li>Incremento de capacidad portante</li>
              <li>Reducción de costos cercana al 40% frente a mezclas en caliente</li>
              <li>Menor tiempo de ejecución y reducción de emisiones</li>
            </ul>
          </div>

          <div className="rounded-2xl border p-5 bg-white shadow-sm">
            <h3 className="font-semibold">Paz de Ariporo, Casanare</h3>
            <p className="text-sm mt-1 italic">Mejoramiento de vías urbanas – Barrios 20 de Julio y El Triunfo</p>
            <div className="grid grid-cols-2 gap-2 mt-3">
              <img src="/img/PAZ_DE_ARIPORO_ANTES.jpg" alt="Antes" className="rounded" />
              <img src="/img/PAZ_DE_ARIPORO_DESPUES.jpg" alt="Después" className="rounded" />
            </div>
            <p className="text-sm mt-3">
              Solución: instalación de base granular, construcción de sardineles y obras de drenaje, y aplicación de carpeta en frío con asfalto natural modificado.
            </p>
            <ul className="list-disc pl-5 text-sm mt-2">
              <li>Vías más limpias, seguras y transitables</li>
              <li>Reducción aproximada del 40% en costos frente a alternativas tradicionales</li>
            </ul>
          </div>

          <div className="rounded-2xl border p-5 bg-white shadow-sm">
            <h3 className="font-semibold">Mapiripán, Meta</h3>
            <p className="text-sm mt-1 italic">Mejoramiento de vía secundaria con estabilización y mezcla en frío</p>
            <div className="grid grid-cols-2 gap-2 mt-3">
              <img src="/img/MAPIRIPAN_ANTES.jpg" alt="Antes" className="rounded" />
              <img src="/img/MAPIRIPAN_DESPUES.jpg" alt="Después" className="rounded" />
            </div>
            <p className="text-sm mt-3">
              Contexto: alto costo de intervención por lejanía de fuentes de materiales y logística de transporte. Solución: conformación de terraplén, estabilización química de la corona y carpeta en frío.
            </p>
            <ul className="list-disc pl-5 text-sm mt-2">
              <li>Ahorro superior al 60% frente a tecnologías tradicionales</li>
              <li>Mejoramiento inmediato de la superficie de rodadura</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section id="por-que" title="¿Por qué Bioproteg?">
        <div className="grid md:grid-cols-2 gap-5">
          <div className="rounded-2xl border p-5 bg-white">
            <h3 className="font-semibold mb-2">Diferenciales técnicos</h3>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>Dominio de estabilización química (cal, polímeros, organosilanos, sales inorgánicas, entre otros).</li>
              <li>Especialistas en diseño con capas estabilizadas y mezclas en frío.</li>
              <li>Estudios geotécnicos, hidrológicos, hidráulicos, topográficos y económicos integrados.</li>
              <li>Aplicación rigurosa de INVIAS 2022, RAS 2017, NSR-10 y normas internacionales aplicables.</li>
            </ul>
          </div>
          <div className="rounded-2xl border p-5 bg-white">
            <h3 className="font-semibold mb-2">Diferenciales económicos</h3>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>Ahorros entre 40% y 60% según el proyecto.</li>
              <li>Optimización de espesores, materiales y tiempos de obra.</li>
              <li>Integración de materiales reciclados como RAP.</li>
              <li>Ahorros logísticos en zonas rurales o de difícil acceso.</li>
            </ul>
          </div>
          <div className="rounded-2xl border p-5 bg-white">
            <h3 className="font-semibold mb-2">Diferenciales ambientales</h3>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>Mezclas en frío y asfaltos naturales modificados (sin calentamiento).</li>
              <li>Reducción de emisiones y consumo energético.</li>
              <li>Reaprovechamiento de materiales fresados (RAP).</li>
              <li>La estabilización química evita explotación, transporte y trituración de materiales granulares, reduciendo huella de carbono y emisiones de material particulado, con ahorros económicos directos en logística y procesamiento.</li>
            </ul>
          </div>
          <div className="rounded-2xl border p-5 bg-white">
            <h3 className="font-semibold mb-2">Diferenciales operativos y de experiencia</h3>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>Más de 20 años de experiencia en obras urbanas y rurales.</li>
              <li>Experiencia en Casanare, Meta, Cundinamarca y Boyacá.</li>
              <li>Capacidad de ejecución con tecnologías tradicionales y de bajo costo.</li>
              <li>Control documental, trazabilidad y evidencia fotográfica/fílmica.</li>
              <li>Procesos aptos para auditorías técnicas claras y verificables.</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section id="conocimiento" title="Conocimiento en Acción">
        <div className="space-y-4 text-sm">
          <p>
            El conocimiento es la base de la ingeniería sostenible. En Bioproteg promovemos la formación técnica, la divulgación de buenas prácticas y el intercambio de experiencias reales en el campo de la infraestructura vial.
          </p>
          <p>
            Conocimiento en Acción es un espacio creado para compartir información, análisis y resultados que impulsen la innovación, la sostenibilidad y la toma de decisiones informadas dentro del sector de la construcción de vías.
          </p>
          <ul className="list-disc pl-5">
            <li><b>Artículos técnicos:</b> estabilización de suelos, mezclas ecológicas, metodologías de diseño y normativas aplicadas.</li>
            <li><b>Podcast técnico “Conocimiento en Acción”:</b> geotecnia vial, pavimentos, sostenibilidad y nuevas tecnologías.</li>
            <li><b>Notas de campo:</b> lecciones aprendidas y evidencias de obra.</li>
          </ul>
        </div>
      </Section>

      <Section id="contacto" title="Contacto">
        <div className="grid md:grid-cols-2 gap-8">
          <form onSubmit={async (e)=>{
            e.preventDefault();
            const f = e.currentTarget;
            const payload = {
              name: f.name.value,
              company: f.company.value,
              email: f.email.value,
              phone: f.phone.value,
              subject: f.subject.value,
              message: f.message.value,
              consent: f.consent.checked
            };
            const res = await fetch('/api/contact', {
              method: 'POST',
              headers: {'Content-Type':'application/json'},
              body: JSON.stringify(payload)
            });
            const data = await res.json();
            const msg = document.getElementById('contactMsg');
            if (data.ok) {
              msg.textContent = '¡Gracias! Recibimos tu mensaje. Pronto te contactaremos.';
              f.reset();
            } else {
              msg.textContent = data.error || 'No se pudo enviar. Intenta más tarde.';
            }
          }} className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Nombre completo</label>
              <input name="name" required className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium">Nombre de la empresa o entidad (opcional)</label>
              <input name="company" className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-2" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">Correo electrónico</label>
                <input name="email" type="email" required className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium">Teléfono (opcional)</label>
                <input name="phone" className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-2" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium">Asunto / Tipo de consulta</label>
              <input name="subject" required className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium">Mensaje</label>
              <textarea name="message" rows="5" required className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-2" />
            </div>

            <div className="flex items-start gap-2 text-sm">
              <input id="consent" name="consent" type="checkbox" required className="mt-1" />
              <label htmlFor="consent" className="text-slate-600">
                Autorizo a Bioproteg S.A.S. para el tratamiento de mis datos personales de acuerdo con la <PrivacyModalLink linkClassName="underline underline-offset-4" /> y la normativa colombiana vigente.
              </label>
            </div>

            <button type="submit" className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold text-white" style={{backgroundColor:'#0F766E'}}>
              Enviar mensaje
            </button>
            <p id="contactMsg" className="text-sm text-slate-600 mt-2"></p>
          </form>

          <div className="space-y-2 text-sm">
            <p><b>Bioproteg S.A.S.</b><br/>Ingeniería geotécnica, pavimentos y soluciones sostenibles</p>
            <p>Teléfono / WhatsApp: +57 317 893 2817</p>
            <p>Correo: contacto@bioproteg.com</p>
            <p>Sitio web: www.bioproteg.com</p>
          </div>
        </div>
      </Section>

      <footer className="py-10 text-sm text-slate-600">
        <div className="flex items-center justify-between border-t pt-6">
          <p>© {new Date().getFullYear()} Bioproteg S.A.S. — Todos los derechos reservados.</p>
          <PrivacyModalLink linkClassName="text-sm underline underline-offset-4" />
        </div>
      </footer>
    </main>
  );
}
