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

export class NotificationFormatter {
  protected colorMap = {
    success: '#36a64f',
    failure: '#e01e5a',
    unknown: '#FFFF00',
    none: '#ffa500',
  }

  protected createHeaderBlock(text: string): HeaderBlock {
    return {
      type: 'header',
      text: {
        type: 'plain_text',
        text,
      },
    }
  }

  protected createSectionBlock(options: {
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

  protected createButtonElement(text: string, url: string): Button {
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

  protected createActionElements(notification: Notification, linkNames: Record<string, string>): ActionsBlockElement[] {
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

  protected createActionBlock(elements: ActionsBlockElement[]): ActionsBlock {
    if (elements.length > 0) {
      return {
        type: 'actions',
        elements: elements,
      }
    }
  }

  public formatNotification(notification: Notification): {attachments: MessageAttachment[]} {
    return {attachments: []}
  }
}
