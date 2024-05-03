type PropsFetchAPI = {
  endpoint: string;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  APIUrl?: string;
  body?: BodyInit | null | undefined;
};

export async function FetchAPI({ endpoint, APIUrl, method, body }: PropsFetchAPI) {
  const API = process.env.NEXT_PUBLIC_API_URL;

  try {
    const result = await fetch(`${APIUrl ? APIUrl : API}${endpoint}`, {
      method: method ? method : "GET",
      body,
    });
    const json = await result.json();

    // don't forget to remove console in prod
    console.log("succeed", json);
    return json;
  } catch (err) {
    console.log(err);
    return err;
  }
}
