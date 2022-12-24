# Pokemon encounter sim

This app requires a user to create a new account and log in.

The user will be assigned a starter pokemon that follows ancient lore. The pikachu.

At first the users pokemon roster only contains a starter pokemon. The user will be able to go out and encounter random pokemon to capture. After encountering a random pokemon, users will be able to choose between the options of Attack, Potion, Catch, Run.

Attack will have the user pokemon attack first, followed by an enemy attack. Potion, limited to three uses, will allow the users pokemon to heal a set amount, but the enemy will stack afterwards. When the user believes that the enemy is weakened to a state of being able to be captured, the user may attempt to catch the enemy pokemon. An attempt will be made that will either succeed and add the enemy pokemon to the users roster, or it will fail and the enemy will attack in retaliation. Finally the option to run is also allowed and if successful, will escape the enemy pokemon. If unsuccessful, the enemy pokemon will punish the action with an attack.

This project utilized the public pokemon api https://pokeapi.co/ to obtain general pokemon information.


Note to users, you will need an api key and secretkey from https://api.thenounproject.com/getting_started.html#creating-an-api-key and store it in a .env file in the same level as manage.py. This will enable api calls to grab the image of a pokeball to catch pokemon and fulfills assignment requirements for a third party API call.

The formatting of your .env file will look like this:

apikey=*****************

secretkey=*******************

