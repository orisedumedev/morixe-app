import {
  useEffect,
  useState,
} from "react";

import { appFooterService } from "../services";

const useAppFooter = () => {
  const [footer, setFooter] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    let mounted = true;

    const loadFooter = async () => {
      try {
        const data =
          await appFooterService.getFooter();

        if (mounted) {
          setFooter(data);
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    loadFooter();

    return () => {
      mounted = false;
    };
  }, []);

  return {
    loading,

    version:
      footer?.version ?? "",

    apiStatus:
      footer?.apiStatus ?? "",

    serverStatus:
      footer?.serverStatus ?? "",

    region:
      footer?.region ?? "",

    links:
      footer?.links ?? [],

    copyright:
      footer?.copyright ?? "",
  };
};

export default useAppFooter;