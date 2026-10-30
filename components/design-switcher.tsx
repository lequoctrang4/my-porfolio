import Link from "next/link";
import { designs, type Design } from "@/lib/designs";

export function DesignSwitcher({ design }: { design: Design }) {
  return (
    <nav className="design-switcher" aria-label="Portfolio design">
      <span className="design-label">Change the scene</span>
      <div className="design-options">
        {designs.map((item) => (
          <Link key={item.id} href={`/${item.id}/`} aria-current={design === item.id ? "page" : undefined}>
            <span className="design-number">{item.label}</span> {item.name}
            {design === item.id && <span className="design-dot" aria-hidden="true" />}
          </Link>
        ))}
      </div>
    </nav>
  );
}
