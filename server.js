const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://anti-hacking.glitch.me/`);
}, 280000);

const Discord = require("discord.js");
const client = new Discord.Client();
const { TOKEN, YT_API_KEY, prefix, devs } = require("./config");
const { Firewalld, Fire, Name, ID } = require("./firewall");
const moment = require("moment");
const zalgo = require("zalgolize");
const math = require("math-expression-evaluator");
const figlet = require("figlet");
const fs = require("fs");
const ms = require("ms");
const firewalld = "https://firewall.com/";
const ip1 = "https://whatismyipaddress.com/ip/";

client.login(TOKEN);
Math.floor(Math.random() * 10);
client.on("message", msg => {});
client.on("message", message => {
  if (message.content.startsWith(prefix + "firewall")) {
    if (!message.author.id === "") return;
    if (message.author.bot) return;
    message.delete();
    let args = message.content.split(" ").slice(1);

    let kemoname = "جدار الحماية";
    if (kemoname < 1) {
      return message.channel.send("**```جاري فحص السرفر من اي هجامات```**");
    }
    message.channel
      .send({
        embed: new Discord.RichEmbed()
          .setTitle("Loading " + kemoname + "...")
          .setColor(0xff0000)
      })
      .then(function(m) {
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle("[" + kemoname + "]: فحص السرفر من الثغرات [▓ ] 1%")
              .setColor(0xff0000)
          });
        }, 1000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle("[" + kemoname + "]: فحص السرفر من الثغرات [▓▓ ] 2%")
              .setColor(0xff0000)
          });
        }, 2000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle("[" + kemoname + "]: فحص السرفر من الثغرات [▓▓▓ ] 3%")
              .setColor(0xff0000)
          });
        }, 3000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle("[" + kemoname + "]: فحص السرفر من الثغرات [▓▓▓▓ ] 4%")
              .setColor(0xff0000)
          });
        }, 4000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle(
                "[" + kemoname + "]: فحص السرفر من الثغرات [▓▓▓▓▓▓▓▓▓▓▓▓ ] 20%"
              )
              .setColor(0xff0000)
          });
        }, 5000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle(
                "[" + kemoname + "]: فحص السرفر من الثغرات [▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 30%"
              )
              .setColor(0xff0000)
          });
        }, 6000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle(
                "[" +
                  kemoname +
                  "]: فحص السرفر من الثغرات [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 40%"
              )
              .setColor(0xff0000)
          });
        }, 7000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle(
                "[" +
                  kemoname +
                  "]: فحص السرفر من الثغرات [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 50%"
              )
              .setColor(0xff0000)
          });
        }, 8000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle(
                "[" +
                  kemoname +
                  "]: فحص السرفر من الثغرات [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 70%"
              )
              .setColor(0xff0000)
          });
        }, 9000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle(
                "[" + kemoname + "]: جاري الفحص [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 85%"
              )
              .setColor(0xff0000)
          });
        }, 10000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle(
                "[" + kemoname + "]: جاري الفحص [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 90%"
              )
              .setColor(0xff0000)
          });
        }, 11000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle(
                "[" +
                  kemoname +
                  "]: جاري الفحص [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 95%"
              )
              .setColor(0xff0000)
          });
        }, 12000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle(
                "[" +
                  kemoname +
                  "]: جاري الفحص [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 96%"
              )
              .setColor(0xff0000)
          });
        }, 13000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle(
                "[" +
                  kemoname +
                  "]: جاري الفحص [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 97%"
              )
              .setColor(0xff0000)
          });
        }, 14000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle(
                "[" +
                  kemoname +
                  "]: جاري الفحص [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 98%"
              )
              .setColor(0xff0000)
          });
        }, 15000);
        setTimeout(function() {
          m.edit({});
        }, 16000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed().setColor(0xff0000)
          });
        }, 17000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle("** تهيئة السرفر **")
              .setColor(0xff0000)
          });
        }, 18000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle("** ( ᵔ ᴥ ᵔ ) اضافة جدار جماية **")
              .setColor(0xff0000)
          });
        }, 19000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle("تعديل بسيط")
              .setColor(0xff0000)
          });
        }, 17000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle(
                "[" +
                  kemoname +
                  "]:" +
                  kemoname +
                  " انتي الفحص جاري اضافة الدرع "
              )
              .setColor(0xff0000)
          });
        }, 18000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle("[" + kemoname + "]:يتم الحماية")
              .setColor(0xff0000)
          });
        }, 19000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle("**جاري الفحص**")
              .setColor(0xff0000)
          });
        }, 22000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle("[" + kemoname + "]: يرجى انتظار ثواني 4...")
              .setColor(0xff0000)
          });
        }, 25000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle("[" + kemoname + "]: يرجى انتظار ثواني 3...")
              .setColor(0xff0000)
          });
        }, 26000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle("[" + kemoname + "]: يرجى انتظار ثواني 2...")
              .setColor(0xff0000)
          });
        }, 27000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle("[" + kemoname + "]: يرجى انتظار ثواني 1...")
              .setColor(0xff0000)
          });
        }, 28000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle(
                "[" +
                  kemoname +
                  "]: **ملاحظة مهمة جدا مصمم **" +
                  "  : KEMO , NEZUKO "
              )
              .setColor(0xff0000)
          });
        }, 29000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle("** اضافة الجدار اكتمل **")
              .setColor(0xff0000)
          });
        }, 30000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed().setColor(0xff0000)
          });
        }, 31000);
        setTimeout(function() {
          m.delete();
        }, 32000);
        setTimeout(function() {
          message.channel.send("** تمت عملة الحماية بنجاح **");
          if (Fire > 1) {
            message.channel.send("** يوجد  ثغرات **");
            function getRandomInt(max) {
              return Math.floor(Math.random() * Math.floor(max));
            }

            message.channel.send("||" + getRandomInt(3) + "||");
            message.channel.send(
              "**انت تستخدم الاصدار || المجاني || لمدة || 7 ايام || كشف ثغرات فقط لا يغلقها للاصدار المتطور الرجاء محادثة مبرمج البوت ** "
            );
          }
        }, 33000);
      });
  }
});

