import { z } from "zod";

export async function POST(request: Request) {
  const { prompt } = await request.json();

  // const { prompt } = await z
  //   .object({
  //     prompt: z.string().min(1),
  //   })
  //   .parse(request.json());

  try {
    const res = await fetch(
      "https://api.brianknows.org/api/v0/agent/knowledge",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-brian-api-key": "brian_aKiiVFoBLuLvgNFSB",
        },
        body: JSON.stringify({ prompt }),
      }
    );

    const data = await res.json();
    return Response.json(data);
  } catch (e) {
    console.error(e);
    return Response.json("Internal server error", { status: 500 });
  }
}
