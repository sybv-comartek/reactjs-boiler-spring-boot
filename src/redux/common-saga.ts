import { take } from "redux-saga/effects";
import {
  NotificationError,
  NotificationSuccess,
} from "@commons/components/Notification";

export function* checkErrorAsync() {
  while (true) {
    const action: any = yield take((action: any) =>
      /.+_ERROR/.test(action.type)
    );
    NotificationError(
      "Cảnh báo",
      action.payload.message || "Có lỗi xảy ra vui lòng thử lại sau"
    );
  }
}

export function* checkUpdateSuccessAsync() {
  while (true) {
    const action: any = yield take((action: any) =>
      /.+_UPDATED_SUCCESS/.test(action.type)
    );
    NotificationSuccess(
      "Thông báo",
      action.payload.message || "Cập nhật thành công"
    );
  }
}
