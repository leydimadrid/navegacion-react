import { Link } from "react-router-dom"

export const NavBar = () => {
  return (
    <>
    <Link className="bg-violet-500 text-white px-8 mx-4 rounded-md" to="/inicio">Inicio</Link>
    <Link className="bg-violet-500 text-white px-8 mx-4 rounded-md" to="/facebook">Facebook</Link>
    <Link className="bg-violet-500 text-white px-8 mx-4 rounded-md" to="/whatsapp">Whatsapp</Link>
    <Link className="bg-violet-500 text-white px-8 mx-4 rounded-md" to="/instagram">Instagram</Link>
    <Link className="bg-violet-500 text-white px-8 mx-4 rounded-md" to="/twitter">Twitter</Link>
    </>
  )
}
