import Image from "next/image";

export const Footer = () => {
  return (
    <div className="flex flex-col bottom-0 w-screen h-1/3 bg-gray-200">
      <div className=" flex justify-around pt-10 flex-row ">
        <div className="w-1/6">
          <h1 className="font-bold text-xl mb-4">About</h1>
          <p className="text-gray-500 mb-4">
            Aliquip occaecat magna tempor ullamco culpa excepteur minim labore
            commodo sit amet anim.Occaecat id esse nostrud do veniam labore
            pariatur nulla duis.Id incididunt culpa reprehenderit minim amet ad
            minim veniam proident.
          </p>
          <h1>Email&nbsp;:&nbsp;Ligma@balls.net</h1>
          <h1>Phone&nbsp;:&nbsp;(495)&nbsp;224-22-22</h1>
        </div>
        <div className="flex  flex-col gap-2">
          <h1>Home</h1>
          <h1>Blog</h1>
          <h1>Contact</h1>
        </div>
        <div className="flex flex-row gap-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="24"
            height="24"
            viewBox="0 0 30 30"
          >
            <path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="24"
            height="24"
            viewBox="0 0 30 30"
          >
            <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z"></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="24"
            height="24"
            viewBox="0 0 30 30"
          >
            <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="24"
            height="24"
            viewBox="0 0 50 50"
          >
            <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
          </svg>
        </div>
      </div>
      <div className="flex justify-between border-t-gray-300 border-t-2 w-3/4 itmes-center mr-auto ml-auto mt-3">
        <div className="flex flex-row">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="70"
            height="70"
            viewBox="0 0 50 50"
          >
            <path d="M36,3.99H14c-5.514,0-10,4.486-10,10v22c0,5.514,4.486,10,10,10h22c5.514,0,10-4.486,10-10v-22 C46,8.476,41.514,3.99,36,3.99z M8.534,22.973c-0.542-0.104-0.898-0.627-0.795-1.169C9.261,13.805,16.284,8,24.438,8 c0.01,0,0.019,0.005,0.029,0.006C24.513,8,24.555,7.98,24.603,7.98c0.599,0,1.11,0.433,1.209,1.024l0.897,5.381l-0.946,8.517 c-0.069,0.621-0.594,1.09-1.218,1.09c-0.599,0-1.11-0.433-1.209-1.024l-0.897-5.381l0.385-3.461 c-5.016,0.74-8.928,4.877-9.347,9.955C13.433,24.604,12.996,25,12.48,25c-0.027,0-0.055-0.001-0.083-0.003 c-0.551-0.045-0.96-0.528-0.915-1.079c0.504-6.115,5.291-11.088,11.381-11.823c0.064-0.007,0.122,0.011,0.183,0.015l0.229-2.058 c-6.69,0.518-12.302,5.453-13.572,12.126c-0.091,0.479-0.511,0.813-0.981,0.813C8.66,22.99,8.597,22.985,8.534,22.973z M31.618,35.839C29.488,37.253,27.005,38,24.438,38c-4.172,0-8.12-2.025-10.56-5.416c-0.033-0.046-0.043-0.1-0.068-0.15 l-1.937,0.747c0.055,0.084,0.104,0.173,0.161,0.256C14.835,37.546,19.472,40,24.438,40c1.947,0,3.84-0.367,5.628-1.091 c0.512-0.208,1.094,0.04,1.302,0.551c0.208,0.512-0.04,1.095-0.551,1.302C28.79,41.583,26.644,42,24.438,42 c-5.628,0-10.883-2.78-14.057-7.437c-0.235-0.345-0.458-0.699-0.668-1.062l-0.168-0.305c-0.042-0.051-0.092-0.092-0.125-0.151 c-0.089-0.157-0.126-0.327-0.138-0.497c-0.004-0.034,0.004-0.066,0.004-0.1c0.001-0.101,0.006-0.199,0.032-0.296 c0.001-0.004,0.004-0.008,0.005-0.012c0.071-0.248,0.212-0.477,0.435-0.638l3.818-3.029l7.846-3.624 c0.544-0.198,1.151,0.026,1.436,0.53c0.297,0.525,0.152,1.19-0.338,1.543l-3.788,3.614l-3.004,1.159 C17.806,34.39,21.027,36,24.438,36c2.172,0,4.272-0.632,6.074-1.827c0.46-0.306,1.081-0.18,1.386,0.28 C32.204,34.913,32.078,35.534,31.618,35.839z M39.412,33.056c-0.181,0.335-0.525,0.525-0.881,0.525 c-0.124,0-0.249-0.031-0.37-0.079c-0.05-0.011-0.101-0.008-0.15-0.026l-4.895-1.784L26.482,26.9 c-0.483-0.349-0.627-1.006-0.334-1.525c0.282-0.498,0.882-0.719,1.419-0.523l4.803,1.406l2.573,1.977 c0.321-1.044,0.494-2.129,0.494-3.236c0-3.915-2.107-7.565-5.499-9.528c-0.478-0.277-0.641-0.889-0.365-1.367 c0.277-0.478,0.888-0.641,1.367-0.365c4.007,2.319,6.497,6.633,6.497,11.259c0,1.537-0.266,3.04-0.789,4.47 c-0.007,0.02-0.021,0.034-0.03,0.053l1.651,1.269c0.763-1.825,1.167-3.799,1.167-5.792c0-4.16-1.664-8.028-4.685-10.89 c-0.401-0.38-0.418-1.013-0.038-1.414c0.381-0.401,1.014-0.417,1.414-0.038c3.423,3.244,5.309,7.627,5.309,12.342 C41.438,27.811,40.737,30.597,39.412,33.056z"></path>
          </svg>
          <div className="flex flex-col gap-3">
            <h1>Metabog</h1>
            <h3>© All rights reserved.</h3>
          </div>
        </div>
        <div className="flex flex-row h-1/2 mt-auto mb-auto">
          <button className="mr-3 border-r-[1px] border-r-gray-300 pr-3">
            Terms of Use
          </button>
          <button className="mr-3 border-r-[1px] border-r-gray-300 pr-3">
            Privacy Policy
          </button>
          <button>Cookie Policy</button>
        </div>
      </div>
    </div>
  );
};
