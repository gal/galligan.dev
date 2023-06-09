import firebase from "../../../utils/db";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firestore = getFirestore(firebase);

export async function GET(request: Request) {
  const res = await getDocs(collection(firestore, "projects"));
  const data = res.docs.map((doc) => doc.data());

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
