let handler =  m => m.reply(`
╭─「 Donasi 」
│ • https://saweria.co/ezomichichannel
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
