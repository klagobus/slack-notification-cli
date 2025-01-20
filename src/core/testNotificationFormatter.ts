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

    const builds = this.createActionBlock(this.createBuildActionElements(notification))
    if (builds !== null) {
      attachments[0].blocks.push(builds)
    }
    const reports = this.createActionBlock(this.createReportActionElements(notification))
    if (reports !== null) {
      attachments[0].blocks.push(reports)
    }

    return {attachments}
  }

  private createBuildActionElements(notification: Notification): ActionsBlockElement[] {
    const elements: ActionsBlockElement[] = []
    const buildNumber = notification.details.buildNumber
    const pullRequest = notification.details.links.pullRequest
    const build = notification.details.links.build
    const buildArtifacts = notification.details.links.buildArtifacts

    if (pullRequest) {
      elements.push(this.createButtonElement('View PR', pullRequest))
    }
    if (build) {
      elements.push(this.createButtonElement(`View Build Number ${buildNumber} :smiley:`, build))
    }
    if (buildArtifacts) {
      elements.push(this.createButtonElement('Build Artifacts', buildArtifacts))
    }

    return elements
  }

  private createReportActionElements(notification: Notification): ActionsBlockElement[] {
    const elements: ActionsBlockElement[] = []
    const reportPortal = notification.details.links.reportPortal
    const htmlReport = notification.details.links.htmlReport

    if (reportPortal) {
      elements.push(this.createButtonElement('Report Portal Launch', reportPortal))
    }
    if (htmlReport) {
      elements.push(this.createButtonElement('View HTML Report', htmlReport))
    }

    return elements
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
