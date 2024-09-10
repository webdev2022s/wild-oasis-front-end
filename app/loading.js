import Spinner from "./_components/Spinner";

export default function Loading() {
  return (
    <div className="absolute top-[40%] right-[50%]">
      <Spinner />
    </div>
  );
}
