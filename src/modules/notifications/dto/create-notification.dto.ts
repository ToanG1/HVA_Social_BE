export class CreateNotificationDto {
  constructor(
    userId: string,
    title: string,
    body: string,
    device_type: string,
  ) {
    this.userId = userId;
    this.title = title;
    this.body = body;
    this.device_type = device_type;
  }
  device_type: string;
  userId: string;
  title: string;
  body: string;
}
