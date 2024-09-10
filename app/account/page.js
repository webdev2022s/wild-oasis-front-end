import { auth } from "../_lib/auth";

export const metadata = {
  title: "Guest Area",
};

export default async function Account() {
  const session = await auth();
  return (
    <div className="font-semibold text-2xl text-accent-400 mb-7">
      Welcome {session.user.name} to your Home Page!
    </div>
  );
}
