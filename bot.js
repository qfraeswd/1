const Discord = require('discord.js');  
const client = new Discord.Client();  
const adminprefix = "÷";
const devs = ['564414567946387487','401886446056898560']
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
   
if (message.content.startsWith(adminprefix + 'setgame')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**__${argresult}__تـم تـغـيـر بـلانـيـق الـى:large_blue_circle:**`)
} else
  if (message.content.startsWith(adminprefix + 'setname')) {
client.user.setUsername(argresult).then
    message.channel.sendMessage(`**__${argresult}__تـم تـغـيـر اســم الـى**:pencil:`)
return message.reply("**لايـمـكـن تـغـيـر اسـم الان نـتـظـار سـاعـتـان**:stopwatch: ");
} else
  if (message.content.startsWith(adminprefix + 'setavatar')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(`**__${argresult}__تــم تــغـيــر صــور الـى :camera_with_flash:**`);
      } else    
if (message.content.startsWith(adminprefix + 'setT')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");
    message.channel.sendMessage(`**__${argresult}__ تــم تـغــيــر حــالـه الــى :red_circle:**`)
}
});
 
client.on('message', msg => {
    if (msg.content === '÷') {
      msg.reply('***__بـــحـــبــــك__***');
    }
  });

client.login(process.env.BOT_TOKEN);
