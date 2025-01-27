import { MessageAttachment } from '@slack/types';

import { Notification } from '../types/notification';
import { NotificationFormatter } from './notificationFormater';

export class TestNotificationFormatter extends NotificationFormatter {
  /**
   * Formats a test notification into a structure suitable for Slack messages.
   *
   * @param notification - The notification object containing details about the test results.
   * @returns An object containing an array of MessageAttachment objects formatted for Slack.
   */
  public formatNotification(notification: Notification): {
    attachments: MessageAttachment[];
  } {
    const attachments: MessageAttachment[] = [
      {
        blocks: [
          this.createHeaderBlock(
            `:test_tube: ${
              notification.details.testingFramework.charAt(0).toUpperCase() +
              notification.details.testingFramework.slice(1)
            } Tests :test_tube:`
          ),
          this.createSectionBlock({
            fields: [
              {
                text: `*Repo:*\n \`${notification.details.repoName}\``,
                type: 'mrkdwn',
              },
              {
                text: `*Branch:*\n \`${notification.details.gitBranch}\``,
                type: 'mrkdwn',
              },
            ],
          }),
          this.createSectionBlock({
            fields: [
              {
                text: `*Test Suite:*\n \`${notification.details.testSuiteName}\``,
                type: 'mrkdwn',
              },
              {
                text: `*Framework:*\n \`${notification.details.testingFramework}\``,
                type: 'mrkdwn',
              },
            ],
          }),
          this.createSectionBlock({
            fields: [
              {
                text: `*Tests Status:*\n \`${notification.status}\``,
                type: 'mrkdwn',
              },
              {
                text: `*Triggered by:*\n \`${notification.details.triggeredBy}\``,
                type: 'mrkdwn',
              },
            ],
          }),
        ],
        color: `${this.colorMap[notification.status]}`,
      },
    ];

    const buttons = this.createActionButtonElements(notification);
    if (buttons.length > 0) {
      attachments[0].blocks.push(this.createActionBlock(buttons));
    }

    return { attachments };
  }
}
