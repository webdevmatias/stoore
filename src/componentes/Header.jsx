import StooreLogo from '../assets/stoore_logo_white.svg';

const Header = () => {
  return (
    <nav className="flex flex-row justify-center items-center fixed top-0 w-full h-auto bg-primary">
      <div className="flex flex-col items-center justify-center my-4">
        <img src={StooreLogo} alt="" className="" />
      </div>
    </nav>
  );
};

export default Header;
