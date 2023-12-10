const ContractTable = () => (
  <div className="relative mb-[22px] overflow-x-auto rounded-[4px] border border-solid border-gray-1 text-left leading-[100%] text-white shadow-md">
    <table className="w-full">
      <thead className="text-gray-700 bg-gray-50 bg-white bg-opacity-[0.4] text-xs text-[10px] uppercase bg-blend-overlay">
        <tr>
          <th scope="col" className="px-[14px] py-[8px] uppercase">
            Services
          </th>
          <th scope="col" className="px-[14px] py-[8px] uppercase">
            Qty
          </th>
          <th scope="col" className="px-[14px] py-[8px] uppercase">
            Annual Price
          </th>
        </tr>
      </thead>
      <tbody className="text-[12px] font-medium">
        <tr className="bg-white bg-opacity-[0.2] bg-blend-overlay">
          <th scope="row" className="whitespace-nowrap px-[14px] py-[8px]">
            Enterprise Subscription
          </th>
          <td className="px-[14px] py-[8px]">25</td>
          <td className="px-[14px] py-[8px]">$100,000</td>
        </tr>
        <tr className="bg-blend-overlay">
          <th scope="row" className="whitespace-nowrap px-[14px] py-[8px]">
            Lite Access Users - Subscription
          </th>
          <td className="px-[14px] py-[8px]">350</td>
          <td className="px-[14px] py-[8px]">$35,000</td>
        </tr>
        <tr className="bg-white bg-opacity-[0.2] bg-blend-overlay">
          <th
            scope="row"
            className="text-gray-900 whitespace-nowrap px-[14px] py-[8px] font-medium dark:text-white"
          >
            Sandbox - Test Tenants
          </th>
          <td className="px-[14px] py-[8px]">3</td>
          <td className="px-[14px] py-[8px]">included</td>
        </tr>
        <tr className="bg-blend-overlay">
          <th
            scope="row"
            className="text-gray-900 whitespace-nowrap px-[14px] py-[8px] font-medium dark:text-white"
          >
            Custom API Integrations
          </th>
          <td className="px-[14px] py-[8px]">2</td>
          <td className="px-[14px] py-[8px]">$20,000</td>
        </tr>
        <tr className="bg-white bg-opacity-[0.2] bg-blend-overlay">
          <th
            scope="row"
            className="text-gray-900 whitespace-nowrap px-[14px] py-[8px] font-medium dark:text-white"
          >
            Enterprise API Integrations
          </th>
          <td className="px-[14px] py-[8px]">all</td>
          <td className="px-[14px] py-[8px]">included</td>
        </tr>
        <tr className="bg-blend-overlay">
          <th
            scope="row"
            className="text-gray-900 whitespace-nowrap px-[14px] py-[8px] font-medium dark:text-white"
          >
            Delivery and Pro Services
          </th>
          <td className="px-[14px] py-[8px]">1</td>
          <td className="px-[14px] py-[8px]">$50,000</td>
        </tr>
        <tr className="bg-white bg-opacity-[0.2] bg-blend-overlay">
          <th
            scope="row"
            className="text-gray-900 whitespace-nowrap px-[14px] py-[8px] font-medium dark:text-white"
          >
            Managed Services
          </th>
          <td className="px-[14px] py-[8px]">1</td>
          <td className="px-[14px] py-[8px]">$50,000</td>
        </tr>
        <tr className="bg-blend-overlay">
          <th
            scope="row"
            className="text-gray-900 whitespace-nowrap px-[14px] py-[8px] font-medium dark:text-white"
          >
            Contract A1 Service
          </th>
          <td className="px-[14px] py-[8px]">800</td>
          <td className="px-[14px] py-[8px]">$50,000</td>
        </tr>
        <tr className="bg-white bg-opacity-[0.2] bg-blend-overlay">
          <th
            scope="row"
            className="text-gray-900 whitespace-nowrap px-[14px] py-[8px] font-medium dark:text-white"
          >
            Sandbox - Test Tenants
          </th>
          <td className="px-[14px] py-[8px]">3</td>
          <td className="px-[14px] py-[8px]">included</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default ContractTable;
