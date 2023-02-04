function Footer({ data }) {
  return (
    <div className="footer container-fluit">
      <div className="row">
        {data.footer &&
          data.footer
            .filter(
              (item) =>
                item.text && !item.text.toUpperCase().includes("COPYRIGHT")
            )
            .map((item, index, thisArr) => (
              <div
                className={"col-12 col-lg-" + Math.floor(12 / thisArr.length)}
                key={index}
              >
                <div className="footer__item mt-5">
                  <span>{item.text}</span>
                </div>
              </div>
            ))}
        <div className="row">
          {data.footer &&
            data.footer
              .filter((item) => item.src)
              .map((item, index) => (
                <div className="footer__item img mt-5 mb-5" key={index}>
                  <img src={item.src} className="w-25" alt="" />
                </div>
              ))}
        </div>
        {data.footer &&
          data.footer
            .filter(
              (item) =>
                item.text && item.text.toUpperCase().includes("COPYRIGHT")
            )
            .map((item, index) => (
              <div className="row" key={index}>
                <span className="text-align-start">{item.text}</span>
              </div>
            ))}
      </div>
    </div>
  );
}

export default Footer;
