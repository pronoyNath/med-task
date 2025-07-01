import cardImg1 from "../assets/partners/cardIcons/icon1.png";
import cardImg2 from "../assets/partners/cardIcons/icon2.png";
import cardImg3 from "../assets/partners/cardIcons/icon3.png";
import btnIcon from "../assets/partners/cardIcons/whatsapp.png";

const Services = () => {
  const cards = [
    {
      id: 1,
      title: "24-Hour Pharmacy",
      des: "A shop that prepares and sells medicines based on doctors' prescriptions and also trades medical supplies.",
      img: cardImg1,
    },
    {
      id: 2,
      title: "Medical Check Up",
      des: "A shop that prepares and sells medicines based on doctors' prescriptions and also trades medical supplies.",
      img: cardImg2,
    },
    {
      id: 3,
      title: "Professional Doctor",
      des: "A shop that prepares and sells medicines based on doctors' prescriptions and also trades medical supplies.",
      img: cardImg3,
    },
  ];

  return (
    <div className="pt-20 pb-5 px-5 lg:px-16  container mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-start ">
        <h3 className="text-left text-2xl font-semibold ">List of Services</h3>
        <p className="text-[#889EBF] ">
          A hospital is an integral part of a social and health organization,{" "}
          <br /> serving the function of providing comprehensive (holistic)
          care.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-10 py-20">
        {cards.length > 0 &&
          cards.map((card) => (
            <div key={card?.id}
            className="bg-white p-7 shadow-md rounded-2xl space-y-7"
            >
              <div>
                <img className="h-[60px] w-[60px]" src={card?.img} alt="" />
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-xl">{card?.title}</h3>
                <p className="text-[#6B87AD]">{card?.des}</p>
              </div>
              <div>
                <button className="bg-primary lg:w-full font-semibold px-4 py-2 rounded-full text-[#FFFFFF] flex items-center gap-5 lg:gap-20 ">
                    <img className="text-left" src={btnIcon} alt="" />
                    Reservasi</button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Services;
