"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { GrayscaleSciFiButton } from "@/components/GrayscaleSciFiButton";
import Link from "next/link";
import styled from "@/app/notes/Notes.module.css";

export default function CreateNote() {
  const [noteTitle, setTitle] = useState("");
  const [noteContent, setContent] = useState("");
  // const [media, setMedia] = useState("");
  const [createNote, setCreateNote] = useState(true);

  const router = useRouter();

  const handleCreateNote = () => {
    setCreateNote(false);
  };

  const handleSubmit = async () => {
    const formData = {
      title: noteTitle,
      content: noteContent,
      // media: media,
    };
    // const db = new PocketBase('http://127.0.0.1:8090');

    // await db.records.create('notes', {
    //   title,
    //   content,
    // });

    if (noteTitle !== ""  || noteContent !== "") {
      await fetch("http://127.0.0.1:8090/api/collections/notes/records", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error("Error:", error));
  
      console.log("\nNote created...🎉🎉");
      setContent("");
      setTitle("");
      // setCreateNote(false);
      router.refresh();
    } else {
      alert("Note can't be empty.)")
    }
  };

  return (
    <div>
      {createNote ? (
        <div className="">
          <div className="flex flex-row min-h-screen justify-center items-center">
            <form className={styled.createNote} onSubmit={handleSubmit}>
              <h1 className="text-gray-600">Take a note...</h1>
              <input
                className="bg-transparent mb-6 outline-none text-gray-300"
                type="text"
                placeholder="Title"
                value={noteTitle}
                onChange={(e) => setTitle(e.target.value)}
              />
              <textarea
                className="bg-transparent mb-6 outline-none text-gray-300"
                placeholder="Note..."
                value={noteContent}
                onChange={(e) => setContent(e.target.value)}
              />
              {/* onClick={handleSubmit} */}
              <GrayscaleSciFiButton>
                ✔️
              </GrayscaleSciFiButton>
            </form>
            <Link href={"/notes"}>
              <GrayscaleSciFiButton>🏠</GrayscaleSciFiButton>
            </Link>
          </div>
        </div>
      ) : (
        // <button
        //   type="button"
        //   className="text-3xl float-end m-6"
        //   onClick={() => {
        //     setCreateNote(true);
        //   }}
        // >
        //   +
        // </button>
        <div>
          {/* <Link href={"/notes/create"}>
            <GrayscaleSciFiButton>➕</GrayscaleSciFiButton>
          </Link> */}
          <Link href={"/notes"}>
            <GrayscaleSciFiButton>🏠</GrayscaleSciFiButton>
          </Link>
        </div>
      )}
    </div>
  );
}
