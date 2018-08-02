const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '+'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});



client.on('message', message => {
if (message.content.startsWith("القرآن")) {
    let pages = [' اهلا وسهلا بك يا عزيزي','السيرفر الأول','السيرفر الثاني','السيرفر الثالث','السيرفر الرابع','السيرفر الخامس','مراسلة صاحب البوت','شكرً جزيلا لكم']
    let page = 1;

    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setFooter(`Page ${page} of ${pages.length}`)
    .setDescription([page-1])
	.addField('     **=-=-=-=-=-=-=** ' ,'● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● ')
    .addField('     **=-=-=-=-=-=-=** ' ,'| A لأوامر السيرفر الأول اختر |')
    .addField('     **=-=-=-=-=-=-=** ' ,'| B لأوامر السيرفر الثاني اختر |')
    .addField('     **=-=-=-=-=-=-=** ' ,'| C لأوامر السيرفر الثالث احتر |')
    .addField('     **=-=-=-=-=-=-=** ' ,'| D لأوامر السيرفر الرابع اختر |')
    .addField('     **=-=-=-=-=-=-=** ' ,'| E لمراسلة صاحب البوت إختر |')
    .addField('     ● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● ' ,'| **=-=-=-=-=-=-=** |')

    message.channel.sendEmbed(embed).then(msg => {

        msg.react('🇦').then( r => {
            msg.react('🇧')
			msg.react('🇨')
			msg.react('🇩')
			msg.react('🇪')


        const backwardsFilter = (reaction, user) => reaction.emoji.name === '🇦' && user.id === message.author.id;
        const forwardsFilter = (reaction, user) => reaction.emoji.name === '🇧' && user.id === message.author.id;
		const bokwardsFilter = (reaction, user) => reaction.emoji.name === '🇨' && user.id === message.author.id;
		const bekwardsFilter = (reaction, user) => reaction.emoji.name === '🇩' && user.id === message.author.id;
		const brkwardsFilter = (reaction, user) => reaction.emoji.name === '🇪' && user.id === message.author.id;


        const backwards = msg.createReactionCollector(backwardsFilter, { time: 20000});
        const forwards = msg.createReactionCollector(forwardsFilter, { time: 20000});
		const bokwards = msg.createReactionCollector(bokwardsFilter, { time: 20000});
		const bekwards = msg.createReactionCollector(bekwardsFilter, { time: 20000});
		const brkwards = msg.createReactionCollector(brkwardsFilter, { time: 20000});
		
		
		

        brkwards.on('collect', r => {
            if (page === pages.length) return;
            page++;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
			embed.addField('     **=-=-=-=-=-=-=** ' ,' ** :smiley: تم ارسال الطريقة في الخاص**')
			embed.addField('     **=-=-=-=-=-=-=** ' ,' :smiley:  شكراً لإستعمالك البوت')
            message.author.sendMessage(`
=-=-=-=-=-=-=-=-=-=-=-=-=-=-= 
**لمراسلة صاحب البوت **
!report
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

`);
			msg.edit(embed)
        })    
		
        bekwards.on('collect', r => {
            if (page === pages.length) return;
            page++;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
			embed.addField('     **=-=-=-=-=-=-=** ' ,' ** :smiley: لم يتم بعد اضافة أوامر هذا السيرفر**')
			embed.addField('     **=-=-=-=-=-=-=** ' ,' :smiley:  شكراً لإستعمالك البوت')
            message.author.sendMessage(`
=-=-=-=-=-=-=-=-=-=-=-=-=-=-= 
**قريبا سيتم اضافة اوامر هاذا لسيرفر**
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

`);
			msg.edit(embed)
        })    
		
        bokwards.on('collect', r => {
            if (page === pages.length) return;
            page++;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
			embed.addField('     **=-=-=-=-=-=-=** ' ,' ** :smiley: لم يتم بعد اضافة أوامر هذا السيرفر**')
			embed.addField('     **=-=-=-=-=-=-=** ' ,' :smiley:  شكراً لإستعمالك البوت')
            message.author.sendMessage(`
=-=-=-=-=-=-=-=-=-=-=-=-=-=-= 
**قريبا سيتم اضافة اوامر هاذا لسيرفر**
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

`);
			msg.edit(embed)
        })    


		backwards.on('collect', r => {
            if (page === pages.length) return;
            page++;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
			embed.addField('     **=-=-=-=-=-=-=** ' ,' ** :smiley: تم ارسال مساعدة السيرفر الأول**')
			embed.addField('     **=-=-=-=-=-=-=** ' ,' :smiley:  شكراً لإستعمالك البوت - نسألك الدعاء')
            message.author.sendMessage(`
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 
السيرفر الأول
🕋اوامر بوت القران الكريم 🕋
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●
 =-=-=-=-=-=-=-=-=-=-=-=-=-=-= 
**
╔[❖══════════════════════❖]╗
============================
سورة الفاتحة
!quran 1
============================
سورة البقرة
!quran 2
============================
سورة ال عمران
!quran 3
============================
سورة النساء
!quran 4
============================
سورة المائدة
!quran 5
============================
سورة الأنعام
!quran 6
============================
سورة الاعراف
!quran 7
============================
سورة الأنفال
!quran 8
============================
سورة التوبة
!quran 9
============================
سورة يونس
!quran 10
============================
سورة هود
!quran 11
============================
سورة يوسف
!quran 12
============================
سورة الرعد
!quran 13
============================
سورة إبراهيم
!quran 14
============================
سورة الحجر
!quran 15
============================
سورة النحل
!quran 16
============================
سورة الإسراء
!quran 17
============================
سورة الكهف
!quran 18
============================
سورة مريم
!quran 19
============================
سورة طه
!quran 20
============================
سورة الأنبياء
!quran 21
============================
سورة الحج
!quran 22
============================
سورة المؤمنون
!quran 23
============================
سورة النور
!quran 24
============================
سورة الفرقان
!quran 25
============================
لتواصل مع صاحب البوت 
!report
╚[❖══════════════════════❖]╝
**
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 
هاذا البوت صدقة جارية للجميع فماذا تنتظر
قم بضم البوت على سيرفرك
https://goo.gl/YsNntN
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 
╚[❖══════════════════════❖]╝
**
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
`);
			msg.edit(embed)
        })    
	
        forwards.on('collect', r => {
            if (page === pages.length) return;
            page++;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
			embed.addField('     **=-=-=-=-=-=-=** ' ,' ** 🕋 تم ارسال مساعدة السيرفر الثاني**')
			embed.addField('     **=-=-=-=-=-=-=** ' ,' :smiley:  شكراً لإستعمالك البوت - نسألك الدعاء')
            message.author.sendMessage(`
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 
السيرفر الثاني
🕋اوامر بوت القران الكريم 🕋
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●
 =-=-=-=-=-=-=-=-=-=-=-=-=-=-= 
**
╔[❖══════════════════════❖]╗
============================
سورة الفاتحة
-quran 1
============================
سورة البقرة
-quran 2
============================
سورة ال عمران
-quran 3
============================
سورة النساء
-quran 4
============================
سورة المائدة
-quran 5
============================
سورة الأنعام
-quran 6
============================
سورة الاعراف
-quran 7
============================
سورة الأنفال
-quran 8
============================
سورة التوبة
-quran 9
============================
سورة يونس
-quran 10
============================
سورة هود
-quran 11
============================
سورة يوسف
-quran 12
============================
سورة الرعد
-quran 13
============================
سورة إبراهيم
-quran 14
============================
سورة الحجر
-quran 15
============================
سورة النحل
-quran 16
============================
سورة الإسراء
-quran 17
============================
سورة الكهف
-quran 18
============================
سورة مريم
-quran 19
============================
سورة طه
-quran 20
============================
سورة الأنبياء
-quran 21
============================
سورة الحج
-quran 22
============================
سورة المؤمنون
-quran 23
============================
سورة النور
-quran 24
============================
سورة الفرقان
-quran 25
============================
لتواصل مع صاحب البوت 
-report
╚[❖══════════════════════❖]╝
**
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 
هاذا البوت صدقة جارية للجميع فماذا تنتظر
قم بضم البوت على سيرفرك
https://goo.gl/YsNntN
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 
╚[❖══════════════════════❖]╝
**
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

`);
			msg.edit(embed)
        })
        })
    })
    }
});

