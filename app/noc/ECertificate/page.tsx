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
          nptelValue === "NPTEL24MG116S1051302119"
            ? "/content/noc/NOC24/SEM1/Ecertificates/127/noc24-ge24/Course/NPTEL24MG116S1051302119.pdf"
            : nptelValue === "NPTEL24HS60S663901784"
            ? "/content/noc/NOC24/SEM1/Ecertificates/127/noc24-ge24/Course/NPTEL24HS60S663901784.pdf"
            : nptelValue === "NPTEL24MG89S464300152"
            ? "/content/noc/NOC24/SEM1/Ecertificates/127/noc24-ge24/Course/NPTEL24MG89S464300152.pdf"
            : nptelValue === "NPTEL24MG116S1051302323"
            ? "/content/noc/NOC24/SEM1/Ecertificates/127/noc24-ge24/Course/NPTEL24MG116S1051302323.pdf"
            : nptelValue === "NPTEL24MG93S651304196"
            ? "/content/noc/NOC24/SEM1/Ecertificates/127/noc24-ge24/Course/NPTEL24MG93S651304196.pdf"
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
