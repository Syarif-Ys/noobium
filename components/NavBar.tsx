import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MdSearch } from "react-icons/md";
import AccountDropdown from "./AccountDropdown";
import Button from "./Button";

type Props = {
  hasSearchInput?: boolean;
  hasSubmitButton?: boolean;
  isSubmitDisabled?: boolean;
  submitLabel?: string;
  onClickSubmit?: () => void;
};

const NavBar: React.FC<Props> = ({
  hasSearchInput = true,
  hasSubmitButton,
  isSubmitDisabled,
  submitLabel,
  onClickSubmit,
}) => {
  const [keyword, setKeyword] = useState("");
  //const [isDropDownOpen, setIsDropDownOpen] = useState("false");
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const router = useRouter();

  const isLoggedIn = true;

  const user = {
    fullname: "John Doe",
    email: "john.doe@gmail.com",
    photo: null,
    // photo: "/images/dummy-avatar.png",
  };

  const initialFullName = user.fullname
    .split(" ")
    .map((word) => word[0].toUpperCase())
    .join("");

  useEffect(() => {
    //setKeyword((router.query.keyword as string) || "");
    setKeyword((router.query.keyword as string) || "");
  }, [router.query.keyword]);

  return (
    <header className="h-16 border-b border-slate-200 flex items-center justify-between px-24">
      <Link href="/">
        <img src="/images/logo-with-text.svg" />
      </Link>
      {hasSearchInput && (
        <div className="w-[720px] absolute left-1/2 -translate-x-1/2 flex items-center">
          <MdSearch className="text-slate-400 mr-4" size={24} />
          <input
            className="font-sans text-sm placeholder-slate-400 text-slate-900 outline-none"
            type="text"
            placeholder="Search"
            value={keyword}
            onChange={(event) => setKeyword(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                //router.push("/search?keyword=${keyword}");
                router.push(`/search?keyword=${keyword}`);
              }
            }}
          />
        </div>
      )}

      <div className="flex items-center">
        {hasSubmitButton && (
          <>
            <Button
              type="button"
              disabled={isSubmitDisabled}
              onClick={onClickSubmit}
            >
              {submitLabel}
            </Button>
            <div className="w-6" />
          </>
        )}

        {isLoggedIn && (
          <div className="relative">
            <button onClick={() => setIsDropDownOpen(!isDropDownOpen)}>
              {user.photo && (
                <img
                  className="w-10 h-10 rounded-full object-cover"
                  src={user.photo}
                  alt={user.fullname}
                />
              )}

              {!user.photo && (
                <div className="w-10 h-10 rounded-full bg-blue-900 flex justify-center items-center">
                  <p className="font-bold font-sans text-white">
                    {initialFullName}
                  </p>
                </div>
              )}
            </button>
            {isDropDownOpen && <AccountDropdown />}
          </div>
        )}
        {!isLoggedIn && (
          <Link href="/auth/sign-in">
            <Button>Sign In</Button>
          </Link>
        )}
      </div>
    </header>
  );
};

export default NavBar;
