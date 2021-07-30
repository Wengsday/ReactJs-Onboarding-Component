function validationCheckerMerchant(
  storeApiResponse,
  merchantApiResponse,
  setIsEnoughKYC
) {
  if (
    storeApiResponse.comments.length > 1 ||
    merchantApiResponse.comments.length > 1
  ) {
    setIsEnoughKYC(true);
    return false;
  }

  if (
    storeApiResponse.comments[0].contains("All data is present") &&
    merchantApiResponse.comments[0].contains("All data is present")
  ) {
    setIsEnoughKYC(false);
    return true;
  }
}

export default validationCheckerMerchant;
