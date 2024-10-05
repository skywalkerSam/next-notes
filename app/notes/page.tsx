// import PocketBase from 'pocketbase';
import Link from "next/link";
import styles from "./Notes.module.css";
import { GrayscaleSciFiButton } from "@/components/GrayscaleSciFiButton";
import { NoteProps } from "@/lib/noteDefinition";

// export const dynamic = 'auto',
//   dynamicParams = true,
//   revalidate = 0,
//   fetchCache = 'auto',
//   runtime = 'nodejs',
//   preferredRegion = 'auto'

async function getNotes() {
  // const db = new PocketBase('http://127.0.0.1:8090');
  // const result = await db.records.getList('notes');
  const res = await fetch(
    "http://127.0.0.1:8090/api/collections/notes/records?page=1&perPage=33",
    { cache: "no-store" }
  );
  const data = await res.json();
  return data?.items as NoteProps;
}

export default async function AllNotes() {
  const notes = await getNotes();

  return (
    <div>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <div className="inline-flex">
            <h1 className="font-semibold text-4xl m-3 text-gray-400">
              Notes...
            </h1>
            <div className="ml-36">
              <Link href={"/notes/create"}>
                <GrayscaleSciFiButton>➕</GrayscaleSciFiButton>
              </Link>
            </div>
          </div>
          <div className={styles.grid}>
            {notes?.map((note: NoteProps) => {
              return <Note key={note.id} note={note} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function Note({ note }: NoteProps) {
  const { id, title, content } = note || {}; //created

  return (
    <Link href={`/notes/${id}`}>
      <div className={styles.note}>
        <h2 className="m-3 text-gray-400">{title}</h2>
        <h5 className="m-3 text-gray-500">{content}</h5>
        {/* <p>{created}</p> */}
      </div>
    </Link>
  );
}
