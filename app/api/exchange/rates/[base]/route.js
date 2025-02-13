export const runtime = "edge";
export async function GET(request, { params }) {
  const { base } = await params;
  //const url = `https://v6.exchangerate-api.com/v6/299d58e3c2fada0a5524dd59/latest/${base}`; latest but limited
  try {
    const response = await fetch(
      `https://api.exchangerate-api.com/v4/latest/${base}`
    );
    const data = await response.json();
    return Response.json(data);
  } catch (error) {
    return Response.json({
      result: "failed",
      message: "Failed to fetch exchange rate",
    });
  }
}
