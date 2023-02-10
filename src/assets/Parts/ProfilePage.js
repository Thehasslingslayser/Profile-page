import React from "react";

const ProfilePage = () => {
  return (
    <div>
      <div className="w-40 h-40 bg-blue-900"></div>
      <div className="-mt-28 ml-9 lg:grid grid-cols-3 grid-rows-2   gap-x-2  gap-3 ">
        <div className="bg-slate-50 rounded-lg text-3xl flex flex-col shadow-2xl shadow-gray-700 items-center py-4">
          <div className="flex flex-col items-center lg:w-[10rem] h-[23rem] rounded-full">
            <img
              src="/images/content/1.png"
              alt=""
              className="h-36 w-36 rounded-full pt-3"
            />
            <p className="text-xl font-semibold">User Name</p>
            <p className="text-center text-xl font-light mt-3">
              {" "}
              Place holder <br />
              insert your disered text{" "}
            </p>
            <div className="flex justify-between mt-6">
              <button className="w-32 h-10 rounded-full font-medium  shadow-md border-[0.2px] border-black shadow-black hover:bg-sky-900 text-white  text-xl mr-3 bg-blue-600">
                About Me
              </button>
              <button className="w-32 h-10 rounded-full font-medium  text-xl border-[0.2px] border-black shadow-md shadow-black hover:bg-sky-900 text-blue-600 bg-white">
                Setting
              </button>
            </div>
          </div>
        </div>

        <div
          class="bg-slate-50 rounded-lg text-medium    
           py-4 col-span-2 row-span-1 flex flex-col shadow-2xl  shadow-gray-700 lg:w-[750px] "
        >
          <table class="border-y-2 font-[lora-Italic] text-xl  ml-2">
            <tr class="border-y-2">
              <td>Nama Lengkap</td>
              <td>placeholder nama</td>
            </tr>
            <tr class="border-y-2">
              <td>Email</td>
              <td>placeholder Email</td>
            </tr>
            <tr class="border-y-2">
              <td>Gelar Depan</td>
              <td>placeholder Gelardpn</td>
            </tr>
            <tr class="border-y-2">
              <td>Gelar Belakang</td>
              <td>placeholder Gelar Belakang</td>
            </tr>
            <tr class="border-y-2">
              <td>Telephone</td>
              <td>placeholder Telephone</td>
            </tr>
            <tr class="border-y-2">
              <td>NIP</td>
              <td>placeholder NIP</td>
            </tr>
            <tr class="border-y-2">
              <td>STR</td>
              <td>placeholder STR</td>
            </tr>
            <tr class="border-y-2">
              <td>Tempat Lahir</td>
              <td>placeholder Tempat Lahir</td>
            </tr>
            <tr class="border-y-2">
              <td>Tanggal lahir</td>
              <td>placeholder Tanggal Lahir</td>
            </tr>
            <tr class="border-y-2">
              <td>Addres</td>
              <td>placeholder Alamat</td>
            </tr>
          </table>
        </div>
        <div class="bg-slate-50 rounded-lg text-xl md:h-40  shadow-2xl shadow-gray-700 ">
          <div class="">
            <div
              class="flex flex-col divide-y-2 divide-slate-900 
            md:divede-y-8"
            >
              <div>
                <p class="font-serif flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="30px"
                  >
                    <title>web-box</title>
                    <path d="M8.95 13.4H6.58A5.5 5.5 0 0 1 6.58 10.6H8.95A11.56 11.56 0 0 0 8.85 12A11.56 11.56 0 0 0 8.95 13.4M7.16 9.2H9.2A12.06 12.06 0 0 1 10.18 6.71A5.55 5.55 0 0 0 7.16 9.2M16.84 9.2A5.59 5.59 0 0 0 13.81 6.71A10.95 10.95 0 0 1 14.78 9.2M12 17.57A9.5 9.5 0 0 0 13.34 14.8H10.66A9.5 9.5 0 0 0 12 17.57M12 6.42A9.53 9.53 0 0 0 10.66 9.2H13.34A9.53 9.53 0 0 0 12 6.42M7.16 14.8A5.61 5.61 0 0 0 10.18 17.29A12.06 12.06 0 0 1 9.2 14.8M21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19A2 2 0 0 1 21 5M19 12A7 7 0 1 0 12 19A7 7 0 0 0 19 12M15.15 12A11.56 11.56 0 0 1 15.05 13.4H17.42A5.5 5.5 0 0 0 17.42 10.6H15.05A11.56 11.56 0 0 1 15.15 12M13.81 17.29A5.62 5.62 0 0 0 16.84 14.8H14.78A10.95 10.95 0 0 1 13.81 17.29M10.36 10.6A8.81 8.81 0 0 0 10.36 13.4H13.64A10.3 10.3 0 0 0 13.75 12A10.21 10.21 0 0 0 13.64 10.6Z" />
                  </svg>
                  Website
                </p>
              </div>
              <div>
                <p class="font-serif flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="30px"
                  >
                    <title>facebook</title>
                    <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
                  </svg>
                  Facebook
                </p>
              </div>
              <div>
                <p class="font-serif flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="30px"
                  >
                    <title>instagram</title>
                    <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
                  </svg>
                  Instagram
                </p>
              </div>
              <div>
                <p class="font-serif flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="30px"
                  >
                    <title>map-marker</title>
                    <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
                  </svg>
                  address
                </p>
              </div>
              <div>
                <p class="font-serif flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="30px"
                  >
                    <title>twitter</title>
                    <path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z" />
                  </svg>
                  Twiter
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-slate-50 rounded-lg text-3xl text-base py-4 md:gap-8  md:h-[338px] shadow-2xl shadow-gray-700 lg:w-[370px] ">
          <div class="mb-1 text-base font-bold text-lg dark:text-white">
            Text Editor
          </div>
          <div class="lg:w-[366px] bg-gray-200 rounded-full h-2.5 ml-1 mb-7 dark:bg-gray-700">
            <div
              class="bg-blue-600 h-2.5 rounded-full dark:bg-blue-500"
              style={{ width: 25 }}
            ></div>
          </div>
          <div class="mb-1 text-base font-medium text-center  dark:text-white">
            Placeholder
          </div>
          <div class="lg:w-[366px] bg-gray-200 rounded-full h-2.5 ml-1  mb-7 dark:bg-gray-700">
            <div
              class="bg-blue-600 h-2.5 rounded-full dark:bg-blue-500"
              style={{ width: 30 }}
            ></div>
          </div>
          <div class="mb-1 text-base font-medium text-center dark:text-white">
            Placeholder
          </div>
          <div class="lg:w-[366px] bg-gray-200 rounded-full h-2.5 ml-1 mb-7 dark:bg-gray-700">
            <div
              class="bg-blue-600 h-2.5 rounded-full dark:bg-blue-500"
              style={{ width: 15 }}
            ></div>
          </div>
          <div class="mb-1 text-base font-medium text-center dark:text-white">
            Placeholder
          </div>
          <div class="lg:w-[366px] bg-gray-200 rounded-full h-2.5 ml-1 mb-7 dark:bg-gray-700">
            <div
              class="bg-blue-600 h-2.5 rounded-full dark:bg-blue-500"
              style={{ width: 35 }}
            ></div>
          </div>
          <div class="mb-1 text-base font-medium text-center dark:text-white">
            Placeholder
          </div>
          <div class="lg:w-[366px] bg-gray-200 rounded-full h-2.5 ml-1 mb-4 dark:bg-gray-700">
            <div
              class="bg-blue-600 h-2.5 rounded-full dark:bg-blue-500"
              style={{ width: 45 }}
            ></div>
          </div>
        </div>

        <div class="bg-slate-50 rounded-lg text-3xl text-base py-4 md:gap-8 h- lg:h-[338px] shadow-2xl shadow-gray-700 md:ml-auto lg:-ml-28  lg:w-[370px]">
          <div class="mb-1 text-base font-bold text-lg dark:text-white">
            Text Editor
          </div>
          <div class="lg:w-[366px] bg-gray-200 rounded-full h-2.5 ml-1 mb-7 dark:bg-gray-700">
            <div
              class="bg-blue-600 h-2.5 rounded-full dark:bg-blue-500"
              style={{ width: 25 }}
            ></div>
          </div>
          <div class="mb-1 text-base font-medium text-center  dark:text-white">
            Placeholder
          </div>
          <div class="lg:w-[366px] bg-gray-200 rounded-full h-2.5 ml-1  mb-7 dark:bg-gray-700">
            <div
              class="bg-blue-600 h-2.5 rounded-full dark:bg-blue-500"
              style={{ width: 30 }}
            ></div>
          </div>
          <div class="mb-1 text-base font-medium text-center dark:text-white">
            Placeholder
          </div>
          <div class="lg:w-[366px] bg-gray-200 rounded-full h-2.5 ml-1 mb-7 dark:bg-gray-700">
            <div
              class="bg-blue-600 h-2.5 rounded-full dark:bg-blue-500"
              style={{ width: 15 }}
            ></div>
          </div>
          <div class="mb-1 text-base font-medium text-center dark:text-white">
            Placeholder
          </div>
          <div class="lg:w-[366px] bg-gray-200 rounded-full h-2.5 ml-1 mb-7 dark:bg-gray-700">
            <div
              class="bg-blue-600 h-2.5 rounded-full dark:bg-blue-500"
              style={{ width: 35 }}
            ></div>
          </div>
          <div class="mb-1 text-base font-medium text-center dark:text-white">
            Placeholder
          </div>
          <div class="lg:w-[366px] bg-gray-200 rounded-full h-2.5 ml-1 mb-4 dark:bg-gray-700">
            <div
              class="bg-blue-600 h-2.5 rounded-full dark:bg-blue-500"
              style={{ width: 45 }}
            ></div>
          </div>
        </div>
      </div>
      {/* <div class="w-40 h-40 bg-blue-900 lg:ml-[1340px] lg:-mt-[178px] sm:-mr-96"></div> */}
    </div>
  );
};

export default ProfilePage;
