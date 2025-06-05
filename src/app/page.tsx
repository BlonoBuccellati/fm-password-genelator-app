import PasswordGenerator from "@/features/password-generator/components/password-generator";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center">
      <PasswordGenerator />
    </div>
  );
}