client.on("message", msg => {
  if (msg.content === prefix + "i") {
    msg.reply(ip1 + "57.12.191.2");
  }
});
//bot test to edit
client.on("message", message => {
  var args = message.content.split(" ");
  var command = args[0];
  var num = args[1];
  var tax = 5; //غير قيمة الضريبة من هنا
  if (command == prefix + "ip") {
    let nume = new Discord.RichEmbed()
      .setColor("RED")
      .setDescription(command + " <number>");
    if (!num) {
      return message.channel.send(nume);
    }
    var numerr = num;
    if (numerr == NaN) {
      return message.reply("** هذه القينة خطئة**");
    }
    message.channel.send(ip1 + numerr);
    let taxemb = new Discord.RichEmbed()
      .setTitle("[فحص الاي بيه]")
      .setColor("RED")
      .setThumbnail(client.user.displayAvatarURL)
      .setDescription(
        "**```لا تستخدم هذه الاداة للاختراق جميع هذه المعلومات قنونية و انا اخلي مسواليتي عن الاداة```**"
      )
      .setTimestamp()
      .setFooter(
        `Requested By ${message.author.username}`,
        message.author.avatarURL
      );
    message.channel.send(taxemb);
  }
});

client.on("typingStart", (ch, user) => {
  if (user.presence.status === "offline") {
    ch.send(`${user}☹ هاهاهاا , كشفتك وانت تكتب ي اوف لاين✉`).then(msg => {
      msg.delete(10000);
    });
  }
});

client.on("message", msg => {
  if (msg.content === prefix + "Backhack") {
    msg.reply(
      "للاسف لا نستطيع استرجاع سيرفرك بسبب عدوم وجود الجدار اثناء الاختراق"
    );
  }
});
client.on("message", msg => {
  if (msg.content === prefix + "Who") {
    msg.reply(
      "**|ID| هذه الميزة تحت التطوير فقط **" )
    msg.reply(
      "||" + "<ID:"+ + ">" + "||"
      
    );
  }
});

