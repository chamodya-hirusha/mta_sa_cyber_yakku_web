import Link from "next/link";

export default function SocialLinks({ socialLinks }) {
  return (
    <div className="flex space-x-4">
      {socialLinks.map((social, index) => (
        <Link
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-purple-900/40 hover:bg-purple-800/60 rounded-lg flex items-center justify-center text-purple-300 hover:text-white transition-all duration-200 hover:scale-110"
          aria-label={`Follow us on ${social.name}`}
        >
          <span className="text-lg">{social.icon}</span>
        </Link>
      ))}
    </div>
  );
}