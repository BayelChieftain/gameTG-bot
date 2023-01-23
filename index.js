const TelegramApi = require('node-telegram-bot-api')

const token = '5937518154:AAGU2UQuHL8jFw-ZfiX8xLjeqWLU9Wb0JOw'

const bot = new TelegramApi(token, {polling: true})


const start = () => {
    bot.on('message',async msg => {
        const text = msg.text;
        const chatId = msg.chat.id;
        const chatFirstName = msg.from.first_name;
        const chatUserName = msg.from.username;
        const chatType = msg.chat.type;
        const chatTypeSuper = msg.chat.type;
        const chatTypeBot = msg.chat.type;
         // получение данных 
        const chats = {}
        console.log(msg)
        //  game
       let minysORplus = Math.ceil(Math.random() * 2)
       let upAndDown;
       chats[chatId] = minysORplus;
      if (minysORplus === 1){
        upAndDown = "увеличился"
      } else {
        upAndDown = "уменьшился"
      }
    // константы текста
        const emojiChat = `❗`;
        var textStart = `Привет! я бот для чатов(групп) \n  \n ${emojiChat}Бот работает только в чатах. \n ${emojiChat} Раз в 24 часа игрок может прописать команду    /elo в ответ получит от Бота рандомно число \n ${emojiChat}Рандом работает  -25 elo или +25 elo \n \n Если есть вопросы пиши команду:  /help`
        var textHelp = `Команды бота: \n /elo - Увеличить/уменьшить Elo \n /lvl - узнать свой уровень \n /top_elo - Топ 10 Elo игроков \n /global_top - Глобальный Топ 10 \n \n Контакты: \n Админ: @qqQuestion`
        const eloNumber = 25;
       const DisTextBot = 'Попробуй эту команду в чате или группе!'
 
        if (text === '/start') {
            return bot.sendMessage(chatId, `${textStart}`)
        }
        if (text === '/help') {
            return bot.sendMessage(chatId, `${textHelp}`)
        }
        // чтоб не юзали в лс бота
        if(chatTypeBot === 'private' && text === '/elo@Elo_up_bot'){
           return bot.sendMessage(chatId, `${DisTextBot}`)
        }
        if(chatTypeBot === 'private' && text === '/top_elo@Elo_up_bot'){
            return bot.sendMessage(chatId, `${DisTextBot}`)
        }
        if (chatTypeSuper !== 'supergroup' && chatType !== 'group' && text === '/elo') {
            return bot.sendMessage(chatId, 'Я работаю только в чатах(группах)')  
        }
        if (chatTypeSuper !== 'supergroup' && chatType !== 'group' && text === '/lvl') {
            return bot.sendMessage(chatId, 'Я работаю только в чатах(группах)')
        }
        if (chatTypeSuper !== 'supergroup' && chatType !== 'group' && text === '/top_elo') {
            return bot.sendMessage(chatId, 'Я работаю только в чатах(группах)')
        }
        if (chatTypeSuper !== 'supergroup' && chatType !== 'group' && text === '/global_top') {
            return bot.sendMessage(chatId, 'в разработке')
        }
        // команды группы
        if (chatTypeBot !== 'private' && text === '/elo@Elo_up_bot'){
          return bot.sendMessage(chatId, `@${chatUserName}, твой рейтинг ${upAndDown} на ${eloNumber} elo. \n Теперь скилл равен ${emojiChat} elo. \n Ты занимаешь ${emojiChat} место в топе \n Следующая попытка завтра!`)
        } 
        if (chatTypeBot !== 'private' && text === '/lvl@Elo_up_bot'){
          return  bot.sendMessage(chatId, `@${chatUserName}, твой уровень сейчас равен ${emojiChat}`)
        } 
        if (chatTypeBot !== 'private' && text === '/top_elo@Elo_up_bot'){
          return  bot.sendMessage(chatId, `Топ 10 игроков \n \n 1| ${chatFirstName} \n 2| ${chatFirstName} \n 3| ${chatFirstName} \n 4| ${chatFirstName} \n 5| ${chatFirstName} \n 6| ${chatFirstName} \n 7| ${chatFirstName} \n 8| ${chatFirstName} \n 9| ${chatFirstName} \n 10| ${chatFirstName}`)
        } 
        if (chatTypeBot !== 'private' && text === '/global_top@Elo_up_bot'){
          return  bot.sendMessage(chatId, "эта команда работает только в лс бота!")
        } 
        if (chatTypeBot !== 'private' && text === '/help@Elo_up_bot'){
          return  bot.sendMessage(chatId, `${textHelp}`)
        } 
           
        
          
    })
  bot.on('callback_query', msg =>{
    const data = msg.data;
    const chatId = msg.chat.id;
    console.log(msg)
    
  })
}

start()