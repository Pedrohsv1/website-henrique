"use client";
import emailjs from "emailjs-com";
import React, { useState } from "react";
import { SpanIcon } from "./span-icon";

interface FormData {
  [key: string]: string;
  name: string;
  email: string;
  groupNumber: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    groupNumber: "",
    subject: "",
    message: "",
  });

  const [isSent, setIsSent] = useState<boolean>(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validação de email
    if (name === "email") {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(value)) {
        setErrors({ ...errors, email: "Email inválido ;(" });
      } else {
        const updatedErrors = errors;
        delete updatedErrors.email;
        setErrors(updatedErrors);
      }
    } else {
      // Validação genérica para garantir que o campo não esteja vazio
      if (!value) {
        setErrors({ ...errors, [name]: "Esse campo é obrigatório" });
      } else {
        const updatedErrors = { ...errors };
        delete updatedErrors[name];
        setErrors(updatedErrors);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(1);

    // Validação para garantir que nenhum campo necessário está vazio
    let hasError = false;
    const newErrors: Partial<FormData> = {};

    for (const field in formData) {
      if (!formData[field] && field != "groupNumber") {
        newErrors[field] = "Esse campo é obrigatório";
        hasError = true;
        console.log(formData[field], field);
      } else if (errors[field]) {
        newErrors[field] = errors[field];
        hasError = true;
        console.log(3);
      }
    }

    if (hasError) {
      setErrors(newErrors);
      return;
    }

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
      const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID!;

      await emailjs.send(serviceId, templateId, formData, userId);

      setIsSent(true);
      setFormData({
        name: "",
        email: "",
        groupNumber: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Erro ao enviar email:", error);
    }
  };

  return (
    <div className="w-full md:w-1/2">
      <h1 className="text-2xl">
        <b>Envie uma mensagem!</b>
      </h1>
      <p>Assim que possível vamos entrar em contato ou mandar um email. </p>

      <form onSubmit={handleSubmit} className="flex flex-col   w-full">
        {isSent && (
          <p style={{ color: "green" }}>Mensagem enviada com sucesso!</p>
        )}
        <div className="md:flex gap-4">
          {/* Nome */}
          <div className="w-full mt-4 md:w-1/2 lg:w-1/2">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="mb-[10px] block text-base font-medium"
              >
                Nome <span className="text-gray-500 text-sm">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Nome"
                required
                className={`w-full bg-transparent rounded-md py-[10px] px-5 text-dark-6 outline-none transition ${
                  errors.name ? "border border-red" : "border border-stroke"
                }`}
              />
              {errors.name && (
                <p className="mt-[10px] text-sm text-red-600">{errors.name}</p>
              )}
              {errors.name && <SpanIcon />}
            </div>
          </div>

          {/* Email */}
          <div className="w-full mt-4 md:w-1/2 lg:w-1/2">
            <div className="mb-4">
              <label
                htmlFor="email"
                className="mb-[10px] block text-base font-medium "
              >
                Email <span className="text-gray-500 text-sm">*</span>
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="henriquecastriciano@gmail.com"
                  required
                  className={`w-full bg-transparent rounded-md py-[10px] pl-5 pr-12 text-dark-6 outline-none transition ${
                    errors.email ? "border border-red" : "border border-stroke"
                  }`}
                />
                {errors.email && <SpanIcon />}
              </div>
              {errors.email && (
                <p className="mt-[10px] text-sm text-red-600">{errors.email}</p>
              )}
            </div>
          </div>
        </div>

        <div className="md:flex gap-4">
          {/* Numeral do Grupo */}
          <div className="w-full mt-4 md:w-1/2 lg:w-1/2">
            <div className="mb-4">
              <label
                htmlFor="groupNumber"
                className="mb-[10px] block text-base font-medium"
              >
                Numeral do Grupo
                <span className="text-gray-500 text-sm ml-2">Opcional</span>
              </label>
              <input
                type="text"
                id="groupNumber"
                name="groupNumber"
                value={formData.groupNumber}
                onChange={handleChange}
                placeholder="52"
                className={`w-full bg-transparent rounded-md py-[10px] px-5 text-dark-6 outline-none transition ${
                  errors.groupNumber
                    ? "border border-red"
                    : "border border-stroke"
                }`}
              />
              {errors.groupNumber && (
                <p className="mt-[10px] text-sm text-red-600">
                  {errors.groupNumber}
                </p>
              )}
            </div>
          </div>

          <div className="w-full mt-4 md:w-1/2 lg:w-1/2">
            {/* Assunto */}
            <div className="mb-4">
              <label
                htmlFor="subject"
                className="mb-[10px] block text-base font-medium"
              >
                Assunto <span className="text-gray-500 text-sm">*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Assunto"
                required
                className={`w-full bg-transparent rounded-md py-[10px] px-5 text-dark-6 outline-none transition ${
                  errors.subject ? "border border-red" : "border border-stroke"
                }`}
              />
              {errors.subject && (
                <p className="mt-[10px] text-sm text-red-600">
                  {errors.subject}
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="w-full ">
          {/* Messagem */}

          <div className="mb-4">
            <label
              htmlFor="message"
              className="mb-[10px] block text-base font-medium"
            >
              Mensagem <span className="text-gray-500 text-sm">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Mensagem"
              required
              className={`w-full bg-transparent rounded-md md:min-h-96 h-40 py-[10px] px-5 text-dark-6 outline-none resize-none transition ${
                errors.message ? "border border-red" : "border border-stroke"
              }`}
            />
            {errors.message && (
              <p className="mt-[10px] text-sm text-red-600">{errors.message}</p>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="bg-green-700 hover:bg-green-800 p-2 text-white rounded"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
