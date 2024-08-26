type PropsFetchAPI = {
  endpoint: string;
  APIUrl?: string;
} & RequestInit;

export async function FetchAPI({
  endpoint,
  APIUrl,
  method,
  body,
  headers,
  ...rest
}: PropsFetchAPI) {
  const API = process.env.NEXT_PUBLIC_API_URL;

  try {
    const result = await fetch(`${APIUrl ? APIUrl : API}${endpoint}`, {
      method: method ? method : "GET",
      body,
      headers,
      ...rest,
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
