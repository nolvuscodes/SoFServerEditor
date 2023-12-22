**Server Configuration**
![Server Configuration](https://i.imgur.com/r6noUkY.png)

1. **IP Address**:
   - The IP address is not directly configured in the `dedicatedserver.cfg` file. It’s determined by the machine where you’re running the server.
   - The server will listen on all available network interfaces by default.

2. **Game Port**:
   - The `GamePort` is the port used for game communication.
   - Default value: `8766`.
   - Explanation: This port allows players to connect to your server and play the game.

3. **Query Port**:
   - The `QueryPort` is used for querying server information (e.g., server status, player count).
   - Default value: `27016`.
   - Explanation: This port provides information to clients and server browsers.

4. **BlobSync Port**:
   - The `BlobSyncPort` is used for mod synchronization.
   - Default value: `9700`.
   - Explanation: Mods and custom content are synchronized using this port.

5. **Server Name**:
   - The `serverName` setting defines the name of your server as it appears in the server browser.
   - Example: `"serverName": "My Awesome Forest Server"`

6. **Max Players**:
   - The `maxPlayers` setting determines the maximum number of players allowed on your server.
   - Example: `"maxPlayers": 10`

7. **Password**:
   - The `serverPassword` setting allows you to set a password for your server.
   - Example: `"serverPassword": "SecretPassword123"`

8. **LAN Only**:
   - The `lanOnly` setting:
     - Set to `"True"` if you want your server to be accessible only on your local network (LAN).
     - Set to `"False"` if you want friends to connect over the internet.
   - Example: `"lanOnly": false`

9. **Save Slots**:
   - The number of save slots available for your server.
   - Example: `"saveSlots": 5`

10. **Save Mode**:
    - The `saveMode` determines how often the server saves game data.
    - Options:
      - `"autosave"`: Regular automatic saves.
      - `"manual"`: Requires manual saving.
    - Example: `"saveMode": "autosave"`

11. **Game Mode**:
    - The `gameMode` specifies the type of game (e.g., survival, creative).
    - Example: `"gameMode": "survival"`

12. **Save Interval**:
    - The `saveInterval` sets the time (in minutes) between automatic saves.
    - Example: `"saveInterval": 10`

Remember to adjust these settings according to your preferences.
For more details, you can refer to the [Dedicated Server Configuration Guide](https://steamcommunity.com/sharedfiles/filedetails/?id=2992700419) on Steam Community.

Let me know if you need further [assistance🗣️](https://discord.com/users/625796542456004639)! 😊
