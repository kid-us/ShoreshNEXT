import Image from "next/image";
import contact from "@/public/images/contact.jpg";

const Info = () => {
  return (
    <div className="lg:col-span-3">
      <h1 className="font-semibold lg:text-4xl text-3xl lg:mb-10">
        Get in Touch with Shoresh Group:
      </h1>

      <p className="text-gray-800 font-medium">
        We’re here to answer your questions, discuss investment opportunities,
        and explore ways to collaborate. Whether you&apos;re an investor,
        partner, or just looking to learn more about Shoresh Group, we’d love to
        hear from you.
      </p>

      <div className="mt-5">
        <p className="mb-3">
          <span className="font-medium bi-geo-alt-fill">Address :</span> 1230
          E.Kiowa Street Colorado Springs, CO 80909
        </p>
        <p className="mb-3">
          <span className="font-medium bi-building-fill"> Office :</span>{" "}
          #:(248)-450-4836
        </p>
        <p className="mb-3">
          <span className="font-medium bi-envelope-fill"> Email :</span>{" "}
          @shoresh-group.com
        </p>

        <Image
          src={contact}
          alt="Contact"
          className="lg:mt-10 mt-5 rounded-xl"
        />
      </div>
    </div>
  );
};

export default Info;
