import {
  useEffect,
  useState,
} from "react";

import { publicFooterService } from "../services";

const usePublicFooter = () => {
  const [footer, setFooter] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    let mounted = true;

    const loadFooter = async () => {
      try {
        const data =
          await publicFooterService.getFooter();

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

    brand:
      footer?.brand ?? {},

    sections:
      footer?.sections ?? [],

    socials:
      footer?.socials ?? [],

    bottomLinks:
      footer?.bottomLinks ?? [],

    copyright:
      footer?.copyright ?? "",
  };
};

export default usePublicFooter;