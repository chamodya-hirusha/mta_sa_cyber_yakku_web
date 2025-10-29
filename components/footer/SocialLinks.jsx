import Link from "next/link";
import { FaDiscord, FaTwitter, FaYoutube, FaInstagram, FaGoogle } from "react-icons/fa";

const iconMap = {
  Discord: FaDiscord,
  Twitter: FaTwitter,
  YouTube: FaYoutube,
  Instagram: FaInstagram,
  Google: FaGoogle,
};

export default function SocialLinks({ socialLinks }) {
  return (
    <div className="flex space-x-4">
      {socialLinks.map((social, index) => {
        const IconComponent = iconMap[social.name];
        return (
          <Link
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-gradient-to-br from-purple-600/50 to-fuchsia-600/50 hover:from-purple-500/70 hover:to-fuchsia-500/70 rounded-xl flex items-center justify-center text-purple-200 hover:text-white transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-purple-500/50 border border-purple-500/30 hover:border-purple-400/50"
            aria-label={`Follow us on ${social.name}`}
          >
            {IconComponent && <IconComponent className="text-xl" />}
          </Link>
        );
      })}
    </div>
  );
}