import { notFound } from "next/navigation";

async function fetchUserData(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return null; // invalid request
  }

  const user = await res.json();
  return user;
}

export default async function UserPage({
  params,
}: {
  params: { userid: string };
}) {
  const { userid } = await params;
  const user = await fetchUserData(userid);

  if (!user ) {
    notFound();
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
    </div>
  );
}
