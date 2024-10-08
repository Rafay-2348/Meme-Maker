// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// const Page = async () => {
//   const data = await fetch("https://api.imgflip.com/get_memes");
//   const response = await data.json();
//   console.log(response.data.memes);
//   interface Memes {
//     id: string;
//     name: string;
//     url: string;
//   }
//   return (
//     <>
//       <h1 className="text-center text-xl mt-4">Meme Maker</h1>
//       {response.data.memes.map((item: Memes) => {
//         return;
//         <div key={item.id}>
//           <Image src={item.url} alt="memes" width={200} height={200} />
//           <button>
//             <Link
//               href={{
//                 pathname: "cretememes",
//                 query: {
//                   url: "creatememes",
//                   id: "item.id",
//                 },
//               }}
//             >
//               Generate Meme
//             </Link>
//           </button>
//         </div>;
//       })}
//     </>
//   );
// };

// export default Page;

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Page = async () => {
  const data = await fetch("https://api.imgflip.com/get_memes");
  const response = await data.json();
  console.log(response.data.memes);

  interface Memes {
    id: string;
    name: string;
    url: string;
  }

  return (
    <>
      <h1 className="text-center ">Meme Maker</h1>
      <div className="flex justify-center gap-5 flex-wrap">
        {response.data.memes.map((item: Memes) => {
          return (
            <div
              key={item.id}
              className="shadow-md p-5 m-2 flex justify-start items-center flex-col gap-3 "
            >
              <Image
                src={item.url}
                width={350}
                height={350}
                style={{
                  width: "350px",
                  height: "350px",
                  objectFit: "cover", // Adjusts how the image fits into the container
                }}
                alt="item.name"
              />

              <Link
                href={{
                  pathname: "creatememes/",
                  query: {
                    url: item.url,
                    id: item.id,
                    name: item.name,
                  },
                }}
              >
                <button className="btn btn-outline btn-primary w-full">
                  generate Meme
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Page;
