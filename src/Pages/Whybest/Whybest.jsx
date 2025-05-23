import { SiActualbudget } from "react-icons/si";
import freelancer from "../../assets/freelancer.png";
import { IoIosContacts } from "react-icons/io";

const Whybest = () => {
  return (
    <div className="w-11/12 mx-auto flex j">
      <div className="w-1/2">
        <h1 className="text-2xl text-center font-bold">
          Freelancer tasks marketplace ! The best choice?
        </h1>
        <p className="text-gray-500 text-sm mt-5">
          Streamline your hiring process with strategic channels to reach
          qualified candidates
        </p>
        <div className="flex gap-6 mt-10 mb-5">
          <div>
            <button>
              <SiActualbudget size={64} />
            </button>
          </div>
          <div>
            <p className="text-2xl font-bold">Stick to your budget</p>
            <p className="text-sm text-gray-600">
              Reduce your time-to-hire by up to 85% and free up headspace for
              other HR priorities.
            </p>
          </div>
        </div>
        <div className="flex gap-5  mt-9 ">
            <div >
                <button><IoIosContacts size={72} /></button>
            </div>
            <div>
                <p className="text-3xl font-bold mb-2">Support On 24/7</p>
                <p className="text-sm text-gray-600">Our round-the-clock support team is available to help anytime, anywhere</p>
            </div>
        </div>
      </div>
      <div className="w-1/2">
        <img className="rounded-4xl" src={freelancer} alt="" />
      </div>
    </div>
  );
};

export default Whybest;