///////////////////////////////////////////////////////////////////////////////////////////
client.on('message', message => {
if (message.content.startsWith("القران")) {
    let pages = [' اهلا وسهلا بك يا عزيزي','السيرفر الأول','السيرفر الثاني','السيرفر الثالث','السيرفر الرابع','السيرفر الخامس','مراسلة صاحب البوت','شكرً جزيلا لكم']
    let page = 1;

    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setFooter(`Page ${page} of ${pages.length}`)
    .setDescription([page-1])
	.addField('     **=-=-=-=-=-=-=** ' ,'● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● ')
    .addField('     **=-=-=-=-=-=-=** ' ,'| A لأوامر السيرفر الأول اختر |')
    .addField('     **=-=-=-=-=-=-=** ' ,'| B لأوامر السيرفر الثاني اختر |')
    .addField('     **=-=-=-=-=-=-=** ' ,'| C لأوامر السيرفر الثالث احتر |')
    .addField('     **=-=-=-=-=-=-=** ' ,'| D لأوامر السيرفر الرابع اختر |')
    .addField('     **=-=-=-=-=-=-=** ' ,'| E لمراسلة صاحب البوت إختر |')
    .addField('     ● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● ' ,'| **=-=-=-=-=-=-=** |')

    message.channel.sendEmbed(embed).then(msg => {

        msg.react('🇦').then( r => {
            msg.react('🇧')
			msg.react('🇨')
			msg.react('🇩')
			msg.react('🇪')


        const backwardsFilter = (reaction, user) => reaction.emoji.name === '🇦' && user.id === message.author.id;
        const forwardsFilter = (reaction, user) => reaction.emoji.name === '🇧' && user.id === message.author.id;
		const bokwardsFilter = (reaction, user) => reaction.emoji.name === '🇨' && user.id === message.author.id;
		const bekwardsFilter = (reaction, user) => reaction.emoji.name === '🇩' && user.id === message.author.id;
		const brkwardsFilter = (reaction, user) => reaction.emoji.name === '🇪' && user.id === message.author.id;


        const backwards = msg.createReactionCollector(backwardsFilter, { time: 20000});
        const forwards = msg.createReactionCollector(forwardsFilter, { time: 20000});
		const bokwards = msg.createReactionCollector(bokwardsFilter, { time: 20000});
		const bekwards = msg.createReactionCollector(bekwardsFilter, { time: 20000});
		const brkwards = msg.createReactionCollector(brkwardsFilter, { time: 20000});
		
		
		

        brkwards.on('collect', r => {
            if (page === pages.length) return;
            page++;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
			embed.addField('     **=-=-=-=-=-=-=** ' ,' ** :smiley: لقد تم ارسال الطريقة في الخاص**')
			embed.addField('     **=-=-=-=-=-=-=** ' ,' :smiley:  شكراً لإستعمالك البوت')
            message.author.sendMessage(`
=-=-=-=-=-=-=-=-=-=-=-=-=-=-= 
**لمراسلة صاحب البوت **
-report
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

`);
			msg.edit(embed)
        })    
		
        bekwards.on('collect', r => {
            if (page === pages.length) return;
            page++;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
			embed.addField('     **=-=-=-=-=-=-=** ' ,' ** :smiley: لم يتم بعد اضافة أوامر هذا السيرفر**')
			embed.addField('     **=-=-=-=-=-=-=** ' ,' :smiley:  شكراً لإستعمالك البوت')
            message.author.sendMessage(`
=-=-=-=-=-=-=-=-=-=-=-=-=-=-= 
**قريبا سيتم اضافة اوامر هاذا لسيرفر**
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

`);
			msg.edit(embed)
        })    
		
        bokwards.on('collect', r => {
            if (page === pages.length) return;
            page++;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
			embed.addField('     **=-=-=-=-=-=-=** ' ,' ** :smiley: لم يتم بعد اضافة أوامر هذا السيرفر**')
			embed.addField('     **=-=-=-=-=-=-=** ' ,' :smiley:  شكراً لإستعمالك البوت')
            message.author.sendMessage(`
=-=-=-=-=-=-=-=-=-=-=-=-=-=-= 
**قريبا سيتم اضافة اوامر هاذا لسيرفر**
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

`);
			msg.edit(embed)
        })    


		backwards.on('collect', r => {
            if (page === pages.length) return;
            page++;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
			embed.addField('     **=-=-=-=-=-=-=** ' ,' ** :smiley: تم ارسال مساعدة السيرفر الأول**')
			embed.addField('     **=-=-=-=-=-=-=** ' ,' :smiley:  شكراً لإستعمالك البوت - نسألك الدعاء')
            message.author.sendMessage(`
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 
السيرفر الأول
🕋اوامر بوت القران الكريم 🕋
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●
 =-=-=-=-=-=-=-=-=-=-=-=-=-=-= 
**
╔[❖══════════════════════❖]╗
============================
سورة الفاتحة
!quran 1
============================
سورة البقرة
!quran 2
============================
سورة ال عمران
!quran 3
============================
سورة النساء
!quran 4
============================
سورة المائدة
!quran 5
============================
سورة الأنعام
!quran 6
============================
سورة الاعراف
!quran 7
============================
سورة الأنفال
!quran 8
============================
سورة التوبة
!quran 9
============================
سورة يونس
!quran 10
============================
سورة هود
!quran 11
============================
سورة يوسف
!quran 12
============================
سورة الرعد
!quran 13
============================
سورة إبراهيم
!quran 14
============================
سورة الحجر
!quran 15
============================
سورة النحل
!quran 16
============================
سورة الإسراء
!quran 17
============================
سورة الكهف
!quran 18
============================
سورة مريم
!quran 19
============================
سورة طه
!quran 20
============================
سورة الأنبياء
!quran 21
============================
سورة الحج
!quran 22
============================
سورة المؤمنون
!quran 23
============================
سورة النور
!quran 24
============================
سورة الفرقان
!quran 25
============================
لتواصل مع صاحب البوت 
!report
╚[❖══════════════════════❖]╝
**
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 
هاذا البوت صدقة جارية للجميع فماذا تنتظر
قم بضم البوت على سيرفرك
https://goo.gl/YsNntN
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 
╚[❖══════════════════════❖]╝
**
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
`);
			msg.edit(embed)
        })    
	
        forwards.on('collect', r => {
            if (page === pages.length) return;
            page++;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
			embed.addField('     **=-=-=-=-=-=-=** ' ,' ** 🕋 تم ارسال مساعدة السيرفر الثاني**')
			embed.addField('     **=-=-=-=-=-=-=** ' ,' :smiley:  شكراً لإستعمالك البوت - نسألك الدعاء')
            message.author.sendMessage(`
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 
السيرفر الثاني
🕋اوامر بوت القران الكريم 🕋
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●
 =-=-=-=-=-=-=-=-=-=-=-=-=-=-= 
**
╔[❖══════════════════════❖]╗
============================
سورة الفاتحة
-quran 1
============================
سورة البقرة
-quran 2
============================
سورة ال عمران
-quran 3
============================
سورة النساء
-quran 4
============================
سورة المائدة
-quran 5
============================
سورة الأنعام
-quran 6
============================
سورة الاعراف
-quran 7
============================
سورة الأنفال
-quran 8
============================
سورة التوبة
-quran 9
============================
سورة يونس
-quran 10
============================
سورة هود
-quran 11
============================
سورة يوسف
-quran 12
============================
سورة الرعد
-quran 13
============================
سورة إبراهيم
-quran 14
============================
سورة الحجر
-quran 15
============================
سورة النحل
-quran 16
============================
سورة الإسراء
-quran 17
============================
سورة الكهف
-quran 18
============================
سورة مريم
-quran 19
============================
سورة طه
-quran 20
============================
سورة الأنبياء
-quran 21
============================
سورة الحج
-quran 22
============================
سورة المؤمنون
-quran 23
============================
سورة النور
-quran 24
============================
سورة الفرقان
-quran 25
============================
لتواصل مع صاحب البوت 
-report
╚[❖══════════════════════❖]╝
**
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 
هاذا البوت صدقة جارية للجميع فماذا تنتظر
قم بضم البوت على سيرفرك
https://goo.gl/YsNntN
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 
╚[❖══════════════════════❖]╝
**
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

`);
			msg.edit(embed)
        })
        })
    })
    }
});

