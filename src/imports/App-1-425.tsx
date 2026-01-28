import svgPaths from "./svg-axvil03296";
import imgImageTransLocShowingNoActiveRoutes from "figma:asset/aaa4bac03dede0b9043e2d7885b9f3c911ddc834.png";
import imgImageTransLocShowingRisdRidesError from "figma:asset/a6d2312142e23775adc8baf399a08187342ff0ac.png";
import imgImageBookingFailedErrorMessage from "figma:asset/5f6e21b2e79a40aecc0b4cbdd35ff9be9753e0d8.png";
import imgImagePassioGoConfusingRouteMap from "figma:asset/1b134135bc2c25eec97dd0f9bd01267a245dabb9.png";
import imgImageStopsScreenWireframe from "figma:asset/e7c73282e08213b82eaf15700e1876d43d795470.png";
import imgImageRoutesScreenWireframe from "figma:asset/79c6cf9f24fa9d0fa7b852bc064a929aa5520823.png";
import imgImageDetailsScreenWireframe from "figma:asset/16b4c8cd4f4217d883e8b33d9b6c86b9660a1503.png";
import imgImageOnCallScreenWireframe from "figma:asset/6a4a8d7eb37ff080c852154e07ec49382851d98f.png";
import imgImage4 from "figma:asset/7cde1039a1767a9c08dadd89311c92562e28ed44.png";
import imgImage7 from "figma:asset/8ffd228bbbaa74eaf75d66660a4b5060c3575e0a.png";
import imgImage2 from "figma:asset/ee0a748965bd51c5c6ad133b2a591153c50f54cc.png";
import imgImage5 from "figma:asset/9ad8a8f005f023102ef7fc0ad9befd282ed8f5ce.png";
import imgImage6 from "figma:asset/987088acf92b4bd4e2e63105adbf707644139204.png";

