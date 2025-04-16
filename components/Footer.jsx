import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black py-6">
      <div className="container mx-auto px-6 flex flex-col items-center md:flex-row md:justify-between">
        <p className="text-white text-sm text-center">
          &copy; {new Date().getFullYear()} Devils Ad Astra. All rights
          reserved.
        </p>
        <div className="flex flex-col items-center space-y-4 mt-4 md:mt-0 md:flex-row md:space-y-0 md:space-x-4">
          <Link
            href="mailto:devils.adastra@gmail.com"
            className="text-white hover:text-gray-400 text-sm"
          >
            Email
          </Link>
          <Link
            href="https://asu.campuslabs.com/engage/organization/devilsadastra"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 text-sm"
          >
            Sun Devil Sync
          </Link>
          <Link
            href="https://instagram.com/adastradevils"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 text-sm"
          >
            Instagram
          </Link>
          <Link
            href="https://www.youtube.com/@devilsadastra"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 text-sm"
          >
            YouTube
          </Link>
          <Link
            href="https://x.com/devilsadastra"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 text-sm"
          >
            X
          </Link>
          <Link
            href="https://www.linkedin.com/in/devils-ad-astra/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 text-sm"
          >
            LinkedIn
          </Link>
          <Link
            href="https://github.com/devilsadastra"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 text-sm"
          >
            GitHub
          </Link>
        </div>
      </div>
    </footer>
  );
}
