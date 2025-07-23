import ProfileCard from "@/app/components/ProfileCard";
import WorkExperience from "@/app/components/WorkExperience";
import Education from "@/app/components/Education";
import Project from "@/app/components/Project";
import Certification from "@/app/components/Certification";

export default function Home() {
  return (
    <main className="min-h-screen p-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-md p-6 space-y-8">
        <ProfileCard />
        <WorkExperience />
        <Education />
        <Project />
        <Certification />
      </div>
    </main>
  )
}
