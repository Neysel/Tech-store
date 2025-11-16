import Image from "next/image";
import MainPage from "../components/mainPage/mainPage";


export default async function Home() {
  //  const accessToken = cookies().get("AccessToken");
  return (
      <div>
        {/* <MainPage accessToken={accessToken ? { value: accessToken.value } : null} /> */}
        <MainPage />
      </div>
  );
}
