import { useState } from "react";

export function useToast() {
  const [showCopied, setShowCopied] = useState(false);
  const handlerIconClicked = () => {
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 2000);
  };
  return { showCopied, handlerIconClicked };
}
