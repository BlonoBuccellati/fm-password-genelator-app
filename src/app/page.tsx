import { ToasterDemo } from "@/components/ui/sonner";
import PasswordGenerator from "@/features/password-generator/password-generator";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center">
      <PasswordGenerator />
      <ToasterDemo />
    </div>
  );
}
