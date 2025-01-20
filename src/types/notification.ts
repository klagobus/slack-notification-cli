export interface NotificationDetails {
  gitBranch: string
  testSuiteName: string
  testingFramework: string
  buildNumber: number
  triggeredBy: string
  repoName: string
  links?: Record<string, string>
}

export interface Notification {
  status: 'success' | 'failure' | 'unknown' | 'none'
  details: NotificationDetails
}
