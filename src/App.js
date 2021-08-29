import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
const App = () => {
  const [link, setLink] = useState("");
  const [outPutLink, setoutPutLink] = useState("");
  const onChange = (e) => {
    let dataLink = e.target.value;
    setLink(dataLink);
    dataLink = dataLink.replace(/["]/g, `'`);
    dataLink = dataLink.replace(/class=/g, `className=`);
    let splitHref = dataLink.search("href");
    let splitHtml = dataLink.search(".html");
    if (splitHtml !== -1) {
      let href = dataLink.slice(splitHref, splitHtml);
      let demoHref = `${href}.html'`;
      href = `${href}'`;
      href = href.includes("href") ? href.replace("href='", "href='/") : "";
      dataLink = dataLink.replace(demoHref, "");
      let newLink = `<Link ${href}>${dataLink}</Link>`;
      setoutPutLink(newLink);
    } else {
      let onClick = `onClick={e=>{e.preventDefult()}}`;
      let newLink = dataLink.replace(`href='#'`, "");
      newLink = newLink.replace("<a", `<a ${onClick}`);
      newLink = `<Link href='#'>${newLink} </Link>`;
      setoutPutLink(newLink);
    }
  };
  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(outPutLink);
      toast.success("Copied to clipboard.");
    } catch (err) {
      toast.error("Not Copied to clipboard.");
    }
  };
  return (
    <div className="container py-5">
      <Toaster
        position="top-left"
        toastOptions={{
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
          },
        }}
      />

      <h2 className="text-center mb-5">HTML link to NextJS link</h2>
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header d-flex align-items-center justify-content-between">
              <h4 className="card-title">HTML Link</h4>
              <button className="btn btn-danger" onClick={() => setLink("")}>
                Clear
              </button>
            </div>
            <div className="card-body">
              <div className="form-floating">
                <textarea
                  className="form-control py-2"
                  placeholder="Leave a comment here"
                  id="floatingTextarea"
                  onChange={(e) => onChange(e)}
                  value={link}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card">
            <div className="card-header d-flex align-items-center justify-content-between">
              <h4 className="card-title">Nextjs Link</h4>
              <button className="btn btn-success" onClick={() => copyLink()}>
                Copy
              </button>
            </div>
            <div className="card-body">
              <div className="form-floating">
                <textarea
                  className="form-control"
                  id="floatingTextarea2"
                  disabled
                />
                <label htmlFor="floatingTextarea2">{link && outPutLink}</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center fixed-bottom">
        Created by{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 391.837 391.837"
          style={{ enableBackground: "new 0 0 391.837 391.837" }}
          xmlSpace="preserve"
        >
          <g>
            <path
              style={{ fill: "#D7443E" }}
              d="M285.257,35.528c58.743,0.286,106.294,47.836,106.58,106.58
		c0,107.624-195.918,214.204-195.918,214.204S0,248.165,0,142.108c0-58.862,47.717-106.58,106.58-106.58l0,0
		c36.032-0.281,69.718,17.842,89.339,48.065C215.674,53.517,249.273,35.441,285.257,35.528z"
            />
          </g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
        </svg>{" "}
        <a
          href="https://github.com/sabujhasansarker/"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
        Sabuj Hasan Sarker
      </p>
    </div>
  );
};

export default App;
