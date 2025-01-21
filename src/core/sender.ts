import {MessageAttachment, WebClient} from '@slack/web-api'
import {Notification} from '../types/notification'
import {TestNotificationFormatter} from './testNotificationFormatter'

export class SlackSender {
  private client: WebClient

  constructor(private token: string) {
    this.client = new WebClient(token)
  }

  /**
   * Sends a notification message to a specified Slack channel.
   *
   * @param channel - The ID of the Slack channel where the notification will be sent.
   * @param notification - The notification object containing details to be included in the message.
   * @returns A promise that resolves when the message has been sent.
   */
  async send(channel: string, notification: Notification): Promise<void> {
    const message = await this.testNotification(notification)
    await this.client.chat.postMessage({
      channel,
      text: `Test Automation Results: \`${notification.status.toUpperCase()}\``,
      ...message,
    })
  }

  /**
   * Formats a notification for testing purposes using the TestNotificationFormatter.
   *
   * @param notification - The notification object to be formatted.
   * @returns A promise that resolves to an object containing an array of MessageAttachment objects.
   */
  async testNotification(notification: Notification): Promise<{
    attachments: MessageAttachment[]
  }> {
    const notificationFormatter = new TestNotificationFormatter()
    return notificationFormatter.formatNotification(notification)
  }
}
