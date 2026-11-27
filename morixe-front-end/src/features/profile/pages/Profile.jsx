import {
  useState,
} from "react";

import {
  ProfileHeader,
  ProfileStatistics,
  ProfileSecurity,
  ProfilePreferences,
  ProfileActivity,
  ProfileVerification,
  ProfileEditModal,
} from "../components";

import {
  useProfile,
} from "../hooks";

const Profile = () => {
  const {
    loading,

    user,

    statistics,

    security,

    preferences,

    activity,

    verification,

    updateProfile,
  } = useProfile();

  const [isEditOpen, setIsEditOpen] =
    useState(false);

  return (
    <div className="space-y-6">

      {/* Header */}

      <div>

        <h1 className="text-3xl font-bold text-white">
          Profile
        </h1>

        <p className="mt-1 text-slate-400">
          Manage your personal information,
          security settings, preferences,
          and account verification.
        </p>

      </div>

      {/* Profile Header */}

      <ProfileHeader
        user={user}
        onEdit={() =>
          setIsEditOpen(true)
        }
      />

      {/* Statistics */}

      <ProfileStatistics
        statistics={statistics}
        loading={loading}
      />

      {/* Security & Preferences */}

      <div className="grid gap-6 xl:grid-cols-2">

        <ProfileSecurity
          security={security}
        />

        <ProfilePreferences
          preferences={preferences}
        />

      </div>

      {/* Verification & Activity */}

      <div className="grid gap-6 xl:grid-cols-2">

        <ProfileVerification
          verification={verification}
        />

        <ProfileActivity
          activity={activity}
        />

      </div>

      {/* Edit Profile Modal */}

      <ProfileEditModal
        open={isEditOpen}
        user={user}
        onClose={() =>
          setIsEditOpen(false)
        }
        onSave={updateProfile}
      />

    </div>
  );
};

export default Profile;