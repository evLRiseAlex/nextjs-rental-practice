"use client";

// import {
//   useRouter,
//   useParams,
//   useSearchParams,
//   usePathname,
// } from "next/navigation";

const PropertyPage = () => {
  // const router = useRouter();
  // const { id } = useParams();
  // const searchParams = useSearchParams();
  // const name = searchParams.get("name");
  // const pathName = usePathname();

  console.log("Hello");
  return (
    <div>
      PropertyPageID
      {/* <button
        onClick={() => router.push("/")}
        className="bg-blue-500 p-2 cursor-pointer"
      >
        Go Home {id} {name} {pathName}
      </button> */}
    </div>
  );
};

export default PropertyPage;
