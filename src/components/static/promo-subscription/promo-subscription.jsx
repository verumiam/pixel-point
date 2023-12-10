import Input from 'components/shared/input';

const PromoSubscription = () => (
  <section className="relative mt-[120px] flex max-w-[700px] flex-col justify-start text-white sm:items-center sm:text-center">
    <div className="absolute top-[-75%] left-0 z-[-1] h-[630px] w-[630px] rounded-full bg-gradient-to-r from-primary-1 to-primary-1 opacity-[0.15] blur-[200px] sm:h-full sm:w-full" />
    <h1 className="font-poppins text-[76px] font-bold leading-[85px] tracking-[-1.5px] text-gray-2 [text-shadow:_0_0_20px_rgb(255_255_255_/_20%)] sm:text-[38px] sm:leading-normal">
      Unlock valuable insights from subscription data
    </h1>
    <p className="mb-[40px] mt-[28px] max-w-[590px] text-[20px] font-light tracking-wide text-gray-1 sm:text-[16px]">
      Analyze your subscription ecosystem for cost optimization and risk management
    </p>
    <Input />
  </section>
);

export default PromoSubscription;
