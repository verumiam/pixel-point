import Container from 'components/shared/container';
import PromoContract from 'components/static/promo-contract';
import PromoSubscription from 'components/static/promo-subscription';

import PromoBenefits from '../promo-benefits';

const PromoLanding = () => (
  <Container>
    <article className="mt-[96px] flex gap-[186px] xl:gap-[120px] lg:flex-wrap lg:items-center lg:justify-center ">
      <PromoSubscription />
      <PromoContract />
    </article>
    <PromoBenefits />
  </Container>
);

export default PromoLanding;
