import AuthForm from "../components/AuthForm";

export default function AuthPage({ onAuthSuccess }) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <AuthForm onSuccess={onAuthSuccess} />
    </div>
  );
}
