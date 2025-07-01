import medicalImg from "../../assets/medical.png";
import btnIcon from "../../assets/partners/cardIcons/whatsapp.png";

const Medical = () => {
  return (
    <div>
      <section className="bg-[#F9FCFC] px-5 lg:px-10">
        <div className="container flex flex-col items-center justify-center py-6  mx-auto lg:flex-row lg:justify-between ">
          <div className="">
            <img src={medicalImg} alt="" className="object-contain   " />
          </div>
          <div className=" mr-16">
            <h1 className="text-2xl font-bold leading-none sm:text-4xl  text-black">
              The best care from medical <br /> experts.
            </h1>
            <p className="text-[#6C87AE] mt-6 mb-8 text-lg sm:mb-12">
              A hospital is an integral part of a social and health <br />
              organization, functioning to provide comprehensive <br />
              (holistic) services.
            </p>
            <div>
              <button className="bg-primaryGradient  font-semibold px-4 py-2 rounded-full text-[#FFFFFF] flex items-center gap-2 ">
                <img className="text-left" src={btnIcon} alt="" />
                Reservasi
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Medical;
