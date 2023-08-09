import { useEffect, useState } from "react";

export function useModal() {
  const [isOpen, setIsOpen] = useState(false);

  const switcher = () => {
    console.log("모달 스위처!");
    setIsOpen((prev) => !prev);
  };
  const closer = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);

  return [isOpen, switcher, closer];
}
