import Link from "next/link";
import { VscChevronRight } from "react-icons/vsc";

export type Crumb = { label: string; href?: string };

export default function Breadcrumbs({
  items,
  className = "",
}: {
  items: Crumb[];
  className?: string;
}) {
  return (
    <ol
      itemScope
      itemType="https://schema.org/BreadcrumbList"
      className={`flex items-center whitespace-nowrap overflow-auto gap-2 lg:gap-3 text-black/60 text-sm lg:text-base container-block my-4 lg:my-6 ${className}`}
    >
      {items.map((item, i) => {
        const pos = i + 1;
        const isLast = i === items.length - 1;
        return (
          <li
            key={`${item.label}-${i}`}
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
            className="flex items-center gap-0.5 lg:gap-1"
          >
            {item.href && !isLast ? (
              <Link
                itemProp="item"
                href={item.href}
                className="hover:text-black capitalize"
              >
                <span itemProp="name">{item.label}</span>
                <meta itemProp="position" content={String(pos)} />
              </Link>
            ) : (
              <>
                <span itemProp="name" className="capitalize">
                  {item.label}
                </span>
                <meta itemProp="position" content={String(pos)} />
              </>
            )}
            {!isLast && (
              <VscChevronRight
                className="size-3.5 lg:size-4"
                aria-hidden="true"
              />
            )}
          </li>
        );
      })}
    </ol>
  );
}
