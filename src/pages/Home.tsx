import myimage from "../assets/myimage.jpeg";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import leetcode from "../assets/leetcode.svg";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  const handleType = (count: number) => {
    console.log(count);
  };

  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };

  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-500 w-full h-full flex flex-col md:flex-row">
      {/* Left Side - Image */}
      <div className="w-full md:w-[30%] h-[300px] md:h-screen flex items-center justify-center mt-6 md:mt-0">
        <img
          src={myimage}
          alt="Rohan Kommathoti"
          className="w-40 h-40 md:w-80 md:h-80 rounded-full object-cover"
        />
      </div>

      {/* Right Side - Text */}
      <div className="flex flex-col items-center md:items-start justify-center p-4 md:p-0">
        <h1 className="text-white text-2xl sm:text-3xl md:text-5xl text-center md:text-left">
          Hello, I am Rohan Kommathoti !!
        </h1>

        <p className="text-white mt-4 text-sm sm:text-base md:text-lg w-full md:w-[800px] text-center md:text-left px-2 md:px-0">
          A Computer Science graduate passionate about full-stack development, system design, and emerging tech like AI, blockchain, and LLMs. I build scalable apps and love converting everyday problems into technical solutions.
        </p>

        <div className="w-full max-w-[800px] mt-4 break-words text-center md:text-left">
          <p className="text-white text-base sm:text-lg font-normal">
            Life is simple{" "}
            <span className="text-red-500 font-bold">
              <Typewriter
                words={["Eat", "Sleep", "Code", "Repeat!"]}
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
          </p>
        </div>

        <p className="text-gray-400 text-xs sm:text-sm mt-2 text-center md:text-left">
          *please browse through using the navigation panel on top*
        </p>

        {/* Social Links */}
        <div className="w-full md:w-[400px] h-[60px] mt-4 flex flex-row gap-4 items-center justify-center md:justify-start">
          <a
            href="https://www.linkedin.com/in/rohan-kommathoti-108055216/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={linkedin}
              alt="LinkedIn"
              className="cursor-pointer w-8 h-8 md:w-10 md:h-10"
            />
          </a>

          <a
            href="https://github.com/RohanK-coder"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={github}
              alt="GitHub"
              className="cursor-pointer w-8 h-8 md:w-10 md:h-10"
            />
          </a>

          <a
            href="https://leetcode.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={leetcode}
              alt="LeetCode"
              className="cursor-pointer w-8 h-8 md:w-10 md:h-10"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
