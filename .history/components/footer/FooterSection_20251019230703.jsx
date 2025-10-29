import Link from "next/link";

export default function FooterSection({ section }) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-white">{section.title}</h3>
      <ul className="space-y-2">
        {section.links.map((link, index) => (
          <li key={index}>
            <Link
              href={link.href}
              className="text-purple-300 hover:text-white transition-colors duration-200 text-sm"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}