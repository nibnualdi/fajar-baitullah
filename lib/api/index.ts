type PropsFetchAPI = {
  endpoint: string;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  APIUrl?: string;
};

export async function FetchAPI({ endpoint, APIUrl, method }: PropsFetchAPI) {
  const API = process.env.API_URL;
  console.log("API", API);

  try {
    const result = await fetch(`${APIUrl ? APIUrl : API}${endpoint}`);
    const json = await result.json();

    console.log("succeed", json);
    return json;
  } catch (err) {
    console.log(err);
    return err;
  }
}
