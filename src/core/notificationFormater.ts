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
  /**
   * A mapping of notification statuses to their corresponding colors.
   *
   * - `success`: Green color (#36a64f) indicates a successful notification.
   * - `failure`: Red color (#e01e5a) indicates a failed notification.
   * - `unknown`: Yellow color (#FFFF00) indicates an unknown status.
   * - `none`: Orange color (#ffa500) indicates no specific status.
   */
  protected colorMap = {
    success: '#36a64f',
    failure: '#e01e5a',
    unknown: '#FFFF00',
    none: '#ffa500',
  }

  /**
   * Creates a header block for Slack messages.
   *
   * @param text - The text to be displayed in the header.
   * @returns A HeaderBlock object containing the type and text for the header.
   */
  protected createHeaderBlock(text: string): HeaderBlock {
    return {
      type: 'header',
      text: {
        type: 'plain_text',
        text,
      },
    }
  }

  /**
   * Creates a section block for Slack messages.
   *
   * @param options - An object containing the properties for the section block.
   * @param options.text - The text to be displayed in the section block.
   * @param options.fields - An optional array of fields to be displayed in the section block.
   * @param options.accessory - An optional accessory element to be included in the section block.
   * @returns A SectionBlock object containing the type and specified options for the section.
   */
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

  /**
   * Creates a button element for Slack messages.
   *
   * @param text - The text to be displayed on the button.
   * @param url - The URL that the button will link to when clicked.
   * @returns A Button object containing the type, text, and URL for the button.
   */
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

  /**
   * Creates action elements for Slack messages based on the provided notification and link names.
   *
   * @param notification - The notification object containing details, including links.
   * @param linkNames - A record mapping link keys to their display labels.
   * @returns An array of ActionsBlockElement objects representing the buttons created from the links.
   */
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

  /**
   * Creates an action block for Slack messages containing the provided action elements.
   *
   * @param elements - An array of ActionsBlockElement objects to be included in the action block.
   * @returns An ActionsBlock object containing the type and elements if any elements are provided; otherwise, returns undefined.
   */
  protected createActionBlock(elements: ActionsBlockElement[]): ActionsBlock {
    if (elements.length > 0) {
      return {
        type: 'actions',
        elements: elements,
      }
    }
  }

  /**
   * Formats a notification into a structure suitable for Slack messages.
   *
   * @param notification - The notification object containing details to be formatted.
   * @returns An object containing an array of MessageAttachment objects.
   */
  public formatNotification(notification: Notification): {attachments: MessageAttachment[]} {
    return {attachments: []}
  }
}
