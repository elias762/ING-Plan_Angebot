"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function authenticate(
  _prevState: { error: boolean },
  formData: FormData,
) {
  const password = formData.get("password") as string;

  if (password === "KI@ING-Plan26") {
    (await cookies()).set("auth", "authenticated", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 30, // 30 days
    });
    redirect("/");
  }

  return { error: true };
}
