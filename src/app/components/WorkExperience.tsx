export default function WorkExperience() {
  return (
    <div className=" border-gray-300 text-black">
      <h2 className="text-2xl font-semibold border-b-2 border-black pb-1 mb-6">
        Work Experiences
      </h2>

      {/* PT Goodeva Merdeka Teknologi */}
      <div className="mb-8">
        <div className="flex justify-between flex-wrap gap-2">
          <div>
            <span className="font-semibold">PT Goodeva Merdeka Teknologi</span>{' '}
            <span className="text-gray-600">- Kota Bekasi, Indonesia</span>
          </div>
          <div className="text-gray-700">Sep 2024 - Now</div>
        </div>
        <div className="italic text-gray-800">Mobile Engineer</div>
        <ul className="list-disc ml-5 mt-2 text-sm text-gray-900">
          <li>Writing and developing code for mobile applications using Kotlin Multiplatform (KMP)</li>
          <li>Implement UI/UX based on designs from the design team using the Jetpack Compose layout system</li>
          <li>Fix bugs and errors found during testing or after the application is released</li>
          <li>Communicate with backend APIs using RESTful APIs</li>
          <li>Implement data encryption, authentication, and API security to prevent data leaks</li>
          <li>Communicate with UI/UX designers, backend engineers, and product managers to ensure development is on track</li>
        </ul>
      </div>

      {/* PT Cipta Anya Nugraha */}
      <div>
        <div className="flex justify-between flex-wrap gap-2">
          <div>
            <span className="font-semibold">PT Cipta Anya Nugraha</span>{' '}
            <span className="text-gray-600">- Kota Semarang, Indonesia</span>
          </div>
          <div className="text-gray-700">Apr 2023 - Jul 2024</div>
        </div>
        <div className="italic text-gray-800">Mobile Developer</div>
        <ul className="list-disc ml-5 mt-2 text-sm text-gray-900">
          <li>Developing and maintaining mobile applications</li>
          <li>Design and implement a secure and flexible mobile application architecture</li>
          <li>Implement good development practices and follow company standards</li>
          <li>Collaborate with design and product teams (project managers) to ensure optimal user experience</li>
          <li>Handling issues and bugs reported by users</li>
          <li>Participate in the development and implementation of new processes and procedures</li>
          <li>Carry out tasks according to the results of meetings with the PIC regarding projects or products</li>
          <li>Carry out system testing and document the system created</li>
          <li>Become a mentor for interns and juniors and provide feedback</li>
        </ul>
      </div>
    </div>
  )
}
