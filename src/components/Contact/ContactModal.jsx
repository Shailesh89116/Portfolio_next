import Link from "next/link";
import React from "react";
import { SiGmail, SiWhatsapp } from "react-icons/si";
import ContactIcon from "./ContactIcon";

const ContactModal = ({ openModal, closeModal }) => {
  if (!openModal) return null;

  return (
    <>
      {openModal && (
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
          <div className=" flex flex-col w-1/2 h-1/2 items-center justify-center xs:w-auto xs:h-auto sm:w-auto sm:h-auto md:w-auto md:h-auto lg:w-auto lg:h-auto xl:w-1/2 xl:h-auto ">
            <div className="bg-white dark:bg-dark p-2 rounded w-[60%] h-[60%] xs:w-auto xs:h-auto sm:w-auto sm:h-auto md:w-auto md:h-auto lg:w-auto lg:h-auto xl:w-1/2 xl:h-auto">
              <div className="text-end p-[5px]">
                <button onClick={closeModal}>X</button>
              </div>
              <div className="flex items-center justify-center text-dark ">
                <Link
                  href="mailto:shailesh.gehlot.sg@gmail.com"
                  target="_blank"
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                >
                  <ContactIcon>
                    <SiGmail className="font-lg" />
                  </ContactIcon>
                </Link>
                <Link
                  href="https://api.whatsapp.com/send?phone=919137038410"
                  target="_blank"
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                >
                  <ContactIcon>
                    <SiWhatsapp className="font-lg" />
                  </ContactIcon>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactModal;
