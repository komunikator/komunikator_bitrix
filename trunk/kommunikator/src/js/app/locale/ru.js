Ext.onReady(function() {
    if (Ext.grid.RowEditor) {
        Ext.apply(Ext.grid.RowEditor.prototype, {
            saveBtnText: "Сохранить",
            cancelBtnText: "Отмена",
            errorsText: "Ошибка",
            dirtyText: "Вы должны сохранить или отменить изменения"
        });
    }
});


if (window['app'] == undefined)
    app = {};
app.lang = 'ru';
app.msg = {
    auth_title: 'Авторизация',
    login: 'Логин',
    password: 'Пароль',
    error: 'Ошибка',
    auth_failed: 'Ошибка авторизации',
    session_failed: 'Время сеанса истекло. Пожалуйста, войдите еще раз',
    fail_load: 'Сбой загрузки',
    OK: 'ОК',
    logout: 'Выход',
    home: 'Главная',
    attendant: 'Автосекретарь',
    select_prompt: 'Выбор приветствия',
    upload: 'Загрузка',
    choose_file: 'Выберите файл',
    wav_file_type: 'формат звукового файла должен быть MP3',
    download: 'скачать',
    call_logs: 'История звонков',
    active_calls: 'Активные звонки',
    extensions: 'Внутренние номера',
    dial_plans: 'Правила набора номера',
    users: 'Управление доступом',
    time: 'Время',
    time_current: 'Время',
    status: 'Статус',
    duration: 'Длительность',
    groups: 'Группы',
    user: 'Пользователь',
    total: 'Всего',
    gateways: 'Провайдеры',
    changepassword: 'Сменить пароль',
    add: 'Добавить',
    'delete': 'Удалить',
    delete_record: 'Удалить {0} запись(ей)?',
    refresh: 'Обновить',
    online: 'Рабочее время',
    offline: 'Нерабочее время',
    busy: '',
    registered: 'Зарегистрирован',
    unregistered: 'Не зарегистрирован',
    previous: 'Предыдущий',
    next: 'Следующий',
    routing_rules: 'Правила маршрутизации',
    conferences: 'Конференции',
    param: 'Параметр',
    value: 'Значание',
    description: 'Описание',
    music_on_hold: 'Музыка на удержании',
    playlist: 'Плейлист',
    file: 'Файл',
    Monday: 'Понедельник',
    Tuesday: 'Вторник',
    Wednesday: 'Среда',
    Thursday: 'Четверг',
    Friday: 'Пятница',
    Saturday: 'Суббота',
    Sunday: 'Воскресенье',
    notselected: 'Не выбрано',
    prompts: 'Приветствия',
    keys: 'Меню приветствия',
    timeframes: 'Расписание рабочего времени',
    pbx_status: 'Статус АТС',
    day: 'День',
    key: 'Клавиша',
    routing: 'Маршрутизация',
    destination: 'Назначение',
    default_dest: 'Назначение по умолчанию',
    start_hour: 'Время начала',
    end_hour: 'Время окончания',
    extension: 'Внутренний номер',
    firstname: 'Имя',
    lastname: 'Фамилия',
    group: 'Группа',
    address: 'Адрес',
    directory: 'Справочники',
    address_book: 'Адресная книга',
    settings: 'Настройки',
    notification_settings: 'Настройки уведомлений',
    short_name: 'Псевдоним',
    name: 'Имя',
    number: 'Номер',
    in_use: 'Используется',
    'caller': 'Звонящий',
    called: 'Принимающий',
    username: 'Имя пользователя',
    conference: 'Конференция',
    participants: 'Участники',
    enabled: 'Разрешено',
    protocol: 'Протокол',
    server: 'Сервер',
    authname: 'Идентификационное имя',
    domain: 'Домен',
    dial_plan: 'Правило набора',
    priority: 'Приоритет',
    prefix: 'Префикс',
    voicemail: 'Голосовая почта',
    did: 'DID',
    update: 'Обновление',
    update_not_found: 'Обновлений не найдено',
    update_install: 'Найдено обновление. Установить обновление',
    update_success: 'Обновление успешно установлено!',
    wait_update: "Пожалуйста, подождите пока происходит установка обновлений",
    advanced: 'Дополнительные настройки',
    checkforupdates: 'Проверить на наличие обновлений?',
    statistic: 'Статистика АТС',
    day_total_calls: 'Звонков за день',
    active_gateways: 'Активные шлюзы',
    cpu_use: 'Загрузка процессора',
    mem_use: 'Физическая память',
    swap_use: 'Виртуальная память',
    space_use: 'Место на диске',
    uptime: 'Работа сервера',
    copyright: 'Komunikator © 2013',
    //first_step	: "<div></div><p><b>The first step for setting it is to upload the two prompts for online/offline mode. The prompts may vary depending on your company's business hours.</b></p>"
    for_edit: "Для изменения настроек кликните по нужному пункту два раза",
    extensions_info: "Настройка внутренних телефонных номеров АТС",
    groups_info: "Изменение или создание новых групп",
    prompts_info: "Автосекретарь имеет два состояния: рабочее время (online) и нерабочее время (offline).<br>Для каждого такого состояния настраивается свое приветсвие",
    keys_info: "Если в приветствии в рабочее время говорится: Нажмите 1 чтобы попасть в отдел продаж, выберите Статус: Рабочее время, Клавиша: 1, Назначение: Продажи (группа Продажи должна быть настроена в разделе Справочники->Группы). Таким же образом настраивается режим Нерабочее время." +
            "<br><br>Для того чтобы отправить вызов непосредственно на внутренний или другой номер, вставьте номер в поле Назначение в строке с необходимой клавишей.",
    timeframes_info: "Укажите временные рамки для каждого дня, в течение которых будет установлен статус Рабочее время. Для невыбранных периодов, будет использоваться статус Нерабочее время.",
    routing_rules_info: "Укажите место назначения внешнего звонка. Местом назначения может быть внутренний номер, группа, автосекретарь, голосовая почта и т.д.",
    address_book_info: "В адресной книге указаны псевдонимы для всех телефонных номеров (входящих и исходящих). Вы можете добавлять и изменять их.",
    dial_plans_info: "Правила набора номера: позволяют АТС определять шлюз по номеру исходящего вызова.",
    conferences_info: "Конференция: используйте номера выделенные для отдельных виртуальных залов чтобы подключиться к конференц-связи.",
    gateways_info: "Здесь задаются параметры подключения к провайдеру SIP или другой УАТС.",
    music_on_hold_info: "Функция предназначена для того, чтобы звонящий слушал музыку во время ожидания. После загрузки песни, вы можете определить её плейлист.",
    playlist_info: "Здесь можно выбрать плейлист.",
    call_logs_info: "Здесь отображается журнал вызовов АТС.",
    active_calls_info: "На этом экране в реальном времени отображаются все активные вызовы АТС.",
    users_info: "Используйте эту вкладку для управления пользователями системы. По возможности используйте сложные пароли.",
    accepted: "принятый",
    answered: "отвеченный",
    cancelled: "отменен",
    ringing: "вызов",
    rejected: "отклоненный",
    outgoing: "исходящий",
    address_incomplete: "неполный номер",
    incoming: "входящий",
    internal: "внутренний",
    request_terminated: "отменен",
    busy_here: "занят",
    transfer: "переведённый",
    temporarily_unavailable: "недоступен",
    performing_actions: "Выполнение действий",
    wait_reboot: "Пожалуйста, подождите пока происходит перезагрузка АТС",
    wait_checkforupdates: "Пожалуйста, подождите пока происходит проверка обновлений АТС",
    reboot_pbx_question: "Выполнить перезагрузку АТС?",
    reboot_pbx: "Перезагрузка АТС",
    forward: 'Переадресация',
    forward_busy: 'Номер занят',
    forward_noanswer: 'Нет ответа',
    noanswer_timeout: 'Таймаут (сек)',
    always: 'Всегда',
    browse: 'Обзор',
    abort: 'Прервать',
    remove_selected: 'Удалить выбранные',
    remove_all: 'Очистить все',
    filename: 'Имя файла',
    size: 'Размер',
    type: 'Тип',
    progress: '%',
    selection_message_text: 'Выбран {0} файл(ов), {1}',
    upload_message_text: 'Загружено  {0}% ({1} из {2} )',
    load: 'Загрузка',
    cancel: 'Отмена',
    close: 'Закрыть',
    network_settings: 'Сетевые настройки',
    auto_dhcp: 'Получить IP адрес автоматически',
    static_ip: 'Использовать следующий IP адрес',
    ip_address: 'IP адрес',
    netmask: 'Маска подсети',
    gateway: 'Основной шлюз',
    save: 'Сохранить',
    invalid_ip_address: 'Некорректный IP адрес',
    invalid_netmask: 'Некорректная маска подсети',
    error_updated: 'Ошибка обновления',
    updated: 'Обновлено',
    mail_settings: 'Почтовые уведомления',
    mailevents: 'События, приводящие к отправке уведомлений',
    mailevent_incoming_gate: 'Входящий вызов (с указанием шлюза)*',
    mailevent_incoming: 'Входящий вызов',
    mailevent_outgoing: 'Исходящий вызов',
    mailevent_internal: 'Внутренний вызов',
    email: 'Адрес(а) получателей',
    mail1: 'Текст сообщения',
    mail2: '* Текст сообщения для входящих вызовов с указанием шлюза',
    invalid_email: 'Некорректный адрес электронной почты',
    mail_nofications: 'Почтовые уведомления',
    mail_subject: 'Тема сообщения',
    mail_incoming_subject: '...при входящем вызове',
    mail_outgoing_subject_call_not_accepted: '...при непринятом исходящем вызове',
    mail_outgoing_subject_fax_not_accepted: '...при непринятом исходящем факсе',
    mail_outgoing_subject_call_accepted: '...при успешном исходящем вызове',
    mail_outgoing_subject_fax_accepted: '...при успешном исходящем факсе',
    from: 'Адрес отправителя',
    fromname: 'Имя отправителя',
    service_unavailable: 'сервис недоступен',
    dropped: 'упущенный',
    forbidden: 'звонок запрещён',
    divert_busy: 'переадресация',
    not_acceptable: 'неправильно набран номер',
    divert_noanswer: 'не отвечает',
    not_found: 'не найден',
    progressing: 'ожидание ответа',
    hold: 'удержанный',
    server_internal_erro: 'внутренняя ошибка сервера',
    request_timeout: 'время ожидания истекло',
    'unallocated_(unassigned)_number': 'недопустимы номер',
    normal_call_clearing: 'сбой вызова',
    update_password: 'Изменить пароль',
    new_password: 'Новый пароль',
    private_office: 'Личный кабинет',
    current_password: 'Текущий пароль',
    repeat_new_password: 'Повторите новый пароль',
    warning_pwd: 'Новый пароль повторен неправильно',
    pwd_change:'Пароль был изменен',
    change_redirect: 'Изменить переадресацию?',
    example_email: 'Ввод нескольких адресов: example@first.ru;example@second.ru',
    version:'Версия'    
};
