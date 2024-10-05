import { GrayscaleSciFiButton } from "@/components/GrayscaleSciFiButton";
import styles from "../Notes.module.css";
import Link from "next/link";

async function getNote(noteId: string) {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/notes/records/${noteId}`,
    {
      next: { revalidate: 10 }, //10
    }
  );
  const data = await res.json();
  return data;
}

export default async function NotePage({ params }: any) {
  const note = await getNote(params.id);

  return (
    <div>
      {/* <div className={styles.note}>
        <h3>{note.title}</h3>
        <h5>{note.content}</h5>
        <p>{note.created}</p>
        </div> */}
      <h1 className="m-3 text-gray-600">notes/{note.id}</h1>
      <div className="flex flex-row min-h-screen justify-center items-center">
        <div className={styles.singleNote}>
          <h2 className="m-3 text-gray-500">{note.title}</h2>
          <h5 className="ml-3 mb-9 text-gray-400">{note.content}</h5>
          <small className="ml-96 text-gray-600">{note.created}</small>
        </div>
        <div>
          <Link href={"/"}>
            <GrayscaleSciFiButton>🏠</GrayscaleSciFiButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
