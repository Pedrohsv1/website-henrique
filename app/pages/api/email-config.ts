// pages/api/email-config.ts

import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Acessa as variáveis de ambiente que não têm o prefixo NEXT_PUBLIC_
  const { EMAILJS_USER_ID, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID } =
    process.env;

  // Verifique se as variáveis de ambiente estão definidas
  if (!EMAILJS_USER_ID || !EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID) {
    return res
      .status(500)
      .json({ error: "Configurações de e-mail não encontradas" });
  }

  // Envia as variáveis para o frontend de forma segura
  res.status(200).json({
    userId: EMAILJS_USER_ID,
    serviceId: EMAILJS_SERVICE_ID,
    templateId: EMAILJS_TEMPLATE_ID,
  });
}
