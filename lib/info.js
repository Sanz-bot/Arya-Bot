exports.info = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2, grupch3) => {
	return `*MENU ${BotName}*
  
  Hi. *${id.split("@s.whatsapp.net")[0]}* 👋️

         ───
📆 *${tampilTanggal}*
⏱️ *${tampilWaktu}*
         ───
         

*About ${BotName}*

├≽️⚜ *AUTHOR*: NFQ SQUAD
├≽️⚜ *DESIGNER*: AR15BOT
├≽️⚜ *YOUTUBE*: DRAWL NAG

Bot Ini dibuat dengan bahasa javascript
Ataupun dengan NodeJs. Jadi
Untuk ini saya mohon hargai Dan jangan
jual script Ini....

*SPESIAL THANKS TO:*
= *ST4RZ*
= *Nugz dan tapz*
= *IWAB BOT*
= *DAN TEMAN YANG LAIN* :v

╭── *SOSMED ADMIN* ──
│1. *Group WhatsApp*
│ ${groupch1}
│
│2. *YouTube <subscribe>*
│ _${grupch2}_
│
│3. *Instagram <Follow>*
│ _${instagram}_
│
│4. *Creator ${BotName}*
│ _${085771853430}_
╰───────────`
}
