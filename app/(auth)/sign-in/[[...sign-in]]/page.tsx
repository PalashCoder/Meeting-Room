import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <main className="flex h-screen w-full items-center justify-center">
      <SignIn path="/sign-in" routing="path" />
    </main>
  );
};

export default SignInPage;
