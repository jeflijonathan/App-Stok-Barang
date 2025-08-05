import bcrypt from "bcrypt";

export async function encrypt(text: string): Promise<string> {
  const hash = await bcrypt.hash(text, 10);
  return hash;
}

export async function compareEncrypted(
  hashedText: string,
  textToCompare: string
): Promise<boolean> {
  return await bcrypt.compare(textToCompare, hashedText);
}
