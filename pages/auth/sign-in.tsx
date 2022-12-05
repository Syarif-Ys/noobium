import Head from "next/head";
import Button from "../../components/Button";

import NavBar from "../../components/NavBar";

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
        <p className="font-sans text-slate-900 text-center">
          Fill the form to sign in to your account.
        </p>
        <Button size="large" isFullWidth>Sign In</Button>
      </div>
    </div>
  );
};

export default SignInPage;
