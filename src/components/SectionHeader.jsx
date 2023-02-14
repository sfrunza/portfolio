export default function SectionHeader({ title }) {
  return (
    <div className="mb-10 flex items-center justify-center gap-2">
      <div className="w-4 h-4 bg-orange-500"></div>
      <h1 className="font-bold text-4xl">{title}</h1>
    </div>
  );
}