function Text() {
  return (
    <div className="absolute content-stretch flex h-[36px] items-start left-[481.52px] top-[2px] w-[12.961px]" data-name="Text">
      <p className="css-ew64yg font-['Neue_Haas_Grotesk_Display_Pro:45_Light',sans-serif] leading-[40px] not-italic relative shrink-0 text-[#a8d8ea] text-[36px] text-center">*</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[120px] left-0 top-[64px] w-[976px]" data-name="Heading 1">
      <p className="-translate-x-1/2 absolute css-4hzbpn font-['Neue_Haas_Grotesk_Display_Pro:65_Medium',sans-serif] leading-[60px] left-[488.34px] not-italic text-[60px] text-black text-center top-[6px] w-[862px]">Brown University Shuttle: A Unified Transit Experience</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[84px] left-[104px] top-[208px] w-[768px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute css-4hzbpn font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[28px] left-[384.26px] text-[20px] text-[rgba(0,0,0,0.7)] text-center top-[-0.5px] w-[741px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        The case study below is a product design exploration that unifies TransLoc and PassioGo into a single, campus-specific app to streamline shuttle information and improve the Brown University student transit experience.
      </p>
    </div>
  );
}

function CaseStudy1() {
  return (
    <div className="bg-white h-[493.039px] relative shrink-0 w-full" data-name="CaseStudy2">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[589.039px] items-start left-0 overflow-clip pt-[48px] px-[48px] rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] top-[340px] w-[976px]" data-name="Container">
      <CaseStudy1 />
    </div>
  );
}

function Section() {
  return (
    <div className="absolute h-[929.039px] left-[104px] top-[128px] w-[976px]" data-name="Section">
      <Text />
      <Heading />
      <Paragraph />
      <Container />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute css-ew64yg font-['Neue_Haas_Grotesk_Display_Pro:65_Medium',sans-serif] leading-[32px] left-0 not-italic text-[#0a0a0a] text-[24px] top-[3px]">Context</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[104px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[26px] left-0 text-[16px] text-[rgba(0,0,0,0.8)] top-0 w-[931px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        This project was part of our capstone for the Brown Product Management Fellowship. For our capstone, we had to use PM principles and apply them to an existing product. We chose the Brown University Shuttle (BUS) system, and I took this as an opportunity to explore designing an app that unifies TransLoc and PassioGo, the two apps Brown uses for the OnCall Shuttle and Shuttle Routes, into one streamlined app that makes it easier for Brown students to navigate the shuttle system.
      </p>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[rgba(168,216,234,0.1)] h-[220px] relative rounded-[24px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(168,216,234,0.3)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[2px] pt-[34px] px-[34px] relative size-full">
        <Heading1 />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[34px] size-[24px] top-[34px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M8 2V6" id="Vector" stroke="var(--stroke-0, #A8D8EA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M16 2V6" id="Vector_2" stroke="var(--stroke-0, #A8D8EA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p32f12c00} id="Vector_3" stroke="var(--stroke-0, #A8D8EA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M3 10H21" id="Vector_4" stroke="var(--stroke-0, #A8D8EA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute h-[24px] left-[34px] top-[74px] w-[252px]" data-name="Heading 3">
      <p className="absolute css-ew64yg font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#0a0a0a] text-[16px] top-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        Timeline
      </p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[24px] left-[34px] top-[106px] w-[252px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-[rgba(0,0,0,0.7)] top-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        October - November 2025
      </p>
    </div>
  );
}

function CaseStudy2() {
  return (
    <div className="bg-white col-[1] css-3foyfs relative rounded-[24px] row-[1] self-stretch shrink-0" data-name="CaseStudy2">
      <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Icon />
      <Heading2 />
      <Paragraph2 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[34px] size-[24px] top-[34px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p1d820380} id="Vector" stroke="var(--stroke-0, #3D2817)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p27451300} id="Vector_2" stroke="var(--stroke-0, #3D2817)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2981fe00} id="Vector_3" stroke="var(--stroke-0, #3D2817)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p161d4800} id="Vector_4" stroke="var(--stroke-0, #3D2817)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Heading3() {
  return (
    <div className="absolute h-[24px] left-[34px] top-[74px] w-[252px]" data-name="Heading 3">
      <p className="absolute css-ew64yg font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#0a0a0a] text-[16px] top-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        Role
      </p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[120px] left-[34px] top-[106px] w-[252px]" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-[rgba(0,0,0,0.7)] top-0 w-[252px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Product Manager & Designer: drove research, product definition, and feature prioritization while also designing all UI/UX for the unified shuttle app.`}</p>
    </div>
  );
}

function CaseStudy3() {
  return (
    <div className="bg-white col-[2] css-3foyfs relative rounded-[24px] row-[1] self-stretch shrink-0" data-name="CaseStudy2">
      <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Icon1 />
      <Heading3 />
      <Paragraph3 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[34px] size-[24px] top-[34px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.pace200} id="Vector" stroke="var(--stroke-0, #A8D8EA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p3c6311f0} id="Vector_2" stroke="var(--stroke-0, #A8D8EA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p3d728000} id="Vector_3" stroke="var(--stroke-0, #A8D8EA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Heading4() {
  return (
    <div className="absolute h-[24px] left-[34px] top-[74px] w-[252px]" data-name="Heading 3">
      <p className="absolute css-ew64yg font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#0a0a0a] text-[16px] top-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        Team
      </p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[96px] left-[34px] top-[106px] w-[252px]" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-[rgba(0,0,0,0.7)] top-0 w-[232px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        3 Product Management Fellows collaborating on research, strategy, and concept development.
      </p>
    </div>
  );
}

function CaseStudy4() {
  return (
    <div className="bg-white col-[3] css-3foyfs relative rounded-[24px] row-[1] self-stretch shrink-0" data-name="CaseStudy2">
      <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Icon2 />
      <Heading4 />
      <Paragraph4 />
    </div>
  );
}

function Container2() {
  return (
    <div className="gap-[32px] grid grid-cols-[repeat(3,_minmax(0,_1fr))] grid-rows-[repeat(1,_minmax(0,_1fr))] h-[260px] relative shrink-0 w-full" data-name="Container">
      <CaseStudy2 />
      <CaseStudy3 />
      <CaseStudy4 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="absolute h-[36px] left-0 top-0 w-[488px]" data-name="Heading 2">
      <p className="absolute css-ew64yg font-['Neue_Haas_Grotesk_Display_Pro:65_Medium',sans-serif] leading-[36px] left-0 not-italic text-[#0a0a0a] text-[30px] top-[3px]">The Problem</p>
    </div>
  );
}

function Container4() {
  return <div className="absolute bg-[#3d2817] h-[4px] left-0 rounded-[16777200px] top-[52px] w-[64px]" data-name="Container" />;
}

function BoldText() {
  return <div className="absolute h-[45.5px] left-0 top-[107px] w-[409.492px]" data-name="Bold Text" />;
}

function Paragraph5() {
  return (
    <div className="absolute h-[260px] left-0 top-[80px] w-[488px]" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[0] left-0 text-[16px] text-[rgba(0,0,0,0.8)] top-0 w-[473px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="leading-[26px]">{`Brown offers a robust shuttle system with fixed routes, late-night on-call service, and wide campus coverage. But students rarely take full advantage of it because the experience is fragmented across two separate apps; PassioGo handles fixed routes, while TransLoc handles on-call rides, `}</span>
        <span className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[26px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`but most students don’t understand which app is for what. `}</span>
        <span className="leading-[26px]">In our research, students described the system as confusing, cluttered, and unreliable. They bounce between apps, mix up shuttle times, or give up entirely, resulting in missed shuttles, unnecessary walking late at night, and a general lack of trust in campus transportation.</span>
      </p>
      <BoldText />
    </div>
  );
}

function CaseStudy5() {
  return (
    <div className="col-[1] css-3foyfs relative row-[1] self-stretch shrink-0" data-name="CaseStudy2">
      <Heading5 />
      <Container4 />
      <Paragraph5 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="absolute h-[36px] left-0 top-0 w-[488px]" data-name="Heading 2">
      <p className="absolute css-ew64yg font-['Neue_Haas_Grotesk_Display_Pro:65_Medium',sans-serif] leading-[36px] left-0 not-italic text-[#0a0a0a] text-[30px] top-[3px]">The Solution</p>
    </div>
  );
}

function Container5() {
  return <div className="absolute bg-[#a8d8ea] h-[4px] left-0 rounded-[16777200px] top-[52px] w-[64px]" data-name="Container" />;
}

function BoldText1() {
  return <div className="absolute h-[71px] left-[5px] top-[25.96px] w-[460px]" data-name="Bold Text" />;
}

function Paragraph6() {
  return (
    <div className="absolute h-[260px] left-0 top-[80px] w-[488px]" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[0] left-0 text-[16px] text-[rgba(0,0,0,0.8)] top-0 w-[456px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="leading-[26px]">{`Users shouldn't have to navigate two separate apps to navigate transportation at Brown. Our solution was `}</span>
        <span className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[26px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`a unified, Brown-specific shuttle app that brings fixed routes, real-time tracking, and on-call booking into one clear, intuitive interface. `}</span>
        <span className="leading-[26px]">The redesigned experience consolidates features from PassioGo and TransLoc, removes confusion around routes and agencies, and gives students a single platform with their on-campus transportation options. With simplified flows, clearer maps, and reliable real-time updates, students can quickly see what’s running, where to go, and how to get to their destination safely.</span>
      </p>
      <BoldText1 />
    </div>
  );
}

function CaseStudy6() {
  return (
    <div className="col-[2] css-3foyfs relative row-[1] self-stretch shrink-0" data-name="CaseStudy2">
      <Heading6 />
      <Container5 />
      <Paragraph6 />
    </div>
  );
}

function Container3() {
  return (
    <div className="gap-[48px] grid grid-cols-[repeat(2,_minmax(0,_1fr))] grid-rows-[repeat(1,_minmax(0,_1fr))] h-[340px] relative shrink-0 w-full" data-name="Container">
      <CaseStudy5 />
      <CaseStudy6 />
    </div>
  );
}

function Section1() {
  return (
    <div className="absolute bg-[#f8f8f8] content-stretch flex flex-col gap-[48px] h-[1092px] items-start left-0 pt-[80px] px-[80px] top-[1137.04px] w-[1184px]" data-name="Section">
      <Container1 />
      <Container2 />
      <Container3 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="absolute content-stretch flex h-[48px] items-start left-0 top-0 w-[976px]" data-name="Heading 2">
      <p className="css-4hzbpn flex-[1_0_0] font-['Neue_Haas_Grotesk_Display_Pro:45_Light',sans-serif] leading-[48px] min-h-px min-w-px not-italic relative text-[#0a0a0a] text-[48px]">{`Research & Discovery`}</p>
    </div>
  );
}

function Container6() {
  return <div className="absolute bg-[#a8d8ea] h-[8px] left-0 rounded-[16777200px] top-[72px] w-[96px]" data-name="Container" />;
}

function Heading8() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute css-ew64yg font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[32px] left-0 text-[#0a0a0a] text-[24px] top-[-1px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        User Research
      </p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[104px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[26px] left-0 text-[16px] text-[rgba(0,0,0,0.8)] top-0 w-[959px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        We conducted interviews with 24 Brown students to understand their current shuttle usage patterns, pain points, and behavioral motivations. Instead of asking leading and/or biased questions, we used open-ended, behavior-focused prompts like “Tell me about the last time you used a Brown shuttle” and “What factors influenced your decision?” When students naturally brought up confusion or issues, we followed up with more questions to uncover the root causes and impact on their transportation choices on campus.
      </p>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[152px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading8 />
      <Paragraph7 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute css-ew64yg font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[32px] left-0 text-[#0a0a0a] text-[24px] top-[-1px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Top Issues Identified by Students
      </p>
    </div>
  );
}

function BoldText2() {
  return (
    <div className="absolute h-[43.5px] left-0 top-[2px] w-[413.781px]" data-name="Bold Text">
      <div className="absolute font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[0] left-0 text-[16px] text-[rgba(0,0,0,0.8)] top-[-2px] w-[414px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn mb-0">
          <span className="leading-[24px]">{`76.5% of students reported confusion between the two apps: `}</span>
          <span className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Students are unsure which app is for onCall vs fixed routes, and often bounce back and forth between them. Many try to request rides in the wrong app, assume one app replaced the other, or don't know what "agencies" mean in TransLoc.`}</span>
        </p>
        <p className="css-4hzbpn leading-[24px] mb-0">&nbsp;</p>
        <p className="css-4hzbpn mb-0">
          <span className="leading-[24px]">{`68.8% - Unreliable or confusing live tracking and wait times: `}</span>
          <span className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Bus icons freeze, jump, or disappear on the map; ETAs feel inaccurate; zones turn on and off with no explanation. Students don't feel confident that a shuttle is actually coming or how long they'll wait.`}</span>
        </p>
        <p className="css-4hzbpn leading-[24px] mb-0">&nbsp;</p>
        <p className="css-4hzbpn leading-[24px]">&nbsp;</p>
      </div>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[317px] relative shrink-0 w-full" data-name="Paragraph">
      <BoldText2 />
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-[rgba(168,216,234,0.1)] col-[1] css-por8k5 relative rounded-[16px] row-[1] self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(168,216,234,0.3)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col items-start pb-[2px] pt-[26px] px-[26px] relative size-full">
        <Paragraph8 />
      </div>
    </div>
  );
}

function BoldText3() {
  return (
    <div className="absolute h-[43.5px] left-0 top-[2px] w-[349.797px]" data-name="Bold Text">
      <p className="absolute css-4hzbpn font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[0] left-0 text-[16px] text-[rgba(0,0,0,0.8)] top-[-2px] w-[350px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="leading-[24px]">{`75.0% - Unclear schedules, routes, and service coverage: `}</span>
        <span className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          {`onCall shuttles, times, and which of the three bus routes goes where are all difficult to keep straight. Students frequently say they don't know if a shuttle will be operating, so they default to other methods.`}
          <br aria-hidden="true" />
          <br aria-hidden="true" />
        </span>
        <span className="leading-[24px]">{`56.3% - Cluttered and unintuitive UI: `}</span>
        <span className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Both apps feel "messy" or "cluttered," with too many lines, dots, and options that don't clearly map to real actions. Requesting, changing, or canceling an onCall ride, choosing the right agency/zone, or adjusting rider counts is confusing.`}</span>
      </p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[120px] relative shrink-0 w-full" data-name="Paragraph">
      <BoldText3 />
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-[rgba(61,40,23,0.1)] col-[2] css-por8k5 relative rounded-[16px] row-[1] self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(61,40,23,0.3)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col items-start pb-[2px] pt-[26px] px-[26px] relative size-full">
        <Paragraph9 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-[rgba(168,216,234,0.1)] col-[1] css-3foyfs relative rounded-[16px] row-[2] self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(168,216,234,0.3)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="size-full" />
    </div>
  );
}

function BoldText4() {
  return <div className="absolute h-[19.5px] left-0 top-[2px] w-[272.422px]" data-name="Bold Text" />;
}

function Paragraph10() {
  return (
    <div className="h-[120px] relative shrink-0 w-full" data-name="Paragraph">
      <BoldText4 />
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-[rgba(61,40,23,0.1)] col-[2] css-por8k5 relative rounded-[16px] row-[2] self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(61,40,23,0.3)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col items-start pb-[2px] pt-[26px] px-[26px] relative size-full">
        <Paragraph10 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="gap-[24px] grid grid-cols-[repeat(2,_minmax(0,_1fr))] grid-rows-[__minmax(0,_196fr)_minmax(0,_1fr)] h-[392px] relative shrink-0 w-full" data-name="Container">
      <Container11 />
      <Container12 />
      <Container13 />
      <Container14 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[440px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading9 />
      <Container10 />
    </div>
  );
}

function Heading10() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute css-ew64yg font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[32px] left-0 text-[#0a0a0a] text-[24px] top-[-1px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Design Patterns & Industry Standards`}</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[78px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[26px] left-0 text-[16px] text-[rgba(0,0,0,0.8)] top-0 w-[914px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        We analyzed three leading transit apps to identify effective patterns for real-time tracking, route visualization, and overall user experience. We wanted to understand established conventions and design practices that consistently help users navigate transportation systems—practices we could apply to a unified shuttle experience at Brown.
      </p>
    </div>
  );
}

function BoldText5() {
  return (
    <div className="absolute content-stretch flex h-[22px] items-start left-[24px] top-[27px] w-[59.727px]" data-name="Bold Text">
      <p className="css-ew64yg font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[#0a0a0a] text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Transit
      </p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="absolute h-[20px] left-[24px] top-[64px] w-[257.328px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-[rgba(0,0,0,0.7)] top-[0.5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Real-time bus/shuttle tracking
      </p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute css-ew64yg font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-[rgba(0,0,0,0.8)] top-[0.5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        • Predictable loops visualized cleanly
      </p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute css-4hzbpn font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-[rgba(0,0,0,0.8)] top-[0.5px] w-[255px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        • “Nearby routes” feature that works well with university shuttles
      </p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute css-4hzbpn font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-[rgba(0,0,0,0.8)] top-[0.5px] w-[233px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        • Strong color-coding for quick route scanning
      </p>
    </div>
  );
}

function List() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[116px] items-start left-[24px] top-[96px] w-[257.328px]" data-name="List">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute bg-white border-2 border-[rgba(0,0,0,0.1)] border-solid h-[240px] left-0 rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-0 w-[309.328px]" data-name="Container">
      <BoldText5 />
      <Paragraph12 />
      <List />
    </div>
  );
}

function BoldText6() {
  return (
    <div className="absolute content-stretch flex h-[22px] items-start left-[24px] top-[27px] w-[41.586px]" data-name="Bold Text">
      <p className="css-ew64yg font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[#0a0a0a] text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Uber
      </p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="absolute h-[20px] left-[24px] top-[64px] w-[257.336px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-[rgba(0,0,0,0.7)] top-[0.5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        On-demand ride booking
      </p>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute css-4hzbpn font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-[rgba(0,0,0,0.8)] top-[0.5px] w-[226px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        • Streamlined booking with minimal steps
      </p>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute css-ew64yg font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-[rgba(0,0,0,0.8)] top-[0.5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        • Live tracking with accurate ETAs
      </p>
    </div>
  );
}

function ListItem5() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute css-4hzbpn font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-[rgba(0,0,0,0.8)] top-[0.5px] w-[180px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        • Clear pickup/dropoff visual confirmation
      </p>
    </div>
  );
}

function List1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[116px] items-start left-[24px] top-[96px] w-[257.336px]" data-name="List">
      <ListItem3 />
      <ListItem4 />
      <ListItem5 />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute bg-white border-2 border-[rgba(0,0,0,0.1)] border-solid h-[240px] left-[333.33px] rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-0 w-[309.336px]" data-name="Container">
      <BoldText6 />
      <Paragraph13 />
      <List1 />
    </div>
  );
}

function BoldText7() {
  return (
    <div className="absolute content-stretch flex h-[22px] items-start left-[24px] top-[27px] w-[33.234px]" data-name="Bold Text">
      <p className="css-ew64yg font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[#0a0a0a] text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Lyft
      </p>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="absolute h-[20px] left-[24px] top-[64px] w-[257.336px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-[rgba(0,0,0,0.7)] top-[0.5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        On-demand ride booking
      </p>
    </div>
  );
}

function ListItem6() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute css-4hzbpn font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-[rgba(0,0,0,0.8)] top-[0.5px] w-[209px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        • Clean, minimalist interface with intuitive journey steps
      </p>
    </div>
  );
}

function ListItem7() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute css-4hzbpn font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-[rgba(0,0,0,0.8)] top-[0.5px] w-[240px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        • Accessible design (large tap targets, simple visuals)
      </p>
    </div>
  );
}

function ListItem8() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute css-ew64yg font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-[rgba(0,0,0,0.8)] top-[0.5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        • Easy ride modification and cancellation
      </p>
    </div>
  );
}

function List2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[116px] items-start left-[24px] top-[96px] w-[257.336px]" data-name="List">
      <ListItem6 />
      <ListItem7 />
      <ListItem8 />
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute bg-white border-2 border-[rgba(0,0,0,0.1)] border-solid h-[240px] left-[666.66px] rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-0 w-[309.336px]" data-name="Container">
      <BoldText7 />
      <Paragraph14 />
      <List2 />
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[240px] relative shrink-0 w-full" data-name="Container">
      <Container17 />
      <Container18 />
      <Container19 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[398px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading10 />
      <Paragraph11 />
      <Container16 />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[48px] h-[1086px] items-start left-0 top-[128px] w-[976px]" data-name="Container">
      <Container8 />
      <Container9 />
      <Container15 />
    </div>
  );
}

function Section2() {
  return (
    <div className="absolute h-[1214px] left-[104px] top-[2309.04px] w-[976px]" data-name="Section">
      <Heading7 />
      <Container6 />
      <Container7 />
    </div>
  );
}

function Heading11() {
  return (
    <div className="absolute content-stretch flex h-[48px] items-start left-[80px] top-[80px] w-[1024px]" data-name="Heading 2">
      <p className="css-4hzbpn flex-[1_0_0] font-['Neue_Haas_Grotesk_Display_Pro:45_Light',sans-serif] leading-[48px] min-h-px min-w-px not-italic relative text-[#0a0a0a] text-[48px]">Design Process</p>
    </div>
  );
}

function Container20() {
  return <div className="absolute bg-[#3d2817] h-[8px] left-[80px] rounded-[16777200px] top-[152px] w-[96px]" data-name="Container" />;
}

function Heading12() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute css-ew64yg font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[32px] left-0 text-[#0a0a0a] text-[24px] top-[-1px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`User Persona & Journey Map`}</p>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[26px] left-0 text-[16px] text-[rgba(0,0,0,0.8)] top-0 w-[977px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Based on our research, we developed a primary persona representing the typical Brown student's shuttle experience and mapped their current journey to identify key pain points and opportunities for improvement.`}</p>
    </div>
  );
}

function BoldText8() {
  return (
    <div className="absolute content-stretch flex h-[22px] items-start left-[26px] top-[29px] w-[236.563px]" data-name="Bold Text">
      <p className="css-ew64yg font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[#0a0a0a] text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Meet Oliver, Junior at Brown
      </p>
    </div>
  );
}

function BoldText9() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-0 top-[1.5px] w-[30.625px]" data-name="Bold Text">
      <p className="css-ew64yg font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.8)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Age:
      </p>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <BoldText9 />
      <p className="absolute css-ew64yg font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[20px] left-[30.63px] text-[14px] text-[rgba(0,0,0,0.8)] top-[0.5px]" style={{ fontVariationSettings: "'wdth' 100" }}>{` 20, lives off-campus on Thayer Street, works @ a lab in Brown School of Public Health (25 minute downhill walk!)`}</p>
    </div>
  );
}

function BoldText10() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-0 top-[1.5px] w-[41.938px]" data-name="Bold Text">
      <p className="css-ew64yg font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.8)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Goals:
      </p>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <BoldText10 />
      <p className="absolute css-ew64yg font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[20px] left-[41.94px] text-[14px] text-[rgba(0,0,0,0.8)] top-[0.5px]" style={{ fontVariationSettings: "'wdth' 100" }}>{` Get home safely and quickly after shifts, especially during the winter months.`}</p>
    </div>
  );
}

function BoldText11() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-0 top-[1.5px] w-[85.641px]" data-name="Bold Text">
      <p className="css-ew64yg font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.8)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Frustrations:
      </p>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <BoldText11 />
      <p className="absolute css-ew64yg font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[20px] left-[85.64px] text-[14px] text-[rgba(0,0,0,0.8)] top-[0.5px]" style={{ fontVariationSettings: "'wdth' 100" }}>{` Never knows which app to use, misses shuttles due to inaccurate timing`}</p>
    </div>
  );
}

function BoldText12() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-0 top-[1.5px] w-[69.32px]" data-name="Bold Text">
      <p className="css-ew64yg font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.8)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Behaviors:
      </p>
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <BoldText12 />
      <p className="absolute css-ew64yg font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[20px] left-[69.32px] text-[14px] text-[rgba(0,0,0,0.8)] top-[0.5px]" style={{ fontVariationSettings: "'wdth' 100" }}>{` Checks multiple apps, often walks instead of risking shuttle confusion`}</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[104px] items-start left-[26px] top-[66px] w-[908px]" data-name="Container">
      <Paragraph16 />
      <Paragraph17 />
      <Paragraph18 />
      <Paragraph19 />
    </div>
  );
}

function Container24() {
  return (
    <div className="bg-[rgba(168,216,234,0.1)] h-[196px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(168,216,234,0.3)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <BoldText8 />
      <Container25 />
    </div>
  );
}

function Container29() {
  return <div className="bg-[#a8d8ea] h-[6px] shrink-0 w-full" data-name="Container" />;
}

function Container32() {
  return (
    <div className="bg-black relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="css-ew64yg font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[12px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
          1
        </p>
      </div>
    </div>
  );
}

function Heading13() {
  return (
    <div className="h-[20px] relative shrink-0 w-[64.367px]" data-name="Heading 5">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[20px] left-0 text-[#0a0a0a] text-[14px] top-[0.5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Open app
        </p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <Container32 />
      <Heading13 />
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[16px] left-0 text-[12px] text-[rgba(0,0,0,0.7)] top-[0.5px] w-[135px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Oliver opens TransLoc to search for shuttle times
      </p>
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[96px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[8px] items-start pt-[16px] px-[16px] relative size-full">
        <Container31 />
        <Paragraph20 />
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute bg-white h-[196px] left-[8px] rounded-[10px] top-0 w-[200px]" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[2px] relative rounded-[inherit] size-full">
        <Container29 />
        <Container30 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute h-[32px] left-[220px] top-[82px] w-[24px]" data-name="Container">
      <p className="absolute css-ew64yg font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[32px] left-0 text-[#ff6b6b] text-[24px] top-[-1px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        →
      </p>
    </div>
  );
}

function Container35() {
  return <div className="bg-[#ff6b6b] h-[6px] shrink-0 w-full" data-name="Container" />;
}

function Container38() {
  return (
    <div className="bg-[#ff6b6b] relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="css-ew64yg font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[12px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
          2
        </p>
      </div>
    </div>
  );
}

function Heading14() {
  return (
    <div className="h-[20px] relative shrink-0 w-[97.438px]" data-name="Heading 5">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[20px] left-0 text-[#ff6b6b] text-[14px] top-[0.5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Inaccurate info
        </p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <Container38 />
      <Heading14 />
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[16px] left-0 text-[12px] text-[rgba(0,0,0,0.7)] top-[0.5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        No routes within 1.5 miles
      </p>
    </div>
  );
}

function ImageTransLocShowingNoActiveRoutes() {
  return (
    <div className="h-[64.188px] relative shrink-0 w-full" data-name="Image (TransLoc showing no active routes)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageTransLocShowingNoActiveRoutes} />
    </div>
  );
}

function Container39() {
  return (
    <div className="bg-[#f3f4f6] h-[66.188px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col items-start p-px relative size-full">
        <ImageTransLocShowingNoActiveRoutes />
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[154.188px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[8px] items-start pt-[16px] px-[16px] relative size-full">
        <Container37 />
        <Paragraph21 />
        <Container39 />
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute bg-white h-[196px] left-[256px] rounded-[10px] top-0 w-[200px]" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[2px] relative rounded-[inherit] size-full">
        <Container35 />
        <Container36 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(255,107,107,0.3)] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute h-[32px] left-[468px] top-[82px] w-[24px]" data-name="Container">
      <p className="absolute css-ew64yg font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[32px] left-0 text-[#4a5565] text-[24px] top-[-1px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        →
      </p>
    </div>
  );
}

function Container42() {
  return <div className="bg-[#99a1af] h-[6px] shrink-0 w-full" data-name="Container" />;
}

function Container45() {
  return (
    <div className="bg-black relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="css-ew64yg font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[12px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
          3
        </p>
      </div>
    </div>
  );
}

function Heading15() {
  return (
    <div className="h-[20px] relative shrink-0 w-[114.32px]" data-name="Heading 5">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[20px] left-0 text-[#0a0a0a] text-[14px] top-[0.5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Search continues
        </p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <Container45 />
      <Heading15 />
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[16px] left-0 text-[12px] text-[rgba(0,0,0,0.7)] top-[0.5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Pivots to onCall routes
      </p>
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[80px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[8px] items-start pt-[16px] px-[16px] relative size-full">
        <Container44 />
        <Paragraph22 />
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute bg-white h-[196px] left-[504px] rounded-[10px] top-0 w-[200px]" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[2px] relative rounded-[inherit] size-full">
        <Container42 />
        <Container43 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute h-[32px] left-[716px] top-[82px] w-[24px]" data-name="Container">
      <p className="absolute css-ew64yg font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[32px] left-0 text-[#ff6b6b] text-[24px] top-[-1px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        →
      </p>
    </div>
  );
}

function Container48() {
  return <div className="bg-[#ff6b6b] h-[6px] shrink-0 w-full" data-name="Container" />;
}

function Container51() {
  return (
    <div className="bg-[#ff6b6b] relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="css-ew64yg font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[12px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
          4
        </p>
      </div>
    </div>
  );
}

function Heading16() {
  return (
    <div className="h-[20px] relative shrink-0 w-[107.945px]" data-name="Heading 5">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[20px] left-0 text-[#ff6b6b] text-[14px] top-[0.5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Irrelevant routes
        </p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <Container51 />
      <Heading16 />
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[16px] left-0 text-[12px] text-[rgba(0,0,0,0.7)] top-[0.5px] w-[137px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Shows RISD rides, which Brown students can't use`}</p>
    </div>
  );
}

function ImageTransLocShowingRisdRidesError() {
  return (
    <div className="h-[80px] relative shrink-0 w-full" data-name="Image (TransLoc showing RISD rides error)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageTransLocShowingRisdRidesError} />
    </div>
  );
}

function Container52() {
  return (
    <div className="bg-[#f3f4f6] h-[82px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col items-start p-px relative size-full">
        <ImageTransLocShowingRisdRidesError />
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="h-[186px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[8px] items-start pt-[16px] px-[16px] relative size-full">
        <Container50 />
        <Paragraph23 />
        <Container52 />
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute bg-white h-[196px] left-[752px] rounded-[10px] top-0 w-[200px]" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[2px] relative rounded-[inherit] size-full">
        <Container48 />
        <Container49 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(255,107,107,0.3)] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[196px] relative shrink-0 w-full" data-name="Container">
      <Container28 />
      <Container33 />
      <Container34 />
      <Container40 />
      <Container41 />
      <Container46 />
      <Container47 />
    </div>
  );
}

function Container55() {
  return <div className="bg-[#ff6b6b] h-[6px] shrink-0 w-full" data-name="Container" />;
}

function Container58() {
  return (
    <div className="bg-[#ff6b6b] relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="css-ew64yg font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[12px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
          5
        </p>
      </div>
    </div>
  );
}

function Heading17() {
  return (
    <div className="flex-[1_0_0] h-[40px] min-h-px min-w-px relative" data-name="Heading 5">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-4hzbpn font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[20px] left-0 text-[#ff6b6b] text-[14px] top-[0.5px] w-[117px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Inconsistent zone booking accurary
        </p>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center relative shrink-0 w-full" data-name="Container">
      <Container58 />
      <Heading17 />
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[16px] left-0 text-[12px] text-[rgba(0,0,0,0.7)] top-[0.5px] w-[153px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        OnCall not active despite Oliver being within the zone
      </p>
    </div>
  );
}

function ImageBookingFailedErrorMessage() {
  return (
    <div className="h-[107.727px] relative shrink-0 w-full" data-name="Image (Booking failed error message)">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageBookingFailedErrorMessage} />
    </div>
  );
}

function Container59() {
  return (
    <div className="bg-[#f3f4f6] h-[109.727px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col items-start pl-px pr-[1.016px] py-px relative size-full">
        <ImageBookingFailedErrorMessage />
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="h-[229.727px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[8px] items-start pt-[16px] px-[16px] relative size-full">
        <Container57 />
        <Paragraph24 />
        <Container59 />
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute bg-white h-[239.727px] left-[8px] rounded-[10px] top-0 w-[200px]" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[2px] relative rounded-[inherit] size-full">
        <Container55 />
        <Container56 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(255,107,107,0.3)] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container60() {
  return (
    <div className="absolute h-[32px] left-[220px] top-[103.86px] w-[24px]" data-name="Container">
      <p className="absolute css-ew64yg font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[32px] left-0 text-[#4a5565] text-[24px] top-[-1px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        →
      </p>
    </div>
  );
}

function Container62() {
  return <div className="bg-[#99a1af] h-[6px] shrink-0 w-full" data-name="Container" />;
}

function Container65() {
  return (
    <div className="bg-black relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="css-ew64yg font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[12px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
          6
        </p>
      </div>
    </div>
  );
}

function Heading18() {
  return (
    <div className="h-[20px] relative shrink-0 w-[80.148px]" data-name="Heading 5">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[20px] left-0 text-[#0a0a0a] text-[14px] top-[0.5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Switch apps
        </p>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <Container65 />
      <Heading18 />
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[16px] left-0 text-[12px] text-[rgba(0,0,0,0.7)] top-[0.5px] w-[146px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Frustrated, Oliver pivots to PassioGo
      </p>
    </div>
  );
}

function Container63() {
  return (
    <div className="h-[96px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[8px] items-start pt-[16px] px-[16px] relative size-full">
        <Container64 />
        <Paragraph25 />
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="absolute bg-white h-[239.727px] left-[256px] rounded-[10px] top-0 w-[200px]" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[2px] relative rounded-[inherit] size-full">
        <Container62 />
        <Container63 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container66() {
  return (
    <div className="absolute h-[32px] left-[468px] top-[103.86px] w-[24px]" data-name="Container">
      <p className="absolute css-ew64yg font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[32px] left-0 text-[#ff6b6b] text-[24px] top-[-1px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        →
      </p>
    </div>
  );
}

function Container68() {
  return <div className="bg-[#ff6b6b] h-[6px] shrink-0 w-full" data-name="Container" />;
}

function Container71() {
  return (
    <div className="bg-[#ff6b6b] relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="css-ew64yg font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[12px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
          7
        </p>
      </div>
    </div>
  );
}

function Heading19() {
  return (
    <div className="h-[20px] relative shrink-0 w-[84.469px]" data-name="Heading 5">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[20px] left-0 text-[#ff6b6b] text-[14px] top-[0.5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Confusing UI
        </p>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <Container71 />
      <Heading19 />
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[16px] left-0 text-[12px] text-[rgba(0,0,0,0.7)] top-[0.5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        PassioGo route confusion
      </p>
    </div>
  );
}

function ImagePassioGoConfusingRouteMap() {
  return (
    <div className="h-[100px] relative shrink-0 w-full" data-name="Image (PassioGo confusing route map)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImagePassioGoConfusingRouteMap} />
    </div>
  );
}

function Container72() {
  return (
    <div className="bg-[#f3f4f6] h-[102px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col items-start p-px relative size-full">
        <ImagePassioGoConfusingRouteMap />
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="h-[190px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[8px] items-start pt-[16px] px-[16px] relative size-full">
        <Container70 />
        <Paragraph26 />
        <Container72 />
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="absolute bg-white h-[239.727px] left-[504px] rounded-[10px] top-0 w-[200px]" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[2px] relative rounded-[inherit] size-full">
        <Container68 />
        <Container69 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(255,107,107,0.3)] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container73() {
  return (
    <div className="absolute h-[32px] left-[716px] top-[103.86px] w-[24px]" data-name="Container">
      <p className="absolute css-ew64yg font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[32px] left-0 text-[#ff6b6b] text-[24px] top-[-1px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        →
      </p>
    </div>
  );
}

function Container75() {
  return <div className="bg-[#ff6b6b] h-[6px] shrink-0 w-full" data-name="Container" />;
}

function Container78() {
  return (
    <div className="bg-[#ff6b6b] relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="css-ew64yg font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[12px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
          8
        </p>
      </div>
    </div>
  );
}

function Heading20() {
  return (
    <div className="h-[20px] relative shrink-0 w-[56.234px]" data-name="Heading 5">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[20px] left-0 text-[#0a0a0a] text-[14px] top-[0.5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Gives up
        </p>
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <Container78 />
      <Heading20 />
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[16px] left-0 text-[12px] text-[rgba(0,0,0,0.8)] top-[0.5px] w-[163px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Exits both apps and decides to walk, despite it being a cold winter night :(
      </p>
    </div>
  );
}

function Container76() {
  return (
    <div className="h-[112px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[8px] items-start pt-[16px] px-[16px] relative size-full">
        <Container77 />
        <Paragraph27 />
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="absolute bg-[rgba(255,107,107,0.05)] h-[239.727px] left-[752px] rounded-[10px] top-0 w-[200px]" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[2px] relative rounded-[inherit] size-full">
        <Container75 />
        <Container76 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#ff6b6b] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container53() {
  return (
    <div className="h-[239.727px] relative shrink-0 w-full" data-name="Container">
      <Container54 />
      <Container60 />
      <Container61 />
      <Container66 />
      <Container67 />
      <Container73 />
      <Container74 />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] h-[467.727px] items-start relative shrink-0 w-full" data-name="Container">
      <Container27 />
      <Container53 />
    </div>
  );
}

function Container23() {
  return (
    <div className="bg-white h-[767.727px] relative rounded-[24px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-start pt-[32px] px-[32px] relative size-full">
          <Container24 />
          <Container26 />
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[899.727px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading12 />
      <Paragraph15 />
      <Container23 />
    </div>
  );
}

function Heading21() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute css-4hzbpn font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[36px] left-0 text-[#0a0a0a] text-[30px] top-[-0.5px] w-[967px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        How might we redesign the shuttle app experience to be faster, clearer, and easier to use?
      </p>
    </div>
  );
}

function BoldText13() {
  return (
    <div className="absolute content-stretch flex h-[24.5px] items-start left-0 top-[1.5px] w-[123.344px]" data-name="Bold Text">
      <p className="css-ew64yg font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[#0a0a0a] text-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Our solution:
      </p>
    </div>
  );
}

function Paragraph28() {
  return (
    <div className="absolute h-[104px] left-0 top-[44px] w-[456px]" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[26px] left-0 text-[16px] text-[rgba(0,0,0,0.8)] top-0 w-[429px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Consolidate the two apps into one unified, Brown-specific shuttle app that brings fixed routes, real-time tracking, and on-call booking into one clear, intuitive interface designed specifically for Brown students.
      </p>
    </div>
  );
}

function Container83() {
  return (
    <div className="h-[148px] relative shrink-0 w-full" data-name="Container">
      <BoldText13 />
      <Paragraph28 />
    </div>
  );
}

function BoldText14() {
  return (
    <div className="absolute content-stretch flex h-[24.5px] items-start left-0 top-[1.5px] w-[176.586px]" data-name="Bold Text">
      <p className="css-ew64yg font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[#0a0a0a] text-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Why this solution?
      </p>
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute h-[24px] left-0 top-[4px] w-[4.898px]" data-name="Text">
      <p className="absolute css-ew64yg font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#a8d8ea] text-[16px] top-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        •
      </p>
    </div>
  );
}

function BoldText15() {
  return (
    <div className="absolute content-stretch flex h-[19.5px] items-start left-0 top-[2px] w-[258.695px]" data-name="Bold Text">
      <p className="css-4hzbpn font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.8)] w-[385px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="leading-[24px]">{`Directly addresses top pain points `}</span>
        <span className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          by removing app-switching confusion and making routes, stops, and OnCall accessible in one place.
        </span>
      </p>
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute h-[72px] left-[16.9px] top-0 w-[439.102px]" data-name="Text">
      <BoldText15 />
    </div>
  );
}

function ListItem9() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="List Item">
      <Text1 />
      <Text2 />
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute h-[24px] left-0 top-[4px] w-[4.898px]" data-name="Text">
      <p className="absolute css-ew64yg font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#a8d8ea] text-[16px] top-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        •
      </p>
    </div>
  );
}

function BoldText16() {
  return (
    <div className="absolute content-stretch flex h-[19.5px] items-start left-0 top-[2px] w-[221.156px]" data-name="Bold Text">
      <p className="css-4hzbpn font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.8)] w-[387px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="leading-[24px]">{`Significantly improves clarity `}</span>
        <span className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          with clean route toggles, searchable stops, and real-time tracking all in a single interface.
        </span>
      </p>
    </div>
  );
}

function Text4() {
  return (
    <div className="absolute h-[72px] left-[16.9px] top-0 w-[439.102px]" data-name="Text">
      <BoldText16 />
    </div>
  );
}

function ListItem10() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="List Item">
      <Text3 />
      <Text4 />
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute h-[24px] left-0 top-[4px] w-[4.898px]" data-name="Text">
      <p className="absolute css-ew64yg font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#a8d8ea] text-[16px] top-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        •
      </p>
    </div>
  );
}

function BoldText17() {
  return (
    <div className="absolute content-stretch flex h-[19.5px] items-start left-0 top-[2px] w-[210.898px]" data-name="Bold Text">
      <p className="css-4hzbpn font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.8)] w-[385px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="leading-[24px]">{`Enhances safety + reliability `}</span>
        <span className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          through a smoother OnCall flow, streamlined pickup selection, and clear ETAs.
        </span>
      </p>
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute h-[48px] left-[16.9px] top-0 w-[439.102px]" data-name="Text">
      <BoldText17 />
    </div>
  );
}

function ListItem11() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="List Item">
      <Text5 />
      <Text6 />
    </div>
  );
}

function Text7() {
  return (
    <div className="absolute h-[24px] left-0 top-[4px] w-[4.898px]" data-name="Text">
      <p className="absolute css-ew64yg font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#a8d8ea] text-[16px] top-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        •
      </p>
    </div>
  );
}

function BoldText18() {
  return (
    <div className="absolute content-stretch flex h-[19.5px] items-start left-0 top-[2px] w-[263.602px]" data-name="Bold Text">
      <p className="css-4hzbpn font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.8)] w-[382px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="leading-[24px]">{`Reduces wait time and uncertainty `}</span>
        <span className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          by consolidating shuttle info and on-demand options.
        </span>
      </p>
    </div>
  );
}

function Text8() {
  return (
    <div className="absolute h-[48px] left-[16.9px] top-0 w-[439.102px]" data-name="Text">
      <BoldText18 />
    </div>
  );
}

function ListItem12() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="List Item">
      <Text7 />
      <Text8 />
    </div>
  );
}

function List3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[291px] items-start left-[-14px] top-[29.23px] w-[470px]" data-name="List">
      <ListItem9 />
      <ListItem10 />
      <ListItem11 />
      <ListItem12 />
    </div>
  );
}

function Container84() {
  return (
    <div className="h-[320px] relative shrink-0 w-full" data-name="Container">
      <BoldText14 />
      <List3 />
    </div>
  );
}

function Container82() {
  return (
    <div className="col-[1] content-stretch css-vsca90 flex flex-col gap-[32px] h-[532.938px] items-start relative row-[1] shrink-0" data-name="Container">
      <Container83 />
      <Container84 />
    </div>
  );
}

function ImageStopsScreenWireframe() {
  return (
    <div className="h-[238.469px] relative shrink-0 w-[110px]" data-name="Image (Stops screen wireframe)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageStopsScreenWireframe} />
    </div>
  );
}

function Container87() {
  return (
    <div className="absolute h-[242.469px] left-[108px] rounded-[10px] top-0 w-[113.992px]" data-name="Container">
      <div className="content-stretch flex items-start overflow-clip p-[2px] relative rounded-[inherit] size-full">
        <ImageStopsScreenWireframe />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function ImageRoutesScreenWireframe() {
  return (
    <div className="flex-[1_0_0] h-[238.469px] min-h-px min-w-px relative" data-name="Image (Routes screen wireframe)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageRoutesScreenWireframe} />
    </div>
  );
}

function Container88() {
  return (
    <div className="absolute h-[242.469px] left-[233.99px] rounded-[10px] top-0 w-[114px]" data-name="Container">
      <div className="content-stretch flex items-start overflow-clip p-[2px] relative rounded-[inherit] size-full">
        <ImageRoutesScreenWireframe />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function ImageDetailsScreenWireframe() {
  return (
    <div className="h-[238.469px] relative shrink-0 w-[110px]" data-name="Image (Details screen wireframe)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageDetailsScreenWireframe} />
    </div>
  );
}

function Container89() {
  return (
    <div className="absolute h-[242.469px] left-[108px] rounded-[10px] top-[254.47px] w-[113.992px]" data-name="Container">
      <div className="content-stretch flex items-start overflow-clip p-[2px] relative rounded-[inherit] size-full">
        <ImageDetailsScreenWireframe />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function ImageOnCallScreenWireframe() {
  return (
    <div className="flex-[1_0_0] h-[238.469px] min-h-px min-w-px relative" data-name="Image (On-Call screen wireframe)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageOnCallScreenWireframe} />
    </div>
  );
}

function Container90() {
  return (
    <div className="absolute h-[242.469px] left-[233.99px] rounded-[10px] top-[254.47px] w-[114px]" data-name="Container">
      <div className="content-stretch flex items-start overflow-clip p-[2px] relative rounded-[inherit] size-full">
        <ImageOnCallScreenWireframe />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container86() {
  return (
    <div className="h-[496.938px] relative shrink-0 w-full" data-name="Container">
      <Container87 />
      <Container88 />
      <Container89 />
      <Container90 />
    </div>
  );
}

function Paragraph29() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute css-ew64yg font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[20px] left-[228.44px] text-[14px] text-[rgba(0,0,0,0.6)] text-center top-[0.5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        High-Fidelity Wireframes
      </p>
    </div>
  );
}

function Container85() {
  return (
    <div className="col-[2] content-stretch css-vsca90 flex flex-col gap-[16px] h-[532.938px] items-start relative row-[1] shrink-0" data-name="Container">
      <Container86 />
      <Paragraph29 />
    </div>
  );
}

function Container81() {
  return (
    <div className="gap-[48px] grid grid-cols-[repeat(2,_minmax(0,_1fr))] grid-rows-[repeat(1,_minmax(0,_1fr))] h-[532.938px] relative shrink-0 w-full" data-name="Container">
      <Container82 />
      <Container85 />
    </div>
  );
}

function Container80() {
  return (
    <div className="bg-white h-[596.938px] relative rounded-[24px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pt-[32px] px-[32px] relative size-full">
          <Container81 />
        </div>
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] h-[700.938px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading21 />
      <Container80 />
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[64px] h-[1664.664px] items-start left-[80px] top-[208px] w-[1024px]" data-name="Container">
      <Container22 />
      <Container79 />
    </div>
  );
}

function Section3() {
  return (
    <div className="absolute bg-[#f8f8f8] h-[1952.664px] left-0 top-[3603.04px] w-[1184px]" data-name="Section">
      <Heading11 />
      <Container20 />
      <Container21 />
    </div>
  );
}

function Heading22() {
  return (
    <div className="absolute content-stretch flex h-[48px] items-start left-0 top-[14.3px] w-[976px]" data-name="Heading 2">
      <p className="css-4hzbpn flex-[1_0_0] font-['Neue_Haas_Grotesk_Display_Pro:45_Light',sans-serif] leading-[48px] min-h-px min-w-px not-italic relative text-[#0a0a0a] text-[48px]">Final Design</p>
    </div>
  );
}

function Container91() {
  return <div className="absolute bg-[#a8d8ea] h-[8px] left-0 rounded-[16777200px] top-[72px] w-[96px]" data-name="Container" />;
}

function Paragraph30() {
  return (
    <div className="absolute h-[52px] left-0 top-[112px] w-[976px]" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[26px] left-0 text-[16px] text-[rgba(0,0,0,0.8)] top-0 w-[975px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        After multiple rounds of iteration and user testing, we created a unified shuttle experience that eliminates confusion while maintaining all the functionality students need. The design prioritizes clarity, reliability, and safety for the Brown campus community.
      </p>
    </div>
  );
}

function Heading23() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute css-ew64yg font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[32px] left-0 text-[#0a0a0a] text-[24px] top-[-1px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Key Features
      </p>
    </div>
  );
}

function Heading24() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute css-ew64yg font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[24px] left-0 text-[#0a0a0a] text-[16px] top-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        🎯 Unified Service Access
      </p>
    </div>
  );
}

function Paragraph31() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-[rgba(0,0,0,0.7)] top-[0.5px] w-[394px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Single app for both fixed routes and on-call shuttles with clear service differentiation
      </p>
    </div>
  );
}

function Container95() {
  return (
    <div className="bg-[rgba(168,216,234,0.1)] h-[104px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[8px] items-start pt-[16px] px-[16px] relative size-full">
        <Heading24 />
        <Paragraph31 />
      </div>
    </div>
  );
}

function Heading25() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute css-ew64yg font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[24px] left-0 text-[#0a0a0a] text-[16px] top-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        ⏱️ Real-Time Tracking
      </p>
    </div>
  );
}

function Paragraph32() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-[rgba(0,0,0,0.7)] top-[0.5px] w-[420px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Live shuttle locations and accurate arrival predictions to build user confidence
      </p>
    </div>
  );
}

function Container96() {
  return (
    <div className="bg-[rgba(168,216,234,0.1)] h-[104px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[8px] items-start pt-[16px] px-[16px] relative size-full">
        <Heading25 />
        <Paragraph32 />
      </div>
    </div>
  );
}

function Container94() {
  return (
    <div className="col-[1] content-stretch css-vsca90 flex flex-col gap-[16px] items-start relative row-[1] self-stretch shrink-0" data-name="Container">
      <Container95 />
      <Container96 />
    </div>
  );
}

function Heading26() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute css-ew64yg font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[24px] left-0 text-[#0a0a0a] text-[16px] top-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        📍 Enhanced Stop Information
      </p>
    </div>
  );
}

function Paragraph33() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-[rgba(0,0,0,0.7)] top-[0.5px] w-[394px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Clear pickup locations with landmarks and visual cues for easy identification
      </p>
    </div>
  );
}

function Container98() {
  return (
    <div className="bg-[rgba(61,40,23,0.1)] h-[104px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[8px] items-start pt-[16px] px-[16px] relative size-full">
        <Heading26 />
        <Paragraph33 />
      </div>
    </div>
  );
}

function Heading27() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute css-ew64yg font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[24px] left-0 text-[#0a0a0a] text-[16px] top-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        🛡️ Safety Integration
      </p>
    </div>
  );
}

function Paragraph34() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-[rgba(0,0,0,0.7)] top-[0.5px] w-[428px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Emergency contacts and safety features integrated into the shuttle experience
      </p>
    </div>
  );
}

function Container99() {
  return (
    <div className="bg-[rgba(61,40,23,0.1)] h-[104px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[8px] items-start pt-[16px] px-[16px] relative size-full">
        <Heading27 />
        <Paragraph34 />
      </div>
    </div>
  );
}

function Container97() {
  return (
    <div className="col-[2] content-stretch css-vsca90 flex flex-col gap-[16px] items-start relative row-[1] self-stretch shrink-0" data-name="Container">
      <Container98 />
      <Container99 />
    </div>
  );
}

function Container93() {
  return (
    <div className="gap-[32px] grid grid-cols-[repeat(2,_minmax(0,_1fr))] grid-rows-[repeat(1,_minmax(0,_1fr))] h-[224px] relative shrink-0 w-full" data-name="Container">
      <Container94 />
      <Container97 />
    </div>
  );
}

function Container92() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-px top-[842.3px] w-[976px]" data-name="Container">
      <Heading23 />
      <Container93 />
    </div>
  );
}

function Heading28() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute css-ew64yg font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[32px] left-0 text-[#0a0a0a] text-[24px] top-[-1px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Interactive Prototype
      </p>
    </div>
  );
}

function Container104() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <p className="-translate-x-1/2 absolute css-ew64yg font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[40px] left-[89.99px] text-[#6a7282] text-[36px] text-center top-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        🚌
      </p>
    </div>
  );
}

function Paragraph35() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute css-ew64yg font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[28px] left-[90.08px] text-[#6a7282] text-[18px] text-center top-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        Interactive Prototype
      </p>
    </div>
  );
}

function Paragraph36() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute css-ew64yg font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[20px] left-[90.5px] text-[#6a7282] text-[14px] text-center top-[0.5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Brown Shuttle App Concept
      </p>
    </div>
  );
}

function Container103() {
  return (
    <div className="h-[104px] relative shrink-0 w-[179.984px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative size-full">
        <Container104 />
        <Paragraph35 />
        <Paragraph36 />
      </div>
    </div>
  );
}

function Container102() {
  return (
    <a className="bg-[#f3f4f6] content-stretch cursor-pointer flex h-[378px] items-center justify-center relative rounded-[16px] shrink-0 w-full" data-name="Container" href="https://www.figma.com/proto/TO9AcgOoDaVEieDoY7OyCf/BUS-LOCAL-REDESIGN?node-id=1-1699&t=neUyz2iD4L0wJnFQ-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A1699">
      <Container103 />
    </a>
  );
}

function Container101() {
  return (
    <div className="bg-white h-[442px] relative rounded-[24px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[32px] px-[152px] relative size-full">
        <Container102 />
      </div>
    </div>
  );
}

function Container100() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[498px] items-start left-0 top-[1141.3px] w-[976px]" data-name="Container">
      <Heading28 />
      <Container101 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[267.05px] top-[65.84px]">
      <div className="absolute h-[190.668px] left-[267.05px] top-[65.84px] w-[96.331px]" data-name="image 4">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4} />
      </div>
      <div className="absolute h-[7.695px] left-[277.88px] top-[84.08px] w-[6.84px]" data-name="image 7">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[2477.78%] left-[-166.49%] max-w-none top-[-232.53%] w-[1408.33%]" src={imgImage7} />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="-translate-x-1/2 absolute bg-white h-[344px] left-[calc(50%-14.79px)] overflow-clip top-[514.3px] w-[630.429px]">
      <div className="absolute h-[190.668px] left-[47.6px] top-[65.84px] w-[96.331px]" data-name="image 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
      </div>
      <div className="absolute h-[190.668px] left-[157.32px] top-[65.84px] w-[96.331px]" data-name="image 3">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage7} />
      </div>
      <div className="absolute h-[190.668px] left-[376.78px] top-[65.84px] w-[96.331px]" data-name="image 5">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage5} />
      </div>
      <div className="absolute h-[190.668px] left-[486.5px] top-[65.84px] w-[96.331px]" data-name="image 6">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage6} />
      </div>
      <Group />
      <p className="-translate-x-1/2 absolute css-4hzbpn font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[7.41px] left-[95.76px] text-[5.7px] text-[rgba(0,0,0,0.8)] text-center top-[45.89px] w-[96.331px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Easily search for pickup location
      </p>
      <p className="-translate-x-1/2 absolute css-4hzbpn font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[7.41px] left-[205.49px] text-[5.7px] text-[rgba(0,0,0,0.8)] text-center top-[45.89px] w-[96.331px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Ability to modify pickup location
      </p>
      <p className="-translate-x-1/2 absolute css-4hzbpn font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[7.41px] left-[315.21px] text-[5.7px] text-[rgba(0,0,0,0.8)] text-center top-[42.18px] w-[107.732px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Asks user to confirm before sending request to BUS operator + ability to edit
      </p>
      <p className="-translate-x-1/2 absolute css-4hzbpn font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[7.41px] left-[315.21px] text-[5.7px] text-[rgba(0,0,0,0.8)] text-center top-[263.63px] w-[96.331px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Presents relevant information to user before confirming + reduced text → reduced cognitive load
      </p>
      <p className="-translate-x-1/2 absolute css-4hzbpn font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[7.41px] left-[95.76px] text-[5.7px] text-[rgba(0,0,0,0.8)] text-center top-[279.59px] w-[96.331px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        OR select from a popular location
      </p>
      <p className="-translate-x-1/2 absolute css-4hzbpn font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[7.41px] left-[424.94px] text-[5.7px] text-[rgba(0,0,0,0.8)] text-center top-[279.59px] w-[96.331px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Option to track shuttle is emphasized, but option to cancel is still available
      </p>
      <p className="-translate-x-1/2 absolute css-4hzbpn font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[7.41px] left-[534.67px] text-[5.7px] text-[rgba(0,0,0,0.8)] text-center top-[279.59px] w-[96.331px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Easily see shuttle’s ETA + relevant information, in addition to ability to modify or cancel
      </p>
      <p className="-translate-x-1/2 absolute css-4hzbpn font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[7.41px] left-[534.67px] text-[5.7px] text-[rgba(0,0,0,0.8)] text-center top-[42.18px] w-[96.331px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Hides view of other routes, only shows shuttle
      </p>
      <div className="absolute flex h-[41.326px] items-center justify-center left-[114px] top-[60.14px] w-0" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="h-0 relative w-[41.326px]">
            <div className="absolute inset-[-1.52px_0_-1.52px_-3.68%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42.8456 3.04004">
                <path d={svgPaths.p359f8300} fill="var(--stroke-0, #3D2817)" id="Arrow 4" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[51.301px] items-center justify-center left-[232.28px] top-[60.14px] w-0" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="h-0 relative w-[51.301px]">
            <div className="absolute inset-[-1.52px_0_-1.52px_-2.96%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52.8208 3.04004">
                <path d={svgPaths.p19563480} fill="var(--stroke-0, #3D2817)" id="Arrow 6" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[116.852px] items-center justify-center left-[261.35px] top-[150.77px] w-[15.818px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="h-[15.818px] relative w-[116.852px]">
            <div className="absolute inset-[-1.8%_-1.3%_-9.61%_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 118.372 17.6228">
                <path d={svgPaths.p390e5400} fill="var(--stroke-0, #3D2817)" id="Arrow 8" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[60.991px] items-center justify-center left-[315.21px] top-[60.14px] w-0" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="h-0 relative w-[60.991px]">
            <div className="absolute inset-[-1.52px_0_-1.52px_-2.49%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62.5109 3.04004">
                <path d={svgPaths.p3da79000} fill="var(--stroke-0, #3D2817)" id="Arrow 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[44.746px] items-center justify-center left-[424.94px] top-[229.71px] w-0" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[44.746px]">
            <div className="absolute inset-[-1.52px_0_-1.52px_-3.4%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46.2657 3.04004">
                <path d={svgPaths.p1cf5b5c0} fill="var(--stroke-0, #3D2817)" id="Arrow 9" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[41.041px] items-center justify-center left-[534.67px] top-[233.42px] w-0" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[41.041px]">
            <div className="absolute inset-[-1.52px_0_-1.52px_-3.7%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42.5606 3.04004">
                <path d={svgPaths.p14f53700} fill="var(--stroke-0, #3D2817)" id="Arrow 11" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[37.051px] items-center justify-center left-[534.67px] top-[62.13px] w-0" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="h-0 relative w-[37.051px]">
            <div className="absolute inset-[-1.52px_0_-1.52px_-4.1%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.5706 3.04004">
                <path d={svgPaths.p539a100} fill="var(--stroke-0, #3D2817)" id="Arrow 10" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[44.176px] items-center justify-center left-[77.24px] top-[230.28px] w-0" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[44.176px]">
            <div className="absolute inset-[-1.52px_0_-1.52px_-3.44%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45.6957 3.04004">
                <path d={svgPaths.p2819b400} fill="var(--stroke-0, #3D2817)" id="Arrow 5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="absolute css-ew64yg font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[21.657px] left-[245px] text-[#0a0a0a] text-[16.242px] top-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Redesigned onCall
      </p>
    </div>
  );
}

function Group1() {
  return (
    <div className="-translate-x-1/2 absolute contents left-[calc(50%-14.79px)] top-[514.3px]">
      <Frame />
    </div>
  );
}

function Section4() {
  return (
    <div className="absolute h-[1486px] left-[104px] top-[5635.7px] w-[976px]" data-name="Section">
      <Heading22 />
      <Container91 />
      <Paragraph30 />
      <Container92 />
      <Container100 />
      <Group1 />
    </div>
  );
}

function Paragraph37() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-[rgba(0,0,0,0.8)] top-0 w-[911px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Through user research, competitive analysis, and iterative design, we created a concept that addresses the core pain points in Brown's shuttle system. The unified experience eliminates app confusion while improving reliability and safety for campus transportation.`}</p>
    </div>
  );
}

function Paragraph38() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-[rgba(0,0,0,0.8)] top-0 w-[880px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        This design demonstrates how product management principles can be applied to existing systems to identify user needs, prioritize features, and create more intuitive experiences.
      </p>
    </div>
  );
}

function BoldText19() {
  return (
    <div className="absolute content-stretch flex h-[19.5px] items-start left-0 top-[2px] w-[470.211px]" data-name="Bold Text">
      <p className="css-ew64yg font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#3d2817] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        This concept was presented to Brown Transportation Services
      </p>
    </div>
  );
}

function Paragraph39() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Paragraph">
      <BoldText19 />
      <p className="absolute css-4hzbpn font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#3d2817] text-[16px] top-0 w-[897px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        as part of our capstone project, with recommendations for implementation and student adoption strategies.
      </p>
    </div>
  );
}

function Container107() {
  return (
    <div className="content-stretch flex flex-col h-[82px] items-start pt-[34px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-solid border-t-2 inset-0 pointer-events-none" />
      <Paragraph39 />
    </div>
  );
}

function Container106() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[258px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph37 />
      <Paragraph38 />
      <Container107 />
    </div>
  );
}

function Container105() {
  return (
    <div className="bg-white h-[338px] opacity-0 relative rounded-[24px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[40px] px-[40px] relative size-full">
        <Container106 />
      </div>
    </div>
  );
}

function Section5() {
  return (
    <div className="absolute bg-[#f8f8f8] content-stretch flex flex-col h-[498px] items-start left-0 pt-[100px] px-[80px] top-[7295px] w-[1184px]" data-name="Section">
      <Container105 />
    </div>
  );
}

function Heading29() {
  return (
    <div className="absolute content-stretch flex h-[48px] items-start left-0 top-0 w-[976px]" data-name="Heading 2">
      <p className="css-4hzbpn flex-[1_0_0] font-['Neue_Haas_Grotesk_Display_Pro:65_Medium',sans-serif] leading-[48px] min-h-px min-w-px not-italic relative text-[#0a0a0a] text-[48px]">{`Reflections & Learnings`}</p>
    </div>
  );
}

function Container108() {
  return <div className="absolute bg-[#a8d8ea] h-[8px] left-0 rounded-[16777200px] top-[72px] w-[96px]" data-name="Container" />;
}

function Heading30() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute css-ew64yg font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[28px] left-0 text-[#0a0a0a] text-[20px] top-[-0.5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Product management thinking shaped the design process
      </p>
    </div>
  );
}

function Paragraph40() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-[rgba(0,0,0,0.8)] top-0 w-[878px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        This project taught me how PM principles—user research, competitive analysis, and feature prioritization—directly inform design decisions. Rather than starting with visual concepts, we began with user problems and business constraints.
      </p>
    </div>
  );
}

function Paragraph41() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-[rgba(0,0,0,0.8)] top-0 w-[906px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Working within the constraints of existing infrastructure (TransLoc and PassioGo APIs) while solving real user needs required balancing technical feasibility with user experience goals. This constraint actually led to a more focused, achievable solution.
      </p>
    </div>
  );
}

function Paragraph42() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-[rgba(0,0,0,0.8)] top-0 w-[901px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        The most valuable insight was learning to validate assumptions early and often. Our initial ideas about what students wanted were often wrong, but user research helped us course-correct before investing too much in the wrong direction.
      </p>
    </div>
  );
}

function Container110() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[176px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph40 />
      <Paragraph41 />
      <Paragraph42 />
    </div>
  );
}

