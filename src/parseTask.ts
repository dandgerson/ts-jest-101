export const translate = (input: string) => input
  .split('')
  .reduce<{ [key: string]: number }>((acc, current) => {
    const { status, effort } = parse(current)

    acc[status] = (acc[status] || 0) + effort

    return acc
  }, {})

const dict: {
  [key: string]: {
    status: string
    effort: number
  }
} = {
  'd': {
    status: 'Dev',
    effort: 0.5,
  },
  'D': {
    status: 'Dev',
    effort: 1,
  },
  'q': {
    status: 'QA',
    effort: 0.5,
  },
  'Q': {
    status: 'QA',
    effort: 1,
  },
}

function parse(c: string) {
  return dict[c]
}
