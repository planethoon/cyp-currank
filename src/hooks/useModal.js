import { useEffect, useState } from "react";

export function useModal() {
  const [isOpen, setIsOpen] = useState(false);

  const switcher = () => {
    setIsOpen((prev) => !prev);
  };
  const closer = () => {
    setIsOpen(false);
  };

  return [isOpen, switcher, closer];
}
