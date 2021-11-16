const { WAConnection, Browsers, MessageType, Presence, Mimetype, GroupSettingChange, } = require('@adiwajshing/baileys')
const { color, bgcolor } = require('./lib/color')
const fs = require("fs-extra")
const figlet = require('figlet')
const { uncache, nocache } = require('./lib/loader')
const setting = JSON.parse(fs.readFileSync('./setting.json'))
const fetch = require("node-fetch");
const welcome = require('./message/group')
baterai = 'unknown'
charging = 'unknown'
const moment = require("moment-timezone");
blocked = [];
const time2 = moment().tz("Asia/Jakarta").format("HH:mm:ss");
    if (time2 < "24:59:00") {
      var ucapanWaktu = "Selamat malam";
    }
    if (time2 < "19:00:00") {
      var ucapanWaktu = "Selamat senja";
    }
    if (time2 < "18:00:00") {
      var ucapanWaktu = "Selamat sore";
    }
    if (time2 < "15:00:00") {
      var ucapanWaktu = "Selamat siang";
    }
    if (time2 < "11:00:00") {
      var ucapanWaktu = "Selamat pagi";
    }
    if (time2 < "05:00:00") {
      var ucapanWaktu = "Selamat malam";
    }
const runtime = function (seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " Hari, ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " Jam, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " Menit, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " Detik") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
};

