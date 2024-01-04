import emailjs from "@emailjs/browser";
import { useState } from "react";
import { variables } from "../../variables";

export const useCustomEmail = () => {
  const [loading, setLoading] = useState(false);

  const toggleLoader = () => setLoading(!loading);

  const sendEmail = (details: any) => {
    emailjs.init(variables.EMAIL_USER_ID);
    emailjs
      .send(variables.EMAIL_SERVICE_ID, variables.EMAIL_TEMPLATE_ID, {
        to_name: details.name,
        to_email: details.email,
        subject: details.subject,
        message: details.message,
      })
      .then((res: any) => res && setLoading(true))
      .catch(() => setLoading(false));
  };
  return { sendEmail, loading, toggleLoader };
};
