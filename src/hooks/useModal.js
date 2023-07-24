import { useState } from "react";

export function useModal() {
  const [isOpen, setIsOpen] = useState(false);

  const switcher = () => {
    setIsOpen(!isOpen);
  };
  const closer = () => {
    setIsOpen(false);
  };

  return [isOpen, switcher, closer];
}
