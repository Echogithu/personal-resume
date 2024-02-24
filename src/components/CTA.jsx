import { Link } from "react-router-dom";

const CTA = () => {
  function downloadFile() {
    fetch("/assets/resume.pdf", {
      responseType: "blob",
    })
      .then((response) => response.blob())
      .then((blob) => {
        var url = window.URL.createObjectURL(blob);
        var a = document.createElement("a");
        a.href = url;
        a.download = "前端开发工程师_蔡泽萍_13433680844.pdf";
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      });
  }

  return (
    <section className="cta">
      <p className="cta-text">如果您对我感兴趣 ➡️</p>
      <div onClick={downloadFile} className="btn cursor-pointer">
        下载简历
      </div>
    </section>
  );
};

export default CTA;
