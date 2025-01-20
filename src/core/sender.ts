import {WebClient} from '@slack/web-api'
import {Notification} from '../types/notification'
import {TestNotificationFormatter} from './testNotificationFormatter'

export class SlackSender {
  private client: WebClient

  constructor(private token: string) {
    this.client = new WebClient(token)
  }

  async send(channel: string, notification: Notification): Promise<void> {
    const notificationFormatter = new TestNotificationFormatter()
    const message = notificationFormatter.formatNotification(notification)

    await this.client.chat.postMessage({
      channel,
      text: `*${notification.status.toUpperCase()}: ${notification.details.testingFramework} Tests*`,
      ...message,
    })
  }
}
