"use server";

type FormState = {
  status: "idle" | "success" | "error";
  message: string;
};

export async function submitContactForm(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return {
      status: "error",
      message: "Please fill all fields before submitting."
    };
  }

  // Replace with database write or email provider integration.
  console.log("Contact submission:", { name, email, message });

  return {
    status: "success",
    message: "Thanks for your message. I will reply soon."
  };
}
