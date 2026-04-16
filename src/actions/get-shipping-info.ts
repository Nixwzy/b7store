// actions/get-shipping-info.ts
'use server';

type ShippingInfoResponse = {
  zipcode: string;
  cost: number;
  days: number;
};

export const getShippingInfo = async (
  zipCode: string,
): Promise<ShippingInfoResponse | false> => {
  // todo: make a request to get info from zip code
  return {
    // test
    zipcode: '12345678',
    cost: 7,
    days: 3,
  };
};
