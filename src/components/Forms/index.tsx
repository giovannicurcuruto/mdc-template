import { Teste } from "./style";

export default function Formulario() {
    return (
        <>
            <Teste>
                <h1 className="text-3xl font-bold underline">
                    Hello world!
                </h1>
                <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
                    <form action="#" method="POST">
                        <div className="grid grid-cols-1 gap-6">
                            {/* Primeiro Nome */}
                            <div className="flex flex-col">
                                <label htmlFor="firstName" className="text-sm font-semibold text-gray-700">Primeiro Nome</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    className="mt-2 p-3 border border-gray-300 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>

                            {/* Último Nome */}
                            <div className="flex flex-col">
                                <label htmlFor="lastName" className="text-sm font-semibold text-gray-700">Último Nome</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    className="mt-2 p-3 border border-gray-300 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>

                            {/* E-mail */}
                            <div className="flex flex-col">
                                <label htmlFor="email" className="text-sm font-semibold text-gray-700">E-mail</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="mt-2 p-3 border border-gray-300 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>

                            {/* Mensagem */}
                            <div className="flex flex-col">
                                <label htmlFor="message" className="text-sm font-semibold text-gray-700">Mensagem</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    className="mt-2 p-3 border border-gray-300 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>

                            {/* Botão Enviar */}
                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    className="mt-4 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    Enviar
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </Teste>
        </>
    )
}