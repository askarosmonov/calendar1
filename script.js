const date = document.getElementById("date");
        const day = document.getElementById("day");
        const month = document.getElementById("month");
        const year = document.getElementById("year");
         const today = new Date()

         const weekDays = ["ДУЙШОНБУ","ШЕЙШЕНБИ","ШАРШЕНБИ","БЕЙШЕМБИ","ЖУМА","ИШЕМБИ","ЖЕКШЕМБИ",]
         const allMonth = ['УЧТУН','БИРДИН','ЖАЛГАН КУРАН','ЧЫН КУРАН','БУГУ','КУЛЖА','ТЕКЕ','БАШ ОНА','АЯК ОНА','TOГУЗДУН','ЖЕТИНИН','БЕШТИН',]
         date.innerHTML = today.getDate()
         day.innerHTML = weekDays[today.getDay()-1]
         month.innerHTML = allMonth[today.getMonth()]
         year.innerHTML = today.getFullYear()