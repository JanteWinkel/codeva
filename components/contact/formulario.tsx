"use client";

import { useState } from "react";

const ContactForm = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [alert, setAlert] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("subject", subject);
    formData.append("message", message);

    try {
      const response = await fetch("https://formspree.io/f/xqaebrqn", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setAlert({ type: "success", message: "Sugerencia enviada correctamente." });
        setSubject("");
        setMessage("");
      } else {
        setAlert({ type: "error", message: "Hubo un error al enviar la sugerencia." });
      }
    } catch (error) {
      console.error("Error:", error);
      setAlert({ type: "error", message: "Hubo un error al enviar la sugerencia." });
    }
  };

  return (
    <div className=" hover:animate-background rounded-xl hover:border-indigo-500 max-w-lg mx-auto ">
      <div className="rounded-[10px]  dark:border-gray-600 p-4 ">

        {/* Mostrar el mensaje de alerta */}
        {alert && (
          <div
            role="alert"
            className={`mt-4 rounded-xl border p-4 ${
              alert.type === "success"
                ? "border-green-100 bg-green-50 text-green-700"
                : "border-red-100 bg-red-50 text-red-700"
            }`}
          >
            <div className="flex items-start gap-4">
              <span>
                {alert.type === "success" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6 text-green-600"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6 text-red-600"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </span>

              <div className="flex-1">
                <strong className="block font-medium">{alert.type === "success" ? "Éxito" : "Error"}</strong>
                <p className="mt-1 text-sm">{alert.message}</p>
              </div>

              <button onClick={() => setAlert(null)} className="text-gray-500 transition hover:text-gray-600">
                <span className="sr-only">Cerrar</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* Formulario siempre visible */}
        <div className="mt-4 p-6 border border-gray-200 rounded-lg shadow-xl dark:shadow-gray-900 ">
          <h2 className="text-xl font-semibold text-primary mb-4">Háblame sobre tu idea:</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Correo</label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-blue-500 bg-background dark:text-white dark:border-gray-600 dark:focus:ring-indigo-500 dark:focus:border-indigo-800"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Mensaje</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-blue-500 bg-background dark:text-white dark:border-gray-600 dark:focus:ring-indigo-500 dark:focus:border-indigo-800"
                rows={4}
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 dark:bg-indigo-600 text-white rounded-md hover:bg-blue-700 dark:hover:bg-indigo-800 transition-all duration-300"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
