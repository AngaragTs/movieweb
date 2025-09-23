import { WhiteMovieIcon } from "../icons/WhiteMovieIcon";
import { WhiteMovieZ } from "../icons/WhiteMovieZ";
import { Mailicon } from "../icons/Mailicon";
import { PhoneIcon } from "../icons/PhoneIcon";

export const Footer = () => {
  return (
    <div className="w-full h-70 bg-blue-600 items-center flex ">
      <div className="w-50 h-50 pl-10">
        <div className="h-20 w-30 flex items-center gap-2 text-white">
          <WhiteMovieIcon />
          <WhiteMovieZ />
        </div>
        <p className="text-white">© 2024 Movie Z. All Rights Reserved.</p>
      </div>

      <div className="justify-end items-center flex w-300 ">
        <div className="h-70 w-80 text-white mt-30">
          <p>Contact Information</p>

          <div className="items-center h-6 w-10">
            <Mailicon />
            <p>Email:</p>
            <p>support@movieZ.com</p>

            <PhoneIcon />
            <p>Phone:</p>
            <p>+976(11)1234567</p>
          </div>
        </div>
        <div className="h-50 w-80 text-white mt-10">
          <p>Follow us </p>
          <div className="flex gap-5">
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Twitter</p>
            <p>Youtube</p>
          </div>
        </div>
      </div>
    </div>
  );
};
