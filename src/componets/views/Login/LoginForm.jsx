import { useState } from "react";
import CustomInput from "../../common/CustomInput";
import CustomButtons from "../../common/CustomButtons";

function LoginForm() {
  const [mobile, setMobile] = useState(null);
  const [password, setPassword] = useState(null);
  const [form, setForm] = useState([
    {
      name: "mobile",
      label: "شماره موبایل",
      placeholder: "مثلا ۰۹۱۲۳۴۵۶۷۸۹",
      type: "text",
      value: mobile,
      setValue: setMobile,
    },
    {
      name: "password",
      label: "رمز عبور",
      placeholder: "رمز عبور",
      type: "password",
      value: password,
      setValue: setPassword,
    },
  ]);

  return (
    <>
      {form.map((input, key) => {
        return (
          <CustomInput
            name={input.name}
            label={input.label}
            placeholder={input.placeholder}
            classes={input.classes}
            type={input.type}
            value={input.value}
            setValue={input.setValue}
            key={key}
          />
        );
      })}
      <CustomButtons
        type="primary"
        text="ورود"
        disabledButton={!mobile || !password}
        data={{ mobile: mobile, password: password }}
      />
    </>
  );
}

export default LoginForm;
