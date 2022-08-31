import inicioLogo from '../../assets/inicio.png';

export const InicioPage = () => {
  return (
    <div>
      <div>
        <a target="_blank">
          <img src={inicioLogo} className="w-80 rounded-md" />
        </a>
      </div>
    </div>
  )
}
