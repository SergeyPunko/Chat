import { forwardRef } from 'react';

export const UploadFile = forwardRef((props, ref) => {
  return (
    <label className="mx-auto flex items-center bg-chat-bg py-2 px-4 rounded-md group cursor-pointer hover:scale-105 duration-300 transition-all">
      <input {...props} ref={ref} type="file" accept="image/*" className="hidden" />
      <svg
        className="h-8 w-8 fill-main-text mr-4 group-active:opacity-70 group-active:scale-90 duration-300 transition-all"
        viewBox="0 0 512 512"
      >
        <g data-name="1" id="_1">
          <path d="M324.3,387.69H186a15,15,0,0,1-15-15V235.8H114.81a15,15,0,0,1-11.14-25.05L244,55.1a15,15,0,0,1,22.29,0L406.6,210.75a15,15,0,0,1-11.14,25.05H339.3V372.69A15,15,0,0,1,324.3,387.69ZM201,357.69H309.3V220.8a15,15,0,0,1,15-15h37.44L255.13,87.55,148.53,205.8H186a15,15,0,0,1,15,15Z" />
          <path d="M390.84,452.15H119.43a65.37,65.37,0,0,1-65.3-65.3V348.68a15,15,0,0,1,30,0v38.17a35.34,35.34,0,0,0,35.3,35.3H390.84a35.33,35.33,0,0,0,35.29-35.3V348.68a15,15,0,1,1,30,0v38.17A65.37,65.37,0,0,1,390.84,452.15Z" />
        </g>
      </svg>
      <span className="group-active:opacity-70 duration-300 transition-all">Upload avatar</span>
    </label>
  );
});

UploadFile.displayName = 'UploadFile';
