import Logo from "@/components/ui/icons/logo.icon";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaSnapchatGhost,
  FaTwitter,
} from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

export default function Footer() {
  return (
    <div id="connect">
      <footer className="pt-6">
        <div className="max-w-screen-x mx-auto px-4 md:px-8">
          <div className="mt-1 py-10 border-t border-gray-700 items-center justify-between sm:flex">
            <p className="text-gray-300">© 2024 Apsara Bishwokarma</p>
            <div className="flex items-center gap-x-6 text-gray-400 mt-6">
              <div className="flex pt-10 flex-wrap items-center justify-center  mb-4">
                <a href="mailto:apsara@gmail.com" target="_blank">
                  <SiGmail className="text-xl text-gray-500 mr-2" />
                </a>
                <a
                  href="https://www.facebook.com/apsarabishwokarmaa"
                  target="_blank"
                >
                  <FaFacebook className="text-xl text-gray-500 mr-2" />
                </a>
                <a
                  href="https://www.instagram.com/apsara_bishwakarma"
                  target="_blank"
                >
                  <FaInstagram className="text-xl text-gray-500 mr-2" />
                </a>
                <a
                  href="https://www.twitter.com/apsarabishwokarma"
                  target="_blank"
                >
                  <FaTwitter className="text-xl text-gray-500 mr-2" />
                </a>
                <a
                  href="https://www.linkedin.com/in/apsarabishwokarma/"
                  target="_blank"
                >
                  <FaLinkedin className="text-xl text-gray-500 mr-2" />
                </a>

                <a href="https://github.com/apsarabishwokarma" target="_blank">
                  <FaGithub className="text-xl text-gray-500 mr-2" />
                </a>
                <a href="https://snapchat.com/apsarabiswokarma" target="_blank">
                  <FaSnapchatGhost className="text-xl text-gray-500  mr-10" />
                </a>
                <Logo className="w-8 h-8 stroke-white md:hidden block " />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
