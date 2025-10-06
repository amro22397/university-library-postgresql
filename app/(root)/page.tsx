import BookList from "@/components/BookList";
import BookOverview from "@/components/BookOverview";
import { db } from "@/database/drizzle";
import { users } from "@/database/schema";
// import { books, users } from "@/database/schema";
// import { auth } from "@/auth";
// import { desc } from "drizzle-orm";

const page = async () => {

  const result = await db.select().from(users);

  console.log(result, null, 2)

  return (
    <>
      {/* <BookOverview /* {...latestBooks[0]} userId={session?.user?.id as string} /> */}

      <BookList
        title="Latest Books"
        books={/* latestBooks.slice(1) */ []}
        containerClassName="mt-28"
      />
    </>
  )
}

export default page