import { TestNotificationFormatter } from '../src/core/testNotificationFormatter';
import { Notification } from '../src/types/notification';

describe('TestNotificationFormatter', () => {
  let formatter: TestNotificationFormatter;

  beforeEach(() => {
    formatter = new TestNotificationFormatter();
  });

  it('should format a notification into the correct structure', () => {
    const notification: Notification = {
      details: {
        testingFramework: 'jest',
        repoName: 'example-repo',
        gitBranch: 'main',
        testSuiteName: 'example-suite',
        triggeredBy: 'U123456',
        buildNumber: 1234,
      },
      status: 'success',
    };

    const result = formatter.formatNotification(notification);

    expect(result).toBeDefined();
    expect(result.attachments).toBeDefined();
    expect(result.attachments).toHaveLength(1);
    expect(result.attachments[0].blocks).toBeDefined();
    expect(result.attachments[0].blocks).toHaveLength(4);
  });
});
