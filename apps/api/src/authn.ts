import { pbkdf2Sync, randomBytes } from "crypto";

function _hash(input: string, salt: string): string {
  return pbkdf2Sync(input, salt, 1000, 64, "sha512").toString("hex");
}

function _salt(): string {
  return randomBytes(16).toString("hex");
}

export function hashPassword(inputPassword: string): {
  hash: string;
  salt: string;
} {
  const salt = _salt();
  const hash = _hash(inputPassword, salt);

  return { hash, salt };
}

export function isValidPassword(
  inputPassword: string,
  storedHash: string,
  storedSalt: string,
): boolean {
  const hash = _hash(inputPassword, storedSalt);

  return storedHash === hash;
}
