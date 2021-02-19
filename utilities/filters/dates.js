
const to_month = new Intl.DateTimeFormat('en', { month: 'long' });

// timestamp date to YYYY-MM-DD
module.exports.timestamp = date => (
  date instanceof Date ? `${date.getUTCFullYear()}-${String(date.getUTCMonth() + 1).padStart(2, '0')}-${String(date.getUTCDate()).padStart(2, '0')}` : ''
)

// human readable date for blog posts (DD MM, YYYY)
module.exports.friendly = date => (
  date instanceof Date ? date.getUTCDate() + ' ' + to_month.format(date) + ', ' + date.getUTCFullYear() : ''
)
