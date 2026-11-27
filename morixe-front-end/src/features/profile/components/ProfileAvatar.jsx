import { Camera } from "lucide-react";

const ProfileAvatar = ({
  user,
  onEdit,
}) => {
  return (
    <div className="relative">

      <img
        src={user?.avatar}
        alt={user?.firstName}
        className="
          h-28
          w-28
          rounded-full
          border-4
          border-slate-800
          object-cover
        "
      />

      <button
        type="button"
        onClick={onEdit}
        className="
          absolute
          bottom-0
          right-0
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          bg-blue-600
          text-white
          transition
          hover:bg-blue-500
        "
      >
        <Camera size={18} />
      </button>

    </div>
  );
};

export default ProfileAvatar;