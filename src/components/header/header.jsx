import "./header.css";

const header=()=>{
    return(
        <div className="blogfa-ca">
            <div className="blogfa">
                <p className="p-blogfa">
                    بلاگفا یک ابزار قدرتمند برای ساخت و مدیریت وبلاگ است . بلاگفا به شما کمک میکند تا با سرعت و سهولت اطلاعات ، خاطرات و مطالب و مقالات خود را در اینترنت منتشر کنید
                </p>
                <button className="btn-blogfa">ثبت نام و ایجاد وبلاگ جدید</button>
            </div>
            <div className="form">
                <form action="#">
                    <input type="text" placeholder="نام کاربری" className="input" />
                    <input type="password" placeholder="رمز عبور" />
                    <button>ورود به بخش مدیریت وبلاگ</button>
                    <a href="#"> کلمه عبور خود را فراموش کرده ام</a>
                </form>
            </div>
        </div>
    )
}

export default header;