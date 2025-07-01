import img1 from "../assets/partners/image 6.png";
import img2 from "../assets/partners/img2.png";
import img3 from "../assets/partners/img3.png";
import img4 from "../assets/partners/img4.png";
import img5 from "../assets/partners/img5.png";

const Partners = () => {
  const images = [img1, img2, img3, img4, img5];
  return (
    <div className="bg-[#E2EDFF]">

    <div className="container  w-full mx-auto py-10">
        <h3 className="text-center text-2xl font-semibold pb-7">Partner & Friend</h3>
      <div className="flex flex-wrap space-y-10 lg:space-y-0 space-x-5 md:space-x-16  justify-center mx-auto items-center w-full">
        {images.length > 0 &&
          images.map((Img) => (
            <div key={Img}>
              <img src={Img} />
            </div>
          ))}
      </div>
    </div>
    </div>
  );
};

export default Partners;
