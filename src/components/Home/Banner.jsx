import Button from "../../sharedCompnonets/Button";
import doctorImg from "../../assets/doctorImg.png"

const Banner = () => {
  return (
    <div>
      <section className="">
        <div className="container flex flex-col items-center justify-center py-6 mx-auto lg:flex-row lg:justify-between ">
          <div className="">
            <h1 className="text-xl font-bold leading-none sm:text-4xl bg-primaryGradient bg-clip-text text-transparent">
              Klinik 24 is ready to serve the <br /> public's concerns 24/7.
            </h1>
            <p className="text-[#6C87AE] mt-6 mb-8 text-sm lg:text-lg sm:mb-12">
              A hospital is an integral part of a social and health
              organization, with the function <br /> of providing comprehensive
              services.
            </p>
           <div>
            <Button
            text={"View Services"}
            cls={"!py-3 !px-5"}
            />
           </div>
          </div>
          <div className="">
            <img
              src={doctorImg}
              alt=""
              className="object-contain h-[400px] lg:h-[550px]  "
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
