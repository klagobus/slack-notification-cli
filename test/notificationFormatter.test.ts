import {
  Button,
  HeaderBlock,
  SectionBlock,
  SectionBlockAccessory,
  TextObject,
} from '@slack/types'; // Adjust the import path for types if needed
import { NotificationFormatter } from '../src/core/notificationFormater';
import { Notification } from '../src/types/notification';

describe('NotificationFormatter', () => {
  let formatter: NotificationFormatter;
  beforeEach(() => {
    formatter = new NotificationFormatter();
  });

  it('should create a header block with the given text', () => {
    const text = 'Test Header';
    const expectedHeaderBlock: HeaderBlock = {
      text: {
        text,
        type: 'plain_text',
      },
      type: 'header',
    };

    const result = formatter.createHeaderBlock(text);
    expect(result).toEqual(expectedHeaderBlock);
  });

  it('should create a button element with the correct properties', () => {
    const text = 'Click Me';
    const url = 'http://example.com';

    const result: Button = formatter.createButtonElement(text, url);

    expect(result).toBeDefined();
    expect(result.type).toBe('button');
    expect(result.text).toBeDefined();
    expect(result.text.emoji).toBe(true);
    expect(result.text.text).toBe(text);
    expect(result.text.type).toBe('plain_text');
    expect(result.url).toBe(url);
  });

  it('should create action button elements based on notification links', () => {
    const notification: Notification = {
      details: {
        links: {
          link1: 'http://example.com/1',
          link2: 'http://example.com/2',
        },
        buildNumber: 1234,
        gitBranch: 'main',
        repoName: 'example-repo',
        testSuiteName: 'example-suite',
        triggeredBy: 'U123456',
        testingFramework: 'jest',
      },
      status: 'success',
    };
    const links = Object.keys(notification?.details?.links || {});

    const result = formatter.createActionButtonElements(notification);
    for (const [key, value] of Object.entries(links)) {
      if (notification.details?.links) {
        expect(result[key].text.text).toBe(value);
        expect(result[key].url).toBe(notification.details?.links[value]);
      } else {
        expect(notification.details?.links).toBeUndefined();
      }
    }
  });

  it('should create a section block with the correct properties', () => {
    const options = {
      accessory: {
        type: 'image',
        image_url: 'http://example.com/image.png',
        alt_text: 'Example Image',
      } as SectionBlockAccessory,
      fields: [
        { type: 'mrkdwn', text: 'Field 1' },
        { type: 'mrkdwn', text: 'Field 2' },
      ] as TextObject[],
      text: { type: 'plain_text', text: 'Section Title' } as TextObject,
    };

    const result: SectionBlock = formatter.createSectionBlock(options);

    expect(result).toBeDefined();
    expect(result.type).toBe('section');
    expect(result.accessory).toEqual(options.accessory);
    expect(result.fields).toEqual(options.fields);
    expect(result.text).toEqual(options.text);
  });
});
