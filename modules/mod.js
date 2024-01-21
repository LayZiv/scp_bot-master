const { EmbedBuilder, PermissionsBitField } = require('discord.js');
const fs = require('fs');

exports.modcommands = {
    ";set-join-channel": function(args,msg) {

        const file = require("C:/Users/Macauley/Downloads/scp_bot-master/JSONs/data.json");
        file.joinchannel = msg.channel.id;

        fs.writeFile("C:/Users/Macauley/Downloads/scp_bot-master/JSONs/data.json", JSON.stringify(file), function writeJSON(err) {
            if (err) {
                console.log(err);
                msg.channel.send("Failed to set join channel. Error has been logged to terminal.")
            } else {
                msg.channel.send("Join channel set.")
            }
        });
    },

    ";purge": function(args,msg) {
        
        if (!msg.member.permissions.has(PermissionsBitField.Flags.ManageMessages,true)) {
            msg.reply("Invalid Permissions.");
            return;
        }

        var amount = parseInt(args[1]);
        if (isNaN(amount)) {msg.reply("USAGE: ;purge {amount}"); return;}

        msg.channel.bulkDelete(amount).then(() => {
            msg.channel.send(`Purged **${amount}** message(s).`)
        })
        
    }
};
