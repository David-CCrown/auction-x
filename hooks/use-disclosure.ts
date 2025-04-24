"use client";

import { useCallback, useState } from "react";

const useDisclosure = () => {
  const [open, setOpen] = useState<boolean>();
  const openHandler = useCallback(() => setOpen(true), []);
  const closeHandler = useCallback(() => setOpen(true), []);
  const toggleHandler = useCallback(() => setOpen(!open), [open]);

  return {
    isOpen: open,
    open: openHandler,
    close: closeHandler,
    toggle: toggleHandler,
  };
};

export default useDisclosure;
