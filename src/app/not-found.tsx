'use client'

import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompass } from '@fortawesome/free-solid-svg-icons'

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-lg">
        <h1 className="text-8xl md:text-9xl font-display font-bold text-primary-dark leading-none">
          404
        </h1>
        <h2 className="mt-4 text-2xl md:text-3xl font-display font-semibold text-secondary">
          Page Not Found
        </h2>
        <p className="mt-3 text-body text-lg leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center px-8 py-3 bg-primary-dark text-white font-semibold rounded-full hover:bg-primary transition-all duration-300"
          >
            Back to Home
          </Link>
          <Link
            href="/experiences"
            className="inline-flex items-center gap-2 text-primary-dark font-semibold hover:gap-3 transition-all"
          >
            <FontAwesomeIcon icon={faCompass} className="w-4 h-4" />
            Explore Experiences
          </Link>
        </div>
      </div>
    </main>
  )
}
