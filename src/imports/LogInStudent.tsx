import imgScreenshot202510211430581 from "figma:asset/3d25bb0db39ceaa8384a23d07aeb10c205d94b2c.png";
import imgMail1 from "figma:asset/04473dd56e55d0b26fdb1b2552a8ecf8338b14c8.png";
import imgPass1 from "figma:asset/12622181b4587ff8a8dfde9e6073e4eac6d0f3b5.png";
import imgShow1 from "figma:asset/7fa0b269fdc7d590764fd2cb0a2729811799234e.png";
import imgImageRemovebgPreview71 from "figma:asset/1f6c2a7cc84f53e05c54479d3409ebb58581e6a0.png";

function Frame() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative w-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1a1851] text-[14px] text-center text-nowrap whitespace-pre">
            <span>{`Don’t have an account? `}</span>
            <span className="font-['Poppins:Bold',sans-serif]">Sign up here.</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[10px] items-start left-[110px] p-[10px] top-[723px] w-[303px]">
      <Frame />
    </div>
  );
}

export default function LogInStudent() {
  return (
    <div className="bg-[#f4f4f4] relative size-full" data-name="LOG IN - STUDENT">
      <div className="absolute bg-white h-[39px] left-[98px] rounded-[8px] top-[345px] w-[326px]">
        <div aria-hidden="true" className="absolute border border-[#1a1851] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <div className="absolute h-[945px] left-[583px] rounded-[25px] top-[39px] w-[827px]" data-name="Screenshot 2025-10-21 143058 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[25px]">
          <img alt="" className="absolute h-[101.16%] left-[-34.24%] max-w-none top-[-0.3%] w-[193.14%]" src={imgScreenshot202510211430581} />
        </div>
      </div>
      <div className="absolute bg-white h-[48px] left-[78px] rounded-[8px] top-[448px] w-[367px]">
        <div aria-hidden="true" className="absolute border border-[#1a1851] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <div className="absolute bg-[#1a1851] h-[48px] left-[78px] rounded-[8px] top-[641px] w-[367px]" />
      <div className="absolute bg-[#1a1851] h-[39px] left-[260px] rounded-[8px] top-[345px] w-[164px]" />
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-[78px] not-italic text-[16px] text-black text-nowrap top-[417px] whitespace-pre">Email Address</p>
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-[139px] not-italic text-[#929292] text-[14px] text-nowrap top-[462px] whitespace-pre">student@gmail.com</p>
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-[179.5px] not-italic text-[14px] text-black text-center top-[354px] translate-x-[-50%] w-[55px]">Admin</p>
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[normal] left-[261px] not-italic text-[18px] text-black text-center text-nowrap top-[283px] translate-x-[-50%] whitespace-pre">{`Capstone Archiving and Sorting System `}</p>
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[normal] left-[267px] not-italic text-[18px] text-center text-nowrap text-white top-[651px] translate-x-[-50%] whitespace-pre">Log in</p>
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[normal] left-[344.5px] not-italic text-[14px] text-center text-white top-[354px] translate-x-[-50%] w-[63px]">Student</p>
      <div className="absolute left-[99px] size-[20px] top-[462px]" data-name="mail 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgMail1} />
      </div>
      <div className="absolute bg-white h-[48px] left-[78px] rounded-[8px] top-[539px] w-[367px]">
        <div aria-hidden="true" className="absolute border border-[#1a1851] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-[78px] not-italic text-[16px] text-black text-nowrap top-[508px] whitespace-pre">Password</p>
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-[139px] not-italic text-[#929292] text-[14px] text-nowrap top-[553px] whitespace-pre">Enter password</p>
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-[100px] not-italic text-[#929292] text-[14px] text-nowrap top-[600px] whitespace-pre">Remember me</p>
      <Frame1 />
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[normal] left-[445px] not-italic text-[#1a1851] text-[14px] text-nowrap text-right top-[600px] translate-x-[-100%] whitespace-pre">Forgot Password?</p>
      <div className="absolute left-[99px] size-[20px] top-[553px]" data-name="pass 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPass1} />
      </div>
      <div className="absolute left-[407px] size-[20px] top-[553px]" data-name="show 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgShow1} />
      </div>
      <div className="absolute bg-white left-[78px] rounded-[2px] size-[15px] top-[603px]">
        <div aria-hidden="true" className="absolute border-[#1a1851] border-[0.3px] border-solid inset-0 pointer-events-none rounded-[2px]" />
      </div>
      <div className="absolute h-[55px] left-[158px] top-[239px] w-[205px]" data-name="image-removebg-preview (7) 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageRemovebgPreview71} />
      </div>
      <div className="absolute font-['Poppins:Medium',sans-serif] leading-[normal] left-[262.5px] not-italic text-[#6c6565] text-[10px] text-center text-nowrap top-[954px] translate-x-[-50%] whitespace-pre">
        <p className="mb-0">© 2025 University of Science and Technology of Southern Philippines</p>
        <p>Capstone Sorting and Archiving System</p>
      </div>
      <div className="absolute bg-[rgba(22,22,63,0.3)] h-[945px] left-[583px] rounded-[25px] top-[39px] w-[827px]" />
    </div>
  );
}