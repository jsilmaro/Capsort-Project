import svgPaths from "./svg-stynluuuv1";
import imgRight1 from "figma:asset/41f826b5496ab0f19729efe1e3de996a0ef757e7.png";
import imgScreenshot2025102114305811 from "figma:asset/6301c4c179b384e75b59b4600f16775a6701506c.png";
import imgAddAHeadingRemovebgPreview1 from "figma:asset/e298e40a19e08b15aea51c37ec3e9b54c3f5df1f.png";

function Frame() {
  return <div className="absolute h-[44px] left-[124px] top-[628px] w-[382px]" />;
}

function Group() {
  return (
    <div className="absolute contents left-[124px] top-[628px]">
      <Frame />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[22px] items-center relative shrink-0">
      <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[24px] text-black text-center text-nowrap whitespace-pre">Explore</p>
      <div className="relative shrink-0 size-[25px]" data-name="right 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRight1} />
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[10px] h-[56px] items-start left-[208px] px-[41px] py-[10px] rounded-[10px] top-[531px] w-[213px]">
      <Frame1 />
    </div>
  );
}

function Mail() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="mail">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="mail">
          <path d={svgPaths.p190b600} fill="var(--fill-0, white)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function Globe() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="Globe">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g clipPath="url(#clip0_3_89)" id="Globe">
          <path d={svgPaths.p2cb58500} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
        <defs>
          <clipPath id="clip0_3_89">
            <rect fill="white" height="30" width="30" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Phone() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="Phone">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g clipPath="url(#clip0_3_83)" id="Phone">
          <path d={svgPaths.p3358f00} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
        <defs>
          <clipPath id="clip0_3_83">
            <rect fill="white" height="30" width="30" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex gap-[20px] h-[19px] items-center left-[654px] top-[960px] w-[108px]">
      <Mail />
      <Globe />
      <Phone />
    </div>
  );
}

export default function Splash() {
  return (
    <div className="bg-white relative size-full" data-name="SPLASH">
      <div className="absolute h-[1645px] left-0 top-[-376px] w-[1440px]" data-name="Screenshot 2025-10-21 143058 1 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgScreenshot2025102114305811} />
      </div>
      <div className="absolute bg-[rgba(26,24,81,0.5)] h-[1024px] left-[-3px] top-0 w-[1443px]" />
      <Group />
      <Frame2 />
      <p className="absolute font-['Poppins:SemiBold',sans-serif] h-[24px] leading-[normal] left-[1249px] not-italic text-[24px] text-right text-white top-[48px] translate-x-[-100%] w-[133px]">Register</p>
      <p className="absolute font-['Poppins:SemiBold',sans-serif] h-[24px] leading-[normal] left-[208px] not-italic text-[24px] text-white top-[279px] w-[194px]">WELCOME TO</p>
      <p className="absolute font-['Poppins:SemiBold',sans-serif] h-[24px] leading-[normal] left-[1354px] not-italic text-[24px] text-right text-white top-[48px] translate-x-[-100%] w-[81px]">Login</p>
      <div className="absolute h-[220px] left-[180px] top-[292px] w-[871px]" data-name="Add_a_heading-removebg-preview 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-23.69%] max-w-none top-0 w-[146.76%]" src={imgAddAHeadingRemovebgPreview1} />
        </div>
      </div>
      <Frame3 />
      <div className="absolute font-['Poppins:Medium',sans-serif] leading-[normal] left-[720px] not-italic text-[14px] text-center text-white top-[904px] translate-x-[-50%] w-[480px]">
        <p className="mb-0">© 2025 University of Science and Technology of Southern Philippines</p>
        <p>Capstone Sorting and Archiving System</p>
      </div>
    </div>
  );
}