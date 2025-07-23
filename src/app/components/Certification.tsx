export default function Certification() {
  const certifications = [
    {
      title: "Specialized Google Data Analytics",
      issuer: "Coursera",
      date: "Des 2022 - No Expiration Date",
    },
    {
      title: "Accelerating End-to-End Data Science Workflows",
      issuer: "NVIDIA",
      date: "Okt 2021 - No Expiration Date",
    },
    {
      title: "Fundamentals of Accelerated Computing with CUDA Python",
      issuer: "NVIDIA",
      date: "Okt 2021 - No Expiration Date",
    },
    {
      title: "Getting Started with Deep Learning",
      issuer: "NVIDIA",
      date: "Okt 2021 - No Expiration Date",
    },
    {
      title: "Cloud Practitioner Essentials (AWS Cloud Basic Learning)",
      issuer: "Dicoding Indonesia",
      date: "Apr 2023 - Apr 2026",
    },
    {
      title: "Learn Basic Data Visualization",
      issuer: "Dicoding Indonesia",
      date: "May 2021 - May 2024",
    },
    {
      title: "Learn Machine Learning for Beginners",
      issuer: "Dicoding Indonesia",
      date: "May 2021 - May 2024",
    },
    {
      title: "Getting Started Programming With Python",
      issuer: "Dicoding Indonesia",
      date: "May 2021 - May 2023",
    },
    {
      title: "Get Started Programming With Kotlin",
      issuer: "Dicoding Indonesia",
      date: "Apr 2020 - Apr 2023",
    },
    {
      title: "Learn to Make Android Apps for Beginners",
      issuer: "Dicoding Indonesia",
      date: "Agu 2019 - Agu 2022",
    },
  ];

  return (
    <section className="text-black">
      <h2 className="text-2xl font-bold border-b-2 border-black pb-1 mb-4">Certification</h2>
      <ul className="space-y-2">
        {certifications.map((cert, index) => (
          <li key={index} className="flex justify-between gap-4 text-sm sm:text-base">
            <div>
              <span className="font-semibold">{cert.title}</span>{" "}
              <span className="text-gray-500">- {cert.issuer}</span>
            </div>
            <div className="text-gray-700 whitespace-nowrap">{cert.date}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}
