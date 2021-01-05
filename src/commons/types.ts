enum ErrorCodes {
  UNAUTHENTICATED,
  FORBIDDEN,
  BAD_USER_INPUT,
}

export class AppError extends Error {
  code?: ErrorCodes;
  constructor(message: string, code?: ErrorCodes) {
    super(message);
    this.code = code;
  }
}
