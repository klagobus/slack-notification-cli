import {
  ActionsBlock,
  ActionsBlockElement,
  Button,
  HeaderBlock,
  MessageAttachment,
  SectionBlock,
  SectionBlockAccessory,
  TextObject,
} from '@slack/types';

import { Notification } from '../types/notification';

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
    failure: '#e01e5a',
    none: '#ffa500',
    success: '#36a64f',
    unknown: '#FFFF00',
  };

  /**
   * Creates an action block for Slack messages containing the provided action elements.
   *
   * @param elements - An array of ActionsBlockElement objects to be included in the action block.
   * @returns An ActionsBlock object containing the type and elements if any elements are provided; otherwise, returns undefined.
   */
  createActionBlock(elements: ActionsBlockElement[]): ActionsBlock {
    if (elements.length > 0) {
      return {
        elements,
        type: 'actions',
      };
    }
  }

  /**
   * Creates action button elements for Slack messages based on the provided notification and link names.
   * This method checks if the notification contains links. If links are present, it creates button elements
   * for each link defined in the linkNames mapping. If no links are found, it returns an empty array.
   * @param notification - The notification object containing details, including links.
   * @returns An array of ActionsBlockElement objects representing the buttons created from the links.
   */
  createActionButtonElements(
    notification: Notification
  ): ActionsBlockElement[] {
    const elements: ActionsBlockElement[] = [];
    const links = notification.details?.links;

    if (!links) {
      return elements; // Return empty array if links is not defined
    }

    for (const [key, value] of Object.entries(links)) {
      if (links[key]) {
        elements.push(this.createButtonElement(key, value));
      }
    }

    return elements;
  }

  /**
   * Creates a button element for Slack messages.
   *
   * @param text - The text to be displayed on the button.
   * @param url - The URL that the button will link to when clicked.
   * @returns A Button object containing the type, text, and URL for the button.
   */
  createButtonElement(text: string, url: string): Button {
    return {
      text: {
        emoji: true,
        text,
        type: 'plain_text',
      },
      type: 'button',
      url,
    };
  }

  /**
   * Creates a header block for Slack messages.
   *
   * @param text - The text to be displayed in the header.
   * @returns A HeaderBlock object containing the type and text for the header.
   */
  createHeaderBlock(text: string): HeaderBlock {
    return {
      text: {
        text,
        type: 'plain_text',
      },
      type: 'header',
    };
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
  createSectionBlock(options: {
    accessory?: SectionBlockAccessory;
    fields?: TextObject[];
    text?: TextObject;
  }): SectionBlock {
    return {
      accessory: options.accessory,
      fields: options.fields,
      text: options.text,
      type: 'section',
    };
  }

  /**
   * Formats a notification into a structure suitable for Slack messages.
   *
   * @param notification - The notification object containing details to be formatted.
   * @returns An object containing an array of MessageAttachment objects.
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  formatNotification(notification: Notification): {
    attachments: MessageAttachment[];
  } {
    return { attachments: [] };
  }
}
