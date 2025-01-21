import {MessageAttachment} from '@slack/types'
import {Notification} from '../types/notification'
import {NotificationFormatter} from './notificationFormater'

export class TestNotificationFormatter extends NotificationFormatter {
  /**
   * Formats a test notification into a structure suitable for Slack messages.
   *
   * @param notification - The notification object containing details about the test results.
   * @returns An object containing an array of MessageAttachment objects formatted for Slack.
   */
  public formatNotification(notification: Notification): {attachments: MessageAttachment[]} {
    const attachments: MessageAttachment[] = [
      {
        color: `${this.colorMap[notification.status]}`,
        blocks: [
          this.createHeaderBlock('Ottermation Notification'),
          this.createSectionBlock({
            fields: [
              {type: 'mrkdwn', text: `*Repo:*\n \`${notification.details.repoName}\``},
              {type: 'mrkdwn', text: `*Branch:*\n \`${notification.details.gitBranch}\``},
            ],
          }),
          this.createSectionBlock({
            fields: [
              {type: 'mrkdwn', text: `*Test Suite:*\n \`${notification.details.testSuiteName}\``},
              {type: 'mrkdwn', text: `*Framework:*\n \`${notification.details.testingFramework}\``},
            ],
          }),
          this.createSectionBlock({
            fields: [
              {type: 'mrkdwn', text: `*Tests Status:*\n \`${notification.status}\``},
              {type: 'mrkdwn', text: `*Triggered by:*\n <@${notification.details.triggeredBy}>`},
            ],
          }),
        ],
      },
    ]

    const linkButons = {
      pullRequest: 'View PR',
      build: `View Build Number ${notification.details.buildNumber}`,
      buildArtifacts: 'Build Artifacts',
      reportPortal: 'Report Portal Launch',
      htmlReport: 'View HTML Report',
    }

    const buttons = this.createActionElements(notification, linkButons)
    if (buttons.length > 0) {
      attachments[0].blocks.push(this.createActionBlock(buttons))
    }

    return {attachments}
  }
}
