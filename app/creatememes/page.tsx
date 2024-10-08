"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";

const Creatememes = ({
  searchParams,
}: {
  searchParams: { id: string; url: string };
}) => {
  const [meme, setMemes] = useState<string | null>(null);
  const text1 = useRef<HTMLInputElement>(null);
  const text2 = useRef<HTMLInputElement>(null);

  const memes = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(text1.current?.value);
    console.log(text2.current?.value);
    const data = await fetch(
      `https://api.imgflip.com/caption_image?template_id=${searchParams.id}&username=mabdullah6600&password=asdfgfdsa123&text0=${text1.current?.value}&text1=${text2.current?.value}`,
      {
        method: "POST",
      }
    );
    const response = await data.json();
    console.log(response);
    setMemes(response.data.url);
  };
  return (
    <>
      <h1 className="text-center mb-6 text-2xl">Create Memes</h1>
      <div className="m-auto w-[100%] sm:w-[500px] border-2 p-3 rounded-md mt-10">
        <Image
          src={searchParams.url}
          alt="memes"
          width={500}
          height={500}
        ></Image>
      </div>
      <br />
      <form onSubmit={memes}>
        <input
          type="text"
          placeholder="Type here"
          ref={text1}
          className="input input-bordered input-success w-full mb-2"
        />
        <input
          type="text"
          ref={text2}
          placeholder="Type here"
          className="input input-bordered input-accent w-full max-w-xs"
        />

        <button type="submit">create meme</button>
        <br />
        {meme ? <Image src={meme} width={200} height={200} alt="meme" /> : null}
      </form>
    </>
  );
};

export default Creatememes;
