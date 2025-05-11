import supabase from "@/config/supabase";

export default async function Hello() {
  let { data: user, error, status } = await supabase.from("user").select("*");

  console.log({ error });
  console.log({ user });
  console.log({ status });

  return <div>ERROR OR USERS PAGE</div>;
}
