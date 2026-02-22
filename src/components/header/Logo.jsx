import DubaiLogo from '../../images/logo.png';
export default function Logo() {
  return (
    <div className="logo">
      <img src={DubaiLogo} alt="dubai-icon" className="logo-img" />
      <div className="logo-text">
        <b>DUBAI</b>
        <b>DESERT</b>
        <b>SAFARI</b>
      </div>
    </div>
  );
}
