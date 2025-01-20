import {Command, Flags} from '@oclif/core'
import {SlackSender} from '../core/sender'
import {Notification} from '../types/notification'
import * as fs from 'fs'

export class Send extends Command {
  static description = 'Send a Slack notification'

  static flags = {
    token: Flags.string({char: 't', description: 'Slack API token', required: true}),
    channel: Flags.string({char: 'c', description: 'Slack channel ID', required: true}),
    config: Flags.string({char: 'f', description: 'Path to notification config JSON', required: true}),
  }

  async run() {
    const {flags} = await this.parse(Send)
    const {token, channel, config} = flags

    // Read and parse the JSON file
    const notificationData = fs.readFileSync(config, 'utf-8')
    const notification: Notification = JSON.parse(notificationData)
    console.log('******', notification)
    const sender = new SlackSender(token)

    try {
      await sender.send(channel, notification)
      this.log('Notification sent successfully!')
    } catch (error: unknown) {
      this.error(`Failed to send notification: ${error instanceof Error ? error.message : String(error)}`)
    }
  }
}
