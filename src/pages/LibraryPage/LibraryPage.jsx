import { useEffect, useState } from "react";
import { fillLibrary } from "../../utilities/notebook-api";
import LibraryBooks from "../../components/LibraryBooks/LibraryBooks";

export default function LibraryPage() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        async function findBooks() {
            const allBooks = await fillLibrary();
            setBooks(allBooks);
            console.log(allBooks)
        }

        findBooks();
    }, [])

    return(
        <div className="max-w-7xl mx-auto">
            <LibraryBooks books={books} />    
        </div>
    )
}