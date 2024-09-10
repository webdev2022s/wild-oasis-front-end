"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const name = usePathname();

  const activeFilter = searchParams.get("capacity") || "all";

  const toggleFilterEvent = (filter) => {
    const param = new URLSearchParams(searchParams);

    param.set("capacity", filter);
    router.replace(`${name}?${param.toString()}`);
  };

  return (
    <div className="flex gap-2 ">
      <Button
        toggleFilterEvent={toggleFilterEvent}
        filterParam={"all"}
        activeLink={activeFilter}
      >
        All Cabin
      </Button>
      <Button
        toggleFilterEvent={toggleFilterEvent}
        filterParam={"small"}
        activeLink={activeFilter}
      >
        1&mdash;3 guests
      </Button>
      <Button
        n
        toggleFilterEvent={toggleFilterEvent}
        filterParam={"medium"}
        activeLink={activeFilter}
      >
        4&mdash;7 guests
      </Button>
      <Button
        n
        toggleFilterEvent={toggleFilterEvent}
        filterParam={"large"}
        activeLink={activeFilter}
      >
        8 above guests
      </Button>
    </div>
  );
}

function Button({ children, toggleFilterEvent, filterParam, activeLink }) {
  return (
    <button
      onClick={() => toggleFilterEvent(filterParam)}
      className={`${
        activeLink === filterParam ? "bg-primary-600" : ""
      } hover:bg-primary-700 py-2 px-5 border border-primary-800 `}
    >
      {children}
    </button>
  );
}
