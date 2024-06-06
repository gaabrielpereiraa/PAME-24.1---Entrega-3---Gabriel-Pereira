import Sidebar from "../../components/sidebar"

const handleProfileTabClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // Checa se o usuário está logado
    const isLoggedIn = false;

    if (!isLoggedIn) {
        // Redireciona para a página de login
        window.location.href = '/login';
        event.preventDefault(); // Previne o comportamento padrão
    }
};

export default function Perfil() {
  return (
    <div className="w-screen h-[100vh] flex bg-zinc-950" >
      <Sidebar></Sidebar>
    </div>
  );
}
