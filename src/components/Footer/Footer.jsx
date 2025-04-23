import logo from "../../assets/images/mainLogo.png";
function Footer() {
  return (
    <>
      <footer class="bg-black dark:bg-gray-900">
        <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div class="md:flex md:justify-between">
            <div class="mb-6 md:mb-0">
              <img
                src={logo}
                className="h-10 w-auto sm:h-12 md:h-14"
                alt="Custom Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                WatchVault
              </span>
            </div>
            <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <ul class="text-white dark:text-white font-medium">
                  <li class="mb-4">No.458,</li>
                  <li class="mb-4">Deniyaya Road,</li>
                  <li class="mb-4">Akuressa,</li>
                  <li class="mb-4">Sri Lanka.</li>
                </ul>
              </div>
              <div>
                <h2 class="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
                  Contact Us
                </h2>
                <ul class="text-white dark:text-white font-medium">
                  <li class="mb-4">Tel : +94 115 511 100</li>
                  <li class="mb-4">Fax : +94 115 511 100</li>
                  <li class="mb-4">
                    Email :
                    <a
                      href="mailto:info@watchvault.com"
                      class="text-blue-500 underline hover:text-blue-700"
                    >
                      info@watchvault.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" /> */}
        </div>
      </footer>
    </>
  );
}
export default Footer;
