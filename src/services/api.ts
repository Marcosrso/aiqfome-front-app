export class ApiError extends Error {
  statusCode?: number;
  data?: unknown;

  constructor(message: string, statusCode?: number, data?: unknown) {
    super(message);
    this.name = "ApiError";
    this.statusCode = statusCode;
    this.data = data;
  }
}

export async function api<T>(
  url: RequestInfo,
  options?: RequestInit
): Promise<T> {
  try {
    const baseUrl = process.env.API_URL;
    const res = await fetch(`${baseUrl}/${url}`, {
      headers: { "Content-Type": "application/json" },
      ...options,
    });

    const contentType = res.headers.get("content-type");
    const isJson = contentType?.includes("application/json");

    const data = isJson ? await res.json() : await res.text();

    if (!res.ok) {
      throw new ApiError(
        data?.message || "Erro ao acessar a API",
        res.status,
        data
      );
    }

    return data;
  } catch (error: unknown) {
    if (error instanceof ApiError) {
      throw error;
    }
    throw new ApiError("API connection error", undefined, error);
  }
}
