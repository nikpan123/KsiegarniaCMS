import dotenv from "dotenv";

dotenv.config();

export function requiredEnv(name: string): string {
  const value = process.env[name];
  if (!value?.trim()) throw new Error(`Brak zmiennej ${name}. Uzupełnij lokalny plik .env.`);
  return value;
}

export function getBaseURL(): string {
  const value = requiredEnv("BASE_URL").trim();
  let url: URL;
  try { url = new URL(value); }
  catch { throw new Error("BASE_URL musi być pełnym adresem HTTP lub HTTPS."); }
  if (!["http:", "https:"].includes(url.protocol) || url.username || url.password) {
    throw new Error("BASE_URL musi być adresem HTTP lub HTTPS bez danych logowania.");
  }
  url.search = "";
  url.hash = "";
  url.pathname = `${url.pathname.replace(/\/+$/, "")}/`;
  return url.toString();
}