client.on("message", message => {
      if (message.content === "ping") {
      const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField('** : سرعة الإتصال هي**' , `${Date.now() - message.createdTimestamp}` + ' ms')
  message.channel.sendEmbed(embed);
    }
});

client.on('message' , message => {
  
if (message.content.startsWith("-report")) {
      if (message.author.bot) return;
            if (!message.channel.guild) return;
            let args = message.content.split(" ").slice(1).join(" ");

                var xsatt = new Discord.RichEmbed()
            .addField(' **الـمرسل **', `${message.author.username}#${message.author.discriminator}`,true)
            .addField(' **الرسالة** ', args)
              .setThumbnail(message.guild.iconURL)
              .setColor('RANDOM')
              client.users.get("370828320910213131").send({embed: xsatt});

            let embed = new Discord.RichEmbed()
               .setAuthor(message.author.username, message.author.avatarURL)
               .setColor("RANDOM")
               .setDescription(' ✅ **شكرا لك , لقد تم ارسال رسالتك لصاحب البوت**')
               .setThumbnail(message.author.avatarURL)


          message.channel.send(embed);
        }});

client.on('message' , message => {
  
if (message.content.startsWith("!report")) {
      if (message.author.bot) return;
            if (!message.channel.guild) return;
            let args = message.content.split(" ").slice(1).join(" ");

                var xsatt = new Discord.RichEmbed()
            .addField(' **الـمرسل **', `${message.author.username}#${message.author.discriminator}`,true)
            .addField(' **الرسالة** ', args)
              .setThumbnail(message.guild.iconURL)
              .setColor('RANDOM')
              client.users.get("370828320910213131").send({embed: xsatt});

            let embed = new Discord.RichEmbed()
               .setAuthor(message.author.username, message.author.avatarURL)
               .setColor("RANDOM")
               .setDescription(' ✅ **شكرا لك , لقد تم ارسال رسالتك لصاحب البوت**')
               .setThumbnail(message.author.avatarURL)


          message.channel.send(embed);
        }});



client.login(process.env.BOT_TOKEN);
