export async function GET(request) {
  try {
    const response = await fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json`
    );
    const data = await response.json();
    return Response.json(data);
  } catch (error) {
    return Response.json({
      result: "failed",
      message: "Failed to fetch exchange currencies",
    });
  }
}
