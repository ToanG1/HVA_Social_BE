export class CreateNotificationDto {
  constructor(userId: string, title: string, body: string) {
    this.userId = userId;
    this.title = title;
    this.body = body;
    this.device_type = 'default';
  }
  device_type: string;
  userId: string;
  title: string;
  body: string;
}
