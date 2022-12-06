import Head from "next/head";
import Link from "next/link";
import Button from "../../components/Button";

import NavBar from "../../components/NavBar";
import TextInput from "../../components/TextInput";

const SignInPage = () => {
  return (
    <div>
      <Head>
        <title>Sign In | Noobium</title>
      </Head>

      <NavBar />
      <div className="w-[400px] mx-auto py-24">
        <h1 className="font-sans font-bold text-slate-900 text-5xl text-center mb-4">
          Sign In
        </h1>
        <p className="font-sans text-slate-900 text-center mb-16">
          Fill the form to sign in to your account.
        </p>

        <TextInput
          label="Email Address"
          type="text"
          placeholder="Enter your email address"
          value="hello"
          hasError
          errorMessage="Email is invalid"
        />
        <div className="h-4" />
        <TextInput
          label="Password"
          type="password"
          placeholder="Enter your password"
          value=""
        />
        <div className="h-10" />
        <Button size="large" isFullWidth>
          Sign In
        </Button>
        <p className="text-slate-900 font-sans text-sm text-center mt-8">
          Don&lsquo;t have an account ?{" "}
          <Link href="/auth/sign-up">
            <span className="text-blue-800">Sign up here</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
