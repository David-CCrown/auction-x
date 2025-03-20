"use client";

import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

interface QueryDialogDisclosureI {
  searchParam: string;
}

interface QueryDialogDisclosureO {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
}

const useQueryDialogDisclosure = (
  options: QueryDialogDisclosureI
): QueryDialogDisclosureO => {
  const [open, setOpen] = useState<boolean>(false);
  const openHandler = useCallback(() => {
    const url = new URL(window.location.href);
    url.searchParams.set(options.searchParam, "true");
    window.history.pushState({}, "", url);
    setOpen(true);
  }, [options.searchParam]);

  const closeHandler = useCallback(() => {
    const url = new URL(window.location.href);
    url.searchParams.delete(options.searchParam);
    window.history.pushState({}, "", url);

    setOpen(false);
  }, [options.searchParam]);

  const toggleHandler = useCallback(() => {
    if (open) {
      closeHandler();
    } else {
      openHandler();
    }
  }, [open]);

  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.has(options.searchParam)) {
      if (!open) {
        setOpen(true);
      }
    } else {
      if (open) {
        setOpen(false);
      }
    }
  }, [searchParams]);

  return {
    isOpen: open,
    open: openHandler,
    close: closeHandler,
    toggle: toggleHandler,
  };
};

export default useQueryDialogDisclosure;
