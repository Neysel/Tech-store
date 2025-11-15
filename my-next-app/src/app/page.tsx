import Image from "next/image";
import MainPage from "../components/mainPage/mainPage";


export default async function Home() {
  //  const accessToken = cookies().get("AccessToken");
  return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        {/* <MainPage accessToken={accessToken ? { value: accessToken.value } : null} /> */}
        <MainPage />
      </div>
  );
}
