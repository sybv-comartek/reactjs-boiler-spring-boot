let errorResponseData = {};
export const errorCallback = (usefulErrorData: any) => {
  console.log(usefulErrorData);
  errorResponseData = usefulErrorData;
};
