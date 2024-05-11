export default async function NocPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const nptelValue = searchParams.q as string;

  return (
    <div className="min-h-screen justify-center items-center flex">
      <a
        href={
          nptelValue === "NPTEL24GE24S1263901353"
            ? "/content/noc/NOC24/SEM1/Ecertificates/127/noc24-ge24/Course/NPTEL24GE24S1263901353.pdf"
            : nptelValue === "NPTEL24GE24S1263901755"
            ? "/content/noc/NOC24/SEM1/Ecertificates/127/noc24-ge24/Course/NPTEL24GE24S1263901755.pdf"
            : nptelValue === "NPTEL24GE24S1263902193"
            ? "/content/noc/NOC24/SEM1/Ecertificates/127/noc24-ge24/Course/NPTEL24GE24S1263902193.pdf"
            : nptelValue === "NPTEL24GE24S1263901407"
            ? "/content/noc/NOC24/SEM1/Ecertificates/127/noc24-ge24/Course/NPTEL24GE24S1263901407.pdf"
            : ""
        }
        target="_blank"
        className="inline-block bg-[#3070bf] text-white px-8 py-2 rounded-md text-center text-base font-times-new-roman"
      >
        Course Certificate
      </a>
    </div>
  );
}
