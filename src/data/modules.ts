export interface Module {
  num: string
  label: string
  title: string
  features: string[]
}

export const modules: Module[] = [
  {
    num: '01',
    label: 'System 01',
    title: 'Creative Lead Agent',
    features: [
      '50 photorealistic ad variations per campaign',
      'Hyper-targeted visuals per micro-audience segment',
      'Reactive ads live in 30 minutes vs competitor campaigns',
      'Trend-capture engine monitors and activates on viral moments',
      'Auto A/B testing — scales winners, kills losers',
      'Budget allocation intelligence reduces cost per lead',
      'Human approval dashboard before Meta push',
    ],
  },
  {
    num: '02',
    label: 'System 02',
    title: 'Prospect Intelligence Agent',
    features: [
      'Deep psychographic profiling of target audiences',
      'Emotional trigger mapping per micro-group',
      'Competitor ad library monitoring & analysis',
      'Buying signal detection across social platforms',
      'Weekly prospect intelligence reports',
      'Real-time trend alerts for your industry',
    ],
  },
  {
    num: '03',
    label: 'System 03',
    title: 'Lead Qualification Agent',
    features: [
      'Instant AI response to every inbound enquiry',
      'Multi-channel: WhatsApp, DM, email, web',
      'Qualifies and scores leads against your ICP',
      'Books discovery calls directly into your calendar',
      'CRM sync and full conversation logging',
      'Escalation to human team with full context',
    ],
  },
  {
    num: '04',
    label: 'System 04',
    title: 'Conversion Nurture Agent',
    features: [
      'Personalised follow-up sequences per lead score',
      'Behavioural triggers — acts on prospect actions',
      'Multi-touch: email, WhatsApp, retargeting signals',
      'Dynamic content adapts to prospect engagement',
      'Pipeline velocity tracking and reporting',
      'Re-engagement flows for cold leads',
    ],
  },
  {
    num: '05',
    label: 'System 05',
    title: 'Revenue Operations Agent',
    features: [
      'Full-funnel performance dashboards',
      'Ad spend optimisation and budget reallocation',
      'Customer lifetime value modelling',
      'Churn prediction and retention triggers',
      'Weekly revenue intelligence briefings',
      'Automated reporting to stakeholders',
    ],
  },
]
