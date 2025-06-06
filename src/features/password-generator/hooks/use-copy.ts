import { useState } from "react";

export function useCopy(resultPassword: string) {
  const [showCopied, setShowCopied] = useState(false);

  const handlerIconClicked = async () => {
    try {
      await navigator.clipboard.writeText(resultPassword);
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 1000);
    } catch (err) {
      console.log("コピーに失敗しました。", err);
      alert("コピーに失敗しました。");
    }
  };

  return { showCopied, handlerIconClicked };
}
