import { PasswordGenerator } from "@/features/password-generator/components";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center">
      <PasswordGenerator />
    </div>
  );
}
