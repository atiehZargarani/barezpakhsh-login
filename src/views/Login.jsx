
import LoginForm from "../componets/views/Login/LoginForm";


function Login() {
  return (
    <>
      <div className="body-login-page">
        <main className="main-login">
          <section className="main-login__login login">
            <div className="login__logo">
              {/* logo */}
              <img
                className="login__logo-file"
                src="../../src/assets/images/logo.png"
              />
              <div>
                <h1 className="login__title">بارز پخش</h1>
                <h5 className="login__subtitle">
                  تأمین و توزیع قطعات یدکی خودرو
                </h5>
              </div>
            </div>
            <form className="login__login-form login-form">
             
          <LoginForm/>
            
            </form>
            <footer className="login__footer">
              {/* support */}
              <span> پشتیبانی: </span>
              <span> ۱۲۳۴۵۶۷۸-۰۲۱ </span>
            </footer>
          </section>
          <section className="main-login__basic-image basic-image">
            <img
              src="../../src/assets/images/basic-image.jpg"
              alt="basic-image"
              className="basic-image__file"
            />
          </section>
        </main>
      </div>
    </>
  );
}

export default Login;
