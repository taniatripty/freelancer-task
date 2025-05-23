
import { SiActualbudget } from "react-icons/si";
import { IoIosContacts } from "react-icons/io";
import { Typewriter } from "react-simple-typewriter";
import animatedImage from "../../assets/freelancer.png"; // You can replace with any SVG or GIF

const Whybest = () => {
  const handleType = (count) => {
    console.log(`Typing word #${count}`);
  };

  const handleDone = () => {
    console.log("Typing completed after loops.");
  };

  return (
    <div className="w-11/12 mx-auto flex flex-col md:flex-row items-center justify-between">
      {/* Left Content */}
      <div className="md:w-1/2">
        <h1 className="text-2xl text-center md:text-left font-bold">
          Freelancer tasks marketplace!{' '}
          <span className="text-red-600 font-extrabold">
            <Typewriter
              words={['Simple', 'Efficient', 'Trusted', 'Affordable']}
              loop={5}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              onLoopDone={handleDone}
              onType={handleType}
            />
          </span>
        </h1>

        <p className="text-gray-500 text-sm mt-5">
          Streamline your hiring process with strategic channels to reach
          qualified candidates.
        </p>

        <div className="flex gap-6 mt-10 mb-5">
          <div>
            <SiActualbudget size={64} />
          </div>
          <div>
            <p className="text-2xl font-bold">Stick to your budget</p>
            <p className="text-sm text-gray-600">
              Reduce your time-to-hire by up to 85% and free up headspace for
              other HR priorities.
            </p>
          </div>
        </div>

        <div className="flex gap-5 mt-9">
          <div>
            <IoIosContacts size={72} />
          </div>
          <div>
            <p className="text-3xl font-bold mb-2">Support On 24/7</p>
            <p className="text-sm text-gray-600">
              Our round-the-clock support team is available to help anytime, anywhere.
            </p>
          </div>
        </div>
      </div>

      {/* Right Image (Fallback for animation) */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img
          src={animatedImage}
          alt="Freelancer illustration"
          className="w-full max-w-md rounded-xl shadow-md"
        />
      </div>
    </div>
  );
};

export default Whybest;
