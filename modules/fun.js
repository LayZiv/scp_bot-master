exports.funcommands = {
    ";urgent": function(args,msg) {
        msg.channel.send("https://media.discordapp.net/attachments/1055953641120464918/1059997681092677702/output-onlinegiftools1.gif")
    },

    ";say": function(args,msg) {

        if (args.length <=1) {
            msg.reply("More arguments needed.");
            return;
        }
        
        // Conjoin all args except the first
        var str = ""
        for (var i=1; i<args.length;i++) {
            str = str.concat(args[i]);
            str = str.concat(" ");
        }

        msg.delete()
        msg.channel.send(str)
    },

    ";info": function(args,msg) {
        
        if (args[1]==null) {msg.reply("USAGE: ;info {department}"); return;}
        args[1] = args[1].toLowerCase();

        switch (args[1]) {
            case "md":
                msg.reply("**The Miguel Department**\n\nThe Miguel department is a domestic terroist group led by Miguel sanchez. The group mainly consists of mdeical personnel and ex-E&T members who worked in the states of Michoacan, Durango and Sinaloa. They have a strong presence in all three states. They are currently based out of Brazillia but operate on a national level. The group has been around for about five years. Their main goal is to stop the drug trade in the SCPF and bring it back home. However they also have their own agenda which includes taking over the cartels or bringing down the government.");
                break;
            case "sd":
                msg.reply("**Shit department**\n\nDO NOT JOIN THIS DEPARTME|NT")
                break;
            case "e&t":
                msg.reply("**Engineering and Technical**\n\nNeeds to be added. DM LayZiv with your info text")
                break;
            case "ia":
                msg.reply("...")
                break;
            case "ec":
                msg.reply("**Ethics Committee**\n\nNeeds to be added. DM LayZiv with your info text")
                break;
            case "mtf":
                msg.reply("**Mobile Task Force**\n\nNeeds to be added. DM LayZiv with your info text")
                break;
            case "scd":
                msg.reply("**Scientific Department**\n\nNeeds to be added. DM LayZiv with your info text")
                break;
            default:
                msg.reply("Department does not exist yet.")
                break;
        }
    },
}
