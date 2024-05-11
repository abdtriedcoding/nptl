import { redirect } from "next/navigation";

export default async function Home() {
  const isRedirect = true;

  if (isRedirect) {
    redirect("/noc/ECertificate");
  }

  return <p>NPTEL WEBISTE</p>;
}
