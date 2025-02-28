import LinkButton from "@/app/components/Button/LinkButton";
import who from "@/public/images/who.jpg";
import Container from "@/app/components/Container";
import Image from "next/image";

const Stat = () => {
  return (
    <Container>
      <div className="grid lg:grid-cols-2 lg:gap-x-40">
        <div>
          <h1 className="font-semibold lg:text-4xl text-3xl lg:mt-10 mb-6 lg:mb-10">
            Who we are
          </h1>
          <p>
            Shoresh Group is a family-owned real estate investment firm
            committed to building lasting wealth through strategic acquisitions
            and impactful partnerships. We specialize in both short-term flips
            and long-term investments, transforming distressed properties into
            valuable assets. Our expertise spans multifamily, commercial, and
            residential sectors, where we focus on sustainable growth and
            exceptional returns for our family and investors.
          </p>

          <div className="lg:mt-10 mt-8 mb-10">
            <LinkButton name="Learn More" path="/about-us" />
          </div>
        </div>

        <div className="flex lg:justify-center lg:items-center mt-10">
          <div className="flex justify-center items-center">
            <Image src={who} alt="Who we are" className="rounded-2xl" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Stat;