function Container109() {
  return (
    <div className="absolute bg-[rgba(168,216,234,0.1)] content-stretch flex flex-col gap-[12px] h-[284px] items-start left-0 pb-[2px] pt-[34px] px-[34px] rounded-[24px] top-[128px] w-[976px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(168,216,234,0.3)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Heading30 />
      <Container110 />
    </div>
  );
}

function Section6() {
  return (
    <div className="absolute h-[412px] left-[104px] opacity-0 top-[7799.7px] w-[976px]" data-name="Section">
      <Heading29 />
      <Container108 />
      <Container109 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#3d2817] h-[56px] relative rounded-[16777200px] shrink-0 w-full" data-name="Button">
      <p className="-translate-x-1/2 absolute css-ew64yg font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[24px] left-[103.5px] text-[16px] text-center text-white top-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        View More Projects
      </p>
    </div>
  );
}

function Section7() {
  return (
    <div className="absolute content-stretch flex flex-col h-[56px] items-start left-[104px] opacity-0 pl-[384.969px] pr-[384.977px] top-[8371.7px] w-[976px]" data-name="Section">
      <Button />
    </div>
  );
}

function CaseStudy() {
  return (
    <div className="absolute bg-white h-[8487.703px] left-0 top-0 w-[1184px]" data-name="CaseStudy2">
      <Section />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
    </div>
  );
}

export default function App() {
  return (
    <div className="bg-white relative size-full" data-name="App">
      <CaseStudy />
    </div>
  );
}