import "./Style.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Main() {
  return (
    <main className="content">
      <h2 className="text-primary">
        Land a frontend development job by learning React Libary
      </h2>
      <p>To get started you need to know the following fundamentals:</p>
      <ul className="content-list">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Basic Typescript</li>
      </ul>
      <img src="/assets/nature.jpg" alt="" width="200" height="150" />
      <form method="POST">
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            className="form-control"
            type="email"
            id="email"
            name="email"
          />
        </div>
        <label className="form-label" htmlFor="password">
          Password
        </label>
        <input
          className="form-control"
          type="password"
          id="password"
          name="password"
        />
        <button className="btn btn-success mt-2" type="submit">
          Submit
        </button>
      </form>
      <button className="content-button">Discover More</button>
    </main>
  );
}
