import {
  ActionsBlock,
  ActionsBlockElement,
  Button,
  HeaderBlock,
  MessageAttachment,
  SectionBlock,
  SectionBlockAccessory,
  TextObject,
} from '@slack/types'
import {Notification} from '../types/notification'

export class TestNotificationFormatter {
  private colorMap = {
    success: '#36a64f',
    failure: '#e01e5a',
    unknown: '#FFFF00',
    none: '#ffa500',
  }

  private createHeaderBlock(text: string): HeaderBlock {
    return {
      type: 'header',
      text: {
        type: 'plain_text',
        text,
      },
    }
  }

  private createSectionBlock(options: {
    text?: TextObject
    fields?: TextObject[]
    accessory?: SectionBlockAccessory
  }): SectionBlock {
    return {
      type: 'section',
      text: options.text,
      fields: options.fields,
      accessory: options.accessory,
    }
  }

  private createButtonElement(text: string, url: string): Button {
    return {
      type: 'button',
      text: {
        type: 'plain_text',
        text,
        emoji: true,
      },
      url,
    }
  }

  private createActionElements(notification: Notification, linkNames: Record<string, string>): ActionsBlockElement[] {
    const elements: ActionsBlockElement[] = []
    const links = notification.details?.links

    if (!links) {
      return elements // Return empty array if links is not defined
    }

    for (const [key, label] of Object.entries(linkNames)) {
      if (links[key]) {
        elements.push(this.createButtonElement(label, links[key]))
      }
    }

    return elements
  }

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

    const buildLinks = {
      pullRequest: 'View PR',
      build: `View Build Number ${notification.details.buildNumber}`,
      buildArtifacts: 'Build Artifacts',
    }

    const reportLinks = {
      reportPortal: 'Report Portal Launch',
      htmlReport: 'View HTML Report',
    }

    const buildElements = this.createActionElements(notification, buildLinks)
    if (buildElements.length > 0) {
      attachments[0].blocks.push(this.createActionBlock(buildElements))
    }

    const reportElements = this.createActionElements(notification, reportLinks)
    if (reportElements.length > 0) {
      attachments[0].blocks.push(this.createActionBlock(reportElements))
    }

    return {attachments}
  }

  private createActionBlock(elements: ActionsBlockElement[]): ActionsBlock {
    if (elements.length > 0) {
      return {
        type: 'actions',
        elements: elements,
      }
    } else {
      return null
    }
  }
}
