


export default function NoteView({ note, page }) {
  return (
    <div className="border bg-fifth m-3 p-3 flex justify-between items-bottom">
      <div>
      <h3 className="text-3xl">{note.title}</h3>
      <p className="my-3 text-xl">{note.text}</p>
      <p>From: {note.credit}</p>
      </div>
      <p>{page}</p>
    </div>
  );
}
