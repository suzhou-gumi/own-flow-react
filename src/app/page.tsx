import "dotenv/config";
import { db } from "@/drizzle/db";
import { UserTable } from "@/drizzle/schema";

import Header from "@/components/Header";
import FormContainer from "@/components/FormContainer";

const main = async () => {};

main();

export default function Home() {
  return (
    <>
      <Header />
      <FormContainer />
    </>
  );
}
