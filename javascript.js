var quotes = [

'1. Что разум человека может постигнуть и во что он может поверить, того он способен достичь

Наполеон Хилл, журналист и писатель ','

2. Стремитесь не к успеху, а к ценностям, которые он дает​

Альберт Эйнштейн','


3. Своим успехом я обязана тому, что никогда не оправдывалась и не принимала оправданий от других.

Флоренс Найтингейл','

4. За свою карьеру я пропустил более 9000 бросков, проиграл почти 300 игр. 26 раз мне доверяли сделать финальный победный бросок, и я промахивался. Я терпел поражения снова, и снова, и снова. И именно поэтому я добился успеха.

Майкл Джордан','

5. Сложнее всего начать действовать, все остальное зависит только от упорства.

Амелия Эрхарт','

6. Надо любить жизнь больше, чем смысл жизни.

Федор Достоевский','

7. Жизнь - это то, что с тобой происходит, пока ты строишь планы.

Джон Леннон','

8. Логика может привести Вас от пункта А к пункту Б, а воображение — куда угодно.
','
Альберт Эйнштейн','

9. Через 20 лет вы будете больше разочарованы теми вещами, которые вы не делали, чем теми, которые вы сделали. Так отчальте от тихой пристани. Почувствуйте попутный ветер в вашем парусе. Двигайтесь вперед, действуйте, открывайте!

Марк Твен','

10. Начинать всегда стоит с того, что сеет сомнения.

Борис Стругацкий','

11. Настоящая ответственность бывает только личной.
','
Фазиль Искандер','

12. Неосмысленная жизнь не стоит того, чтобы жить.

Сократ','

13. 80% успеха - это появиться в нужном месте в нужное время.

Вуди Аллен','

14. Ваше время ограничено, не тратьте его, живя чужой жизнью
','
Стив Джобс','

15. Победа - это еще не все, все - это постоянное желание побеждать.

Винс Ломбарди, тренер по американскому футболу','

16. Наука — это организованные знания, мудрость — это организованная жизнь.

Иммануил Кант','

17. В моем словаре нет слова «невозможно».

Наполеон Бонапарт','

18. Вы никогда не пересечете океан, если не наберетесь мужества потерять берег из виду.

Христофор Колумб
','
19. Свобода ничего не стоит, если она не включает в себя свободу ошибаться.

Махатма Ганди','

20. Либо вы управляете вашим днем, либо день управляет вами.

Джим Рон, оратор и бизнес-тренер','

21. Если вы думаете, что на что-то способны, вы правы; если думаете, что у вас ничего не получится - вы тоже правы.

Генри Форд','

22. Два самых важных дня в твоей жизни: день, когда ты появился на свет, и день, когда понял, зачем.

Марк Твен','

23. Начинайте делать все, что вы можете сделать – и даже то, о чем можете хотя бы мечтать. В смелости гений, сила и магия.  

Иоганн Вольфганг Гете','

24. Лучшая месть – огромный успех.

Фрэнк Синатра','

25. Зачастую говорят, что мотивации хватает ненадолго. Но то же самое происходит и с освежающим душем, поэтому и рекомендуют его принимать ежедневно.

Зиг Зиглар, писатель, бизнесмен и консультант по маркетингу','

26. Слабые люди всю жизнь стараются быть не хуже других. Сильным во что бы то ни стало нужно стать лучше всех.

Борис Акунин','

27. Все дело в мыслях. Мысль — начало всего. И мыслями можно управлять. И поэтому главное дело совершенствования: работать над мыслями.

Лев Толстой','

28. Есть только один способ избежать критики: ничего не делайте, ничего не говорите и будьте никем.

Аристотель','

29. Человек, которым вам суждено стать – это только тот человек, которым вы сами решите стать.

Ральф Уолдо Эмерсон, эссеист, поэт и философ','

30. Идите уверенно по направлению к мечте. Живите той жизнью, которую вы сами себе придумали.

Генри Дэвид Торо, писатель, мыслитель, натуралист
','
31. Надеюсь, что в конце своих дней, когда я предстану перед Богом, у меня не останется ни капли таланта, чтобы я могла сказать ему: “Я использовала все, что ты дал мне”.

Эрма Бомбек, писатель, журналист
','
32. Лучше быть уверенным в хорошем результате, чем надеяться на отличный.

Уоррен Баффет','

33. Некоторые вещи могут завладеть вашим вниманием, но сосредоточьтесь лучше на тех, что завладевают вашим сердцем.

Индийская поговорка
','
34. Стоит только поверить, что вы можете – и вы уже на полпути к цели.

Теодор Рузвельт','

35. Не стоит винить ребенка за то, что он боится темноты. Настоящая трагедия – это когда взрослый человек боится света.

']


function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length)); 
  document.getElementById('QuoteDisplay').innerHTML = quotes[randomnumber];
}
