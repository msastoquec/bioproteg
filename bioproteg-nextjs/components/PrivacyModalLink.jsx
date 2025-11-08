
"use client";
import { useState } from "react";

export default function PrivacyModalLink({ linkClassName }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button type="button" className={linkClassName || "underline underline-offset-4"} onClick={()=>setOpen(true)}>
        Política de Tratamiento de Datos Personales
      </button>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50" onClick={()=>setOpen(false)} />
          <div className="relative z-10 max-h-[85vh] w-[min(900px,92vw)] overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-xl font-semibold">Política de Tratamiento de Datos Personales — Bioproteg S.A.S.</h2>
              <button className="rounded-full px-3 py-1 border" onClick={()=>setOpen(false)}>×</button>
            </div>
            <div className="prose max-w-none prose-p:leading-relaxed mt-4 text-sm text-slate-700">
              <p>Bioproteg S.A.S., identificada con NIT [●], en cumplimiento de la Ley 1581 de 2012 y el Decreto 1377 de 2013, adopta la presente política para garantizar la protección y buen uso de los datos personales.</p>
              <h3 className="text-base font-semibold mt-4">Finalidades del tratamiento</h3>
              <ul className="list-disc pl-5">
                <li>Atender solicitudes, cotizaciones o consultas.</li>
                <li>Enviar información sobre servicios, proyectos, publicaciones y eventos.</li>
                <li>Gestionar relaciones comerciales, contractuales o laborales.</li>
                <li>Cumplir obligaciones legales, contables y tributarias.</li>
                <li>Conservar registros históricos y estadísticos.</li>
              </ul>
              <h3 className="text-base font-semibold mt-4">Derechos del titular</h3>
              <ul className="list-disc pl-5">
                <li>Conocer, actualizar y rectificar sus datos.</li>
                <li>Solicitar prueba de la autorización otorgada.</li>
                <li>Ser informado del uso de sus datos.</li>
                <li>Revocar la autorización y/o solicitar supresión de datos.</li>
              </ul>
              <h3 className="text-base font-semibold mt-4">Contacto para ejercer derechos</h3>
              <p>Correo: <b>contacto@bioproteg.com</b> — Asunto: “Datos personales”. Tel.: +57 317 893 2817.</p>
              <p>Vigencia: desde la fecha de publicación en www.bioproteg.com. Cualquier cambio será informado en el sitio.</p>
            </div>
            <div className="mt-6 flex justify-end">
              <button className="rounded-xl border px-4 py-2" onClick={()=>setOpen(false)}>Cerrar</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
