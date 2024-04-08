import { redirect } from "next/navigation";
import { db } from "@/db";

export default function SnippetCreatePage() {
  async function createSnippet(formData: FormData) {
    // this needs to be a server action
    "use server";

    // validate the user's input
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;

    // create a new record in the db
    const snippet = await db.snippet.create({
      data: {
        title,
        code,
      },
    });

    // redirect the user to the homepage
    redirect("/");
  }

  return (
    <form action={createSnippet}>
      <h3 className="font-bold m-3">Create a snippet</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label htmlFor="title" className="w-12">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className="border rounded p-2 w-full"
          />
        </div>
        <div className="flex gap-4">
          <label htmlFor="code" className="w-12">
            Code
          </label>
          <textarea
            name="code"
            id="code"
            className="border rounded p-2 w-full"
          />
        </div>
        <button type="submit" className="rounded p-2 bg-blue-200">
          Submit
        </button>
      </div>
    </form>
  );
}
