// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
import { Command, Flags } from '@oclif/core';
import * as fs from 'node:fs';
import { SlackSender } from '../core/sender';
import { Notification } from '../types/notification';

export class Send extends Command {
  static description = 'Send a Slack notification';

  static flags = {
    channel: Flags.string({
      char: 'c',
      description: 'Slack channel ID',
      required: true,
    }),
    config: Flags.string({
      char: 'f',
      description: 'Path to notification config JSON',
      required: true,
    }),
    token: Flags.string({
      char: 't',
      description: 'Slack API token',
      required: false,
    }),
  };

  async run() {
    const { flags } = await this.parse(Send);
    const { channel, config } = flags;
    let { token } = flags;
    if (!token) {
      token = process.env.SLACK_TOKEN;
    }

    if (!token) {
      this.error('Slack API token is required');
    }

    // Read and parse the JSON file
    const notificationData = fs.readFileSync(config, 'utf8');
    const notification: Notification = JSON.parse(notificationData);

    const sender = new SlackSender(token);

    try {
      await sender.send(channel, notification);
      this.log('Notification sent successfully!');
    } catch (error: unknown) {
      this.error(
        `Failed to send notification: ${
          error instanceof Error ? error.message : String(error)
        }`
      );
    }
  }
}
