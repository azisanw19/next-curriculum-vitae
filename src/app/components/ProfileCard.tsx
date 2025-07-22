import Image from "next/image";
import Link from "next/link";

export default function ProfileCard() {
  return (
    <div className="flex gap-6 text-black">
      <div className="flex-shrink-0">
        <Image
          src="/profile.jpg" // Ganti dengan path gambar kamu
          alt="Aziz Anwar"
          width={160}
          height={160}
          className="rounded-md"
        />
      </div>
      <div className="ml-6 space-y-2">
        <h1 className="text-3xl font-bold">AZIZ ANWAR</h1>
        <p className="text-gray-500">
          +6285701208132 | azisanw19@gmail.com |{' '}
          <Link href="https://linkedin.com/in/aziz-anwar/" target="_blank" className="underline">
            LinkedIn
          </Link>{' '}
          |{' '}
          <Link href="https://github.com/azisanw19" target="_blank" className="underline">
            GitHub
          </Link>{' '}
          |{' '}
          <Link href="https://kaggle.com/azisanw19" target="_blank" className="underline">
            Kaggle
          </Link>
          <br />
          Boyolali, Indonesia
        </p>
        <p className="text-black text-sm">
          Mobile Developer who has expertise in creating mobile applications using Kotlin with
          Declarative UI and Imperative UI. Apart from using the Kotlin programming language, I also
          have expertise in using the Dart language to create mobile applications. Understand
          application design architecture, clean architecture, and SOLID principles. Hard worker and
          able to work in a team or individually. Looking for job opportunities in the mobile
          developer field that provide the opportunity to develop into a professional career.{' '}
          <Link href="/" className="underline font-medium">
            Click here to view my portfolio.
          </Link>
        </p>
      </div>
    </div>
  )
}
