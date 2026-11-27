import {
  useEffect,
  useState,
} from "react";

import profileService from "../services/profileService";

const useProfile = () => {
  const [loading, setLoading] =
    useState(true);

  const [user, setUser] =
    useState(null);

  const [statistics, setStatistics] =
    useState(null);

  const [security, setSecurity] =
    useState(null);

  const [preferences, setPreferences] =
    useState(null);

  const [activity, setActivity] =
    useState([]);

  const [verification, setVerification] =
    useState(null);

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    setLoading(true);

    try {
      const data =
        await profileService.getProfile();

      setUser(data.user);

      setStatistics(data.statistics);

      setSecurity(data.security);

      setPreferences(data.preferences);

      setActivity(data.activity);

      setVerification(data.verification);
    } finally {
      setLoading(false);
    }
  };

  const updateProfile =
    async (updates) => {
      const updatedUser =
        await profileService.updateProfile(
          updates
        );

      setUser(updatedUser);
    };

  return {
    loading,

    user,

    statistics,

    security,

    preferences,

    activity,

    verification,

    updateProfile,

    reload: loadProfile,
  };
};

export default useProfile;