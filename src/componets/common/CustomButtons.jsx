import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';

function CustomButtons({ disabledButton, text, type, data }) {
  const handleSubmit = () => {
    axios
      .post("https://tivanpart-website-backend-stage.darkube.app/api/auth/signin", {...data,loginType:"STATIC"})
      .then((response) => {
        console.log("show res", response);
        toast.success('عملیات با موفقیت انجام شد')
      })
      .catch((error) => {
        toast.error('نام کاربری یا رمز عبور اشتباه است')

        console.log(error);
      });
  };

  return (
    <>
    <Toaster/>
      <button
        className={`${type} base-button`}
        type="button"
        
        disabled={disabledButton}
        onClick={() => {
          handleSubmit();
        }}
      >
        <span>{text}</span>
      </button>
    </>
  );
}

export default CustomButtons;
