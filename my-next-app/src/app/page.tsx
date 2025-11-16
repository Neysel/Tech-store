import Image from "next/image";
import MainPage from "../components/mainPage/mainPage";


export default async function Home() {
  //  const accessToken = cookies().get("AccessToken");
  return (
      <div>
        {/* <MainPage accessToken={accessToken ? { value: accessToken.value } : null} /> */}
        <MainPage />
        {/* http://localhost:3000/products/headphones */}
        {/* http://localhost:3000/all_products   */}
      </div>
  );
}
