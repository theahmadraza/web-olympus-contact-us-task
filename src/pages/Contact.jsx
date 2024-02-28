import Layout from "../layout/Layout";
import objectImg from "../assets/images/object.svg";

function Contact() {

  return (
    <Layout>
      <div className="md:flex md:mx-auto mx-10 max-w-7xl items-start justify-between mt-28 mb-36 gap-14">
        <div className="md:w-[632px] md:ms-48 ">
          <div className="">
            <h1 className="text-white text-6xl font-normal leading-81 tracking-normal text-left">
              Contact Us
            </h1>
            <p className="text-white font-medium text-base leading-5 mt-[10px]">
              Book a call or write us to discover our different options. Whether
              it's membership for recurring missions or more "classic" quotes
              for big projects, we have the right package for you.
            </p>
            <form
              action="#"
              method="POST"
              className="mx-auto mt-12 max-w-xxl sm:mt-20"
            >
              <div className="sm:col-span-2">
                <div className="mb-6">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-semibold text-white"
                  >
                    Full name
                  </label>
                  <div className="mt-4">
                    <input
                      placeholder="Input your full name in here"
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full bg-transparent border border-solid border-white px-3.5 py-3 text-white  placeholder:text-white placeholder:opacity-50 focus:outline-none sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2 mb-6">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-white"
                  >
                    Email
                  </label>
                  <div className="mt-4">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      placeholder="Input your Email in here"
                      className="block w-full bg-transparent border border-solid border-white px-3.5 py-3 text-white  placeholder:text-white placeholder:opacity-50 focus:outline-none sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2 mb-6">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-white"
                  >
                    Subjects
                  </label>
                  <div className="mt-4">
                    <select
                      id="country"
                      name="country"
                      autoComplete="country-name"
                      className="block w-full bg-transparent border border-solid border-white px-3.5 py-3 text-white  placeholder:text-white placeholder:opacity-50 focus:outline-none sm:text-sm sm:leading-6"
                    >
                      <option>Question</option>
                    </select>
                  </div>
                </div>
                <div className="sm:col-span-2 mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-white"
                  >
                    Message
                  </label>
                  <div className="mt-4">
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      className="block w-full bg-transparent border border-solid border-white px-3.5 py-3 text-white  placeholder:text-white placeholder:opacity-50 focus:outline-none sm:text-sm sm:leading-6"
                      defaultValue={""}
                      placeholder="Input your Messages in here"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="submit-button w-full block"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-10 md:mt-0">
          <img src={objectImg} alt="Standing Object" />
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
