const ProfileInfo = ({
  user,
}) => {
  return (
    <div className="grid gap-5 md:grid-cols-2">

      <Info
        label="Full Name"
        value={`${user.firstName} ${user.lastName}`}
      />

      <Info
        label="Username"
        value={user.username}
      />

      <Info
        label="Email"
        value={user.email}
      />

      <Info
        label="Phone"
        value={user.phone}
      />

      <Info
        label="Country"
        value={user.country}
      />

      <Info
        label="City"
        value={user.city}
      />

      <Info
        label="Member Since"
        value={user.dateJoined}
      />

      <Info
        label="Account Level"
        value={user.level}
      />

    </div>
  );
};

const Info = ({
  label,
  value,
}) => (
  <div
    className="
      rounded-xl
      border
      border-slate-800
      bg-slate-800/50
      p-4
    "
  >
    <p className="text-xs text-slate-400">
      {label}
    </p>

    <p className="mt-1 font-medium text-white">
      {value}
    </p>
  </div>
);

export default ProfileInfo;