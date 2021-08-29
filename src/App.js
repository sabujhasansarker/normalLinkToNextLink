import { useState } from "react";
const App = () => {

  const [link, setLink] = useState("");
  const onChange = (e) => {
    let dataLink = e.target.value;
    dataLink = dataLink.replace(/["]/g, `'`);
    dataLink = dataLink.replace(/class=/g, `className=`);
    let splitHref = dataLink.search("href");
    let splitHtml = dataLink.search(".html");
    let href = dataLink.slice(splitHref, splitHtml);
    let demoHref = `${href}.html'`;
    href = `${href}'`;
    href = href.replace("href='", "href='/");
    dataLink = dataLink.replace(demoHref, "");
    let newLink = `<Link ${href}>${dataLink}</Link>`;
    setLink(newLink);
  };
  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(link);
      // setCopySuccess("Copied!");
    } catch (err) {
      // setCopySuccess("Failed to copy!");
    }
  };
  return (
    <div>
      <textarea onChange={(e) => onChange(e)} cols="30" rows="10"></textarea>
      {link}
      <button onClick={() => copyLink("some text to copy")}>Copy</button>
    </div>
  );
};


export default (App);
