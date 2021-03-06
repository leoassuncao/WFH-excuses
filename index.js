const db = require('./database.json')

const wfh = (lang = 'en') => {
  const max = db.excuses.length - 1

  return {
    db: JSON.parse(JSON.stringify(db)), // Deep clone
    pick: (customLang) => {
      const random = Math.round(Math.random() * max)
      const rndItem = db.excuses[random]
      const selectedLang = customLang || lang
      return rndItem[selectedLang.toLowerCase()] || `Invalid language (${selectedLang})`
    }
  }
}

module.exports = wfh
