import Sidebar from "../../components/sidebar"

export default function Login() {
  return (
    <div className="w-screen h-[100vh] flex bg-zinc-950" >
      <Sidebar></Sidebar>
      <div className="w-screen h-screen flex bg-zinc-950 items-center" >
      <div className="p-8 rounded-lg shadow-md w-[30vw] items-center ml-[23vw]">
        <h1 className="text-2xl font-semibold mb-4 text-gray-300 text-center">Login</h1>
        <form>
            <div className="mb-4">
                <label className="block text-gray-700 font-medium">Email</label>
                <input required type="email" id="email" name="email" className="h-14 mt-1 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 bg-zinc-700" placeholder="Escreva seu email"></input>
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 font-medium">Senha</label>
                <input required type="password" id="password" name="password" className="h-14 mt-1 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 bg-zinc-700" placeholder="Escreva sua senha"></input>
            </div>
            <button type="submit" className="h-14 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 text-lg">Login</button>
        </form>
        <p className="text-gray-600 text-sm mt-4">Ainda não possui uma conta? <a href="/Cadastro" className="text-blue-500 hover:underline">Cadastre-se</a></p>
        </div>
    </div>
    </div>
  );
}
