import {
  Edit3,
  ShieldCheck,
} from "lucide-react";

import ProfileAvatar from "./ProfileAvatar";
import ProfileInfo from "./ProfileInfo";

const ProfileHeader = ({
  user,
  onEdit,
}) => {
  if (!user) return null;

  return (
    <div
      className="
        rounded-2xl
        border
        border-slate-800
        bg-slate-900
        p-6
      "
    >
      {/* Top */}

      <div
        className="
          flex
          flex-col
          gap-6
          lg:flex-row
          lg:items-center
          lg:justify-between
        "
      >
        <div
          className="
            flex
            flex-col
            gap-6
            md:flex-row
            md:items-center
          "
        >
          <ProfileAvatar
            user={user}
            onEdit={onEdit}
          />

          <div>

            <div className="flex items-center gap-3">

              <h2 className="text-3xl font-bold text-white">
                {user.firstName} {user.lastName}
              </h2>

              <span
                className="
                  rounded-full
                  bg-emerald-500/10
                  px-3
                  py-1
                  text-xs
                  font-medium
                  text-emerald-400
                "
              >
                Verified
              </span>

            </div>

            <p className="mt-2 text-slate-400">
              @{user.username}
            </p>

            <p className="mt-1 text-slate-400">
              {user.email}
            </p>

            <div
              className="
                mt-4
                flex
                items-center
                gap-2
                text-sm
                text-emerald-400
              "
            >
              <ShieldCheck size={18} />

              Account Verified

            </div>

          </div>

        </div>

        <button
          type="button"
          onClick={onEdit}
          className="
            flex
            items-center
            gap-2
            rounded-xl
            bg-blue-600
            px-5
            py-3
            font-medium
            text-white
            transition
            hover:bg-blue-500
          "
        >
          <Edit3 size={18} />

          Edit Profile

        </button>

      </div>

      {/* Information */}

      <div className="mt-8">

        <ProfileInfo
          user={user}
        />

      </div>

    </div>
  );
};

export default ProfileHeader;