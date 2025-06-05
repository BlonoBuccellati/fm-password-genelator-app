"use client";

import { toast, Toaster, ToasterProps } from "sonner";

const ToasterDemo = ({ ...props }: ToasterProps) => {
  return (
    <div className="bg-green-200 text-white">
      <Toaster {...props} className="top-0 left-0 bg-green-200" />
      <button
        onClick={() => toast("TEST!")}
        className="bg-white text-green-200"
      >
        ボタン
      </button>
    </div>
  );
};

export { ToasterDemo };
