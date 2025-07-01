import iconBtn from "../assets/iconBtn.png";

const Button = ({text,cls=""}) => {
  return (
    <button className={`bg-primaryGradient px-4 py-2 rounded-full text-[#FFFFFF] flex items-center gap-2 ${cls}`}>
      <img className="h-4 w-4" src={iconBtn} alt="" />
      {text}
    </button>
  );
};

export default Button;
