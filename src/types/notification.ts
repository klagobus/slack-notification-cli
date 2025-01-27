export interface NotificationDetails {
  buildNumber: number
  gitBranch: string
  links?: Record<string, string>
  repoName: string
  testSuiteName: string
  testingFramework: string
  triggeredBy: string
}

export interface Notification {
  details: NotificationDetails
  status: 'failure' | 'none' | 'success' | 'unknown'
}
