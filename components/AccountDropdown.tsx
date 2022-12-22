type Props = {};

const AccountDropdown: React.FC<Props> = ({}) => {
  const user = {
    name: "John Doe",
    email: "john.doe@gmail.com",
  };
  return <div className="w-48 rounded-sm border border-slate-200 absolute bg-white right-0 top-full">
    <div className="p-4">
        <p className="font-sans text-slate-900 font-bold">{user.name}</p>
        <p className="font-sans text-slate-400 text-xs">{user.email}</p>
    </div>

    <div className="p-4">
      
    </div>
  </div>;
};

export default AccountDropdown;
