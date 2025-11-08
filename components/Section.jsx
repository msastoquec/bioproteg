
export default function Section({ id, title, children }) {
  return (
    <section id={id} className="py-16 scroll-mt-24">
      {title && <h2 className="text-2xl md:text-3xl font-bold mb-6">{title}</h2>}
      <div className="space-y-4">{children}</div>
    </section>
  );
}
