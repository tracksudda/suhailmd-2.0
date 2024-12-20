const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_04_05_12_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDc4LFxuICAgICAgICAyMCxcbiAgICAgICAgMTAzLFxuICAgICAgICA2NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDU1LFxuICAgICAgICAyOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDU3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDQsXG4gICAgICAgIDExMCxcbiAgICAgICAgNzIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDYyLFxuICAgICAgICA3MCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNjksXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA2NSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTMsXG4gICAgICAgIDksXG4gICAgICAgIDIxMCxcbiAgICAgICAgODAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDg0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDExOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDI0LFxuICAgICAgICA0NyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMjksXG4gICAgICAgIDE1NixcbiAgICAgICAgMTkzLFxuICAgICAgICA4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDgyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDQ0LFxuICAgICAgICAzMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjExLFxuICAgICAgICA1MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgODQsXG4gICAgICAgIDUwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDI5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMixcbiAgICAgICAgMTUzLFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDMwLFxuICAgICAgICA4OSxcbiAgICAgICAgMjI2LFxuICAgICAgICA0MCxcbiAgICAgICAgMTg1LFxuICAgICAgICA2OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDksXG4gICAgICAgIDkxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDUsXG4gICAgICAgIDQwLFxuICAgICAgICA1NyxcbiAgICAgICAgMTAxLFxuICAgICAgICA3NCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxODYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMTksXG4gICAgICAgIDcwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTA4LFxuICAgICAgICA5OSxcbiAgICAgICAgMTg5LFxuICAgICAgICA0MyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTg1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNSxcbiAgICAgICAgMTcyLFxuICAgICAgICA2MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIyNixcbiAgICAgICAgNTksXG4gICAgICAgIDE2LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTMsXG4gICAgICAgIDYwLFxuICAgICAgICAxMjksXG4gICAgICAgIDE5NixcbiAgICAgICAgMjAxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMzEsXG4gICAgICAgIDk0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNyxcbiAgICAgICAgMTc2LFxuICAgICAgICA2NyxcbiAgICAgICAgMjM5LFxuICAgICAgICA4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMixcbiAgICAgICAgMTI0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDU1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDExNixcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNzhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA2OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNixcbiAgICAgICAgMjI0LFxuICAgICAgICA0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgODYsXG4gICAgICAgIDIwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTA1LFxuICAgICAgICA1MixcbiAgICAgICAgNzcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAwLFxuICAgICAgICA4MSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjQxLFxuICAgICAgICA5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDYyLFxuICAgICAgICA4OCxcbiAgICAgICAgMjQzLFxuICAgICAgICA5NixcbiAgICAgICAgMjIyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDM0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMSxcbiAgICAgICAgMTA1LFxuICAgICAgICAzNyxcbiAgICAgICAgOTMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDM1LFxuICAgICAgICAyMDksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE2LFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjI5LFxuICBcImFkdlNlY3JldEtleVwiOiBcImR2QTI3UTJiTnJVK09HQmJvN0FZQkF3azJoVHZjQ2ZrQ0dKMlpTbks0MGs9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImFyM3pSNE5WUzJlbWtManYwdFJ6TFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiOWQ5OGMyZTItOWM5Yi00M2E3LTllMmUtY2Q5MTFkNjI5YThjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwNSxcbiAgICAgIDMzLFxuICAgICAgMTA5LFxuICAgICAgMjUsXG4gICAgICAxMDIsXG4gICAgICAyMzIsXG4gICAgICAxOTMsXG4gICAgICAxMzMsXG4gICAgICA2NyxcbiAgICAgIDc3LFxuICAgICAgMTY4LFxuICAgICAgMTQ1LFxuICAgICAgOTMsXG4gICAgICA1MixcbiAgICAgIDE0NCxcbiAgICAgIDQ4LFxuICAgICAgMTMxLFxuICAgICAgMTU5LFxuICAgICAgMTEzLFxuICAgICAgMzRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjMsXG4gICAgICAyMDgsXG4gICAgICAxNTIsXG4gICAgICAxMCxcbiAgICAgIDkzLFxuICAgICAgMTgsXG4gICAgICAxOSxcbiAgICAgIDEwLFxuICAgICAgMTQyLFxuICAgICAgMjQwLFxuICAgICAgOTgsXG4gICAgICAyNTAsXG4gICAgICA1MyxcbiAgICAgIDE2NyxcbiAgICAgIDc4LFxuICAgICAgMjQ5LFxuICAgICAgMTcxLFxuICAgICAgMzYsXG4gICAgICAxOTksXG4gICAgICA4MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJCQkQ0Q1NFWVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3MDU1MTYyNTA6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIuKCruKxpOKCs+KCteKCrSDigq3igrNWzKTFgsWCXCIsXG4gICAgXCJsaWRcIjogXCI3MDA3NzIwNjU1NjY5MzoyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xmcjlhY0JFTzNaazdzR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVklFMGlFSXcvSTJxZXBXakF6ckpoZUxWRGkraFJjQTJpOFNILzZ3WFlRdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJZL2x2ejhwaDFScUc5SURkVU5NUC9VWGxpbTNyOFA1TTVVQmR0Mmd2dlZGdlczVjRnaE5HRHlEN2lscGhORTU1eVBlaTlBVnM4b2VPbGRYb0JsVUdEUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI5c0pHV3pKQ3lrd2dtNHphczZCN1VuMTN5ZEJFZUp6U2ZyUVBISm13NDc2OGRXbTNKS0YxbGRTSmxEbTJsRHE2RHA2S2crZ1FpTC93T3c0QzFadFhEdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDcwNTUxNjI1MDoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA2NixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNDY2NzUwNVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
