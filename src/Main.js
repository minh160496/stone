import Button from "react-bootstrap/esm/Button";

function Map({ width, height, className }) {
  return (
    <div className={"map " + className}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7449.039767114803!2d105.84361811598032!3d21.011874341357327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1675487254136!5m2!1svi!2s"
        width={width}
        height={height}
      />
    </div>
  );
}

function MainItem({ className, data: { data } }) {
  if (className.includes("slogan"))
    return (
      <>
        {data.slogans &&
          data.slogans.map((item, index) => (
            <div
              className="container-fluit bg-banner position-relative"
              key={index}
            >
              <div className="container-fluid">
                <div className={className + " row align-items-center"}>
                  <div className="col-12 col-lg-6">
                    <div className="d-lg-none">
                      <div className="main__item__title">
                        <h2>{item.title}</h2>
                      </div>
                      <div className="main__item__content mt-5">
                        <span>{item.content}</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="main__item__img mt-4">
                      <img className="w-100" src={item.src} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute-slogan container position-absolute d-none d-lg-block top-0 start-50 bottom-0">
                <div className="row align-items-center h-100">
                  <div className="col-12 col-lg-6  text-lg-start">
                    <div className="main__item__title">
                      <h2>{item.title}</h2>
                    </div>
                    <div className="main__item__content mt-5">
                      <span>{item.content}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </>
    );

  if (className.includes("products"))
    return (
      <div className={className + " container"}>
        <div className="main__item__head row">
          <div className="col-12">
            <div className="head--text">
              <h4 className="color-h">PRODUCTS</h4>
            </div>
          </div>
        </div>

        <div className="main__item__body container">
          <div className="row">
            <div className="col-12">
              <div className="body__title">
                <h3 className="font-h">
                  {data.products && data.products.title}
                </h3>
              </div>
            </div>

            <div className="col-12">
              <div className="body__content desc ">
                <span>{data.products && data.products.desc}</span>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="body__item container">
              <div className="row">
                {data.products &&
                  data.products.list
                    .filter((product) => product.id <= 3)
                    .map((product, index) => (
                      <div className="col-12 col-md-4" key={index}>
                        <div className="product-item  position-relative">
                          <div className="product-item__img">
                            <img
                              src={product.src}
                              className="mw-100 mh-100"
                              alt=""
                            />
                          </div>
                          <div className="product-item--absolute position-absolute bottom-0 start-0">
                            <span className="btn btn-dark">{product.type}</span>
                          </div>
                        </div>
                      </div>
                    ))}

                <div className="col-12">
                  <Button className="btn-banner mt-5">FIND A DEALER</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

  if (className.includes("templete"))
    return (
      <div className={className + " container"}>
        <div className="row">
          <div className="main__item__head">
            <div className="col-12 ">
              <h4 className="color-h">INSPIRATION</h4>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="main__item__body container-fluid">
            {data.templetes &&
              data.templetes
                .filter((templete) => templete.id <= 1)
                .map((templete, index) => (
                  <div className="row align-items-center" key={index}>
                    <div className="col-0 col-md-6">
                      <div className="item__body__img">
                        <img className="w-100" src={templete.src} alt="" />
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="body__title">
                        <h2 className="font-h">{templete.title}</h2>
                      </div>

                      <div className="body__content">
                        <span>{templete.content}</span>
                      </div>
                    </div>
                  </div>
                ))}
            <div className="col-12">
              <Button className="btn-banner mt-5">VIEW OUR GALLERY</Button>
            </div>
          </div>
        </div>
      </div>
    );

  if (className.includes("about"))
    return (
      <div className={className + " container"}>
        <div className="main__item__head row">
          <div className="col-12">
            <h4 className="color-h">ABOUT US</h4>
          </div>
        </div>
        <div className="main__item__body row">
          <div className="col-12">
            <div className="body__title">
              <h4 className="font-h">{data.about && data.about.title}</h4>
            </div>
          </div>
          <div className="col-12">
            <div className="body__content">
              <span>{data.about && data.about.content}</span>
            </div>
          </div>
          <div className="col-12">
            <Button className="btn-banner mt-5">SEE OUR STORY</Button>
          </div>
        </div>
      </div>
    );

  if (className.includes("img") && data)
    return (
      <div className={className}>
        <img
          className="w-100"
          src="https://eldoradostostg.wpengine.com/wp-content/uploads/2022/09/home-about-image.jpg"
          alt=""
        />
      </div>
    );

  if (className.includes("contact")) {
    return (
      <div className={className + " container"}>
        <div className="main__item__head row">
          <h4 className="color-h">FIND A DEALER</h4>
        </div>
        <div className="row">
          <h2 className="font-h">FIND ELDORADO STONE NEAR YOU</h2>
        </div>
        <div className="row">
          <div className="col-12">
            <div></div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="container-fluit">
              <div className="row">
                <FormInput />
              </div>
              <div className="row">
                <ContactItem data={data} />
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-8">
            <Map width="100%" height="100%" className="mt-5" />
          </div>
        </div>
      </div>
    );
  }
}

function ContactItem({ data }) {
  return (
    <div className="contact__body container-fluit">
      {data.contact &&
        data.contact.map((item, index) => (
          <div className="contact__item row" key={index}>
            <div className="col-12">
              <h3 className="contact__item__title">{item.name}</h3>
              <div className="contact__item__address">
                <span>{item.address}</span>
              </div>
              <div className="contact__item__phone container-fluid">
                <div className="row p-0">
                  <div className="col-3">
                    <span className="phone__title p-0 color-h">Phone</span>
                  </div>
                  <div className="col-9 color-h">
                    <span className="">{item.phone}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

function FormInput({ data }) {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <form
                  className="row g-3 needs-validation form-full align-items-center mt-5 p-4 pt-5 pb-5"
                  noValidate
                >
                  <div className="col-9">
                    <input
                      type="text"
                      className="form-control pt-3 pb-3"
                      id="validationCustom02"
                      required
                    />
                    <div className="valid-feedback">Looks good!</div>
                  </div>
                  <div className="col-3">
                    <button
                      className="btn btn-search w-100 h-100"
                      type="submit"
                    >
                      Search
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Main(data) {
  return (
    <main className="main mt-5">
      <MainItem className="main__item slogan" data={data} />
      <MainItem className="main__item products" data={data} />
      <MainItem className="main__item templete" data={data} />
      <MainItem className="main__item about" data={data} />
      <MainItem className="main__item img" data={data} />
      <MainItem className="main__item contact" data={data} />
    </main>
  );
}

export default Main;
