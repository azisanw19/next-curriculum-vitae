export default function Project() {
  return (
    <div className="text-black">
      <h2 className="text-2xl font-semibold border-b-2 border-black pb-1 mb-6">Project</h2>

      {/* Project 1 */}
      <div className="mb-6">
        <div className="flex justify-between flex-wrap gap-2">
          <div>
            <span className="font-semibold">KMP Utilities</span>{' '}
            <span className="text-gray-500">- Maven Central</span>
          </div>
          <div className="text-gray-700">Jan 2025</div>
        </div>
        <div className="italic text-gray-800 mb-1">Library Kotlin Multiplatform (KMP)</div>
        <ul className="list-disc ml-5 text-sm text-gray-900">
          <li>
            Kotlin Multiplatform library that simplifies cross-platform development by offering
            utility functions.
          </li>
          <li>Boosts productivity with ready-to-use features for multiple platforms.</li>
        </ul>
      </div>

      {/* Project 2 */}
      <div className="mb-6">
        <div className="flex justify-between flex-wrap gap-2">
          <div>
            <span className="font-semibold">Feinn Money</span>{' '}
            <span className="text-gray-500">- Playstore</span>
          </div>
          <div className="text-gray-700">Jan 2025</div>
        </div>
        <div className="italic text-gray-800 mb-1">Kotlin Android</div>
        <ul className="list-disc ml-5 text-sm text-gray-900">
          <li>
            Financial recording app to help users manage and monitor finances efficiently.
          </li>
          <li>
            Comes with intuitive UI and advanced features to support financial goal achievement.
          </li>
        </ul>
      </div>

      {/* Project 3 */}
      <div className="mb-6">
        <div className="flex justify-between flex-wrap gap-2">
          <div>
            <span className="font-semibold">Pengawas Smartsafety</span>
          </div>
          <div className="text-gray-700">Dec 2024</div>
        </div>
        <div className="italic text-gray-800 mb-1">Kotlin Multiplatform (KMP)</div>
        <ul className="list-disc ml-5 text-sm text-gray-900">
          <li>
            Assists supervisors in monitoring and analyzing worker performance and conditions in
            mining.
          </li>
          <li>Provides fatigue warnings and analyzes fatigue levels based on work/sleep data.</li>
          <li>
            Aims to improve safety and reduce accidents due to fatigue in mining environments.
          </li>
        </ul>
      </div>

      {/* Project 4 */}
      <div className="mb-6">
        <div className="flex justify-between flex-wrap gap-2">
          <div>
            <span className="font-semibold">Scroll Time Picker</span>{' '}
            <span className="text-gray-500">- Pub.dev</span>
          </div>
          <div className="text-gray-700">Feb 2024</div>
        </div>
        <div className="italic text-gray-800 mb-1">Library Flutter</div>
        <ul className="list-disc ml-5 text-sm text-gray-900">
          <li>A scroll time picker widget for Flutter</li>
        </ul>
      </div>

      {/* Project 5 */}
      <div className="mb-6">
        <div className="flex justify-between flex-wrap gap-2">
          <div>
            <span className="font-semibold">Pagination Scroll View</span>{' '}
            <span className="text-gray-500">- Pub.dev</span>
          </div>
          <div className="text-gray-700">Jan 2024</div>
        </div>
        <div className="italic text-gray-800 mb-1">Library Flutter</div>
        <ul className="list-disc ml-5 text-sm text-gray-900">
          <li>Pagination Scroll View Widget for Flutter</li>
        </ul>
      </div>

      {/* Project 6 */}
      <div className="mb-6">
        <div className="flex justify-between flex-wrap gap-2">
          <div>
            <span className="font-semibold">Nest Gym</span>
          </div>
          <div className="text-gray-700">Feb 2024</div>
        </div>
        <div className="italic text-gray-800 mb-1">Flutter</div>
        <ul className="list-disc ml-5 text-sm text-gray-900 space-y-1">
          <li>Business app for gym with member registration, QR entry, payments, and activity history</li>
          <li>Uses Bloc for state management and Enviied to manage API keys/config</li>
          <li>Uses Auto Route for easy routing and Get Storage for local data</li>
          <li>Implements dependency injection using Get It</li>
          <li>Shows local notifications via Firebase Cloud Messaging</li>
          <li>Controls dynamic links with Uni Links</li>
          <li>Connects to RESTful API using Retrofit</li>
          <li>Implements real-time features via Socket</li>
          <li>Supports Firebase Auth (Google, phone, Apple ID)</li>
          <li>Uses Firebase Crashlytics to monitor errors and bugs</li>
        </ul>
      </div>

      {/* Project 7 */}
      <div className="mb-6">
        <div className="flex justify-between flex-wrap gap-2">
          <div>
            <span className="font-semibold">Kontenpedia</span>
          </div>
          <div className="text-gray-700">Sep 2023</div>
        </div>
        <div className="italic text-gray-800 mb-1">Flutter</div>
        <ul className="list-disc ml-5 text-sm text-gray-900 space-y-1">
          <li>News application to get the latest information and videos from news providers</li>
          <li>Uses shared preferences for storing simple data like login auth</li>
          <li>Supports dark/light mode based on user preference</li>
          <li>Uses local notifications for Firebase cloud messaging or scheduled reminders</li>
          <li>Handles deep links via Uni Links</li>
          <li>Logs app errors with Firebase Crashlytics</li>
        </ul>
      </div>

      {/* Project 8 */}
      <div className="mb-6">
        <div className="flex justify-between flex-wrap gap-2">
          <div>
            <span className="font-semibold">Buku Saku Pemilu</span>
          </div>
          <div className="text-gray-700">Jul 2023</div>
        </div>
        <div className="italic text-gray-800 mb-1">Kotlin Android</div>
        <ul className="list-disc ml-5 text-sm text-gray-900 space-y-1">
          <li>Election book app to display and record events during election</li>
          <li>Uses DataStore to save user preferences</li>
          <li>Uses Room (SQLite) for storing notes and content</li>
          <li>Loads images from stored paths</li>
          <li>Implements dependency injection with Dagger Hilt</li>
          <li>Uses pdf.js, turn.js, and jQuery for flipbook animation and JavaScript interop</li>
          <li>Applies MVVM architecture for feature expansion and better code separation</li>
        </ul>
      </div>

      {/* Project 9 */}
      <div className="mb-6">
        <div className="flex justify-between flex-wrap gap-2">
          <div>
            <span className="font-semibold">Jaktivity</span>
          </div>
          <div className="text-gray-700">Apr 2023</div>
        </div>
        <div className="italic text-gray-800 mb-1">Kotlin Android</div>
        <ul className="list-disc ml-5 text-sm text-gray-900 space-y-1">
          <li>Records walking, running, and cycling activities, tracking pace, steps, time, and trip history</li>
          <li>Sports activities give points that can be exchanged for rewards</li>
          <li>Uses Firebase Auth with Google/phone number login</li>
          <li>Receives backend notifications using Firebase Messaging</li>
          <li>REST API communication using Retrofit</li>
          <li>Uses Paging 3 for efficient data pagination</li>
          <li>Displays maps and current position using Google Maps and GPS</li>
          <li>Uses movement sensor or distance estimation to calculate step count</li>
        </ul>
      </div>

      {/* Project 10 */}
      <div className="mb-6">
        <div className="flex justify-between flex-wrap gap-2">
          <div>
            <span className="font-semibold">Trends ML & DS 2019 to 2022</span> <span className="text-gray-500">- Kaggle</span>
          </div>
          <div className="text-gray-700">Nov 2022</div>
        </div>
        <div className="italic text-gray-800 mb-1">Data Science</div>
        <ul className="list-disc ml-5 text-sm text-gray-900 space-y-1">
          <li>Trend analysis of machine learning and deep learning from a Kaggle survey</li>
        </ul>
      </div>

      {/* Project 11 */}
      <div className="mb-6">
        <div className="flex justify-between flex-wrap gap-2">
          <div>
            <span className="font-semibold">Pos Tagging LSTM</span> <span className="text-gray-500">- Kaggle</span>
          </div>
          <div className="text-gray-700">Oct 2022</div>
        </div>
        <div className="italic text-gray-800 mb-1">Deep Learning</div>
        <ul className="list-disc ml-5 text-sm text-gray-900 space-y-1">
          <li>Doing in-depth learning of the text English Language Learning from grades 8–12 using POS Tagging and LSTM to measure proficiency in essay writing</li>
          <li>Get MCRMSE score of 0.59</li>
        </ul>
      </div>

      {/* Project 12 */}
      <div className="mb-6">
        <div className="flex justify-between flex-wrap gap-2">
          <div>
            <span className="font-semibold">Analisis FOMO pada Media Sosial</span> <span className="text-gray-500">- Kaggle</span>
          </div>
          <div className="text-gray-700">Sep 2022</div>
        </div>
        <div className="italic text-gray-800 mb-1">Data Science</div>
        <ul className="list-disc ml-5 text-sm text-gray-900 space-y-1">
          <li>Analyze FOMO from surveys</li>
        </ul>
      </div>

      {/* Project 13 */}
      <div className="mb-6">
        <div className="flex justify-between flex-wrap gap-2">
          <div>
            <span className="font-semibold">Class Reminder</span> <span className="text-gray-500">- Github</span>
          </div>
          <div className="text-gray-700">Nov 2020</div>
        </div>
        <div className="italic text-gray-800 mb-1">Kotlin Android</div>
        <ul className="list-disc ml-5 text-sm text-gray-900 space-y-1">
          <li>Class Reminder is the perfect companion for school, college or university. With class reminders, you can manage weekly schedules, assignments, and take notes.</li>
          <li>It&rsquo;s a simple, practical and modern interface, planning your time has never been easier!</li>
          <li>Class Reminder shows notifications 1 hour before your class and 1 day before your homework or assignment</li>
          <li>Always keep in mind upcoming schedules with schedule widget</li>
          <li>Can take simple notes with a simple interface</li>
          <li>Using sqlite database to store data</li>
          <li>There is a widget that makes it easy to see the schedule</li>
        </ul>
      </div>

      {/* Project 14 */}
      <div className="mb-6">
        <div className="flex justify-between flex-wrap gap-2">
          <div>
            <span className="font-semibold">Study Point</span> <span className="text-gray-500">- Github</span>
          </div>
          <div className="text-gray-700">Nov 2020</div>
        </div>
        <div className="italic text-gray-800 mb-1">Kotlin Android</div>
        <ul className="list-disc ml-5 text-sm text-gray-900 space-y-1">
          <li>Study Point is an application that connects teachers and students where the teacher is the creator of the questions and the students are the students who will work on the questions with reward points.</li>
          <li>Using firebase authentication and firebase datastore</li>
        </ul>
      </div>


    </div>
  )
}