//nocache
require('./dha.js')
nocache('../dha.js', module => console.log(color('[WATCH]', 'yellow'), color(`'${module}'`, 'cyan'), 'File is updated!'))
require('./message/group.js')
nocache('../message/group.js', module => console.log(color('[WATCH]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))

const starts = async (dha = new WAConnection()) => {
	dha.logger.level = 'warn'
	console.log(color(figlet.textSync('SHERLYNN BOTZ V2', {
		font: 'Standard',
		horizontalLayout: 'default',
		vertivalLayout: 'default',
		width: 80,
		whitespaceBreak: false
	}), 'cyan'))
	console.log(color('[SOURCE CODE INI DIJAGA DAN DI LINDUNGI OLEH KURRXD\n\n', 'orange'), color('\n======TERIMKASIH BANYAK KEPADA======\n•MHANKBARBAR\n•NINO\n•IKYADS\n•KurrXd\n•DAFFA PATNER SAYA\n•COPAS TEAM\n•PENYEDIA APIKEY\n•SELURUH CREATOR BOT\n•SELURUH SUBSCRIBERKU\n•SELURUH BUYER SCRIP INI', 'yellow'))
	console.log(color('\n\nJANGAN DI JUAL ULANG BRO😑\nKALAU ADA YG MINTA SURUH CHAT ©Katashi��\nWA YUDHA 6289626029135��', 'pink'))
	dha.version = [2, 2143, 4];
	dha.browserDescription = ["Putra Ganteng", "Chrome", "3.0"];

	// Menunggu QR
	dha.on('qr', () => {
		console.log(color('[', 'pink'), color('!', 'red'), color(']', 'pink'), color('SCANLAH BROKAN LU OWNER GUA SEKARANG'))
	})

	// Menghubungkan
	fs.existsSync(`./${setting.sessionName}.json`) && dha.loadAuthInfo(`./${setting.sessionName}.json`)
	dha.on('connecting', () => {
		console.log(color('[ SHERLYNN ]', 'purple'), color('PROSES PENYAMBUNGAN'));
	})
const spinner = { 
  "interval": 120,
  "frames": [
    "K",
    "Ku",
    "Kur",
    "Kurr",
    "KurrXd",
    "KurrXd G",
    "KurrXd GA",
    "KurrXd GAN",
    "KurrXd GANT",
    "KurrXd GANTE",
    "KurrXd GANTEN",
    "KurrXd GANTENG",
    "KurrXd GANTENG B",
    "KurrXd GANTENG BA",
    "KurrXd GANTENG BAN",
    "KurrXd GANTENG BANG",
    "KurrXd GANTENG BANGE",
    "KurrXd GANTENG BANGET",
    "KurrXd GANTENG BANGET A",
    "KurrXd GANTENG BANGET AN",
    "KurrXd GANTENG BANGET ANJ",
    "KurrXd GANTENG BANGET ANJI",
    "KurrXd GANTENG BANGET ANJIR",
    "KurrXd GANTENG BANGET ANJIR, B",
    "KurrXd GANTENG BANGET ANJIR, BT",
    "KurrXd GANTENG BANGET ANJIR, BTW",
    "KurrXd GANTENG BANGET ANJIR, BTW J",
    "KurrXd GANTENG BANGET ANJIR, BTW JA",
    "KurrXd GANTENG BANGET ANJIR, BTW JAN",
    "KurrXd GANTENG BANGET ANJIR, BTW JANG",
    "KurrXd GANTENG BANGET ANJIR, BTW JANGA",
    "KurrXd GANTENG BANGET ANJIR, BTW JANGAN",
    "KurrXd GANTENG BANGET ANJIR, BTW JANGAN J",
    "KurrXd GANTENG BANGET ANJIR, BTW JANGAN JU",
    "KurrXd GANTENG BANGET ANJIR, BTW JANGAN JUA",
    "KurrXd GANTENG BANGET ANJIR, BTW JANGAN JUAL",
    "KurrXd GANTENG BANGET ANJIR, BTW JANGAN JUAL S",
    "KurrXd GANTENG BANGET ANJIR, BTW JANGAN JUAL SC",
    "KurrXd GANTENG BANGET ANJIR, BTW JANGAN JUAL SC I",
    "KurrXd GANTENG BANGET ANJIR, BTW JANGAN JUAL SC IN",
    "KurrXd GANTENG BANGET ANJIR, BTW JANGAN JUAL SC INI",
    "KurrXd GANTENG BANGET ANJIR, BTW JANGAN JUAL SC INI C",
    "KurrXd GANTENG BANGET ANJIR, BTW JANGAN JUAL SC INI CO",
    "KurrXd GANTENG BANGET ANJIR, BTW JANGAN JUAL SC INI COK"
  ]}

	//connect
	dha.on('open', () => {
		console.log(color('[ SHERLYNN ]', 'purple'), color('BOT SUDAH AKTIF SELAMAT MENGGUNAKAN'));
	})

	// session
	await dha.connect({
		timeoutMs: 30 * 1000
	})
	fs.writeFileSync(`./${setting.sessionName}.json`, JSON.stringify(dha.base64EncodedAuthInfo(), null, '\t'))

///Test
dha.on('group-update', async (anu) => {
mek = { key: {
  fromMe: false,
    participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6289626029135-1604595598@g.us' } : {})
},
 message: {
    "contactMessage":{"displayName":'Katashi',"vcard":"BEGIN:VCARD\nVERSION:3.0\nN:2;Rival;;;\nFN:resku\nitem1.TEL;waid=6289626029135:+62 896-2602-9135\nitem1.X-ABLabel:Mobile\nEND:VCARD"
 }}}
metdata = await dha.groupMetadata(anu.jid)
if(anu.announce == 'false'){
teks = ` [ Group Opened ] \n\n_Group telah dibuka oleh admin_\n_Sekarang semua member bisa mengirim pesan_`
dha.sendMessage(metdata.id, teks, MessageType.text, {quoted: mek})
console.log(`- [ Group Opened ] - In ${metdata.subject}`)
}
else if(anu.announce == 'true'){
teks = ` [ Group Closed ] \n\n_Group telah ditutup oleh admin_\n_Sekarang hanya admin yang dapat mengirim pesan_`
dha.sendMessage(metdata.id, teks, MessageType.text, {quoted: mek})
console.log(` [ Group Closed ]  In ${metdata.subject}`)
}
else if(!anu.desc == ''){
tag = anu.descOwner.split('@')[0] + '@s.whatsapp.net'
teks = ` [ Group Description Change ] \n\nDeskripsi Group telah diubah oleh Admin @${anu.descOwner.split('@')[0]}\n� Deskripsi Baru : ${anu.desc}`
dha.sendMessage(metdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [tag]}, quoted: mek})
console.log(`- [ Group Description Change ] - In ${metdata.subject}`)
  }
else if(anu.restrict == 'false'){
teks = `- [    ] -\n\nEdit Group info telah dibuka untuk member\nSekarang semua member dapat mengedit info Group Ini`
dha.sendMessage(metdata.id, teks, MessageType.text, {quoted: mek})
console.log(`- [ Group Setting Change ] - In ${metdata.subject}`)
  }
else if(anu.restrict == 'true'){
teks = `- [    ] -\n\nEdit Group info telah ditutup untuk member\nSekarang hanya admin group yang dapat mengedit info Group Ini`
dha.sendMessage(metdata.id, teks, MessageType.text, {quoted: mek})
console.log(`- [ Group Setting Change ] - In ${metdata.subject}`)
}
})

  //
   dha.on('message-delete', async (m) => {
   if (m.key.remoteJid == 'status@broadcast') return
   if (!m.key.fromMe) {
   m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
   const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss')
   let d = new Date
   let c = dha.chats.get(m.key.remoteJid)
   let a = c.messages.dict[`${m.key.id}|${m.key.fromMe ? 1 : 0}`]
   let co3ntent = dha.generateForwardMessageContent(a, false)
   let c3type = Object.keys(co3ntent)[0]
   let locale = 'id'
   let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
   let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
   let week = d.toLocaleDateString(locale, { weekday: 'long' })
   let calender = d.toLocaleDateString(locale, {
   day: 'numeric',
   month: 'long',
   year: 'numeric'
   })
   dha.copyNForward(m.key.remoteJid, m.message)
   dha.sendMessage(m.key.remoteJid, `\`\`\`Anti Delete\`\`\`

    \`\`\`Nama : @${m.participant.split("@")[0]}\`\`\`
    \`\`\`Tipe : ${c3type}\`\`\`
    \`\`\`Tanggal : ${jam} - ${week} ${weton} - ${calender}\`\`\``, MessageType.text, {quoted: m.message, contextInfo: {"mentionedJid": [m.participant]}})
         }
      })


	// Baterai
	dha.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
		global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
		if (json[2][0][1].live == 'true') charging = true
		if (json[2][0][1].live == 'false') charging = false
		console.log(json[2][0][1])
		console.log('Baterai : ' + batterylevel + '%')
	})
	global.batrei = global.batrei ? global.batrei : []
	dha.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
	})



	// welcome
	dha.on('group-participants-update', async (anu) => {
		await welcome(dha, anu)
	})

	dha.on('chat-update', async (message) => {
		require('./dha.js')(dha, message)
	})
}



starts()
