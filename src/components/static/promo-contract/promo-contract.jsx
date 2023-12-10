import Image from 'next/image';

import ContractTable from 'components/static/contract-table';

const PromoContract = () => (
  <section className="relative h-[685px] w-[464px] sm:h-auto sm:w-full">
    <div className="bg-card">
      <div className="h-full pt-[28px] pr-[28px] pb-[22px] pl-[28px] sm:py-[20px] sm:px-[14px]">
        <h5 className="font-editorial-new border-b border-solid border-white border-opacity-[0.6] pb-[14px] text-[22px] font-normal leading-[22px] text-white opacity-[0.6]">
          Acme Corp.
        </h5>
        <div className="mb-[24px] flex gap-[37px] border-b border-solid border-white border-opacity-[0.6] py-[16px] text-[12px] font-normal text-white">
          <ul className="leading-[24px]">
            <li className="opacity-[0.6]">Acme Software Co.</li>
            <li className="opacity-[0.6]">50 E Rio Grande Pkwy</li>
            <li className="opacity-[0.6]">Tempe, AZ 85281 United States</li>
          </ul>
          <ul className="leading-[24px]">
            <li>Wasatch Cloud Inc.</li>
            <li>18560 West Sunset Blvd.</li>
            <li>LOS Angeles, CA 90046 US</li>
          </ul>
        </div>
        <p className="mb-[14px] text-[11px] font-medium uppercase text-white">Subscription Terms</p>
        <div className="mb-[18px] flex gap-[37px]">
          <ul className="text-[12px] leading-[24px] text-white">
            <li>
              <span>Contract Start Date:</span>
              <time className="ml-[5px] font-medium">7/30/2022</time>
            </li>
            <li>
              <span>Contract End Date:</span>
              <time className="ml-[10px] font-medium">7/30/2022</time>
            </li>
          </ul>
          <ul className="text-[12px] leading-[24px] text-white">
            <li>
              <span className="opacity-[0.6]">Billing Terms:</span>
              <span className="ml-[40px] font-medium">Net 45</span>
            </li>
            <li>
              <span className="opacity-[0.6]">Billing Frequency:</span>
              <span className="ml-[17px] font-medium">Annually</span>
            </li>
          </ul>
        </div>
        <ContractTable />
        <div className="flex items-center gap-[91px] sm:justify-between sm:gap-[25px]">
          <Image src="/signature.svg" alt="signature" width={126} height={36} />
          <div className="flex gap-[15px] text-[14px] text-white">
            <span className="opacity-[0.6]">1-year Total:</span>
            <span>$255,000</span>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-shadow" />
    <div className="bg-blur" />
    <div className="mask-bottom-left" />
    <div className="mask-top-left" />
    <div className="mask-bottom-right" />
    <div className="mask-top-right" />
  </section>
);

export default PromoContract;
