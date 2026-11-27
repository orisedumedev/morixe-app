import { Megaphone } from "lucide-react";

import { usePublicNavbar } from "../hooks";

const AnnouncementBar = () => {
  const {
    announcement,
  } = usePublicNavbar();

  if (
    !announcement?.enabled
  ) {
    return null;
  }

  return (
    <div
      className="
        w-full
        border-b
        border-blue-500/20
        bg-gradient-to-r
        from-blue-600
        via-blue-500
        to-indigo-600
        text-white
      "
    >
      <div
        className="
          mx-auto
          flex
          max-w-7xl
          items-center
          justify-center
          gap-3
          px-6
          py-2.5
          text-sm
          font-medium
        "
      >
        <Megaphone size={16} />

        <span>
          {announcement.text}
        </span>
      </div>
    </div>
  );
};

export default AnnouncementBar;