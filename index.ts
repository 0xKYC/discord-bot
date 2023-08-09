
import dotenv from 'dotenv';
dotenv.config();

// Require the necessary discord.js classes
import { Client, Events, GatewayIntentBits, createChannel, EmbedBuilder } from 'discord.js';

const channels = ['sunscreen-start-here', 'sunscreen-admin'];

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers] });

function createChannels(client: Client) {
    for (const [_, guild] of client.guilds.cache) {
        for (const channel of channels) {
            if (!guild.channels.cache.find(c => c.name === channel)) {
                console.log("Create sunscreen-start-here");
                guild.channels.create({ name: channel, reason: 'Create bot start channel' });
                // .then(console.log)
                // .catch(console.error);
            }
        }
    }
}

function inviteNewUser(client: Client) {
}

// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Events.ClientReady, c => {
    console.log(`Ready! Logged in as ${c.user.tag}`);

    createChannels(c);
});

client.once(Events.GuildMemberAvailable, member => {
    console.log("Member is available:");
    console.log(member);
});
client.once(Events.GuildMemberAdd, member => {
    console.log("New member");
    // member.send("Welcome to the server!")
    //     .then(console.log)
    //     .catch(console.error);
    const exampleEmbed = new EmbedBuilder()
        // .setColor('color number')
        .setTitle('your welcome message')
        .setDescription(`yourwelcome message, ${member}!`)
        .setThumbnail(member.user.displayAvatarURL())
        .addFields(
            { name: 'User:', value: `${member.user.tag}`, inline: true },
            { name: 'ID:', value: `${member.user.id}`, inline: true },
            { name: 'Joined at:', value: `${member.joinedAt}`, inline: true },
        )
    member.send({ embeds: [exampleEmbed] });
});


// Log in to Discord with your client's token
client.login(process.env.DISCORD_TOKEN);

// // Create a new text channel

// function makeChannel(message) {
//     var server = message.guild;
//     var name = message.author.username;

//     server.createChannel(name, "text");
// }
