export default function HelloTeacher() {
    return (
        <div>
            <nav>
          <ul>
              {auth.user ? (
                <>
                  <li>Welcome, {auth.user.name}</li>
                  <li><a href="/logout">Logout</a></li>
                </>
              ) : (
                <>
                  <li><a href="/login">Login</a></li>
                  <li><a href="/register">Register</a></li>
                </>
              )}
          </ul>
      </nav>

            <h1>Greeting to all teachers of computer science</h1>
            <Greeting name="ชวลิต" lastname="โควีระวงศ์" />
            <Greeting name="ณัฐรดี" lastname="อนุพงค์" />
            <Greeting name="วิศรุต" lastname="ขวัญคุ้ม" />
            <Greeting name="ดาวรถา" lastname="วีระพันธ์" />
            <Greeting name="ประณมกร" lastname="อัมพรพรรดิ์" />
            <Greeting name="ณัฏฐิรา" lastname="ศุขไพบูลย์" />
        </div>
    );
}

function Greeting({ name, lastname } ) {
    return <h1>Hello, { name } { lastname } !</h1>;
}