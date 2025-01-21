import {MessageAttachment, WebClient} from '@slack/web-api'
import {Notification} from '../types/notification'
import {TestNotificationFormatter} from './testNotificationFormatter'

export class SlackSender {
  private client: WebClient

  constructor(private token: string) {
    this.client = new WebClient(token)
  }

  async send(channel: string, notification: Notification): Promise<void> {
    const message = await this.testNotification(notification)
    await this.client.chat.postMessage({
      channel,
      text: `*${notification.status.toUpperCase()}: ${notification.details.testingFramework} Tests*`,
      ...message,
    })
  }

  async testNotification(notification: Notification): Promise<{
    attachments: MessageAttachment[]
  }> {
    const notificationFormatter = new TestNotificationFormatter()
    return notificationFormatter.formatNotification(notification)
  }
}
