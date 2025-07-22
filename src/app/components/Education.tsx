export default function Education() {
  return (
    <div className="border-gray-300 text-black">
      <h2 className="text-2xl font-semibold border-b-2 border-black pb-1 mb-6">
        Education Level
      </h2>

      {/* Universitas Gadjah Mada */}
      <div className="mb-8">
        <div className="flex justify-between flex-wrap gap-2">
          <div>
            <span className="font-semibold">Universitas Gadjah Mada</span>{' '}
            <span className="text-gray-500">- Yogyakarta, Indonesia</span>
          </div>
          <div className="text-gray-700">Aug 2018 – Feb 2023</div>
        </div>
        <div className="italic text-gray-800">Bachelor Degree in Computer Science, 3.80/4.0</div>
        <ul className="list-disc ml-5 mt-2 text-sm text-gray-900">
          <li>Graduated with cum laude predicate</li>
          <li>Main focus on programming, artificial intelligence, and software development</li>
          <li>
            Completed a thesis entitled "Classification of Water Quality Using Fuzzy LNF-FE and ANN."
          </li>
        </ul>
      </div>

      {/* SMA Negeri 1 Boyolali */}
      <div>
        <div className="flex justify-between flex-wrap gap-2">
          <div>
            <span className="font-semibold">SMA Negeri 1 Boyolali</span>{' '}
            <span className="text-gray-500">- Boyolali, Indonesia</span>
          </div>
          <div className="text-gray-700">Jun 2016 – May 2018</div>
        </div>
        <div className="italic text-gray-800">High School in Science, 91/100</div>
        <ul className="list-disc ml-5 mt-2 text-sm text-gray-900">
          <li>Attended the Kelas Cerdas Cepat Program to graduate in 2 Years</li>
        </ul>
      </div>
    </div>
  )
}
