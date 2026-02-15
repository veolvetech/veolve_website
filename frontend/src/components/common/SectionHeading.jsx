export default function SectionHeading({ title, subtitle }) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl font-semibold">{title}</h2>
      {subtitle && (
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}
